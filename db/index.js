const mongoose = require('mongoose');

const mongoURI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/crypto-charts';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true }, err => {
  if (err) {
    throw err;
  }
  console.log('connected to db');
});

module.exports = db;
