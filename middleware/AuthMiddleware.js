// middleware/auth.js
const authMiddleware = (req, res, next) => {
    // Check if user is logged in
    if (req.session && req.session.user) {
      // User is logged in, proceed to the next middleware or route handler
      next();
    } else {
      // User is not logged in, redirect to login page or send 401 Unauthorized status
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = authMiddleware;
  