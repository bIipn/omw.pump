const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  supply: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Token', tokenSchema);