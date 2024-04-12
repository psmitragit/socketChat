const express = require('express');
const router = express.Router();
const generalController = require('../controllers/GeneralController');

router.get('/', generalController.showHomePage);
router.get('/about', generalController.showAboutPage);

module.exports = router;
