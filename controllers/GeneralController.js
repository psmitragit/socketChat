class GeneralController {
    showHomePage(req, res) {
      res.render('user/home');
    }
    showAboutPage(req, res) {
      res.render('user/about');
    }
  }
  
  module.exports = new GeneralController();
  