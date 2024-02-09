const mongoose = require('mongoose');

const photosforsubtaskSchema = mongoose.Schema({
    date:{type:Date, default: Date.now},
    imgarry: Array,
});

module.exports = mongoose.model("photosforsubtask", photosforsubtaskSchema);