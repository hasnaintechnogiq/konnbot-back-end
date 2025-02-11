const mongoose = require('mongoose');
const User = require('../models/User.js');
const Lead = require('../models/Lead.js');
const Project = require('../models/Project.js');

var nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pushpd2000@gmail.com',
        pass: 'fmxpxshteaasyklz'
    }
});






const getAllLeads = async (req, res) => {
    try {
        let leads = await Lead.find().populate("projectID")
        res.send(leads)
    } catch (err) {
        res.status(500).json(err);
    }
};

const getSingleLead = async (req, resp) => {
    try {
        let single = await Lead.findOne({ _id: req.params.id }).populate("userID");
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
};

const addNewLead = async (req, res) => {
    try {

        let leadCheck = await Lead.findOne({ email: req.body.email });
 
        if (leadCheck) {
            return res.send("Already");
        }
        let lead = new Lead(req.body);
        const result = await lead.save();
        let objID = new mongoose.Types.ObjectId(lead.id)
        // let newss = new mongoose.Types.ObjectId(req.body.userID)

        await User.updateOne(
            { email: req.body.email },
            {
                $set: {
                    leadID: objID
                }
            }
        )
        let single = await User.findOne({ email: req.body.email });

        const { email } = req.body;

        if (single) {
            console.log(single._id)
            await Lead.updateOne(
                { _id: objID },
                {
                    $set: {
                        userID: single._id
                    }
                }
            )
        } else if (email) {
            const mailOptions = {
                from: 'pushpd2000@gmail.com',
                to: email,
                subject: 'Sending Email using Node.js',
                text: `Project ID: ${lead.id}`
            };

            // transporter.sendMail(mailOptions, function (error, info) {
            //     if (error) {
            //         console.log(error);
            //         res.status(500).send('Error sending email');
            //     } else {
            //         console.log('Email sent: ' + info.response);
            //         res.send('Email sent successfully');
            //     }
            // });
            try {
                // Send email
                await transporter.sendMail(mailOptions);
                // return res.status(200).json({ message: 'Email sent successfully' });
            } catch (error) {
                console.error('Error sending email:', error);
                // return res.status(500).json({ error: 'Failed to send email' });
            }

        }
        res.send(result);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateLead = async (req, res) => {
    try {
        console.log(req.params)
        let data = await Lead.updateOne(
            req.params,
            { $set: req.body }
        );
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteLead = async (req, res) => {
    try {
        let data = await Lead.deleteOne(req.params);
        res.send(data);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getLeadWithProject = async (req, resp) => {
    const result = await Lead.findOne({ _id: req.params.id })
        .populate("projectstructureID")
        .populate({
            path: 'projectspaceID',
            populate: {
                path: 'roomsID',
                model: 'rooms'
            }
        })
        .populate({
            path: 'projectID',
            populate: {
                path: 'activitiesID',
                populate: {
                    path: 'subactivitiesID',
                    model: 'subactivities'
                }
            }
        })
        .populate("noticesID")
        .populate("userID")
        .populate("activitiesID")
        .populate("quotationSelectedID")
        .populate("quotationID")
    resp.send(result);
};


const getLeadWithdelays = async (req, resp) => {
    try {
        const result = await Project.findOne({ _id: req.params.id })
            .populate("delaysID")
        resp.send(result);
    } catch (error) {
        resp.status(500).json(err);
    }

};



const searchLead = async (req, resp) => {
    let result = await Lead.find({
        "$or": [
            { leadname: { $regex: req.params.key, $options: "i" } },
            { email: { $regex: req.params.key, $options: "i" } }
        ]
    });
    resp.send(result);
};


const addEngineerInLead = async (req, res) => {
    try {

        let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
        let engIDEx = new mongoose.Types.ObjectId(req.body.engID)
        await Lead.updateOne(
            { _id: leadIDEx },
            {
                $set: {
                    engineerID: engIDEx
                }
            }
        )
        res.send("Done");
    } catch (err) {
        res.status(500).json(err);
    }
};


const addManagerInLead = async (req, res) => {
    try {

        let leadIDEx = new mongoose.Types.ObjectId(req.body.leadID)
        let engIDEx = new mongoose.Types.ObjectId(req.body.maangID)
        await Lead.updateOne(
            { _id: leadIDEx },
            {
                $set: {
                    managerID: engIDEx
                }
            }
        )
        res.send("Done");
    } catch (err) {
        res.status(500).json(err);
    }
};



module.exports = { addEngineerInLead, addManagerInLead, getLeadWithdelays, searchLead, getAllLeads, getSingleLead, addNewLead, updateLead, deleteLead, getLeadWithProject };