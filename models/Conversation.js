const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;