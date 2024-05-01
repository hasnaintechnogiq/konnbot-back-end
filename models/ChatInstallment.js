const mongoose = require('mongoose');

const chatsinstallmentSchema = mongoose.Schema({
    name: String,
    usertype: String,
    textdetails: String, 
    date:{type:Date, default: Date.now},
});

module.exports = mongoose.model("chatsinstallment", chatsinstallmentSchema);