const mongoose = require('mongoose');

const chatschangeinstallmentSchema = mongoose.Schema({
    name: String,
    usertype: String,
    textdetails: String, 
    date:{type:Date, default: Date.now},
    imgarry: Array,
});

module.exports = mongoose.model("chatschangeinstallment", chatschangeinstallmentSchema);