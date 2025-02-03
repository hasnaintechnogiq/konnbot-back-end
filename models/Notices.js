const mongoose = require('mongoose');

const noticesSchema = mongoose.Schema({

    name: String,
    usertype: String,
    textdetails: String, 

    title: String,
    personname: String,
    date:{type:Date, default: Date.now} ,
    discription: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    }
});

module.exports = mongoose.model("notices", noticesSchema);