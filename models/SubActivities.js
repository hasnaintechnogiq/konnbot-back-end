const mongoose = require('mongoose');

const subactivitiesSchema = mongoose.Schema({
    statussubactivity: {
        type: Number,
        default: 0
    },
    subactivityname: String,
    startdatesubactivity: String,
    duedatesubactivity: String,
    activityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'activities'
    },
    subactivitiesupdateID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivitiesupdate'
    }]
});

module.exports = mongoose.model("subactivities", subactivitiesSchema);