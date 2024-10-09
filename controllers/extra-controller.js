const mongoose = require('mongoose');

const Lead = require('../models/Lead.js');
const Appointment = require('../models/Appointment.js');
const Manager = require('../models/Manager.js');
const LeadManager = require('../models/LeadManager.js');
const Engineer = require('../models/Engineer.js');
const NotificationArray = require('../models/NotificationArray.js');
const PriceList = require('../models/PriceList.js');


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

// Price Controller

const getPriceList = async (req, res) => {
    try {
        let data = await PriceList.find()
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

const updatePriceList = async (req, resp) => {
    try {
        let data = await PriceList.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};


const addPriceList = async (req, resp) => {
    try {
        let project = new PriceList(req.body);
        const result = await project.save();
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};


const CalculationCheckTentetive = async (req, resp) => {
    try {
        let project = req.body;
        // console.log(project)




        var COSTINGINSTALLMENTDONE_D47 = 1;
        var COSTINGINSTALLMENTDONE_D48 = (1 / 1000) * 15;
        var COSTINGINSTALLMENTDONE_D33 = 1 / 8;

        var D5 = project.noofbasementfloor;

        var G31 = project.footingstructuretype;
        var G30 = project.structurelevel;
        var B5 = D5 === 0 ? (G31 === "Isolated" ? 1 : G31 === "Pile" ? 2 : G31 === "Raft" ? 3 : 0) : 0;

        var ReinforcementCost = 60;
        var BindingWireCost = 80;
        var CoverBlock02BeamHorizontalCost = 2;

        var FINALINPUTSDONE_C33 = project.groundfloorfactor * project.area;
        var FINALINPUTSDONE_G39 = 100;   // Need to change

        var FINALINPUTSDONE_C20 = project.roadtoplinthlevel;

        var FINALINPUTSDONE_C19 = project.roadtositelevel;
        var FINALINPUTSDONE_H3 = project.floorleveltofloorlevel;

        
        // ALGORITHUMDONE

        var F21 = B5;
        var FINALINPUTSDONE_I68 = G30 === "Basic" ? 1 : G30 === "Average" ? 2 : G30 === "Heavy" ? 3 : 0;
        var G35 = FINALINPUTSDONE_I68;
        var A78 = F21 === 1 ? G35 === 1 ? 1.5 : G35 === 2 ? 1.8 : G35 === 3 ? 2.4 : 1.5 : 0;

        var B78 = F21 === 1 ? G35 === 1 ? 1.5 : G35 === 2 ? 1.8 : G35 === 3 ? 2.4 : 1.5 : 0;
        var C78 = F21 === 1 ? G35 === 1 ? 0.4 : G35 === 2 ? 0.5 : G35 === 3 ? 0.6 : 0.4 : 0;

        var F17 = FINALINPUTSDONE_C33 / FINALINPUTSDONE_G39;
        var B26 = FINALINPUTSDONE_C33 / 10.76;
        var C93 = G35 === 1 ? 0.4 : G35 === 2 ? 0.5 : G35 === 3 ? 0.6 : 0.4;
        var C15 = (FINALINPUTSDONE_C20 - FINALINPUTSDONE_C19) / 3.28;
        var E26 = Math.round((B26 * 10.76) / FINALINPUTSDONE_G39);
        var C94 = G35 === 1 ? 0.2 : G35 === 2 ? 0.3 : G35 === 3 ? 0.4 : 0.3;

        var B9 = FINALINPUTSDONE_H3 / 3.28;



        var H93 = F21 === 1 ? (C93 * 0.2 * C15 * 1.15) * E26 : 0;

        var I93 = F21 === 1 ? (C94 * 0.2 * B9 * 1.15) * C15 : 0;


        var G80 = F21 === 1 ? A78 * B78 * C78 * F17 : 0;
        var G81 = H93 + I93;

        var D78 = F21 === 1 ? (G35 === 1 ? 0.0125 : G35 === 2 ? 0.015 : G35 === 3 ? 0.0175 : 0.0125) : 0;


        var ALGORITHUMDONE_G82 = G80 * D78 * 7850;

        var ALGORITHUMDONE_G83 = G81 * D78 * 7850;







        var ISO_Reinforcement_QTD = F21 === 1 ? ALGORITHUMDONE_G82 + ALGORITHUMDONE_G83 : 0;



        var ReinforcementTMTMT = ISO_Reinforcement_QTD;

        var ReinforcementTMTReinforcementQuantity = Math.ceil(ReinforcementTMTMT * COSTINGINSTALLMENTDONE_D47);
        var ReinforcementTMTBindingWireQuantity = Math.ceil(ReinforcementTMTMT * COSTINGINSTALLMENTDONE_D48);
        var ReinforcementTMTCoverBlockQuantity = Math.ceil(ReinforcementTMTMT * COSTINGINSTALLMENTDONE_D33);
        var ReinforcementTMTReinforcementAmount = ReinforcementTMTReinforcementQuantity * ReinforcementCost;
        var ReinforcementTMTBindingWireAmount = ReinforcementTMTBindingWireQuantity * BindingWireCost;
        var ReinforcementTMTCoverBlockAmount = ReinforcementTMTCoverBlockQuantity * CoverBlock02BeamHorizontalCost;



        // var ISO_Layout_Leveling_QTD = MATERIALDONE_H163 + MATERIALDONE_H164;
        // var ISO_Excavation_QTD = MATERIALDONE_H167 + MATERIALDONE_H168;
        var ISO_Reinforcement_TotalAmount = ReinforcementTMTReinforcementAmount + ReinforcementTMTBindingWireAmount + ReinforcementTMTCoverBlockAmount;
        // var ISO_PCC_QTD = MATERIALDONE_H176 + MATERIALDONE_H177 + MATERIALDONE_H178;
        // var ISO_Footing_RCC_QTD = MATERIALDONE_H181 + MATERIALDONE_H182 + MATERIALDONE_H183 + MATERIALDONE_H184 + MATERIALDONE_H185;
        // var ISO_Pedestal_RCC_QTD = MATERIALDONE_H188 + MATERIALDONE_H189 + MATERIALDONE_H190 + MATERIALDONE_H191 + MATERIALDONE_H192;
        // var ISO_Waterproofing_QTD = MATERIALDONE_H195 + MATERIALDONE_H196 + MATERIALDONE_H197 + MATERIALDONE_H198 + MATERIALDONE_H199;
        // var ISO_Backfilling_Work_QTD = MATERIALDONE_H202 + MATERIALDONE_H203;



        var Normal_Footing_Isolated_QTD = ISO_Reinforcement_TotalAmount;


        console.log(Normal_Footing_Isolated_QTD)

        resp.status(200).json(Normal_Footing_Isolated_QTD);
        // resp.send(Normal_Footing_Isolated_QTD);
    } catch (err) {
        resp.status(500).json(err);
    }
};




















module.exports = { CalculationCheckTentetive, addPriceList, updatePriceList, getPriceList, getAllapointments, addNewAppointment, addMangagerProfile, addProfileofLead, addProfileofEngiiner, getAllEngineerList, getAllLeadsList, getAllManagersList };