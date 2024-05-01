const mongoose = require('mongoose');

const Lead = require('../models/Lead.js');
const Appointment = require('../models/Appointment.js');
const Manager = require('../models/Manager.js');
const LeadManager = require('../models/LeadManager.js');
const Engineer = require('../models/Engineer.js');
const NotificationArray = require('../models/NotificationArray.js');

const getAllapointments = async (req, res) => {
    try {
        let data = await Appointment.find()
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

const addNewAppointment = async (req, res) => {
    try {
        let data = new Appointment(req.body);
        const result = await data.save();
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addMangagerProfile = async (req, res) => {
    try {
        let data = new Manager(req.body);
        const newDocument = new NotificationArray();
        newDocument.role = "Manager";
        const notifiArray = await newDocument.save();
        let objID = new mongoose.Types.ObjectId(newDocument.id)
        data.notificationarrayID = objID;

        const result = await data.save();
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllManagersList = async (req, res) => {
    try {
        let data = await Manager.find().populate("imagesID")
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

const addProfileofLead = async (req, res) => {
    try {
        let data = new LeadManager(req.body);
        const newDocument = new NotificationArray();
        newDocument.role = "Lead Manager";
        const notifiArray = await newDocument.save();
        let objID = new mongoose.Types.ObjectId(newDocument.id)
        data.notificationarrayID = objID;

        const result = await data.save();
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllLeadsList = async (req, res) => {
    try {
        let data = await LeadManager.find().populate("imagesID")
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};
const addProfileofEngiiner = async (req, res) => {
    try {
        let data = new Engineer(req.body);
        const newDocument = new NotificationArray();
        newDocument.role = "Engineer";
        const notifiArray = await newDocument.save();
        let objID = new mongoose.Types.ObjectId(newDocument.id)
        data.notificationarrayID = objID;

        const result = await data.save();
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllEngineerList = async (req, res) => {
    try {
        let data = await Engineer.find().populate("imagesID")
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};


module.exports = {  getAllapointments, addNewAppointment, addMangagerProfile, addProfileofLead, addProfileofEngiiner, getAllEngineerList, getAllLeadsList, getAllManagersList};