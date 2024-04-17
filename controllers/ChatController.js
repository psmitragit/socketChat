// controllers/chatController.js
const ChatMessage = require('../models/ChatMessage.js');
class ChatController {
  // Render the chat view
  showChatPage(req, res) {
    const user = req.session.user;
    res.render('chat', { user: user }); // Assuming you have a chat.ejs view file
  }
  // Handle chat message
  handleChatMessage(io) {
    return async (msg) => {
      // Extract message data
      const { username, message } = msg;
      // Save the message to the database
      const newMessage = new ChatMessage({ username, message });
      await newMessage.save();

      try {
        io.emit('chat message', msg); // Broadcast the message to all connected clients
      } catch (err) {
        console.error('Error handling chat message:', err);
      }
    };
  }
}

module.exports = new ChatController();
