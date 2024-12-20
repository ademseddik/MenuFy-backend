// models/UsefulLink.js

const mongoose = require('mongoose');

const usefulLinkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

module.exports = mongoose.model('UsefulLink', usefulLinkSchema);
