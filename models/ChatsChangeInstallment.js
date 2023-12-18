const mongoose = require('mongoose');

const chatschangeinstallmentSchema = mongoose.Schema({
    usertype: String,
    textdetails: String, 
    date:{type:Date, default: Date.now}   
});

module.exports = mongoose.model("chatschangeinstallment", chatschangeinstallmentSchema);