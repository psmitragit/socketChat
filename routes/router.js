const express = require('express');
const router = express.Router();
const generalController = require('../controllers/GeneralController');
const chatController = require('../controllers/ChatController');
const authController = require('../controllers/AuthController');

router.get('/', generalController.showHomePage);
router.get('/about', generalController.showAboutPage);
router.post('/login', authController.login);
router.post('/register', authController.saveUser);
router.get('/chat', chatController.showChatPage);

module.exports = router;
