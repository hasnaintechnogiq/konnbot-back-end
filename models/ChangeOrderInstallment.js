const mongoose = require('mongoose');

const changeorderinstallmentSchema = mongoose.Schema({
    topic: String,
    status: {
        type: String,
        default: "Pending"
    },
    amount: String,
    duedate: String,
    description: String,
    date: { type: Date, default: Date.now },
    chatschangeinstallmentID : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatschangeinstallment'
    }],   
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    installmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myinstallments'
    }
});

module.exports = mongoose.model("changeorderinstallment", changeorderinstallmentSchema);