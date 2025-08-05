const mongoose = require('mongoose');
const User = require('../models/User.js');
const Queries = require('../models/Queries.js');
const Queryupdates = require('../models/Queryupdates.js');
const getAllQueries = async (req, res) => {
    try {
        let queries = await Queries.find()
        res.send(queries)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getUserAllQueries = async (req, resp) => {
    try {
        let queriessingle = await Queries.find({ userIDtogo: req.params._id });
        resp.send(queriessingle);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const getSingleQuery = async (req, resp) => {
    try {
        let queriessingle = await Queries.find({ _id: req.params._id }).populate("userIDtogo")
        .populate("queryupdateID")
        resp.send(queriessingle);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addQueryUpdate = async (req, res) => {
    try {
        let queries = new Queryupdates(req.body);
        const result = await queries.save();
        let objID = new mongoose.Types.ObjectId(queries.id);
        let newss = new mongoose.Types.ObjectId(req.body.queryid)
        // console.log(req.body.email);
        await Queries.updateOne(
            { _id: newss },
            {
                $push: {
                    queryupdateID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addNewQueries = async (req, res) => {
    try {
        let queries = new Queries(req.body);
        const result = await queries.save();
        let objID = new mongoose.Types.ObjectId(queries.id);
        
        // console.log(req.body.email);
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
        // console.log(req.params)
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


module.exports = { addQueryUpdate, getAllQueries, getUserAllQueries, addNewQueries, updateQueries, deleteQueries, getSingleQuery };