const mongoose = require('mongoose');

const subtaskSchema = mongoose.Schema({
    phaseHeadingShow: String,
     subtaskdescription: String,
     checkstatus: {
        type: String,
        default: "No"
    },
    updatesubactivitytime: { type: Date, default: Date.now },
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("subtask", subtaskSchema);