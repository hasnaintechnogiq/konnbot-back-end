const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema({
    categoryname: String,
    startdate: String,
    duedateactivities: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    subactivitiesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }]
});

module.exports = mongoose.model("activities", activitiesSchema);