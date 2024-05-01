const mongoose = require('mongoose');

const profileimageSchema = mongoose.Schema({
    imgarry: Array,
});

module.exports = mongoose.model("profileimage", profileimageSchema);