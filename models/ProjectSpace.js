const mongoose = require('mongoose');

const projectspaceSchema = mongoose.Schema({
    bankingtech: String,
    classtype: String,
    spacetags: Array,
    spacerequirements: Array,
    doorname: String,
    roomdimension: String,
    cement: String,
    reinforcement: String,
    fillingmaterial: String,
    antitermite: String,
    masonary: String,
    plastercement: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    }
});

module.exports = mongoose.model("projectspace", projectspaceSchema);