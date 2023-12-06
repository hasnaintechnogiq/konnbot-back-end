const mongoose = require('mongoose');
const User = require('../models/User.js');
const Queries = require('../models/Queries.js');

const getAllQueries = async (req, res) => {
    try {
        let queries = await Queries.find().populate("kisusermh")
        res.send(queries)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleQueries = async (req, resp) => {
    try {
        let queriessingle = await Queries.find({ kisusermh: req.params._id });
        resp.send(queriessingle);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addNewQueries = async (req, res) => {
    try {
        let queries = new Queries(req.body);
        const result = await queries.save();
        let objID = new mongoose.Types.ObjectId(queries.id);
        
        console.log(req.body.email);
        await User.updateOne(
            { email: req.body.email },
            {
                $push: {
                    queriesID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateQueries = async (req, res) => {
    try {
        console.log(req.params)
        let data = await Queries.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteQueries = async (req, res) => {
    try {
        let data = await Queries.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { getAllQueries, getSingleQueries, addNewQueries, updateQueries, deleteQueries };