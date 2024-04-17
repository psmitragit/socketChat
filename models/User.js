const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
  color: {
    type: String,
    required: true,
  },
  hashedPassword: {
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
UserSchema.pre('save', function (next) {
  this.updated_at = new Date();
  next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.hashedPassword);
  } catch (error) {
    throw error;
  }
};

// Create User model
const User = mongoose.model('User', UserSchema);

module.exports = User;
