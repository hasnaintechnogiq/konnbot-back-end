const mongoose = require('mongoose');

const Project = require('../models/Project.js');
const Lead = require('../models/Lead.js');


const getProjectDetail = async (req, res) => {
    try {
        let project = await Project.find()
        res.send(project)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleProject = async (req, resp) => {
    try {
        let single = await Project.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteProject = async (req, resp) => {
    try {
        let data = await Project.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewProject = async (req, resp) => {
    try {
        let project = new Project(req.body);
        const result = await project.save();
        let objID = new mongoose.Types.ObjectId(project.id)
        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        console.log(objID);
        await Lead.updateOne(
            { _id: newss },
            {
                $set: {
                    projectID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updateProjectDetail = async (req, resp) => {
    try {
        console.log(req.params)
        let data = await Project.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};
module.exports = { getProjectDetail, getSingleProject, deleteProject, addNewProject, updateProjectDetail };