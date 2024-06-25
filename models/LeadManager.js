const mongoose = require('mongoose');


const leadmanagerSchema = mongoose.Schema({
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
        default: "Lead Manager"
    }
});




module.exports = mongoose.model("leadmanager", leadmanagerSchema);