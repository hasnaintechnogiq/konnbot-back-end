const mongoose = require('mongoose');

const LeadsSchema = mongoose.Schema({
    city: String,
    number: Number,
    leadname: String,
    interested: {
        type: String,
        default: "notintrested"
    },
    quotationstatus: {
        type: String,
        default: "Yes"
    },
    convertoproject: {
        type: String,
        default: "No"
    },
   
    status: String,
    priority: String,
    projestatus: String,
    goingtostart: String,
    email: String,
    clientname: String,
    clientdescription: Array,
    clientaddress: String,
    plotaddress: String,
    discription: String,
    units: String,
    projectname: String,
    sitearea: String,
    buildingtype: String,
    sitedev: String,
    nextmeeting: String,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    projectstructureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectstructure'
    },
    projectspaceID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }],
    noticesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notices'
    }],
    installmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myinstallments'
    }],
    activitiesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'activities'
    }]
});

module.exports = mongoose.model("leads", LeadsSchema);