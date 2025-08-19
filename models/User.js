const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const usersSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: { type: String, required: true, unique: true },
    city: String,
    state: String,
    password: String,
    otp: String,
    profile_url: String,
    Createdate: { type: Date, default: Date.now },
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    notificationarrayID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notificationarray'
    },
    usersitedetailsdemoID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usersitedetailsdemo'
    },
    imagesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profileimage'
    }],
    queriesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'queriess'
    }],
    status: {
        type: String,
        default: "login"
    },
    role: {
        type: String,
        default: "user"
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});

usersSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '28d' })
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    }
    catch (error) {
        // console.log(error);
    }
}


module.exports = mongoose.model("users", usersSchema);