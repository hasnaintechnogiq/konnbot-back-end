const mongoose = require('mongoose');

const QueriesSchema = mongoose.Schema({
    subtype:String,
    sitename: String,
    projecttype:String,
    subtype:String,
    description: String,
    status: String,
    profile_url:String,
    kisusermh: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    date:{type:Date, default: Date.now} ,
    images: String,
});

module.exports = mongoose.model("queriess", QueriesSchema);