const mongoose = require('mongoose');

const projectspaceSchema = mongoose.Schema({
    roomname: String,
    roomlengthmain : {
        type: Number,
        default: 0
    },
    roomlengthsecond: {
        type: Number,
        default: 0
    },
    roombreadthmain:{
        type: Number,
        default: 0
    },
    roombreadthsecond:{
        type: Number,
        default: 0
    },
    floorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }
});

module.exports = mongoose.model("rooms", projectspaceSchema);