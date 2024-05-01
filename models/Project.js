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