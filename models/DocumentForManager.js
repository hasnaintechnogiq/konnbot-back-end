const mongoose = require('mongoose')

const documentForManagerSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: Number,
    uri: String,
  });


  module.exports = mongoose.model('DocumentForManager', documentForManagerSchema);