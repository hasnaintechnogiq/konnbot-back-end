const mongoose = require('mongoose');
const User = require('../models/User.js');
const UserSiteDetailsDemo = require('../models/UserSiteDetailsDemo.js');

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.send(users)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleUser = async (req, resp) => {
    try {
        let single = await User.findOne({ _id: req.params._id });
    resp.send(single);
      } catch (err) {
       res.status(500).json(err);
   }
};

const addNewUser = async (req, res) => {
    const { email } = req.body;
    try {
        let existingTeacherByEmail = await User.find({ email })
        let user = new User(req.body);
        if (existingTeacherByEmail.length > 0) {
            res.send('Email already exists');
            console.log("Email already exists")
        } else {
            const result = await user.save();
            res.send(result);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateUserDetail =async (req, res) => {
    try {
        console.log(req.params)
        let data = await User.updateOne(
            req.params,
            {$set: req.body}
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        let data = await User.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getUserWithQueries= async (req, resp) => {
    const result = await User.findOne(
        { _id: req.params.id }).populate("queriesID")
    resp.send(result);
};



const addSiteDetailsForDemo = async (req, resp) => {
    try {
        let sitedemo = new UserSiteDetailsDemo(req.body);
        const result = await sitedemo.save();
        let objID = new mongoose.Types.ObjectId(sitedemo.id)
        let newss = new mongoose.Types.ObjectId(req.body.userID)
        console.log(objID);
        await User.updateOne(
            { _id: newss },
            {
                $set: {
                    usersitedetailsdemoID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};











module.exports = { addSiteDetailsForDemo, getAllUsers, getUserWithQueries, getSingleUser, addNewUser, updateUserDetail, deleteUser };