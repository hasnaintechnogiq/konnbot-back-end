const MyInstallment = require('../models/MyInstallment.js');

const getAllMyInstallment = async (req, res) => {
    try {
        let data = await MyInstallment.find();
        res.send(data)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleInstallments = async (req, resp) => {
    try {
        let single = await MyInstallment.findOne({ _id: req.params._id });
    resp.send(single);
      } catch (err) {
       res.status(500).json(err);
   }
};

const addNewMyInstallment = async (req, res) => {
    try {
        let data = new MyInstallment(req.body);
        const result = await data.save();
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

const deleteMyInstallment = async (req, res) => {
    try {
        let data = await MyInstallment.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};
module.exports = { getAllMyInstallment, getSingleInstallments,  addNewMyInstallment, updateMyInstallment, deleteMyInstallment };