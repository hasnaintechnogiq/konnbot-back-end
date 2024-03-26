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
    }],
    subtaskID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subtask'
    }],
    checksID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'checks'
    }],
    snagsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'snags'
    }],
    imagesID : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'photosforsubtask'
    }]
});

module.exports = mongoose.model("subactivities", subactivitiesSchema);