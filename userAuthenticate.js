require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');

const UserAuthenticate = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: 'Authorization header missing'
        });
    }
    
    const token = authHeader.replace('Bearer ', '');
    
    try {
        // JWT token को verify करें
        const verifytoken = jwt.verify(token, process.env.JWT_SECRET);
        
        // User को database से find करें
        const user = await User.findOne({ 
            _id: verifytoken._id, 
            "tokens.token": token 
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found or token invalid'
            });
        }

        // User की status check करें
        if (user.status !== 'login') {
            return res.status(401).json({
                success: false,
                message: 'User account is not active'
            });
        }

        // Request में user information add करें
        req.token = token;
        req.user = user;
        req.userID = user._id;
        req.userRole = user.role;
        
        next();

    } catch (err) {
        console.error('User Authentication Error:', err);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized - Invalid token'
        });
    }
}

module.exports = UserAuthenticate;
