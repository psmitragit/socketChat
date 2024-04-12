// Import necessary modules
// app.js
const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/database');
const routes = require('./routes/router');
app.set('view engine', 'ejs');

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

// Listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
