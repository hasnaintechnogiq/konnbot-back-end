const mongoose = require('mongoose');

const projectspaceSchema = mongoose.Schema({
    floorsequence: String,
    bankingtech: String,
    classtype: String,
    floorlengthmain: Number,
    floorlengthsecond: Number,
    floorwidthmain: Number,
    floorwidthsecond: Number,
    roomsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rooms'
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

module.exports = mongoose.model("projectspace", projectspaceSchema);