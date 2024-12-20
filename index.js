const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const passport = require('passport');
const globalRoutes = require('./routers/Index');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const http = require('http');
const socketIo = require('socket.io');
const cron = require("node-cron");
const axios = require('axios');
const  OpenAI = require ('openai');


const PORT = process.env.PORT || 5555;
const TOKEN = process.env.JWT_SECRET;
const DATABASE_URL = process.env.DATABASE_URL;
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const app = express();

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "https://themenufy.com", "https://admin.themenufy.com", "https://backend.themenufy.com", "https://super-admin.themenufy.com"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Middleware for sessions
app.use(session({
  secret: 'fares', // Replace with a secure secret
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Use secure: true in production with HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: ["http://localhost:3000", "https://themenufy.com", "https://admin.themenufy.com", "https://backend.themenufy.com", "https://super-admin.themenufy.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  exposedHeaders: "Authorization"
}));

app.use(cookieParser());
app.use(express.json());

// Set up CSP headers
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  next();
});

// Disable security headers temporarily
app.use((req, res, next) => {
  next();
});

// Import routes
app.use(globalRoutes);
app.use('/utils/images', express.static('utils/images'));

// Add JWT authorization header to requests
app.use((req, res, next) => {
  req.headers['Authorization'] = `Bearer ${TOKEN}`;
  next();
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('sendMessage', async (message) => {
    const { text, conversationId, senderId } = message;
    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant for restaurant support. Determine if the message is a help request or a complaint." },
          { role: "user", content: text },
        ],
      });

      const reply = response.data.choices[0].message.content;
      
      // Save message to the database here (omitted for brevity)
      // emit the response to the client
      io.to(conversationId).emit("receiveMessage", { text: reply, senderId: 'system', conversationId });
    } catch (error) {
      console.error("Error communicating with OpenAI:", error);
      socket.emit("receiveMessage", { text: "Sorry, I'm having trouble connecting to the AI service." });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use((req, res, next) => {
  req.io = io; // Attach io to req to use in routes
  next();
});

// Swagger setup
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/uploads', express.static(__dirname + '/uploads'));

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

// Connect to MongoDB
mongoose.connect(DATABASE_URL).then(() => {
  console.log("MongoDB connected");
}).catch(() => {
  console.log("Not connected to MongoDB");
});

// Scheduled task with cron
cron.schedule("0 0 * * *", async () => {
  try {
    console.log("Scheduled task: Fetching tax data from Canada...");
    const response = await axios.get('http://localhost:5555/restaurant/getTaxeCanada');
    console.log("Tax data fetched successfully.");
  } catch (error) {
    console.error("Error fetching tax data:", error);
  }
});

async function createConversation(participants) {
  try {
    const response = await axios.post('http://localhost:5566/conversations', { participants });
    return response.data;
  } catch (error) {
    console.error('Error creating conversation:', error);
    throw error;
  }
}
async function fetchMessages(conversationId) {
  try {
    const response = await axios.get(`http://localhost:5566/messages/${conversationId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
}
