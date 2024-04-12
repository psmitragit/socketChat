// Import necessary modules
// app.js
const express = require('express');
const app = express();
const connectDB = require('./config/database');
const routes = require('./routes/router');
app.set('view engine', 'ejs');

//Connect DB
connectDB();

// Use middleware
app.use(express.json());

// Use routes
app.use('/', routes);

// Listen on a port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
