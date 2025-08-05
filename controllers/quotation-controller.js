const mongoose = require('mongoose');
const Quotation = require('../models/Quotation.js');
const Lead = require('../models/Lead.js');
const Project = require('../models/Project.js');
const ProjectStructure = require('../models/ProjectStructure.js');
const Projectspace = require('../models/ProjectSpace.js');
const CommentsOnQuotation = require('../models/CommentsOnQuotation.js');
const NotificationsForAll = require('../models/NotificationsForAll.js');
const NotificationArray = require('../models/NotificationArray.js');
const User = require('../models/User.js');

// New work start 

const addNewQuotation = async (req, res) => {
    try {
        let project = new Quotation(req.body);
        const resultone = await project.save();
        let quotationbID = new mongoose.Types.ObjectId(project.id)

        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        // console.log(objID);
 
        await Lead.updateOne(
            { _id: newss },
            {
                $push: {
                    quotationID: quotationbID
                }
            }
        )
        res.send(resultone);
    } catch (err) {
        res.status(500).json(err);
    }
};


// New work End 




const addNewProjectInQuotaion = async (req, res) => {
    try {
        const { leadID, quotationname } = req.body;
        let project = new Project(req.body);
        const resultone = await project.save();
        let proID = new mongoose.Types.ObjectId(project.id)

        let quotation = new Quotation({ leadID, quotationname });
        const result = await quotation.save();
        let objID = new mongoose.Types.ObjectId(quotation.id)
        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        // console.log(objID);
        await Quotation.updateOne(
            { _id: objID },
            {
                $set: {
                    projectID: proID
                }
            }
        )
        await Lead.updateOne(
            { _id: newss },
            {
                $push: {
                    quotationID: objID
                }
            }
        )
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const addNewStructureInQuotation = async (req, resp) => {
    try {
        let projectstructure = new ProjectStructure(req.body);
        const result = await projectstructure.save();
        let objID = new mongoose.Types.ObjectId(projectstructure.id)
        let newss = new mongoose.Types.ObjectId(req.body.quotationID)
        // console.log(objID);
        await Quotation.updateOne(
            { _id: newss },
            {
                $set: {
                    projectstructureID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewProjectspaceinQuatation = async (req, resp) => {
    try {
        let structure = new Projectspace(req.body);
        const result = await structure.save();
        let objID = new mongoose.Types.ObjectId(structure.id)
        let newss = new mongoose.Types.ObjectId(req.body.quotationID)
        // console.log(objID);
        await Quotation.updateOne(
            { _id: newss },
            {
                $push: {
                    projectspaceID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};


const addSelectedQuotationinLead = async (req, resp) => {
    try {
        let leadID = new mongoose.Types.ObjectId(req.body.leadID)
        let quotationID = new mongoose.Types.ObjectId(req.body.quotationID)
        // console.log(quotationID);
        await Lead.updateOne(
            { _id: leadID },
            {
                $push: {
                    quotationSelectedID: quotationID
                }
            }
        )


        const objecttosave = {
            pathtoredirect: 'QuotationListClient',
            idtogetdata: req.body.leadID,
            notificationtypeorsection: 'The lead has finalized the quotation; you can create the contract.',
            iconname: 'notebook-check',
        }
    
        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)
        const useridcheck = req.body.userID
        // console.log("useridcheck", useridcheck);
        if (useridcheck) {
            let single = await User.findOne({ _id: useridcheck })
    
            let notifiIDes = single.notificationarrayID
    
            // console.log("go", notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }







        resp.send("Success");
    } catch (err) {
        resp.status(500).json(err);
    }
};


const getQuotationWithDetails = async (req, resp) => {
    const result = await Quotation.findOne({ _id: req.params.id })
        .populate("projectID")
        .populate("projectstructureID")
        .populate({
            path: 'projectspaceID',
            populate: {
                path: 'roomsID',
                model: 'rooms'
            }
        })
        .populate("documentsID")
        .populate("commentsID")
    resp.send(result);
};


const getAllQuotationInLead = async (req, resp) => {

    try {
        const result = await Lead.findOne({ _id: req.params.id })
            .populate("quotationID")
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};


const getspaceWithRoom = async (req, resp) => {
    try {
        let single = await Project.findById({ _id: req.params.id }).populate({
            path: 'projectspaceID',
            populate: {
              path: 'roomsID',
              model: 'rooms'
            }
          });
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};








// Test start
const commentsonquatation = async (req, resp) => {
    try {
        let changeorder = new CommentsOnQuotation(req.body);
        const result = await changeorder.save();
        let objID = new mongoose.Types.ObjectId(changeorder.id)
        let newss = new mongoose.Types.ObjectId(req.body.quotationID)
        // console.log(objID);
        await Quotation.updateOne(
            { _id: newss },
            {
                $push: {
                    commentsID: objID
                }
            }
        )
        resp.send(result);
    } catch (err) {
        resp.status(500).json(err);
    }
};
// test end

const deleteQuotationOne = async (req, res) => {
    try {
        let data = await Quotation.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};



const updateQuotation = async (req, res) => {
    try {
        // console.log(req.params)
        let data = await Quotation.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};













module.exports = {
    addNewQuotation,
    addNewProjectInQuotaion,
    addNewStructureInQuotation,
    addNewProjectspaceinQuatation,
    addSelectedQuotationinLead,
    getQuotationWithDetails,
    getAllQuotationInLead,
    getspaceWithRoom,
    commentsonquatation,
    deleteQuotationOne,
    updateQuotation
};