const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update 'updated_at' field before saving
UserSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

// Create User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
