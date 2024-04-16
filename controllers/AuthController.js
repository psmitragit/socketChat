// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');

class AuthController {
  // Render the auth view
  async login(req, res) {
    const { username, password } = req.body;
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username.' });
    }
    // Compare passwords
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    // User authenticated
    // Save user information in the session
    req.session.user = user;
    // res.json({ message: 'Login successful' });
    res.redirect('/chat');
  }
  async saveUser(req, res) {
    try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, hashedPassword });
      const savedUser = await newUser.save();
      res.redirect('/about');
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new AuthController();