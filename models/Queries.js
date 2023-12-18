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
    kisusermh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date: { type: Date, default: Date.now },
    images: String,
});

module.exports = mongoose.model("queriess", QueriesSchema);