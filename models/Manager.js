const mongoose = require('mongoose');


const managerSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    city: String,
    state: String,
    password: String,
    notificationarrayID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notificationarray'
    },
    imagesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profileimage'
    }],
    status: {
        type: String,
        default: "login"
    },
    role: {
        type: String,
        default: "Manager"
    }
});


module.exports = mongoose.model("manager", managerSchema);