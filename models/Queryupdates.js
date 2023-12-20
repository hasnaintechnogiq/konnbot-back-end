const mongoose = require('mongoose');

const queryupdateSchema = mongoose.Schema({
    usertypename: String,
    queryupdatedescription: String,
    images: String,
    queryupdatedate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("queryupdate", queryupdateSchema);