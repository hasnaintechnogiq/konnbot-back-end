const mongoose = require('mongoose');
const Snags = require('../models/Snags.js');
const SubActivities = require('../models/SubActivities.js');

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



const addMultiplesSnags = async (req, res) => {
    try {
        let single = await SubActivities.findById(req.body.subactivityID);

        console.log(req.body)
        async function SpriscriptinfunCall() {
            for (let i = 0; i < req.body.valuable.length; i++) {
                try {
                    const newDatanewtask = new Snags(req.body.valuable[i]);
                    const savedData = await newDatanewtask.save();

                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                    let newss = new mongoose.Types.ObjectId(req.body.subactivityID)
                    console.log(objID);
                    await SubActivities.updateOne(
                        { _id: newss },
                        {
                            $push: {
                                snagsID: objID
                            }
                        }
                    )
               
                    if (i === req.body.valuable.length - 1) {
                        res.send(single);
                    }
                    console.log('Data saved:', savedData);
                } catch (error) {
                    console.error('Error saving data:', error);
                }
            }
        }
        SpriscriptinfunCall();

   
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
updatesnags, addMultiplesSnags
};