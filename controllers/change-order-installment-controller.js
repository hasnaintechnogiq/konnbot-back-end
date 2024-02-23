const mongoose = require('mongoose');
const ChangeOrderInstallment = require('../models/ChangeOrderInstallment.js');
const Lead = require('../models/Lead.js');
const MyInstallment = require('../models/MyInstallment.js');


const addNewChangeOrderInstallment = async (req, resp) => {
    try {
        let changeorder = new ChangeOrderInstallment(req.body);
        const result = await changeorder.save();
        let objID = new mongoose.Types.ObjectId(changeorder.id)
        let newss = new mongoose.Types.ObjectId(req.body.installmentID)
        console.log(objID);
        await MyInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    changeorderinstallmentID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const getAllChangeOrderInstallmentDetail = async (req, res) => {
    try {
        let ChangeOrderInstallmentdata = await ChangeOrderInstallment.find().populate("leadID");
        res.send(ChangeOrderInstallmentdata)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleUserChangeOrderInstallment = async (req, resp) => {
    console.log(req.params._id)
    try {
        let single = await Lead.findOne({ _id: req.params._id }).populate("ChangeOrderInstallmentID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const deleteChangeOrderInstallment = async (req, resp) => {
    try {
        let data = await ChangeOrderInstallment.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updatechangeOrderInstallmentDetail = async (req, resp) => {
    try {
        console.log(req.params)
        let data = await ChangeOrderInstallment.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};

module.exports = { getAllChangeOrderInstallmentDetail, getSingleUserChangeOrderInstallment, deleteChangeOrderInstallment, addNewChangeOrderInstallment, updatechangeOrderInstallmentDetail };
 