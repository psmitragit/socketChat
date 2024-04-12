const express = require('express');
const router = express.Router();
const generalController = require('../controllers/GeneralController');
const chatController = require('../controllers/ChatController');
const authController = require('../controllers/AuthController');
const authMiddleware = require('../middleware/AuthMiddleware');

router.get('/', generalController.showHomePage);
router.get('/about', generalController.showAboutPage);
router.post('/login', authController.login);
router.post('/register', authController.saveUser);
router.get('/chat', authMiddleware, chatController.showChatPage);

module.exports = router;
