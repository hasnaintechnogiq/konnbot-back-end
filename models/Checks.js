const mongoose = require('mongoose');

const checksSchema = mongoose.Schema({

    checksdescription: String,
    checkstatusfor: {
        type: String,
        default: "No"
    },
    updatesubactivitytime: { type: Date, default: Date.now },
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("checks", checksSchema);