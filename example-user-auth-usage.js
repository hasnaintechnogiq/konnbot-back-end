// Example usage of User Authentication
const express = require('express');
const UserAuthenticate = require('./userAuthenticate');
const router = express.Router();

// Example route that requires user authentication
router.get('/user/profile', UserAuthenticate, async (req, res) => {
    try {
        // req.user में authenticated user की सारी information available है
        const userProfile = {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            city: req.user.city,
            state: req.user.state,
            profile_url: req.user.profile_url,
            role: req.user.role,
            status: req.user.status
        };

        res.json({
            success: true,
            message: 'User profile retrieved successfully',
            data: userProfile
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving user profile',
            error: error.message
        });
    }
});

// Example route for user-specific data
router.get('/user/my-installments', UserAuthenticate, async (req, res) => {
    try {
        // req.userID में user का ID available है
        const userId = req.userID;
        
        // यहाँ आप user के installments fetch कर सकते हैं
        // const installments = await MyInstallment.find({ userId: userId });
        
        res.json({
            success: true,
            message: 'User installments retrieved successfully',
            userId: userId
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving user installments',
            error: error.message
        });
    }
});

module.exports = router;

