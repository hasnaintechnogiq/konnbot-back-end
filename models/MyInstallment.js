const mongoose = require('mongoose');
const myinstallmentsSchema = mongoose.Schema({
    installmentnum:String,
    installmenttype: String,
    status: {
        type: String,
        default: "Pending"
    },
    installmentamount: String,
    approvedco: String,
    pendingco: String,
    finalamount: String,
    given: String,
    remaining: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    date:{type:Date, default: Date.now},
    duedate: String,
    changeorderinstallmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'changeorderinstallment'
    }]
});

module.exports = mongoose.model("myinstallments", myinstallmentsSchema);