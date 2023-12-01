const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const usersSchema= mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name:String,
    number:Number,
    email:String,
    city:String,
    state:String,
    password:String,
    queriesID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'queriess'
    }],
    role: {
        type: String,
        default: "login"
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


module.exports= mongoose.model("users",usersSchema);