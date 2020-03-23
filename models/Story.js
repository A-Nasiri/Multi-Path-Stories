const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  startingSentence: String,
  sentences: [String]
});

module.exports = mongoose.model('Story', storySchema);
