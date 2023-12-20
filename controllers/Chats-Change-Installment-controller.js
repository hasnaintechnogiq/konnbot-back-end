const mongoose = require('mongoose');

const ChangeOrderInstallment = require('../models/ChangeOrderInstallment.js');
const Lead = require('../models/Lead.js');
const ChatsChangeInstallment = require('../models/ChatsChangeInstallment.js');


const addNewChatOrderInstallment = async (req, resp) => {
    try {
        let changeorder = new ChatsChangeInstallment(req.body);
        const result = await changeorder.save();
        let objID = new mongoose.Types.ObjectId(changeorder.id)
        let newss = new mongoose.Types.ObjectId(req.body.changeorderinstallmentid)
        console.log(objID);
        await ChangeOrderInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    chatschangeinstallmentID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const getSingleUserChatOrderInstallment = async (req, resp) => {
    try {
        let single = await ChangeOrderInstallment.findOne({ _id: req.params._id }).populate("chatschangeinstallmentID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const getAllChatOrderInstallmentDetail = async (req, res) => {
    try {
        let ChangeOrderInstallmentdata = await ChangeOrderInstallment.find().populate("leadID");
        res.send(ChangeOrderInstallmentdata)
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteChatOrderInstallment = async (req, resp) => {
    try {
        let data = await ChangeOrderInstallment.deleteOne(req.params);
        resp.send(data);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const updateChatOrderInstallmentDetail = async (req, resp) => {
    try {
        // console.log(req.params)
        let data = await ChangeOrderInstallment.updateOne(
            req.params,
            { $set: req.body }
        );
        resp.send(data);
    } catch (error) {
        resp.status(500).json(error);
    }
};

module.exports = { addNewChatOrderInstallment, getSingleUserChatOrderInstallment, getAllChatOrderInstallmentDetail, deleteChatOrderInstallment, updateChatOrderInstallmentDetail };
