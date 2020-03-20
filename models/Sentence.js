const mongoose = require('mongoose');

const SentenceSchema = new mongoose.Schema({
  sentence: {
    type: String
  }
});

module.exports = mongoose.model('Sentence', SentenceSchema);
