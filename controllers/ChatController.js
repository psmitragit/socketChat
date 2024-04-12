// controllers/chatController.js

class ChatController {
    // Render the chat view
    showChatPage(req, res) {
      res.render('chat'); // Assuming you have a chat.ejs view file
    }
  }
  
  module.exports = new ChatController();
  