const mongoose = require('mongoose');
const MyInstallment = require('../models/MyInstallment.js');
const Lead = require('../models/Lead.js');
const PaidAmount = require('../models/PaidAmount.js');

const getAllInstallmentsDetalis = async (req, res) => {
    try {
        let data = await MyInstallment.find().populate("leadID");
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleUserInstallments = async (req, resp) => {
    try {
        let single = await Lead.findOne({ _id: req.params._id }).populate("installmentID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};
 
const getSingleInstallmentWithChangeOrder = async (req, resp) => {
    try {
        let single = await MyInstallment.findOne({ _id: req.params._id }).populate("changeorderinstallmentID").populate("paidamountID")
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const deleteMyInstallment = async (req, res) => {
    try {
        let data = await MyInstallment.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const addNewMyInstallment = async (req, res) => {
    try {
        let data = new MyInstallment(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        console.log(objID);
        await Lead.updateOne(
            { email: req.body.email },
            {
                $push: {
                    installmentID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};


const addPaidAmount = async (req, res) => {
    try {
        let data = new PaidAmount(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        let newss = new mongoose.Types.ObjectId(req.body.installmentID)
        console.log(objID);
        await MyInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    paidamountID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};






















const updateMyInstallment = async (req, res) => {
    try {
        console.log(req.params)
        let data = await MyInstallment.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {addPaidAmount, getSingleInstallmentWithChangeOrder, getAllInstallmentsDetalis, getSingleUserInstallments, addNewMyInstallment, updateMyInstallment, deleteMyInstallment };