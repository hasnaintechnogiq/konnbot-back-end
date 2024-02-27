const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
require("./config");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const User = require('./models/User.js');
const Engineer = require('./models/Engineer.js');
const Manager = require('./models/Manager.js');
const LeadManager = require('./models/LeadManager.js');
const Queryupdates = require('./models/Queryupdates.js');
const Admin = require('./models/Admin');
const Project = require('./models/Project');
const Queries = require('./models/Queries');
const MyInstallment = require('./models/MyInstallment.js');
const DocumentForQuotation = require('./models/DocumentForQuotation.js');
const Quotation = require('./models/Quotation.js');

const Lead = require('./models/Lead');
const ChangeOrderInstallment = require('./models/ChangeOrderInstallment.js');
const ChatsChangeInstallment = require('./models/ChatsChangeInstallment.js');
const SubActivities = require('./models/SubActivities.js');
const PhotosForSubActivities = require('./models/PhotosForSubActivities.js');
const Activities = require('./models/Activities.js');
const authenticate = require('./authenticate');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors());

const Routes = require("./routes/route.js")









const multer = require("multer");
const path = require("path");





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images');
    },
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
});

const upload = multer({ storage: storage });


app.use('/profile', express.static('upload/images'));
// Handle file upload
app.post('/add-ticket-and-upload', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const formData = req.body;

    console.log(files)


    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));


    const result = await Queries.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.kisusermh)
    console.log(objID);
    await User.updateOne(
        { _id: newss },
        {
            $push: {
                queriesID: objID
            }
        }
    )
    res.json(result);
    // res.send(imgarry);
});


















app.post('/add-images-in-change-order-upload', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        const formData = req.body;
        const result = await ChatsChangeInstallment.create({ ...formData });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.changeorderinstallmentid)
        console.log(objID);
        await ChangeOrderInstallment.updateOne(
            { _id: newss },
            {
                $push: {
                    chatschangeinstallmentID: objID
                }
            }
        )
        //  res.send(result);
        return res.send(result);
    }

    const formData = req.body;
    console.log(files)
    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));

    const result = await ChatsChangeInstallment.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.changeorderinstallmentid)
    console.log(objID);
    await ChangeOrderInstallment.updateOne(
        { _id: newss },
        {
            $push: {
                chatschangeinstallmentID: objID
            }
        }
    )
    res.send(result);
    // res.send(imgarry);
});


















// Ticket update with images start

app.post('/ticket-updates-with-images', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        const formData = req.body;
        const result = await Queryupdates.create({ ...formData });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.queryid)
        console.log(req.body.email);
        await Queries.updateOne(
            { _id: newss },
            {
                $push: {
                    queryupdateID: objID
                }
            }
        )

        return res.send(result);
    }

    const formData = req.body;
    console.log(files)
    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));

    const result = await Queryupdates.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.queryid)
    console.log(req.body.email);
    await Queries.updateOne(
        { _id: newss },
        {
            $push: {
                queryupdateID: objID
            }
        }
    )
    res.send(result);
    // res.send(imgarry);
});


// Ticket update with images end




// Upload images for sub task start

app.post('/upload-images-for-sub-task', upload.array('images', 3), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(files)

    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbotbackend.onrender.com/profile/${file.filename}`
    }));


    const result = await PhotosForSubActivities.create({ imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.subactivityID)
    console.log(objID);
    await SubActivities.updateOne(
        { _id: newss },
        {
            $push: {
                imagesID: objID
            }
        }
    )
    res.json(result);
});


// Upload images for sub task end




// app.use('/documents', express.static('uploads'));
// upload documents for Quotation
app.post('/upload-documents', upload.single('document'), async (req, res) => {
    const formData = req.body;
    console.log(formData)
    try {
      const { originalname, size, mimetype, filename } = req.file;
      const newDocument = new DocumentForQuotation({
        name: originalname,
        uri: filename,
        type: mimetype,
        size: size
      });
  
      const result =  await newDocument.save();

      let objID = new mongoose.Types.ObjectId(result.id);
      let newss = new mongoose.Types.ObjectId(req.body.QuotationID)
      console.log(objID);
      await Quotation.updateOne(
          { _id: newss },
          {
              $push: {
                documentsID: objID
              }
          }
      )
 

      
      res.json({ message: 'Document uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading document' });
    }
});




























// api for add all activities start
app.post("/add-all-activities", async (req, resp) => {


    const dataArray = [
        { categoryname: 'Footing', leadID: req.body.leadID },
        { categoryname: 'Plinth', leadID: req.body.leadID },
        { categoryname: 'RCC Work', leadID: req.body.leadID },
        { categoryname: 'Brick Work', leadID: req.body.leadID },
        { categoryname: 'Electrical', leadID: req.body.leadID },
        { categoryname: 'Plumbing', leadID: req.body.leadID },
        { categoryname: 'Plaster', leadID: req.body.leadID },
        { categoryname: 'Other Interior', leadID: req.body.leadID },
        { categoryname: 'Door & Window', leadID: req.body.leadID },
        { categoryname: 'Flooring', leadID: req.body.leadID },
        { categoryname: 'Paint & Finishes', leadID: req.body.leadID },
        { categoryname: 'Miscellenous', leadID: req.body.leadID },
    ];



    async function saveDataSequentially() {
        for (let i = 0; i < dataArray.length; i++) {
            try {
                const newData = new Activities(dataArray[i]);
                const savedData = await newData.save();
                let objID = new mongoose.Types.ObjectId(newData.id)
                let newss = new mongoose.Types.ObjectId(req.body.leadID)


                if (newData.categoryname === "Footing") {

                    const dataArranew = [
                        { subactivityname: 'Site Clearance', activityID: newData._id },
                        { subactivityname: 'Layout & Leveling', activityID: newData._id },
                        { subactivityname: 'Excavation', activityID: newData._id },
                        { subactivityname: 'P.C.C Work', activityID: newData._id },
                        { subactivityname: 'R.C.C Footing', activityID: newData._id },
                        { subactivityname: 'R.C.C Pedestal', activityID: newData._id },
                        { subactivityname: 'Back Filling', activityID: newData._id },

                    ];

                    async function saveDatanew() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    saveDatanew();
                }

                if (newData.categoryname === "Plinth") {

                    const dataArranew = [
                        { subactivityname: 'R.C.C Plinth', activityID: newData._id },
                        { subactivityname: 'Sewage Line', activityID: newData._id },
                        { subactivityname: 'Filling + Ramming', activityID: newData._id },
                        { subactivityname: 'Anti - Termite', activityID: newData._id },
                        { subactivityname: 'R.C.C Grade Slab', activityID: newData._id },
                    ];

                    async function plinthCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    plinthCalling();
                }

                if (newData.categoryname === "RCC Work") {

                    const dataArranew = [
                        { subactivityname: 'GF R.C.C Column', activityID: newData._id },
                        { subactivityname: 'GF R.C.C Slab + Staircase', activityID: newData._id },
                        { subactivityname: 'FF R.C.C Column', activityID: newData._id },
                        { subactivityname: 'FF R.C.C Slab + Staircase', activityID: newData._id },
                        { subactivityname: 'SF R.C.C Column', activityID: newData._id },
                        { subactivityname: 'SF R.C.C Slab + Staircase', activityID: newData._id },
                        { subactivityname: 'TF R.C.C Column', activityID: newData._id },
                        { subactivityname: 'TF R.C.C Slab + Staircase', activityID: newData._id },
                        { subactivityname: 'FF R.C.C Column', activityID: newData._id },
                        { subactivityname: 'FF R.C.C Slab + Staircase', activityID: newData._id },
                        { subactivityname: 'Tower R.C.C Column + Slab', activityID: newData._id },
                    ];

                    async function rccCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    rccCalling();
                }



                if (newData.categoryname === "Brick Work") {

                    const dataArranew = [
                        { subactivityname: 'GF Masonry', activityID: newData._id },
                        { subactivityname: 'FF Masonry', activityID: newData._id },
                        { subactivityname: 'SF Masonry', activityID: newData._id },
                        { subactivityname: 'TF Masonry', activityID: newData._id },
                        { subactivityname: 'FF Masonry', activityID: newData._id },
                        { subactivityname: 'Tower Masonry', activityID: newData._id },
                    ];

                    async function brickCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    brickCalling();
                }



                if (newData.categoryname === "Electrical") {

                    const dataArranew = [
                        { subactivityname: 'GF Electrical', activityID: newData._id },
                        { subactivityname: 'FF Electrical', activityID: newData._id },
                        { subactivityname: 'SF Electrical', activityID: newData._id },
                        { subactivityname: 'TF Electrical', activityID: newData._id },
                        { subactivityname: 'FF Electrical', activityID: newData._id },
                        { subactivityname: 'Tower Electrical', activityID: newData._id },
                        { subactivityname: 'Elevation Electrical', activityID: newData._id },
                        { subactivityname: 'Wiring', activityID: newData._id },
                        { subactivityname: 'Switch & Socket', activityID: newData._id },
                    ];

                    async function electricalCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    electricalCalling();
                }


                if (newData.categoryname === "Plumbing") {

                    const dataArranew = [
                        { subactivityname: 'Toilet - Floor', activityID: newData._id },
                        { subactivityname: 'Toilet - Wall', activityID: newData._id },
                        { subactivityname: 'Kitchen Pipeline', activityID: newData._id },
                        { subactivityname: 'Vertical', activityID: newData._id },
                        { subactivityname: 'A.C', activityID: newData._id },
                        { subactivityname: 'Other Fitting', activityID: newData._id },
                        { subactivityname: 'Sanitary Toilets', activityID: newData._id },
                        { subactivityname: 'Sanitary Kitchen', activityID: newData._id },
                    ];

                    async function plumbingCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    plumbingCalling();
                }



                if (newData.categoryname === "Plaster") {
                    const dataArranew = [
                        { subactivityname: 'GF Plaster', activityID: newData._id },
                        { subactivityname: 'FF Plaster', activityID: newData._id },
                        { subactivityname: 'SF Plaster', activityID: newData._id },
                        { subactivityname: 'TF Plaster', activityID: newData._id },
                        { subactivityname: 'FF Plaster', activityID: newData._id },
                        { subactivityname: 'Tower Plaster', activityID: newData._id },
                        { subactivityname: 'Elevation Plaster', activityID: newData._id },
                    ];

                    async function plasterCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    plasterCalling();
                }



                if (newData.categoryname === "Other Interior") {
                    const dataArranew = [
                        { subactivityname: 'P.O.P Frame', activityID: newData._id },
                        { subactivityname: 'P.O.P Putty', activityID: newData._id },
                        { subactivityname: 'P.O.P Lights', activityID: newData._id },
                        { subactivityname: 'External Electrical', activityID: newData._id },
                        { subactivityname: 'Internal Wall Tile', activityID: newData._id },
                        { subactivityname: 'Changes in Points', activityID: newData._id },
                        { subactivityname: 'Washroom Design', activityID: newData._id },
                    ];

                    async function otherinteririorCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    otherinteririorCalling();
                }



                if (newData.categoryname === "Door & Window") {
                    const dataArranew = [
                        { subactivityname: 'GF Door & Window', activityID: newData._id },
                        { subactivityname: 'FF Door & Window', activityID: newData._id },
                        { subactivityname: 'SF Door & Window', activityID: newData._id },
                        { subactivityname: 'TF Door & Window', activityID: newData._id },
                        { subactivityname: 'FF Door & Window', activityID: newData._id },
                        { subactivityname: 'Towe Door & Window', activityID: newData._id },
                    ];

                    async function doorandwindowCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    doorandwindowCalling();
                }



                if (newData.categoryname === "Flooring") {
                    const dataArranew = [
                        { subactivityname: 'Toilet Wall Flooring', activityID: newData._id },
                        { subactivityname: 'Kitchen', activityID: newData._id },
                        { subactivityname: 'GF Flooring', activityID: newData._id },
                        { subactivityname: 'FF Flooring', activityID: newData._id },
                        { subactivityname: 'SF Flooring', activityID: newData._id },
                        { subactivityname: 'TF Flooring', activityID: newData._id },
                        { subactivityname: 'FF Flooring', activityID: newData._id },
                        { subactivityname: 'Tower Flooring', activityID: newData._id },
                        { subactivityname: 'Terrace Flooring', activityID: newData._id },
                        { subactivityname: 'Staircase', activityID: newData._id },
                    ];

                    async function flooringCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    flooringCalling();
                }


                if (newData.categoryname === "Paint & Finishes") {
                    const dataArranew = [
                        { subactivityname: 'White Wash', activityID: newData._id },
                        { subactivityname: 'GF Paint', activityID: newData._id },
                        { subactivityname: 'FF Paint', activityID: newData._id },
                        { subactivityname: 'SF Paint', activityID: newData._id },
                        { subactivityname: 'TF Paint', activityID: newData._id },
                        { subactivityname: 'FF Paint', activityID: newData._id },
                        { subactivityname: 'Tower Paint', activityID: newData._id },
                        { subactivityname: 'External & Elevation Paint', activityID: newData._id },
                    ];

                    async function paintCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    paintCalling();
                }



                if (newData.categoryname === "Miscellenous") {
                    const dataArranew = [
                        { subactivityname: 'M.S Work', activityID: newData._id },
                        { subactivityname: 'Main Gate', activityID: newData._id },
                        { subactivityname: 'Ramp & Other Work', activityID: newData._id },
                        { subactivityname: 'Electrical Check', activityID: newData._id },
                        { subactivityname: 'Plumbing Check', activityID: newData._id },
                        { subactivityname: 'Flooring Check', activityID: newData._id },
                        { subactivityname: 'Paint Check', activityID: newData._id },
                    ];

                    async function miscellenousCalling() {
                        for (let i = 0; i < dataArranew.length; i++) {
                            try {
                                const newDatanew = new SubActivities(dataArranew[i]);
                                const savedData = await newDatanew.save();

                                let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                let newss = new mongoose.Types.ObjectId(newData._id)
                                console.log(objID);
                                await Activities.updateOne(
                                    { _id: newss },
                                    {
                                        $push: {
                                            subactivitiesID: objID
                                        }
                                    }
                                )
                                console.log('Data saved:', savedData);
                            } catch (error) {
                                console.error('Error saving data:', error);
                            }
                        }
                    }
                    miscellenousCalling();
                }


                await Lead.updateOne(
                    { _id: newss },
                    {
                        $push: {
                            activitiesID: objID
                        }
                    }
                )

                // console.log('Data saved:', savedData);
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
    }
    saveDataSequentially();
});
// api for add-all-activities end









// Create Installments start
app.post("/add-all-installlments", async (req, resp) => {

    const dataArray = [
        { installmentnum: '1st', installmenttype: 'Footing', leadID: req.body.leadID },
        { installmentnum: '2nd', installmenttype: 'Plinth', leadID: req.body.leadID },
        { installmentnum: '3rd', installmenttype: 'RCC Work', leadID: req.body.leadID },
        { installmentnum: '4th', installmenttype: 'Brick Work', leadID: req.body.leadID },
        { installmentnum: '5th', installmenttype: 'Electrical', leadID: req.body.leadID },
        { installmentnum: '6th', installmenttype: 'Plumbing', leadID: req.body.leadID },
        { installmentnum: '7th', installmenttype: 'Plaster', leadID: req.body.leadID },
        { installmentnum: '8th', installmenttype: 'Other Interior', leadID: req.body.leadID },
        { installmentnum: '9th', installmenttype: 'Door & Window', leadID: req.body.leadID },
        { installmentnum: '10th', installmenttype: 'Flooring', leadID: req.body.leadID },
        { installmentnum: '11th', installmenttype: 'Paint & Finishes', leadID: req.body.leadID },
        { installmentnum: '12th', installmenttype: 'Miscellenous', leadID: req.body.leadID },
    ];


    async function saveDataSeq() {
        for (let i = 0; i < dataArray.length; i++) {
            try {
                const newData = new MyInstallment(dataArray[i]);
                const savedData = await newData.save();
                let objID = new mongoose.Types.ObjectId(newData.id)
                let newss = new mongoose.Types.ObjectId(req.body.leadID)

                await Lead.updateOne(
                    { _id: newss },
                    {
                        $push: {
                            installmentID: objID
                        }
                    }
                )
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
    }
    saveDataSeq();
});
// Create Installments End

















































































app.post("/register", async (req, resp) => {
    let data = new User(req.body);
    const result = await data.save();
    resp.send(result);
});

app.post("/login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await User.findOne(req.body).select("-password")
        if (user) {
            const token = await user.generateAuthToken();
            console.log(token);
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});







app.post("/engineer-login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await Engineer.findOne(req.body).select("-password")
        if (user) {
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});




app.post("/manager-login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await Manager.findOne(req.body).select("-password")
        if (user) {
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});



app.post("/lead-manager-login", async (req, resp) => {
    if (req.body.email && req.body.password) {
        let user = await LeadManager.findOne(req.body).select("-password")
        if (user) {
            resp.send(user);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});










app.post("/admin-register", async (req, resp) => {
    let data = new Admin(req.body);
    const result = await data.save();
    resp.send(result);
});

app.post("/admin-login", async (req, resp) => {
    if (req.body.name && req.body.password) {
        let admin = await Admin.findOne(req.body).select("-password")
        if (admin) {
            // const token = await admin.generateAuthToken();
            // console.log(token);
            resp.send(admin);
        } else { resp.send("no data found") }
    } else { resp.send("enter email and pass") }
});

app.post("/add-product", async (req, resp) => {
    let products = new Product(req.body);
    const result = await products.save();
    resp.send(result);
});

app.get("/get-product",
    //  authenticate , 
    async (req, resp) => {
        let products = await Product.find();
        // const result = await products.save();
        resp.send(products);
    });

app.delete("/delete-product/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
})

app.get("/get-single-product/:id", async (req, resp) => {
    let productsingle = await Product.findOne({ _id: req.params.id });
    // const result = await products.save();
    resp.send(productsingle);
});

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    );
    resp.send(data);
})


// Multiple field pe search karne k liye

// app.get("/search/:key", async (req, resp) => {
//     let result = await Lead.find({
//         "$or": [
//             { leadname: { $regex: req.params.key, $options: "i" } },
//             { email: { $regex: req.params.key, $options: "i"  } }
//         ]
//     });
//     resp.send(result);
// });

// Poulate Start

// Ye post karna hai postman ki body m queries ki id 
// {
//     "queriesid": "6553b7f2ebd796437e57b84b"
// }
// or url me user ki id 

app.put("/add-queries-in-user/:id", async (req, resp) => {
    const result = await User.findByIdAndUpdate(req.params.id, { $push: { queriesID: req.body.queriesid } });
    resp.send(result);
});


// get user with queries

// Ye post karna hai postman ki body m user ki id 
// {
//     "user_id": "6553b7f2ebd796437e57b84b"
// }

// app.get("/get-user-with-queries", async (req, resp) => {
//     const result = await User.findOne(
//         { _id: req.body.user_id }).populate({
//             path: 'queriesID',
//                 modal: 'users'
//             });;
//     resp.send(result);
// });



// Poulate End































app.use('/', Routes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})