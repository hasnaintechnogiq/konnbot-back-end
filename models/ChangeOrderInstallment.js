const mongoose = require('mongoose');

const changeorderinstallmentSchema = mongoose.Schema({
    tittle: String,
    modechange: String,
    status: {
        type: String,
        default: "Open"
    },
    amountchange: Number,
    dateofcommerse: String,
    duedate: String,
    resonchange: String,
    date: { type: Date, default: Date.now },
    chatschangeinstallmentID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chatschangeinstallment'
    }],
    installmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myinstallments'
    }
});

module.exports = mongoose.model("changeorderinstallment", changeorderinstallmentSchema);