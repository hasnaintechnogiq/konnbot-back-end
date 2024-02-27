const mongoose = require('mongoose');
const myinstallmentsSchema = mongoose.Schema({
    installmentnum: String,
    installmenttype: String,
    status: {
        type: String,
        default: "Pending"
    },
    installmentamount: {
        type: Number,
        default: 0
      },
    afteraddchangeorderamount:  {
        type: Number,
        default: 0
      },
    paidamount: {
        type: Number,
        default: 0
      },
    approvedco: String,
    pendingco: String,
    discriptioninstall: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    date: { type: Date, default: Date.now },
    paydate: String,
    duedate: String,
    changeorderinstallmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'changeorderinstallment'
    }],
    paidamountID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'paidamount'
    }],
    chatsinstallmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatsinstallment'
    }],
});

module.exports = mongoose.model("myinstallments", myinstallmentsSchema);