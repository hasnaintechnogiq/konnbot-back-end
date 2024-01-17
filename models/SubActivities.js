const mongoose = require('mongoose');

const subactivitiesSchema = mongoose.Schema({
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