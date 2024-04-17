// controllers/chatController.js
const ChatMessage = require('../models/ChatMessage.js');
class ChatController {
  // Fetch chat history from the database
  getChatHistory = async () => {
    try {
      // Retrieve chat messages from the database (sorted by timestamp)
      return await ChatMessage.find().sort({ timestamp: 1 });
    } catch (err) {
      console.error('Error fetching chat history:', err);
      return [];
    }
  };
  // Render the chat view
  showChatPage = async (req, res) => {
    const user = req.session.user;
    const chatHistory = await this.getChatHistory();
    res.render('chat', { user, chatHistory }); // Assuming you have a chat.ejs view file
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
