require('dotenv').config();
const jwt = require('jsonwebtoken');
// const User = require('../middilewear/authenticate');
const User = require('./models/User.js');
const Manager = require('./models/Manager.js');
const Engineer = require('./models/Engineer.js');
const LeadManager = require('./models/LeadManager.js');
const Admin = require('./models/Admin.js');


const Authenticate = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).send('Authorization header missing');
    }
    const token = authHeader.replace('Bearer ', '');
    // console.log(token)
    try {
        const role = req.headers['role'];
        // console.log('Role:', role);
        const verifytoken = jwt.verify(token, process.env.JWT_SECRET);



        let rootuser;
        switch (role) {
            case 'Manager':
                rootuser = await Manager.findOne({ _id: verifytoken._id, "tokens.token": token });
                break;
            case 'Engineer':
                rootuser = await Engineer.findOne({ _id: verifytoken._id, "tokens.token": token });
                break;
            case 'Lead Manager':
                rootuser = await LeadManager.findOne({ _id: verifytoken._id, "tokens.token": token });
                break;
            case 'admin':
                rootuser = await Admin.findOne({ _id: verifytoken._id, "tokens.token": token });
                break;
            case 'user':
                rootuser = await User.findOne({ _id: verifytoken._id, "tokens.token": token });
                break;
            default:
                return res.status(401).send('Invalid role');
        }

        // const rootuser = await User.findOne({ _id: verifytoken._id, "tokens.token": token })

        if (!rootuser) { throw new Error('user not found') }

        req.token = token;
        req.rootuser = rootuser;
        // req.userID = rootuser._id;
        next();

    }
    catch (err) {
        res.status(401).send('unootherised no token');
        // console.log(err);
    }
}

module.exports = Authenticate