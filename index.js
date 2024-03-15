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
const Checks = require('./models/Checks.js');
const Lead = require('./models/Lead');
const ChangeOrderInstallment = require('./models/ChangeOrderInstallment.js');
const ChatsChangeInstallment = require('./models/ChatsChangeInstallment.js');
const SubActivities = require('./models/SubActivities.js');
const Subtask = require('./models/SubTaskForSubactivities.js');
const PhotosForSubActivities = require('./models/PhotosForSubActivities.js');
const Activities = require('./models/Activities.js');
const NotificationsForAll = require('./models/NotificationsForAll.js');
const NotificationArray = require('./models/NotificationArray.js');
const Delays = require('./models/Delays.js');










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

        const objecttosave = {
            pathtoredirect: 'ChangeOrder',
            idtogetdata: req.body.changeorderinstallmentid,
            notificationtypeorsection: 'New Massage in Change Order!',
            iconname: 'message-text-clock',
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        const useridcheck = req.body.userID

        if(useridcheck){
            let single = await User.findOne({ _id: useridcheck })

            let notifiIDes = single.notificationarrayID

            console.log("go", notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }

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

    const objecttosave = {
        pathtoredirect: 'ChangeOrder',
        idtogetdata: req.body.changeorderinstallmentid,
        notificationtypeorsection: 'New Massage in Change Order!',
        iconname: 'message-text-clock',
    }

    let notificationall = new NotificationsForAll(objecttosave);
    const resultnew = await notificationall.save();
    let objIDnew = new mongoose.Types.ObjectId(notificationall.id)
    const useridcheck = req.body.userID

    if(useridcheck){
        let single = await User.findOne({ _id: useridcheck })

        let notifiIDes = single.notificationarrayID

        console.log("go", notifiIDes);
        await NotificationArray.updateOne(
            { _id: notifiIDes },
            {
                $push: {
                    notificationsforallID: objIDnew
                }
            }
        )
    }
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


        const objecttosave = {
            pathtoredirect: 'TicketDetails',
            idtogetdata: req.body.queryid,
            notificationtypeorsection: 'New Massage in Ticket!',
            iconname: 'facebook-messenger',
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        
        const useridcheck = req.body.userID

        if(useridcheck){
            let single = await User.findOne({ _id: useridcheck })

            let notifiIDes = single.notificationarrayID

            console.log("go", notifiIDes);
            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }









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


    const objecttosave = {
        pathtoredirect: 'TicketDetails',
        idtogetdata: req.body.queryid,
        notificationtypeorsection: 'New Massage in Ticket!',
        iconname: 'facebook-messenger',
    }

    let notificationall = new NotificationsForAll(objecttosave);
    const resultnew = await notificationall.save();
    let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

    
    const useridcheck = req.body.userID

    if(useridcheck){
        let single = await User.findOne({ _id: useridcheck })

        let notifiIDes = single.notificationarrayID

        console.log("go", notifiIDes);
        await NotificationArray.updateOne(
            { _id: notifiIDes },
            {
                $push: {
                    notificationsforallID: objIDnew
                }
            }
        )
    }






    res.send(result);
    // res.send(imgarry);
});


// Ticket update with images end








// add delay with images start

app.post('/add-delay-with-images', upload.array('images', 5), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        const formData = req.body;
        const result = await Delays.create({ ...formData });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.leadID)
        // console.log(req.body.email);
        await Lead.updateOne(
            { _id: newss },
            {
                $push: {
                    delaysID: objID
                }
            }
        )


        // const objecttosave = {
        //     pathtoredirect: 'TicketDetails',
        //     idtogetdata: req.body.queryid,
        //     notificationtypeorsection: 'New Massage in Ticket!',
        //     iconname: 'facebook-messenger',
        // }

        // let notificationall = new NotificationsForAll(objecttosave);
        // const resultnew = await notificationall.save();
        // let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        
        // const useridcheck = req.body.userID

        // if(useridcheck){
        //     let single = await User.findOne({ _id: useridcheck })

        //     let notifiIDes = single.notificationarrayID

        //     console.log("go", notifiIDes);
        //     await NotificationArray.updateOne(
        //         { _id: notifiIDes },
        //         {
        //             $push: {
        //                 notificationsforallID: objIDnew
        //             }
        //         }
        //     )
        // }

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

    const result = await Delays.create({ ...formData, imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.leadID)
    // console.log(req.body.email);
    await Lead.updateOne(
        { _id: newss },
        {
            $push: {
                delaysID: objID
            }
        }
    )


    // const objecttosave = {
    //     pathtoredirect: 'TicketDetails',
    //     idtogetdata: req.body.queryid,
    //     notificationtypeorsection: 'New Massage in Ticket!',
    //     iconname: 'facebook-messenger',
    // }

    // let notificationall = new NotificationsForAll(objecttosave);
    // const resultnew = await notificationall.save();
    // let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

    
    // const useridcheck = req.body.userID

    // if(useridcheck){
    //     let single = await User.findOne({ _id: useridcheck })

    //     let notifiIDes = single.notificationarrayID

    //     console.log("go", notifiIDes);
    //     await NotificationArray.updateOne(
    //         { _id: notifiIDes },
    //         {
    //             $push: {
    //                 notificationsforallID: objIDnew
    //             }
    //         }
    //     )
    // }

    res.send(result);
    // res.send(imgarry);
});


// Add delay with images end





























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

        const result = await newDocument.save();

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
                        { subactivityname: 'Site Visit', activityID: newData._id },
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



                                if (newDatanew.subactivityname === "Site Visit") {

                                    const dataArranew = [
                                        { subtaskdescription: 'Site location - Geo Locationn | Address' },
                                        { subtaskdescription: 'Clients Name and Contact No.' },
                                        { subtaskdescription: 'Project ID' },
                                        { subtaskdescription: 'Click the photos of Site for the references Front side,Back side and sideways' },
                                        { subtaskdescription: 'Does this structure/boundary needs to be demolished' },
                                        { subtaskdescription: 'Mark the details of all four adjacent sides of the plot' },
                                        { subtaskdescription: 'Does the site has connected roads' },
                                        { subtaskdescription: 'The society and neighbours to be informed about the start of the Work and the permission to be taken for the material procurement' },
                                        { subtaskdescription: 'If any issue with the neighbours then inform the Client and Client will have to manage it' },
                                        { subtaskdescription: 'In terms of electricity, How many days it will take to come electricity on site.' },
                                        { subtaskdescription: 'Who is pursuing the Electrical Work' },
                                        { subtaskdescription: 'If borewell than in working condition or motor installation is remaining' },
                                        { subtaskdescription: 'How many days needed for working borewell from Client ends' },
                                        { subtaskdescription: 'If society is giving the connection, timing for the water available on site' },
                                        { subtaskdescription: 'If Society is providing the water than, we need the Plastic Water Tank, for water storage.' },
                                        { subtaskdescription: 'In case of Drain on going in front of plot, Client have to make sure that it is covered, by some good material so that while excavation or construction, It should not get blocked' },
                                        { subtaskdescription: 'Informed about the Extra Cable Length for smooth Ongoing of the Work to client.' },
                                        { subtaskdescription: 'If feasible, then take the dimension of the plot, for the discussion purpose are as per the Drawings. If any changes then mark and write it.' },
                                        { subtaskdescription: 'If there is any changes, Please Inform to the Client on the spot to mention it & take the outer points in front of him.' },
                                        { subtaskdescription: 'In not agreed by the Client, which process we are taking' },
                                        { subtaskdescription: 'Type of Soil present on the Top Surface of the Plot' },
                                        { subtaskdescription: 'If you find any site, nearby to it, then please ask them the type of footing they have & the depth of hard strata' },
                                        { subtaskdescription: 'Possible Excavation Type' },
                                        { subtaskdescription: 'Possible Excavation Process' },
                                        { subtaskdescription: 'Did you have the form which consists Site Handover Work from the client end to KONNBOT & undertaking that the outer points are given by the Client and conforming it.' },
                                    ];

                                    async function sitevisitcallnow() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Subtask(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            subtaskID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    sitevisitcallnow();
                                }










                                if (newDatanew.subactivityname === "Site Visit") {

                                    const dataArranew = [
                                        { checksdescription: 'Measuring tape (30m)' },
                                        { checksdescription: 'Is there any existing structure/Boundary.' },
                                        { checksdescription: 'Is there a tree inside the site boundary or away from the site boundary but it can interrupt the working' },
                                        { checksdescription: 'Can the vehicles easily move along the site for material supply' },
                                        { checksdescription: 'Is there a proper place form the placement of the material' },
                                        { checksdescription: 'Is there a place for the security person' },
                                        { checksdescription: 'Is there a public toilet nearby for the security person' },
                                        { checksdescription: 'Is the electric pole nearby the site' },
                                        { checksdescription: 'Has the electrictity connection been taken' },
                                        { checksdescription: 'Temporary Placement position for providing the meter on Site, is informed & structure needed to put it. Do we inform the client' },
                                        { checksdescription: 'Provision that, no cable should be harmed for that particular precaution are taken, Please check the Rule Book for It.' },
                                        { checksdescription: 'If there is anything (Electrical Wires, Septic tank, Sewer line or others) Informed to client that they should ask the society for the information.' },
                                        { checksdescription: 'Ask client to show the Sewer Line + Main Hole near plot, whereas if not available then construction of septic tank is to be considered' },
                                        { checksdescription: 'Water connection availability' },
                                    ];

                                    async function sitevisitcallnowChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    sitevisitcallnowChacks();
                                }
























                                if (newDatanew.subactivityname === "Site Clearance") {

                                    const dataArranew = [
                                        { subtaskdescription: 'Who is assigned to do Site Clearance Work' },
                                        { subtaskdescription: 'Did you Finalize the JCB / Labour for the work + Dumper to dump outside.' },
                                        { subtaskdescription: 'Search also for the near by dump yard or ask the JCB person to find it by their own' },
                                        { subtaskdescription: 'How much deep you are going down while clearing ( in inches)' },
                                        { subtaskdescription: 'Schedule Date for Clearing the Site & Dumping Nearby' },
                                        { subtaskdescription: 'After clearing the site, the difference in the level from road to site ground level. (in inches)' },
                                    ];

                                    async function siteClearanceCallingnow() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Subtask(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            subtaskID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    siteClearanceCallingnow();
                                }










                                if (newDatanew.subactivityname === "Site Clearance") {

                                    const dataArranew = [
                                        { checksdescription: 'Does the site need to be cleared' },
                                        { checksdescription: 'Does it require a JCB for cleaning or it can be done by the labour.' },
                                        { checksdescription: 'If by any chance we have tree or any other important things on site, than client will handel this issue by his own, KONNBOT wont interfere in any matter.' },
                                        { checksdescription: 'After the site clearance the adjacent roads to be cleaned so that there is no objection from the neighbours' },
                                    ];

                                    async function siteclearancesChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    siteclearancesChacks();
                                }




















                                if (newDatanew.subactivityname === "Layout & Leveling") {

                                    const dataArranew = [
                                        { subtaskdescription: 'Soil investigation report is kept in the site, if not then as per the site analysis and near by plot condition.' },
                                        { subtaskdescription: 'Mark the corners of the plot and make a bhurji.' },
                                        { subtaskdescription: 'Check the diagonal of the site.' },
                                        { subtaskdescription: 'If the diagonals are OK then proceed with the layout.' },
                                        { subtaskdescription: 'If the diagonals are varying then discuss with the engineer in charge.' },
                                        { subtaskdescription: 'After confirmation of the diagonals go ahead with the grid marking on the plot.' },
                                        { subtaskdescription: 'After marking the grid on the site, Check through all the sides for final confirmation as per Drawing.' },
                                        { subtaskdescription: 'If any side of building is there, mark the Horizontal Level on it, as per that decide the benchmark height.' },
                                        { subtaskdescription: 'If isolated, mark the Footing Size with 4" cover on every side.' },
                                        { subtaskdescription: 'If piling then, Pile Cap Shape Cage for fabrication work.' },
                                        { subtaskdescription: 'Mark the pile Cap, inside the pile cap Piles marked.' },
                                    ];

                                    async function layoutAndLevellingCall() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Subtask(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            subtaskID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    layoutAndLevellingCall();
                                }















                                if (newDatanew.subactivityname === "Layout & Leveling") {

                                    const dataArranew = [
                                        { checksdescription: 'Is the site clean for the layout' },
                                        { checksdescription: 'Are the instruments and materials required for the layout present in the site' },
                                        { checksdescription: 'Are the boudary of the plot fixed' },
                                        { checksdescription: 'Approved Architectural drawings are kept in the site' },
                                        { checksdescription: 'Approved Structural drawings are kept in the site.' },
                                        { checksdescription: 'Structural grid line and architectural grid lines are checked properly.' },
                                        { checksdescription: 'Identify the type of footing from the drawing' },
                                        { checksdescription: 'Foundations of edge columns does not exceed the property line' },
                                        { checksdescription: 'Once the layout has been finalised the Client should be informed about the site boundaries so that there is no issue with the neighbours plot' },
                                    ];

                                    async function layoutandlevelingsdChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    layoutandlevelingsdChacks();
                                }





































                                if (newDatanew.subactivityname === "Excavation") {

                                    const dataArranew = [
                                        { subtaskdescription: 'RL of benchmark is present at the site.' },
                                        { subtaskdescription: 'Precaution plans are made to mitigate the risk of any failure of adjacent building/ structures due to excavation.' },
                                        { subtaskdescription: 'Column grid lines are stable (not dislocated) during earth cutting.' },
                                        { subtaskdescription: 'Mode of excavation.' },
                                        { subtaskdescription: 'Method of excavation.' },
                                        { subtaskdescription: 'If the excavation is to be done by JCB then confirm the sequence of excavation of footing.' },
                                        { subtaskdescription: 'Approval from the Neighbour or Society to put the Soil Outside the Plot or Informed Client.' },
                                        { subtaskdescription: 'If during excavation of footing the neighbour footing is coming on our plot then inform the client and the Neighbour and the required step to be taken' },
                                        { subtaskdescription: 'If any services are passing through the plot then the society should be informed to take the required step' },
                                        { subtaskdescription: 'Pile lifting position is painted and marked.' },
                                    ];

                                    async function layoutAndLevellingCall() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Subtask(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            subtaskID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    layoutAndLevellingCall();
                                }







                                if (newDatanew.subactivityname === "Excavation") {

                                    const dataArranew = [
                                        { checksdescription: 'Whether the layout has been done and Checked by the Client' },
                                        { checksdescription: 'Depth of cutting is finalized with repect to Reduced level.' },
                                        { checksdescription: 'Excavation is executed to the target depth.' },
                                        { checksdescription: 'Foundation bed is properly compacted and leveled' },
                                        { checksdescription: 'Any objectionable object in foundation bed is removed.' },
                                        { checksdescription: 'Are the footings at the same level' },
                                        { checksdescription: 'Proper way for movement of the labours' },
                                        { checksdescription: 'It should be confirmed that Foundations of edge columns does not exceed the property line' },
                                        { checksdescription: 'Level of Pile Top is fixed as per design instruction.' },
                                        { checksdescription: 'Pile driving position is Correctly marked on the site.' },
                                        { checksdescription: 'Pile driving is truely vertical.' },
                                        { checksdescription: 'Column position is set at center of all pile groups' },
                                    ];

                                    async function ExcavationnewChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    ExcavationnewChacks();
                                }






                                if (newDatanew.subactivityname === "P.C.C Work") {

                                    const dataArranew = [
                                        { checksdescription: 'Check surface preparation.' },
                                        { checksdescription: 'Check marking and levels to be done with respect to drawing.' },
                                        { checksdescription: 'Check for form work.' },
                                        { checksdescription: 'Check for finished level.' },
                                        { checksdescription: 'Check for mixing of cement, sand and aggregate and adequate material.' },
                                        { checksdescription: 'Check for pouring height.' },
                                        { checksdescription: 'Do not allow extra cement mortar on top of PCC for smooth finishing.' },
                                        { checksdescription: 'Check for ramming with proper tools.' },
                                        { checksdescription: 'Check for bottom marking for PCC thickness.' },
                                        { checksdescription: 'Proper marking of the centreline has been done as per the drawing' },
                                    ];

                                    async function pccworkchChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    pccworkchChacks();
                                }








                                if (newDatanew.subactivityname === "R.C.C Footing") {

                                    const dataArranew = [
                                        { checksdescription: 'Check whether the proper placement of the reinforment has been done' },
                                        { checksdescription: 'Proper shuttering has been provided' },
                                        { checksdescription: 'Proper cover to be provided for the footing' },
                                        { checksdescription: 'The contractor is present at the time of concreting' },
                                        { checksdescription: 'The ratio of concrete is as per the drawing' },
                                        { checksdescription: 'Footing Vibrator for every 6" - 8" of Layer & Make sure regarding the Vibrator running time, as per site' },
                                        { checksdescription: 'Concrete filled evenly upto required level' },
                                        { checksdescription: 'Concrete not dropped from height greater than 1.5 - 1.8 m and thrown at distance greater than 2m' },
                                        { checksdescription: 'Concrete filling should be continuous, for every footing, No Break in between or Mixer Break' },
                                        { checksdescription: 'Proper levelling of concrete has been done' },
                                        { checksdescription: 'Concreting has been done upto the required depth' },
                                        { checksdescription: 'Proper compaction has been done and no Bleeding or Segregation occurs' },
                                        { checksdescription: 'Shuttering to be removed properly' },
                                        { checksdescription: 'Proper curing should be done' },
                                    ];

                                    async function rccworkchChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    rccworkchChacks();
                                }
















                                if (newDatanew.subactivityname === "R.C.C Pedestal") {

                                    const dataArranew = [
                                        { checksdescription: 'Plotting of gridline for center of column above plinth / floor slab.' },
                                        { checksdescription: 'Locating & marking the centers of columns.' },
                                        { checksdescription: 'Binding & placing column reinforcement above upper floor slab as per required height, considering lap length of the bar.' },
                                        { checksdescription: 'Column reinforcement & its arrangement as per drawing.' },
                                        { checksdescription: 'Ring spacing & their arrangement as per R.C.C. drawings.' },
                                        { checksdescription: 'Proper binding of reinforcement with binding wire.' },
                                        { checksdescription: 'Fixing of concrete or P.V.C. cover blocks to reinforcement.' },
                                        { checksdescription: 'The quality of shuttering before placing.' },
                                        { checksdescription: 'Applying deshuttering oil to plywood shuttering.' },
                                        { checksdescription: 'Fixing M.S.clamps (shinkanjas) at every 0.6 m (2’0") internal.' },
                                        { checksdescription: 'Stiffness of side supports to have formwork in plumb.' },
                                        { checksdescription: 'Size as per drawing.' },
                                        { checksdescription: 'Diagonals as required.' },
                                        { checksdescription: 'Oiling of shuttering.' },
                                        { checksdescription: 'Plumb on both sides.' },
                                        { checksdescription: 'Line of columns as desired.' },
                                        { checksdescription: 'Sufficient Marking level up to which concreting to be done.' },
                                        { checksdescription: 'Supports.' },
                                        { checksdescription: 'Reinforcement cover provided.' },
                                        { checksdescription: 'Spacing of reinforcement above concrete level, maintained as required.' },
                                        { checksdescription: 'Proper filling of gaps from outside by soil paste.' },
                                        { checksdescription: 'Quality of materials of concrete.' },
                                        { checksdescription: 'The proportion & mixing of material.' },
                                        { checksdescription: 'Six cube mould are kept ready to cast cubes from different batches.' },
                                        { checksdescription: 'Controlled water cement ratio.' },
                                        { checksdescription: 'Availability of vibrator or labour for tamping.' },
                                        { checksdescription: 'Proper cover after concreting on top level.' },
                                        { checksdescription: 'Casting of concrete cubes as required.' },
                                        { checksdescription: 'Proper numbering on cubes.' },
                                        { checksdescription: 'Fill joints if slurry flows from anywhere.' },
                                        { checksdescription: 'Maintain required concrete level.' },
                                        { checksdescription: 'Cleaning of mixing platform.' },
                                        { checksdescription: 'Deshuttering of columns after 24 hrs-48 hrs.' },
                                        { checksdescription: 'Submission of the deshuttering report to higher authority.' },
                                        { checksdescription: 'Finishing of honey combing, if any, with proper care.' },
                                        { checksdescription: 'Date of casting written on column.' },
                                        { checksdescription: 'Hacking of columns.' },
                                        { checksdescription: 'Cubes removed next day & kept for curing, with code numbers, cast code, site name on cubes.' },
                                        { checksdescription: 'Curing of columns done for minimum 15 days. Wet cloth wrapped around it.' },
                                        { checksdescription: 'Testing of cubes on due dates i.e. after seventh & twenty eighth day' },

                                    ];

                                    async function pedastalrccChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    pedastalrccChacks();
                                }










                                if (newDatanew.subactivityname === "Back Filling") {

                                    const dataArranew = [
                                        { checksdescription: 'Backfilling material approved' },
                                        { checksdescription: 'Material free from impurities' },
                                        { checksdescription: 'Bottom levels taken/noted' },
                                        { checksdescription: 'Rock pieces not greater than 150mm' },
                                        { checksdescription: 'Filling layers not greater than 150mm (or as directed by incharge)' },
                                        { checksdescription: 'Watering of layers filled' },
                                        { checksdescription: 'Proper compaction by approved method /machinery.' },
                                        { checksdescription: 'Slopes maintained if required' },
                                        { checksdescription: 'Top levels taken' },
                                        { checksdescription: 'The backfilled soil should be rammed and levelled' },
                                        { checksdescription: 'All backfill materials are free of debris, waste, organic material, and other deleterious matter' },
                                        { checksdescription: 'Backfill has been placed in layers not to exceed 150 mm in compacted thickness.' },
                                        { checksdescription: 'Each layer has been compacted to 90% for general fill and 95% for structural fill of optimum dry density' },
                                        { checksdescription: 'Level tolerance, Gen. Fill :±100 mm, Fill to be covered with concrete in foundations or linings: ±0 mm' },
                                    ];

                                    async function backfillingchChacks() {
                                        for (let i = 0; i < dataArranew.length; i++) {
                                            try {
                                                const newDatanewtask = new Checks(dataArranew[i]);
                                                const savedData = await newDatanewtask.save();

                                                let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                console.log(objID);
                                                await SubActivities.updateOne(
                                                    { _id: newss },
                                                    {
                                                        $push: {
                                                            checksID: objID
                                                        }
                                                    }
                                                )
                                                console.log('Data saved:', savedData);
                                            } catch (error) {
                                                console.error('Error saving data:', error);
                                            }
                                        }
                                    }
                                    backfillingchChacks();
                                }

























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