const mongoose = require('mongoose');
const Snags = require('../models/Snags.js');

const updatesnags = async (req, res) => {
    console.log(req.params)
    try {
        let data = await Snags.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};


module.exports = {
updatesnags
};