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
}

module.exports = new GeneralController();
