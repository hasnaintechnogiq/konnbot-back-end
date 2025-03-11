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
const DocumentForManager = require('./models/DocumentForManager.js');

const Quotation = require('./models/Quotation.js');
const Checks = require('./models/Checks.js');
const Snags = require('./models/Snags.js');
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
const ProfileImage = require('./models/ProfileImage.js');
const bcrypt = require('bcryptjs');








const authenticate = require('./authenticate');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const Routes = require("./routes/route.js")









const multer = require("multer");
const path = require("path");





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/images');
    },
    filename: (req, file, cb) => {
        const randomDigit = Math.floor(100000 + Math.random() * 900000);
        return cb(null, `${file.fieldname}_${Date.now()}_${randomDigit}${path.extname(file.originalname)}`)
    },
});

const upload = multer({ storage: storage });


app.use('/profile', express.static('upload/images'));












app.post('/upload-profile-user-new', upload.single('image'), async (req, res) => {
    const files = req.file;
    try {
        if (!files || files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const formData = req.body;
        const profile_url = `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${files.filename}`;
        console.log(profile_url)
        let singleUser = await User.findById(formData.userID)

        singleUser.profile_url = profile_url

        singleUser.save();

        res.json({ message: 'Image uploaded successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
});




app.post('/upload-video-to-create-ticket', upload.single('video'), async (req, res) => {
    const files = req.file;
    try {
        if (!files || files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const formData = req.body;

        const videoPath = `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${files.filename}`;
        const result = await Queries.create({ ...formData, videoPath });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.userIDtogo)
        console.log(objID);
        await User.updateOne(
            { _id: newss },
            {
                $push: {
                    queriesID: objID
                }
            }
        )



        const objecttosave = {
            pathtoredirect: 'TicketDetails',
            idtogetdata: result.id,
            notificationtypeorsection: 'Client has created a ticket!',
            iconname: 'book-plus-outline',
            param2userID: req.body.userIDtogo,
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        const engidcheck = req.body.engineerID

        if (engidcheck) {
            let single = await Engineer.findOne({ _id: engidcheck })

            let notifiIDes = single.notificationarrayID



            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }


        let notificationakl = new NotificationsForAll(objecttosave);
        const resultntwo = await notificationakl.save();
        let objIDtwo = new mongoose.Types.ObjectId(notificationakl.id)

        const mangercheck = req.body.managerID

        if (mangercheck) {
            let single = await Manager.findOne({ _id: mangercheck })

            let notifiIDes = single.notificationarrayID


            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDtwo
                    }
                }
            )
        }


        res.send(result);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading video', error });
    }


});





// Handle file upload
app.post('/add-ticket-and-upload', upload.array('images', 5), async (req, res) => {
    try {
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
            profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
        }));


        const result = await Queries.create({ ...formData, imgarry });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.userIDtogo)
        console.log(objID);
        await User.updateOne(
            { _id: newss },
            {
                $push: {
                    queriesID: objID
                }
            }
        )



        const objecttosave = {
            pathtoredirect: 'TicketDetails',
            idtogetdata: result.id,
            notificationtypeorsection: 'Client has created a ticket!',
            iconname: 'book-plus-outline',
            param2userID: req.body.userIDtogo,
        }

        let notificationall = new NotificationsForAll(objecttosave);
        const resultnew = await notificationall.save();
        let objIDnew = new mongoose.Types.ObjectId(notificationall.id)

        const engidcheck = req.body.engineerID

        if (engidcheck) {
            let single = await Engineer.findOne({ _id: engidcheck })

            let notifiIDes = single.notificationarrayID


            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDnew
                    }
                }
            )
        }


        let notificationakl = new NotificationsForAll(objecttosave);
        const resultntwo = await notificationakl.save();
        let objIDtwo = new mongoose.Types.ObjectId(notificationakl.id)

        const mangercheck = req.body.managerID

        if (mangercheck) {
            let single = await Manager.findOne({ _id: mangercheck })

            let notifiIDes = single.notificationarrayID


            await NotificationArray.updateOne(
                { _id: notifiIDes },
                {
                    $push: {
                        notificationsforallID: objIDtwo
                    }
                }
            )
        }




        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }

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

        if (useridcheck) {
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
        profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
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

    if (useridcheck) {
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

        if (useridcheck) {
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
        profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
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

    if (useridcheck) {
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
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            const formData = req.body;
            const result = await Delays.create({ ...formData });

            let objID = new mongoose.Types.ObjectId(result.id);
            let newss = new mongoose.Types.ObjectId(req.body.projectID)
            // console.log(req.body.email);
            await Project.updateOne(
                { _id: newss },
                {
                    $push: {
                        delaysID: objID
                    }
                }
            )





            const { projectID, subactivityID, numberofdays } = req.body;

            let productsingle = await SubActivities.findById(subactivityID);

            if (!productsingle) {
                return res.status(404).json({ error: 'Subactivity not found' });
            }

            const estimateDays = Number(productsingle.estimateDays);
            const daysToAdd = Number(numberofdays);

            const dateToCalculate = estimateDays + daysToAdd;

            let dateStrfirst = productsingle.startdatesubactivity;
            let datefirst = new Date(dateStrfirst);

            let OnlyDaysCalcu = dateToCalculate - 1;

            datefirst.setDate(datefirst.getDate() + OnlyDaysCalcu);


            const dateToAdd = datefirst.toISOString();

            productsingle.estimateDays = dateToCalculate;

            productsingle.duedatesubactivity = dateToAdd;

            await productsingle.save();

            let ActivitiesData = await Project.findById(projectID).populate({
                path: 'activitiesID',
                populate: {
                    path: 'subactivitiesID',
                    model: 'subactivities'
                }
            });

            if (!ActivitiesData) {
                return res.status(404).json({ error: 'Activity not foundggggggg' });
            }
            const ArrayDatainArrayofObejects = ActivitiesData.activitiesID;
            const ArrayDataNewAP = ArrayDatainArrayofObejects.reduce((acc, current) => acc.concat(current.subactivitiesID), []);



            const getObjectsAfterId = (array, specificId) => {
                const index = array.findIndex(obj => obj._id.equals(specificId));

                if (index === -1 || index === array.length - 1) {
                    return [];
                }

                return array.slice(index + 1);
            };

            const specificId = new mongoose.Types.ObjectId(subactivityID);
            const objectsAfterId = getObjectsAfterId(ArrayDataNewAP, specificId);




            async function BrickWorkChacks() {
                let myVariable = 0;

                for (let i = 0; i < objectsAfterId.length; i++) {
                    try {
                        if (i === 0) {
                            var newDatanewtask = myVariable + 1;
                        } else {
                            var newDatanewtask = objectsAfterId[i - 1].estimateDays;
                        }

                        const endDateCalcu = objectsAfterId[i].estimateDays;
                        const onlyIDApp = objectsAfterId[i]._id;
                        let onlyOneIdIsHere = await SubActivities.findById(onlyIDApp);

                        myVariable += newDatanewtask;

                        let dateStrfirst = dateToAdd;
                        let datefirst = new Date(dateStrfirst);

                        datefirst.setDate(datefirst.getDate() + myVariable);

                        const StartDateForEvery = datefirst.toISOString();

                        onlyOneIdIsHere.startdatesubactivity = StartDateForEvery;

                        const finalEndDate = myVariable + endDateCalcu - 1

                        let dateStrNew = dateToAdd;
                        let datNew = new Date(dateStrNew);

                        datNew.setDate(datNew.getDate() + finalEndDate);

                        const endDateForEvery = datNew.toISOString();

                        onlyOneIdIsHere.duedatesubactivity = endDateForEvery;

                        await onlyOneIdIsHere.save();


                    } catch (error) {
                        console.error('Error saving data:', error);
                    }
                }
            }
            BrickWorkChacks();








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
            profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
        }));

        const result = await Delays.create({ ...formData, imgarry });

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.projectID)
        // console.log(req.body.email);
        await Project.updateOne(
            { _id: newss },
            {
                $push: {
                    delaysID: objID
                }
            }
        )





        const { projectID, subactivityID, numberofdays } = req.body;

        let productsingle = await SubActivities.findById(subactivityID);

        if (!productsingle) {
            return res.status(404).json({ error: 'Subactivity not found' });
        }

        const estimateDays = Number(productsingle.estimateDays);
        const daysToAdd = Number(numberofdays);

        const dateToCalculate = estimateDays + daysToAdd;

        let dateStrfirst = productsingle.startdatesubactivity;
        let datefirst = new Date(dateStrfirst);

        let OnlyDaysCalcu = dateToCalculate - 1;

        datefirst.setDate(datefirst.getDate() + OnlyDaysCalcu);

        const dateToAdd = datefirst.toISOString();

        productsingle.estimateDays = dateToCalculate;

        productsingle.duedatesubactivity = dateToAdd;

        await productsingle.save();

        let ActivitiesData = await Project.findById(projectID).populate({
            path: 'activitiesID',
            populate: {
                path: 'subactivitiesID',
                model: 'subactivities'
            }
        });

        if (!ActivitiesData) {
            return res.status(404).json({ error: 'Activity not foundggggggg' });
        }
        const ArrayDatainArrayofObejects = ActivitiesData.activitiesID;
        const ArrayDataNewAP = ArrayDatainArrayofObejects.reduce((acc, current) => acc.concat(current.subactivitiesID), []);

        const getObjectsAfterId = (array, specificId) => {
            const index = array.findIndex(obj => obj._id.equals(specificId));

            if (index === -1 || index === array.length - 1) {
                return [];
            }

            return array.slice(index + 1);
        };

        const specificId = new mongoose.Types.ObjectId(subactivityID);
        const objectsAfterId = getObjectsAfterId(ArrayDataNewAP, specificId);

        async function BrickWorkChacks() {
            let myVariable = 0;

            for (let i = 0; i < objectsAfterId.length; i++) {
                try {
                    if (i === 0) {
                        var newDatanewtask = myVariable + 1;
                    } else {
                        var newDatanewtask = objectsAfterId[i - 1].estimateDays;
                    }

                    const endDateCalcu = objectsAfterId[i].estimateDays;
                    const onlyIDApp = objectsAfterId[i]._id;
                    let onlyOneIdIsHere = await SubActivities.findById(onlyIDApp);

                    myVariable += newDatanewtask;

                    let dateStrfirst = dateToAdd;
                    let datefirst = new Date(dateStrfirst);

                    datefirst.setDate(datefirst.getDate() + myVariable);

                    const StartDateForEvery = datefirst.toISOString();

                    onlyOneIdIsHere.startdatesubactivity = StartDateForEvery;

                    const finalEndDate = myVariable + endDateCalcu - 1

                    let dateStrNew = dateToAdd;
                    let datNew = new Date(dateStrNew);

                    datNew.setDate(datNew.getDate() + finalEndDate);

                    const endDateForEvery = datNew.toISOString();

                    onlyOneIdIsHere.duedatesubactivity = endDateForEvery;

                    await onlyOneIdIsHere.save();


                } catch (error) {
                    console.error('Error saving data:', error);
                }
            }
        }
        BrickWorkChacks();










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
    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
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
        profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
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






// Upload images for profile start
app.post('/upload-profile-image-for-user', upload.array('images', 1), async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    console.log(files)

    const imgarry = files.map((file) => ({
        originalname: file.originalname,
        filename: file.filename,
        path: file.path,
        profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
    }));


    const result = await ProfileImage.create({ imgarry });

    let objID = new mongoose.Types.ObjectId(result.id);
    let newss = new mongoose.Types.ObjectId(req.body.userID)
    console.log(objID);
    await User.updateOne(
        { _id: newss },
        {
            $set: {
                imagesID: objID
            }
        }
    )
    res.json(result);
});

// Upload images for profile end








// Upload images for profile for lead start

app.post('/upload-profile-image-for-lead-manag', upload.single('image'), async (req, res) => {
    const files = req.file;
    try {
        if (!files || files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const formData = req.body;
        const profile_url = `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${files.filename}`;
        console.log(profile_url)
        let singleUser = await LeadManager.findById(formData.leadmanagerID)

        singleUser.profile_url = profile_url

        singleUser.save();

        res.json({ message: 'Image uploaded successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
});




// app.post('/upload-profile-image-for-lead-manag', upload.array('images', 1), async (req, res) => {
//     const files = req.files;
//     if (!files || files.length === 0) {
//         return res.status(400).send('No files were uploaded.');
//     }
//     console.log(files)

//     const imgarry = files.map((file) => ({
//         originalname: file.originalname,
//         filename: file.filename,
//         path: file.path,
//         profile_url: `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${file.filename}`
//     }));


//     const result = await ProfileImage.create({ imgarry });

//     let objID = new mongoose.Types.ObjectId(result.id);
//     let newss = new mongoose.Types.ObjectId(req.body.leadmanagerID)
//     console.log(objID);
//     await LeadManager.updateOne(
//         { _id: newss },
//         {
//             $set: {
//                 imagesID: objID
//             }
//         }
//     )
//     res.json(result);
// });

// Upload images for profile for lead end









// Upload images for profile for Manager start


app.post('/upload-profile-image-for-manag-dept', upload.single('image'), async (req, res) => {
    const files = req.file;
    try {
        if (!files || files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const formData = req.body;
        const profile_url = `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${files.filename}`;
        console.log(profile_url)
        let singleUser = await Manager.findById(formData.managerID)

        singleUser.profile_url = profile_url

        singleUser.save();

        res.json({ message: 'Image uploaded successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
});


// Upload images for profile for Manager end






// Upload images for profile for Engineer start


app.post('/upload-profile-image-for-engineer-yes', upload.single('image'), async (req, res) => {
    const files = req.file;
    try {
        if (!files || files.length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        const formData = req.body;
        const profile_url = `https://konnbot-app-zq4v4.ondigitalocean.app/profile/${files.filename}`;
        console.log(profile_url)
        let singleUser = await Engineer.findById(formData.engineerID)

        singleUser.profile_url = profile_url

        singleUser.save();

        res.json({ message: 'Image uploaded successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading image', error });
    }
});


// Upload images for profile for Engineer end






















// app.use('/documents', express.static('uploads'));
// upload documents for Quotation
app.post('/upload-documents', upload.single('document'), async (req, res) => {
    console.log(req.file);  // Check if file is received
    console.log(req.body);  // Check if QuotationID is received
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




app.post('/upload-manager-documents', upload.single('document'), async (req, res) => {
    console.log(req.file);  // Check if file is received
    console.log(req.body);  // Check if QuotationID is received
    try {
        const { originalname, size, mimetype, filename } = req.file;
        const newDocument = new DocumentForManager({
            name: originalname,
            uri: filename,
            type: mimetype,
            size: size
        });

        const result = await newDocument.save();

        let objID = new mongoose.Types.ObjectId(result.id);
        let newss = new mongoose.Types.ObjectId(req.body.projectID)
        console.log(objID);
        await Project.updateOne(
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










// Create Installments start
app.post("/add-all-installlments", async (req, resp) => {
    const TotalAmountIs = Number(req.body.totalAmount);

    const firstInstall = TotalAmountIs * 0.12;
    const secondInstall = TotalAmountIs * 0.10;
    const thirdInstall = TotalAmountIs * 0.08;
    const fourthInstall = TotalAmountIs * 0.12;
    const fifthInstall = TotalAmountIs * 0.08;
    const sixInstall = TotalAmountIs * 0.09;
    const sevenstInstall = TotalAmountIs * 0.04;
    const eightInstall = TotalAmountIs * 0.06;
    const nineInstall = TotalAmountIs * 0.02;
    const tenInstall = TotalAmountIs * 0.11;
    const elevenInstall = TotalAmountIs * 0.10;
    const towlInstall = TotalAmountIs * 0.08;

    try {
        const dataArray = [
            { installmentnum: '1st', installmenttype: 'Footing', leadID: req.body.leadID, afteraddchangeorderamount: firstInstall, installmentamount: firstInstall },
            { installmentnum: '2nd', installmenttype: 'Plinth', leadID: req.body.leadID, afteraddchangeorderamount: secondInstall, installmentamount: secondInstall },
            { installmentnum: '3rd', installmenttype: 'RCC Work', leadID: req.body.leadID, afteraddchangeorderamount: thirdInstall, installmentamount: thirdInstall },
            { installmentnum: '4th', installmenttype: 'Brick Work', leadID: req.body.leadID, afteraddchangeorderamount: fourthInstall, installmentamount: fourthInstall },
            { installmentnum: '5th', installmenttype: 'Electrical', leadID: req.body.leadID, afteraddchangeorderamount: fifthInstall, installmentamount: fifthInstall },
            { installmentnum: '6th', installmenttype: 'Plumbing', leadID: req.body.leadID, afteraddchangeorderamount: sixInstall, installmentamount: sixInstall },
            { installmentnum: '7th', installmenttype: 'Plaster', leadID: req.body.leadID, afteraddchangeorderamount: sevenstInstall, installmentamount: sevenstInstall },
            { installmentnum: '8th', installmenttype: 'Other Interior', leadID: req.body.leadID, afteraddchangeorderamount: eightInstall, installmentamount: eightInstall },
            { installmentnum: '9th', installmenttype: 'Door & Window', leadID: req.body.leadID, afteraddchangeorderamount: nineInstall, installmentamount: nineInstall },
            { installmentnum: '10th', installmenttype: 'Flooring', leadID: req.body.leadID, afteraddchangeorderamount: tenInstall, installmentamount: tenInstall },
            { installmentnum: '11th', installmenttype: 'Paint & Finishes', leadID: req.body.leadID, afteraddchangeorderamount: elevenInstall, installmentamount: elevenInstall },
            { installmentnum: '12th', installmenttype: 'Miscellenous', leadID: req.body.leadID, afteraddchangeorderamount: towlInstall, installmentamount: towlInstall },
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
                    if (newData.installmentnum === '12th') {
                        return resp.send("Done");
                    }
                } catch (error) {
                    console.error('Error saving data:', error);
                }
            }
        }
        saveDataSeq();

    } catch (error) {
        console.error('Error saving data:', error);
    }

});
// Create Installments End


































































app.post("/login", async (req, resp) => {
    const { email, password } = req.body;
    try {
        if (req.body.email && req.body.password) {
            const user = await User.findOne({ email }).populate("imagesID");
            if (!user) {
                return resp.send("no data found")
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return resp.send("no data found")
            }
            const token = await user.generateAuthToken();
            console.log(token);
            user._doc.tokenCode = token;
            resp.send(user);
        } else { resp.send("enter email and pass") }
    } catch (err) {
        resp.status(500).send('Error logging in');
    }
});

















app.get("/user-profile-picture/:_id", async (req, resp) => {
    try {
        let single = await User.findOne({ _id: req.params._id }).select("-password")
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
});

app.get("/lead-profile-picture/:_id", async (req, resp) => {
    try {
        let single = await LeadManager.findOne({ _id: req.params._id }).select("-password")
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
});

app.get("/manager-profile-picture/:_id", async (req, resp) => {
    try {
        let single = await Manager.findOne({ _id: req.params._id }).select("-password")
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
});


app.get("/enginner-profile-picture/:_id", async (req, resp) => {
    try {
        let single = await Engineer.findOne({ _id: req.params._id }).select("-password")
        resp.send(single);
    } catch (err) {
        resp.status(500).json(err);
    }
});





















app.post("/engineer-login", async (req, resp) => {
    try {
        if (req.body.email && req.body.password) {
            let user = await Engineer.findOne(req.body).select("-password")
            if (user) {
                resp.send(user);
            } else { resp.send("no data found") }
        } else { resp.send("enter email and pass") }
    } catch (error) {
        resp.status(500).json(error);
    }
});




app.post("/manager-login", async (req, resp) => {
    try {
        if (req.body.email && req.body.password) {
            let user = await Manager.findOne(req.body).select("-password")
            if (user) {
                resp.send(user);
            } else { resp.send("no data found") }
        } else { resp.send("enter email and pass") }
    } catch (error) {
        resp.status(500).json(error);
    }
});



app.post("/lead-manager-login", async (req, resp) => {
    try {
        if (req.body.email && req.body.password) {
            let user = await LeadManager.findOne(req.body).select("-password")
            if (user) {
                resp.send(user);
            } else { resp.send("no data found") }
        } else { resp.send("enter email and pass") }
    } catch (error) {
        resp.status(500).json(error);
    }
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





app.put("/update-new-password/:_id", async (req, resp) => {
    const { password, otp } = req.body;
    console.log(password, otp)
    try {
        let productsingle = await User.findById(req.params._id);
        console.log(productsingle)
        const hashedPassword = await bcrypt.hash(password, 10);
        productsingle.password = hashedPassword
        productsingle.save();
        resp.send(productsingle);

    } catch (error) {
        resp.status(500).json(error);
    }
});

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








app.put("/date-change-for-all-sub-activites", async (req, resp) => {
    const { projectID, subactivityID, dateToAdd } = req.body;
    console.log(projectID, subactivityID);

    try {
        let productsingle = await SubActivities.findById(subactivityID);

        if (!productsingle) {
            return resp.status(404).json({ error: 'Subactivity not found' });
        }

        productsingle.startdatesubactivity = dateToAdd;


        let dateStr = dateToAdd;
        let date = new Date(dateStr);

        date.setDate(date.getDate() + productsingle.estimateDays - 1);

        console.log(date.toISOString());

        const endDateOfSub = date.toISOString();

        productsingle.duedatesubactivity = endDateOfSub;

        await productsingle.save();

        let ActivitiesData = await Project.findById(projectID).populate({
            path: 'activitiesID',
            populate: {
                path: 'subactivitiesID',
                model: 'subactivities'
            }
        });

        if (!ActivitiesData) {
            return resp.status(404).json({ error: 'Activity not foundggggggg' });
        }
        const ArrayDatainArrayofObejects = ActivitiesData.activitiesID;
        const ArrayDataNewAP = ArrayDatainArrayofObejects.reduce((acc, current) => acc.concat(current.subactivitiesID), []);

        console.log(ArrayDataNewAP);



        const getObjectsAfterId = (array, specificId) => {
            const index = array.findIndex(obj => obj._id.equals(specificId));
            console.log("Index found:", index);

            if (index === -1 || index === array.length - 1) {
                return [];
            }

            return array.slice(index + 1);
        };

        const specificId = new mongoose.Types.ObjectId(subactivityID);
        const objectsAfterId = getObjectsAfterId(ArrayDataNewAP, specificId);




        async function BrickWorkChacks() {
            let myVariable = 0;

            for (let i = 0; i < objectsAfterId.length; i++) {
                try {
                    if (i === 0) {
                        var newDatanewtask = myVariable + 1;
                    } else {
                        var newDatanewtask = objectsAfterId[i - 1].estimateDays;
                    }

                    const endDateCalcu = objectsAfterId[i].estimateDays;
                    const onlyIDApp = objectsAfterId[i]._id;
                    let onlyOneIdIsHere = await SubActivities.findById(onlyIDApp);

                    myVariable += newDatanewtask;

                    let dateStrfirst = endDateOfSub;
                    let datefirst = new Date(dateStrfirst);

                    datefirst.setDate(datefirst.getDate() + myVariable);

                    console.log(datefirst.toISOString());

                    const StartDateForEvery = datefirst.toISOString();

                    onlyOneIdIsHere.startdatesubactivity = StartDateForEvery;

                    const finalEndDate = myVariable + endDateCalcu - 1

                    let dateStrNew = endDateOfSub;
                    let datNew = new Date(dateStrNew);

                    datNew.setDate(datNew.getDate() + finalEndDate);

                    console.log(datNew.toISOString());

                    const endDateForEvery = datNew.toISOString();

                    onlyOneIdIsHere.duedatesubactivity = endDateForEvery;

                    await onlyOneIdIsHere.save();


                } catch (error) {
                    console.error('Error saving data:', error);
                }
            }
        }
        BrickWorkChacks();



        resp.send(productsingle);

    } catch (error) {
        console.error(error);
        resp.status(500).json(error);
    }
});























app.put("/date-chng-for-all-sub-activity-by-end-date", async (req, resp) => {
    const { projectID, subactivityID, dateToAdd } = req.body;
    console.log(projectID, subactivityID);

    try {
        let productsingle = await SubActivities.findById(subactivityID);

        if (!productsingle) {
            return resp.status(404).json({ error: 'Subactivity not found' });
        }

        productsingle.duedatesubactivity = dateToAdd;

        await productsingle.save();

        let ActivitiesData = await Project.findById(projectID).populate({
            path: 'activitiesID',
            populate: {
                path: 'subactivitiesID',
                model: 'subactivities'
            }
        });

        if (!ActivitiesData) {
            return resp.status(404).json({ error: 'Activity not found' });
        }
        const ArrayDatainArrayofObejects = ActivitiesData.activitiesID;
        const ArrayDataNewAP = ArrayDatainArrayofObejects.reduce((acc, current) => acc.concat(current.subactivitiesID), []);

        console.log(ArrayDataNewAP);

        const getObjectsAfterId = (array, specificId) => {
            const index = array.findIndex(obj => obj._id.equals(specificId));
            console.log("Index found:", index);

            if (index === -1 || index === array.length - 1) {
                return [];
            }

            return array.slice(index + 1);
        };

        const specificId = new mongoose.Types.ObjectId(subactivityID);
        const objectsAfterId = getObjectsAfterId(ArrayDataNewAP, specificId);




        async function BrickWorkChacks() {
            let myVariable = 0;

            for (let i = 0; i < objectsAfterId.length; i++) {
                try {
                    if (i === 0) {
                        var newDatanewtask = myVariable + 1;
                    } else {
                        var newDatanewtask = objectsAfterId[i - 1].estimateDays;
                    }

                    const endDateCalcu = objectsAfterId[i].estimateDays;
                    const onlyIDApp = objectsAfterId[i]._id;
                    let onlyOneIdIsHere = await SubActivities.findById(onlyIDApp);

                    myVariable += newDatanewtask;

                    let dateStrfirst = dateToAdd;
                    let datefirst = new Date(dateStrfirst);

                    datefirst.setDate(datefirst.getDate() + myVariable);

                    console.log(datefirst.toISOString());

                    const StartDateForEvery = datefirst.toISOString();

                    onlyOneIdIsHere.startdatesubactivity = StartDateForEvery;

                    const finalEndDate = myVariable + endDateCalcu - 1

                    let dateStrNew = dateToAdd;
                    let datNew = new Date(dateStrNew);

                    datNew.setDate(datNew.getDate() + finalEndDate);

                    console.log(datNew.toISOString());

                    const endDateForEvery = datNew.toISOString();

                    onlyOneIdIsHere.duedatesubactivity = endDateForEvery;

                    await onlyOneIdIsHere.save();


                } catch (error) {
                    console.error('Error saving data:', error);
                }
            }
        }
        BrickWorkChacks();



        resp.send(productsingle);

    } catch (error) {
        console.error(error);
        resp.status(500).json(error);
    }
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