const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const adminsSchema = mongoose.Schema({
    name: String,
    // number: Number,
    // email: String,
    // city: String,
    // state: String,
    password: String,
    appVersion: String,
    status: {
        type: String,
        default: "login"
    },
    role: {
        type: String,
        default: "admin"
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});


adminsSchema.methods.generateAdminAuthToken = async function () {
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


module.exports = mongoose.model("admins", adminsSchema);