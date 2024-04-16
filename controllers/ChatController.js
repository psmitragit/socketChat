// controllers/chatController.js

class ChatController {
  // Render the chat view
  showChatPage(req, res) {
    const user = req.session.user;
    res.render('chat', { user: user }); // Assuming you have a chat.ejs view file
  }
  // Handle chat message
  handleChatMessage(io) {
    return async (msg) => {
      try {
        io.emit('chat message', msg); // Broadcast the message to all connected clients
      } catch (err) {
        console.error('Error handling chat message:', err);
      }
    };
  }
}

module.exports = new ChatController();
