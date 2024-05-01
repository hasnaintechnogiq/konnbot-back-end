const mongoose = require('mongoose');

const projectspaceSchema = mongoose.Schema({
    roomname: String,
    roomlengthmain: Number,
    roomlengthsecond: Number,
    roombreadthmain: Number,
    roombreadthsecond: Number,
    floorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }
});

module.exports = mongoose.model("rooms", projectspaceSchema);