const mongoose = require('mongoose');

const projectsSchema = mongoose.Schema({
    area: String,
    irregulararea: String,
    frontmain: String,
    frontsecond: String,
    depthmain: String,
    depthsecond: String,
    surroundings: String,
    front: String,
    left: String,
    right: String,
    back: String,
    siteclearance: String,
    roadtositelevel: String,
    roadtoplinthlevel: String,
    floors: String,
    basment: String,
    tower: String,
    towerfloorlevel: String,
    towerheight: String,
    spaces: String,
    spacesfloorlevel: String,
    spacesheight: String,
    todayworkstatus: {
        type: String,
        default: "Yes"
    },
    projectspaceID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }],
    delaysID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'delays'
    }],
    reasontostopwork : {
        type: String,
        default: "Delay's End"
    },
    activitiesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'activities'
    }],
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    quotationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quotation'
    }
});

module.exports = mongoose.model("projects", projectsSchema);