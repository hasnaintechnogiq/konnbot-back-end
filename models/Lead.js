const mongoose = require('mongoose');

const LeadsSchema = mongoose.Schema({
    city: String,
    leadname: String,
    interested: {
        type: String,
        default: "notintrested"
    },
    quotationstatus: String,
    convertoproject:String,
    status: String,
    priority: String,
    projestatus: String,
    goingtostart: String,
    email: String,
    clientdescription: String,
    clientaddress: String,
    plotaddress: String,
    discription: String,
    units: String,
    projectname: String,
    sitearea: String,
    buildingtype: String,
    sitedev: String,
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
    }]
    // ,
    // changeorderinstallmentID: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'changeorderinstallment'
    // }]
});

module.exports = mongoose.model("leads", LeadsSchema);