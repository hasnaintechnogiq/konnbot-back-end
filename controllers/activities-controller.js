const mongoose = require('mongoose');
const Activities = require('../models/Activities.js');
const Lead = require('../models/Lead.js');

const addNewActivities = async (req, res) => {
    try {
        let data = new Activities(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        console.log(objID);
        await Lead.updateOne(
            { _id: newss },
            {
                $push: {
                    activitiesID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};
 

const getSingleLeadactivities = async (req, resp) => {
    try {
        let single = await Lead.findById({ _id: req.params._id }).populate({
            path: 'activitiesID',
            populate: {
              path: 'subactivitiesID',
              model: 'subactivities',
              populate: [
                { path: 'subtaskID', model: 'subtask' },
                { path: 'checksID', model: 'checks' },
                { path: 'snagsID', model: 'snags' }
            ]
            //   populate: {
            //       path: 'subtaskID', 
            //       model: 'subtask' // Replace NestedModel with the actual model name
            //   }
            // Hasnain 
            }
          });
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};
 

const deleteActivities = async (req, res) => {
    try {
        let data = await Activities.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateActivities = async (req, res) => {
    try {
        console.log(req.params)
        let data = await Activities.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = { 
 
      getSingleLeadactivities,
       addNewActivities,
        updateActivities,
         deleteActivities 
        };