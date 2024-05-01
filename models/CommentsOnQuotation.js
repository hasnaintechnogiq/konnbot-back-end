const mongoose = require('mongoose');

const commentsonquotationSchema = mongoose.Schema({
    name: String,
    usertype: String,
    textdetails: String, 
    date:{type:Date, default: Date.now},
});

module.exports = mongoose.model("commentsonquotation", commentsonquotationSchema);