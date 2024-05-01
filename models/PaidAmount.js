const mongoose = require('mongoose');

const paidamountSchema = mongoose.Schema({
    paidamountn: Number,
    paiddate: String,
    modeof: String,
    installmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myinstallments'
    }
});

module.exports = mongoose.model("paidamount", paidamountSchema);