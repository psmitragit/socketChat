const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  // Change username field to reference User model
  username: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
