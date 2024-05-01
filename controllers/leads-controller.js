const mongoose = require('mongoose');
const User = require('../models/User.js');
const Lead = require('../models/Lead.js');

const getAllLeads = async (req, res) => {
    try {
        let leads = await Lead.find().populate("projectID")
        res.send(leads)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleLead = async (req, resp) => {
    try {
        let single = await Lead.findOne({ _id: req.params.id }).populate("userID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewLead = async (req, res) => {
    try {
        let lead = new Lead(req.body);
        const result = await lead.save();
        let objID = new mongoose.Types.ObjectId(lead.id)
        // let newss = new mongoose.Types.ObjectId(req.body.userID)

        await User.updateOne(
            { email: req.body.email },
            {
                $set: {
                    leadID: objID
                }
            }
        )
        let single = await User.findOne({ email: req.body.email });

        if (single) {
            console.log(single._id)
            await Lead.updateOne(
                { _id: objID },
                {
                    $set: {
                        userID: single._id
                    }
                }
            )
        }
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateLead = async (req, res) => {
    try {
        console.log(req.params)
        let data = await Lead.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteLead = async (req, res) => {
    try {
        let data = await Lead.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getLeadWithProject = async (req, resp) => {
    const result = await Lead.findOne({ _id: req.params.id })
        .populate("projectID")
        .populate("projectstructureID")
        .populate({
            path: 'projectspaceID',
            populate: {
                path: 'roomsID',
                model: 'rooms'
            }
        })
        .populate("noticesID")
        .populate("userID")
        .populate("activitiesID")
    resp.send(result);
};


const getLeadWithdelays = async (req, resp) => {
    const result = await Lead.findOne({ _id: req.params.id })
        .populate("delaysID")
    resp.send(result);
};



const searchLead = async (req, resp) => {
    let result = await Lead.find({
        "$or": [
            { leadname: { $regex: req.params.key, $options: "i" } },
            { email: { $regex: req.params.key, $options: "i" } }
        ]
    });
    resp.send(result);
};


const addEngineerInLead = async (req, res) => {
    try {

        let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
        let engIDEx = new mongoose.Types.ObjectId(req.body.engID)
        await Lead.updateOne(
            { _id: leadIDEx },
            {
                $set: {
                    engineerID: engIDEx
                }
            }
        )
        res.send("Done");
    } catch (err) {
        res.status(500).json(err);
    }
};


const addManagerInLead = async (req, res) => {
    try {

        let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
        let engIDEx = new mongoose.Types.ObjectId(req.body.maangID)
        await Lead.updateOne(
            { _id: leadIDEx },
            {
                $set: {
                    managerID: engIDEx
                }
            }
        )
        res.send("Done");
    } catch (err) {
        res.status(500).json(err);
    }
};



module.exports = { addEngineerInLead, addManagerInLead, getLeadWithdelays, searchLead, getAllLeads, getSingleLead, addNewLead, updateLead, deleteLead, getLeadWithProject };