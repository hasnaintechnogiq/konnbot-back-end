const mongoose = require('mongoose');

const LeadsSchema = mongoose.Schema({
    city: String,
    number: Number,
    leadname: String,
    interested: {
        type: String,
        default: "Not Intrested"
    },
    ScopeofWork: String,
    quotationstatus: {
        type: String,
        default: "Yes"
    },
    convertoproject: {
        type: String,
        default: "No"
    },
    contractcreated: {
        type: String,
        default: "No"
    },
    todayworkstatus: {
        type: String,
        default: "Yes"
    },
    reasontostopwork: {
        type: String,
        default: "Delay's End"
    },
    status: String,
    priority: String,
    projestatus: String,
    goingtostart: String,
    email: { type: String, required: true, unique: true },
    clientname: String,
    clientdescription: String,
    clientaddress: String,
    plotaddress: String,
    discription: String,
    units: String,
    projectname: String,
    projestage: String,
    sitearea: String,
    buildingtype: String,
    sitedev: String,
    nextmeeting: String,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    }],
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
    }],
    quotationID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quotation'
    }],
    delaysID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'delays'
    }],
    quotationSelectedID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quotation'
    }],
    engineerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'engineer'
    },
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager'
    },
    Createdate:{type:Date, default: Date.now},
});

module.exports = mongoose.model("leads", LeadsSchema);