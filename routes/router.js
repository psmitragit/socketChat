const express = require('express');
const router = express.Router();
const generalController = require('../controllers/GeneralController');

router.get('/', generalController.showHomePage);
router.get('/about', generalController.showAboutPage);
router.post('/register', generalController.saveUser);

module.exports = router;
