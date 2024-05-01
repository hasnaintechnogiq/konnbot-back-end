const mongoose = require('mongoose');

const ProjectStructure = require('../models/ProjectStructure.js');
const Lead = require('../models/Lead.js');


const getAllProjectstructureDetail = async (req, res) => {
    try {
        let projectstructure = await ProjectStructure.find()
        res.send(projectstructure)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleProjectstructure = async (req, resp) => {
    try {
        let single = await ProjectStructure.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteProjectstructure = async (req, resp) => {
    try {
        let data = await ProjectStructure.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewProjectstructure = async (req, resp) => {
    try {
        let projectstructure = new ProjectStructure(req.body);
        const result = await projectstructure.save();
        let objID = new mongoose.Types.ObjectId(projectstructure.id)
        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        console.log(objID);
        await Lead.updateOne(
            { _id: newss },
            {
                $set: {
                    projectstructureID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updateProjectstructureDetail = async (req, resp) => {
    try {
        console.log(req.params)
        let data = await ProjectStructure.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};
module.exports = { getAllProjectstructureDetail, getSingleProjectstructure, deleteProjectstructure, addNewProjectstructure, updateProjectstructureDetail };