const mongoose = require('mongoose');

const Projectspace = require('../models/ProjectSpace.js');
const Lead = require('../models/Lead.js');


const getAllProjectspaceDetail = async (req, res) => {
    try {
        let structuredata = await Projectspace.find()
        res.send(structuredata)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleProjectspace = async (req, resp) => {
    try {
        let single = await Projectspace.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteProjectspace = async (req, resp) => {
    try {
        let data = await Projectspace.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewProjectspace = async (req, resp) => {
    try {
        let structure = new Projectspace(req.body);
        const result = await structure.save();
        let objID = new mongoose.Types.ObjectId(structure.id)
        console.log(objID);
        await Lead.updateOne(
            { email: req.body.email },
            {
                $push: {
                    projectspaceID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updateProjectspaceDetail = async (req, resp) => {
    try {
        console.log(req.params)
        let data = await Projectspace.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};
module.exports = { getAllProjectspaceDetail, getSingleProjectspace, deleteProjectspace, addNewProjectspace, updateProjectspaceDetail };