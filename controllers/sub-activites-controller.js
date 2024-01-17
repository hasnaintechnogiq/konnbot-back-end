const mongoose = require('mongoose');
const SubActivities = require('../models/SubActivities.js');
const Activities = require('../models/Activities.js');
const SubActivitiesUpdate = require('../models/SubActivitiesUpdate.js');

const addNewSubActivity = async (req, res) => {
    try {
        let data = new SubActivities(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        let newss = new mongoose.Types.ObjectId(req.body.activityID)
        console.log(objID);
        await Activities.updateOne(
            { _id: newss },
            {
                $push: {
                    subactivitiesID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};



const addNewUpdateInSubActivity = async (req, res) => {
    try {
        let data = new SubActivitiesUpdate(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        let newss = new mongoose.Types.ObjectId(req.body.subactivityID)
        console.log(objID);
        await SubActivities.updateOne(
            { _id: newss },
            {
                $push: {
                    subactivitiesupdateID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};
// const getAllactivitiesDetalis = async (req, res) => {
//     try {
//         let data = await Activities.find().populate("leadID");
//         res.send(data)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// };

const getSubActivitiesofSingleActivity = async (req, resp) => {
    try {
        let single = await Activities.findOne({ _id: req.params._id }).populate("subactivitiesID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};
 
// const getSingleactivitiesWithsubtask = async (req, resp) => {
//     try {
//         let single = await Activities.findOne({ _id: req.params._id }).populate("activitiesID");
//         resp.send(single);
//     } catch (err) {
//         resp.status(500).json(err);
//     }
// };

const deleteSubActivity = async (req, res) => {
    try {
        let data = await SubActivities.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updatesubactivity = async (req, res) => {
    try {
        console.log(req.params)
        let data = await SubActivities.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { 
    // getSingleactivitiesWithChangeOrder,
    //  getAllactivitiesDetalis,
    addNewSubActivity, getSubActivitiesofSingleActivity, deleteSubActivity, updatesubactivity, addNewUpdateInSubActivity
        };