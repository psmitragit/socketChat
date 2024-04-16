// Import necessary modules
// app.js
const express = require('express');
const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const connectDB = require('./config/database');
const routes = require('./routes/router');
const session = require('express-session');
const chatController = require('./controllers/ChatController');

app.set('view engine', 'ejs');

const crypto = require('crypto');

// Generate a random secret key
const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};


// Set up session middleware
app.use(session({
    secret: generateSecretKey(), // Change this to a random secret
    resave: false,
    saveUninitialized: false
  }));

// Define the root folder path
const rootPath = __dirname;

// For serving static assets

app.use('/modules', express.static(rootPath + '/node_modules'));

//Connect DB
connectDB();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Use middleware
app.use(express.json());

// Use routes
app.use('/', routes);

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat message event
  socket.on('chat message', chatController.handleChatMessage(io));

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

// Listen on a port
const port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log(`Listening on port ${port}`);
});
