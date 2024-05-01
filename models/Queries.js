const mongoose = require('mongoose');

const QueriesSchema = mongoose.Schema({
    type: String,
    subtype: String,
    description: String,
    sitename: String,
    querycategory: String,
    status: {
        type: String,
        default: "Pending"
    },
    profile_url: String,
    imgarry: Array,
    kisusermh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    managerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'manager'
    },
    engineerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'engineer'
    },
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    date: { type: Date, default: Date.now },
    queryupdateID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'queryupdate'
    }]
});

module.exports = mongoose.model("queriess", QueriesSchema);