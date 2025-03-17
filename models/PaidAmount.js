const mongoose = require('mongoose');

const paidamountSchema = mongoose.Schema({
    paidamountn: Number,
    paiddate: String,
    modeof: String,
    installmentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'myinstallments'
    },
    Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("paidamount", paidamountSchema);