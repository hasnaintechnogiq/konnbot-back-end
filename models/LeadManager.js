const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const leadmanagerSchema = mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    city: String,
    state: String,
    password: String,
    profile_url: String,
    date:{type:Date, default: Date.now},
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
    },
    tokens: [
        {
            token: {
                type: String
            }
        }
    ]
});

leadmanagerSchema.methods.generateLeadManagerAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, "MOHDHASNAINKOUSARANSARIPARASIA", { expiresIn: '3d' })
        this.tokens = this.tokens.concat({ token: token })
        await this.save();
        return token;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = mongoose.model("leadmanager", leadmanagerSchema);