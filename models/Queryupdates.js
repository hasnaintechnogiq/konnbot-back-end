const mongoose = require('mongoose');

const queryupdateSchema = mongoose.Schema({
    usertypename: String,
    queryupdatedescription: String,
    imgarry: Array,
    queryupdatedate: { type: Date, default: Date.now },

});

module.exports = mongoose.model("queryupdate", queryupdateSchema);