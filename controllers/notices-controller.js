const mongoose = require('mongoose');

const Notices = require('../models/Notices.js');
const Lead = require('../models/Lead.js');


const getAllNoticesDetail = async (req, res) => {
    try {
        let noticesdata = await Notices.find().populate("leadID");
        res.send(noticesdata)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleUserNotices = async (req, resp) => {
    console.log(req.params._id)
    try {
        let single = await Lead.findOne({ _id: req.params._id }).populate("noticesID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const deleteNotices = async (req, resp) => {
    try {
        let data = await Notices.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewNotices = async (req, resp) => {
    try {
        let structure = new Notices(req.body);
        const result = await structure.save();
        let objID = new mongoose.Types.ObjectId(structure.id)
        console.log(objID);
        await Lead.updateOne(
            { email: req.body.email },
            {
                $push: {
                    noticesID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updateNoticesDetail = async (req, resp) => {
    try {
        console.log(req.params)
        let data = await Notices.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};

module.exports = { getAllNoticesDetail, getSingleUserNotices, deleteNotices, addNewNotices, updateNoticesDetail };

 