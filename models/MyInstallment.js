const mongoose = require('mongoose');
const myinstallmentsSchema = mongoose.Schema({
    installmentnum:String,
    installmenttype: String,
    projecttype:String,
    description: String,
    status: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    date:{type:Date, default: Date.now}
});

module.exports = mongoose.model("myinstallments", myinstallmentsSchema);