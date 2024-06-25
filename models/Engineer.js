const mongoose = require('mongoose');


const engineerSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    city: String,
    state: String,
    password: String,
    profile_url: String,
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
        default: "Engineer"
    }
});




module.exports = mongoose.model("engineer", engineerSchema);