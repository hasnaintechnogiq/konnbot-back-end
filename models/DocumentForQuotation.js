const mongoose = require('mongoose')

const documentSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: Number,
    uri: String,
  });


  module.exports = mongoose.model('Document', documentSchema);