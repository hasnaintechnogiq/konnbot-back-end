const jwt = require('jsonwebtoken');
// const User = require('../middilewear/authenticate');
const User = require('./models/User.js');
 
const Authenticate = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Authorization header missing');
    }
    const token = authHeader.replace('Bearer ', '');
    console.log(token)
    try {
      
        const verifytoken = jwt.verify(token, "MOHDHASNAINKOUSARANSARIPARASIA");
        const rootuser = await User.findOne({ _id: verifytoken._id, "tokens.token": token })

        if (!rootuser) { throw new Error('user not found') }

        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;
        next();

    }
    catch (err) {
        res.status(401).send('unootherised no token');
        console.log(err);
    }
}

module.exports = Authenticate