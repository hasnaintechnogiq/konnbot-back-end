const mongoose = require('mongoose');
const MyInstallment = require('../models/MyInstallment.js');
const Lead = require('../models/Lead.js');
const PaidAmount = require('../models/PaidAmount.js');
const ChatInstallment = require('../models/ChatInstallment.js');
const NotificationsForAll = require('../models/NotificationsForAll.js');
const NotificationArray = require('../models/NotificationArray.js');
const User = require('../models/User.js');
const Manager = require('../models/Manager.js');

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

const getSingleUserAllInstallmentsWithPaidAmounts = async (req, resp) => {
    try {
        let single = await Lead.findOne({ _id: req.params._id }).populate({
            path: 'installmentID',
            populate: {
                path: 'paidamountID',
                model: 'paidamount'
            }
        });
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const getSingleInstallmentWithChangeOrder = async (req, resp) => {
    try {
        let single = await MyInstallment.findOne({ _id: req.params._id }).populate("changeorderinstallmentID").populate("paidamountID").populate("chatsinstallmentID")
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
        let newss = new mongoose.Types.ObjectId(req.body.leadID)

        await Lead.updateOne(
            { _id: newss },
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

        console.log('req.body', req.body)
        let productsingle = await MyInstallment.findById(req.body.installmentID);

        console.log('productsingle', productsingle)
        const updatNew = productsingle.paidamount + Number(req.body.paidamountn);

        productsingle.paidamount = updatNew;

        await productsingle.save();


        const objecttosave = {
            pathtoredirect: 'InstallmentDetails',
            idtogetdata: req.body.installmentID,
            notificationtypeorsection: 'A new paid amount is added to an installment!',
            iconname: 'account-cash-outline',
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)


        const useridcheck = req.body.userID

        if (useridcheck) {
            let single = await User.findOne({ _id: useridcheck })

            let notifiIDes = single.notificationarrayID

            console.log("go", notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }



        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};





const chatsInstallment = async (req, resp) => {
    try {
        let changeorder = new ChatInstallment(req.body);
        const result = await changeorder.save();
        let objID = new mongoose.Types.ObjectId(changeorder.id)
        let newss = new mongoose.Types.ObjectId(req.body.installmentID)
        // console.log(req.body);
        await MyInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    chatsinstallmentID: objID
                }
            }
        )

        const objecttosave = {
            pathtoredirect: 'InstallmentDetails',
            idtogetdata: req.body.installmentID,
            notificationtypeorsection: 'New Massage in Installment!',
            iconname: 'message-bulleted',
            param2userID: req.body.userID,
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        const { userID, managerID } = req.body
        console.log(userID)
        if (userID && req.body.usertype !== "user") {
            let single = await User.findOne({ _id: userID })

            let notifiIDes = single.notificationarrayID

            console.log(notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }


        const objectthree = {
            pathtoredirect: 'InstallmentDetails',
            idtogetdata: req.body.installmentID,
            notificationtypeorsection: 'New Massage in Installment!',
            iconname: 'message-bulleted',
            param2userID: req.body.userID,
        }

        let notificationthree = new NotificationsForAll(objectthree);
        const resulthreezero = await notificationthree.save();
        let objIDthree = new mongoose.Types.ObjectId(notificationthree.id)




        if (managerID) {
            let single = await Manager.findOne({ _id: managerID })

            let notifiIDes = single.notificationarrayID

            console.log(notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDthree
                    }
                }
            )
        }











        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
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

module.exports = { chatsInstallment, addPaidAmount, getSingleInstallmentWithChangeOrder, getAllInstallmentsDetalis, getSingleUserInstallments, getSingleUserAllInstallmentsWithPaidAmounts, addNewMyInstallment, updateMyInstallment, deleteMyInstallment };