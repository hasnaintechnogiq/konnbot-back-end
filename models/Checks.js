const mongoose = require('mongoose');

const checksSchema = mongoose.Schema({
    phaseHeadingShow: String,
    checksHeading: String,
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