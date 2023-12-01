const Notification = require('../models/Notification.js');

const getAllNotification = async (req, res) => {
    try {
        let notification = await Notification.find();
        res.send(notification)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleNotification = async (req, resp) => {
    try {
        let single = await Notification.findOne({ _id: req.params._id });
        resp.send(single);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addNewNotification = async (req, res) => {
    try {
        let notification = new Notification(req.body);
        const result = await notification.save();
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateNotification = async (req, res) => {
    try {
        console.log(req.params)
        let data = await Notification.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteNotification = async (req, res) => {
    try {
        let data = await Notification.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = { getAllNotification, getSingleNotification, addNewNotification, updateNotification, deleteNotification };