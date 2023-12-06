const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const usersSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    city: String,
    state: String,
    password: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
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
        let token = jwt.sign({ _id: this._id }, "MOHDHASNAINKOUSARANSARIPARASIA")
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = mongoose.model("users", usersSchema);