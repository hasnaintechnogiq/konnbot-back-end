const mongoose = require('mongoose');

const delaysSchema = mongoose.Schema({
    activitypath: String,
    delayimactterms: String,
    numberofdays: Number,
    amountinterms: Number,
    dueto: String,
    relatedto: String,
    reason: String,
    date:{type:Date, default: Date.now},
    imgarry: Array,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
});

module.exports = mongoose.model("delays", delaysSchema);