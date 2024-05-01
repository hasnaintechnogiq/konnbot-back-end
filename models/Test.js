const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    updatesubactivitytitle: String,
    updatesubactivitydescription: String,
    updatesubactivitytime: { type: Date, default: Date.now },
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("test", testSchema);