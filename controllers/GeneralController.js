const User = require('../models/User');
class GeneralController {
  showHomePage(req, res) {
    res.render('user/home');
  }
  async showAboutPage(req, res) {
    try {
      const data = await User.find({});
      res.render('user/about', { data: data });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
  async saveUser(req, res) {
    try {
      console.log(req.body);
      const { username, email, password } = req.body;
      const newUser = new User({ username, email, password });
      const savedUser = await newUser.save();
      res.redirect('/about');
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new GeneralController();
