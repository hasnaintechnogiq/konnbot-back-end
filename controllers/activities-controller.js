const mongoose = require('mongoose');
const Activities = require('../models/Activities.js');
const Lead = require('../models/Lead.js');
const Project = require('../models/Project.js');
const Quotation = require('../models/Quotation.js');
const Checks = require('../models/Checks.js');
const Snags = require('../models/Snags.js');
const SubActivities = require('../models/SubActivities.js');
const Subtask = require('../models/SubTaskForSubactivities.js');
const Projectspace = require('../models/ProjectSpace.js');


const addNewActivities = async (req, res) => {
    try {
        let data = new Activities(req.body);
        const result = await data.save();

        let objID = new mongoose.Types.ObjectId(data.id)
        let newss = new mongoose.Types.ObjectId(req.body.projectID)
        console.log(objID);
        await Project.updateOne(
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
        let single = await Project.findById({ _id: req.params._id }).populate({
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






const createAllActivites = async (req, resp) => {
    try {

        let project = new Project();

        const projectresul = await project.save();

        let objectproID = new mongoose.Types.ObjectId(project.id)

        let newcheck = new mongoose.Types.ObjectId(req.body.leadID)

        await Lead.updateOne(
            { _id: newcheck },
            {
                $push: {
                    projectID: objectproID, estimateDays: 4
                }
            }
        )

        var singltwo = await Quotation.findById(req.body.quotationSelectedID)
        if (singltwo) {
            var fottingtypecheck = singltwo.footingstructuretype;
        }
        else { var fottingtypecheck = "Isolated"; }

        // console.log(singltwo.Footing[0].materialsName)
        var dataArrytocheck = [
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
            for (let i = 0; i < dataArrytocheck.length; i++) {
                try {
                    const newData = new Activities(dataArrytocheck[i]);
                    const savedData = await newData.save();
                    let objID = new mongoose.Types.ObjectId(newData.id)
                    let newss = new mongoose.Types.ObjectId(req.body.leadID)


                    if (newData.categoryname === "Footing") {

                        if (fottingtypecheck === "Isolated") {
                            var dataArrayFooting = [
                                { subactivityname: 'Site Visit', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Site Clearance', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Layout & Leveling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Steel Reinforcement', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Excavation', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'P.C.C Work', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Footing', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Pedestal', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Back Filling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },

                            ];
                        }

                        if (fottingtypecheck === "Pile") {
                            var dataArrayFooting = [
                                { subactivityname: 'Site Visit', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Site Clearance', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Layout & Leveling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Steel Reinforcement', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Excavation', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Piling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Pile Cap & Plinth Beam TMT', activityID: newData._id , projectID: objectproID, estimateDays: 4 },

                            ];
                        }

                        if (fottingtypecheck === "Raft") {
                            var dataArrayFooting = [
                                { subactivityname: 'Site Visit', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Site Clearance', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Layout & Leveling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Excavation', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Ramming', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Steel Reinforcement', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Footing', activityID: newData._id , projectID: objectproID, estimateDays: 4 },

                            ];
                        }

                        async function saveDatanew() {
                            for (let i = 0; i < dataArrayFooting.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArrayFooting[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)

                                    if (newDatanew.subactivityname === "Site Visit") {
                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Get the site Locaation and Address' },
                                            { subtaskdescription: 'Get the Clients Contacto no and Name' },
                                            { subtaskdescription: 'Take the measuring tape, Notepad and a labour with you' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Take the measurements at the site and note down' },
                                            { subtaskdescription: 'Measure the level of site with respect to the road level' },
                                            { subtaskdescription: 'Click the photos of Site for the references Front side,Back side and sideways' },
                                            { subtaskdescription: 'Mark the details of all four adjacent sides of the plot' },
                                            { subtaskdescription: 'Inform the society about the commencment of work,if any issues then inform the client' },
                                            { subtaskdescription: 'Finalise the place for the material procurement' },
                                            { subtaskdescription: 'Ask Client for water and Electricity Arrangements' },
                                            { subtaskdescription: 'If society water supply then check the timings and storage area for the water' },
                                            { subtaskdescription: 'Ask the labour to dig a sample pit to confirm the soil type in above surface' },
                                            { subtaskdescription: 'Ask the neighbours footing type if required' },
                                            { subtaskdescription: 'Finalise the excavation means' },
                                            { subtaskdescription: 'Give the Site handover form to the Client and Get it filled and Signed' },
                                            { subtaskdescription: 'If there is anything (Electrical Wires, Septic tank, Sewer line or others) Informed to client that they should ask the society for the information.' },
                                            { subtaskdescription: 'Ask client to show the Sewer Line + Main Hole near plot, whereas if not available then construction of septic tank is to be considered' },
                                            { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Inform the details to the project manager and Discuss the details' },
                                            { subtaskdescription: 'If electrical from our end then finalise the date and Pursuing person' },
                                            { subtaskdescription: 'In case if tubewell from our side then finalise the party and the date' },
                                            { subtaskdescription: 'If any issue from the Client then discuss with the project manager' },
                                            { subtaskdescription: 'In case of tree if permission required ,finalise the pursuing person' },
                                            { subtaskdescription: 'Provision that, no cable should be harmed for that particular precaution are taken, Please check the Rule Book for It.' }


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
                                            { floorsequence: 'Bas 1' },
                                            { floorsequence: 'Bas 2' },
                                            { floorsequence: 'Bas 3' },
                                            { floorsequence: 'Bas 4' },
                                            { floorsequence: 'Ground' },
                                            { floorsequence: 'First' },
                                            { floorsequence: 'Second' },
                                            { floorsequence: 'Third' },
                                            { floorsequence: 'Fourth' },
                                            { floorsequence: 'Tower' },

                                        ];

                                        const startpoint = 4;


                                        async function floorCreateFunction() {
                                            for (let i = startpoint; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Projectspace(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)

                                                    console.log(objID);
                                                    await Project.updateOne(
                                                        { _id: objectproID },
                                                        {
                                                            $push: {
                                                                projectspaceID: objID
                                                            }
                                                        }
                                                    )
                                                    console.log('Data saved:', savedData);
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        floorCreateFunction();
                                    }



















                                    if (newDatanew.subactivityname === "Site Visit") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Boundary Check', checksdescription: 'Is there any existing structure/Boundary' },
                                            { checksHeading: 'Dewatering Check', checksdescription: 'Is dewatering required' },
                                            { checksHeading: 'Tree check', checksdescription: 'Is there a tree inside the site boundary or away from the site boundary but it can interrupt the working' },
                                            { checksHeading: 'Vehicle movement check', checksdescription: 'Can the vehicles easily move along the site for material supply' },
                                            { checksHeading: 'Demolition Check', checksdescription: 'Does this structure/boundary needs to be demolished' },
                                            { checksHeading: 'Free space check', checksdescription: 'Is there a proper place form the placement of the material' },
                                            { checksHeading: 'Security Space check', checksdescription: 'Is there a place for the security person' },
                                            { checksHeading: 'Toilet check', checksdescription: 'Is there a public toilet nearby for the security person' },
                                            { checksHeading: 'Road Check', checksdescription: 'Does the site has connected roads' },
                                            { checksHeading: 'Electric Pole check', checksdescription: 'Is the electric pole nearby the site' },
                                            { checksHeading: 'Electric connection check', checksdescription: 'Has the electrictity connection been taken' },
                                            { checksHeading: 'Meter Placement Check', checksdescription: 'Temporary Placement position for providing the meter on Site, is informed & structure needed to put it. Do we inform the client ' },

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
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Finalize the assigning authotrity to do Site Clearance Work' },
                                            { subtaskdescription: 'Assiging Date for clearance as per the contract creation & PM approval' },
                                            { subtaskdescription: 'Search also for the near by dump yard or ask the JCB person to find it by their own' },
                                            { subtaskdescription: 'Finalize for the depth of clearance' },
                                            { subtaskdescription: 'Schedule Date for Clearing the Site & Dumping Nearby' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Make the arrangements for tree cutting/dewatering if required' },
                                            { subtaskdescription: 'JCB Start & End Reading Record, If Site clearance is done under the KONNBOT' },
                                            { subtaskdescription: 'Make assure that the Roots are taken out as deep as feasible for the JCB to cut off' },
                                            { subtaskdescription: 'Avalabiltiy of the motor for dewatering on site, with time calculation & other factors ' },
                                            { subtaskdescription: 'In case of continous water sources, diversion or internal team discussion coming up with possible solution' },
                                            { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
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
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Clearance check', checksdescription: 'Does the site need to be cleared' },
                                            { checksHeading: 'Method check', checksdescription: 'Does it require a JCB for cleaning or it can be done by the labour.' },
                                            { checksHeading: 'Tree Check', checksdescription: 'If by any chance we have tree or any other important things on site, than client will handel this issue by his own, KONNBOT wont interfere in any matter.' },
                                            { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Roots Check', checksdescription: 'Once the tree has been removed (if present) it should be ensured that the roots are damaged and taken out from the site' },
                                            { checksHeading: 'Cleaning Check', checksdescription: 'After the site clearance the adjacent roads to be cleaned so that there is no objection from the neighbours' },
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


                                    // if (newDatanew.subactivityname === "Site Clearance") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[0].materialsName
                                    //     }
                                    //     async function newFunctionCheckFooting() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionCheckFooting()
                                    // }



                                    if (newDatanew.subactivityname === "Layout & Leveling") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Arrange structural drawing with printout & soft copy at Site before the execution day' },
                                            { subtaskdescription: 'Assign the contractor for the layout' },
                                            { subtaskdescription: 'Arrange the material (line dori, nails, paint box, marker on wall, lime powder etc) for layout' },
                                            { subtaskdescription: 'Call the Client' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Ask contractor to make burjis and the reference levels been decided' },
                                            { subtaskdescription: 'Ask the contractor to mark the permanent level' },
                                            { subtaskdescription: 'Ask the contractor  to match the diagonals first then proceed further' },
                                            { subtaskdescription: 'Contractor signed the KONNBOT contract (Understand the condition, payment & Installment as per work)' }
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
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Cleaning Check', checksdescription: 'Is the site clean for the layout' },
                                            { checksHeading: 'Material Check', checksdescription: 'Are the instruments and materials required for the layout present in the site' },
                                            { checksHeading: 'Boundary Check', checksdescription: 'Are the boundaries of the plot fixed' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Drawings Check', checksdescription: 'Are the final Approved Architectural drawings are available at the site' },
                                            { checksHeading: 'Drawings Check', checksdescription: 'Are the final Approved Structural drawings are available at site.' },
                                            { checksHeading: 'Gridline Check', checksdescription: 'Are the Structural grid line and architectural grid lines checked properly.' },
                                            { checksHeading: 'Footing type Check', checksdescription: 'Identify the type of footing from the drawing' },
                                            { checksHeading: 'Burji Check', checksdescription: 'Are the burjis made at site' },
                                            { checksHeading: 'Level Check', checksdescription: 'Are the levels been marked at site with respect to which the further work will be carried out' },
                                            { checksHeading: 'Dimensions Check', checksdescription: 'Are the dimensions on drawing possible at site' },
                                            { checksHeading: 'Layout Final Check', checksdescription: 'Once the layout has been finalised do the final check and the Client should be informed about the site boundaries so that there is no issue with the neighbours plot' }
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


                                    // if (newDatanew.subactivityname === "Layout & Leveling") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[1].materialsName
                                    //     }
                                    //     async function newFunctionlayoutAndLevelling() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionlayoutAndLevelling()
                                    // }






                                    if (newDatanew.subactivityname === "Excavation") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Decide the RL for reference' },
                                            { subtaskdescription: 'Assign the labour /JCB  for the excavation purpose' },
                                            { subtaskdescription: 'Make Precaution plans to mitigate the risk of any failure of adjacent building/ structures due to excavation' },
                                            { subtaskdescription: 'Make the arrangement for dewatering  if required' },
                                            { subtaskdescription: 'Make the arrangement for blasting  if required' },
                                            { subtaskdescription: 'Ask the contractor to make  the arrangement  for checking the levels of the footing' },
                                            { subtaskdescription: 'Take the approval  for dumping of soil if required' },
                                            { subtaskdescription: 'Inform the client in case of any discrepancy in excavation' },
                                            { subtaskdescription: 'Arrange the pile driving machine in case of pile footing' },
                                            { subtaskdescription: 'Finalise and Check the depth of Pile' },
                                            { subtaskdescription: 'What action has been taken in case of any discrepancy' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Ask the contractor  to check the depth of footing' },
                                            { subtaskdescription: 'Ask the contractor  to check the depth of all the piles in case of pile footing' },
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
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Layout Check', checksdescription: 'Whether the layout has been done and Checked by the Client' },
                                            { checksHeading: 'Plot level Check', checksdescription: 'Check the level of the plot with respect to the nearest road or the nearest drain' },
                                            { checksHeading: 'Depth Check', checksdescription: 'Depth of excavation to be finalised with respect to the road level' },
                                            { checksHeading: 'Dewatering Check', checksdescription: 'Check if dewatering is required during excavation' },
                                            { checksHeading: 'Blasting Requirement Check', checksdescription: 'Check if blasting is required for excavation' },
                                            { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Movement Check', checksdescription: 'Proper way for movement of the labours' },
                                            { checksHeading: 'Edge Column Check', checksdescription: ' It should be confirmed that Foundations of edge columns does not exceed the property line' },
                                            { checksHeading: 'Road Clearance check', checksdescription: 'The excavated soil is not spread on the roads which causes disturbance to the neighbours' },
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



                                    // if (newDatanew.subactivityname === "Excavation") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[2].materialsName
                                    //     }
                                    //     async function newFunctionExcavation() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionExcavation()
                                    // }











                                    if (newDatanew.subactivityname === "Excavation") {

                                        const dataArranew = [
                                            { maintitle: 'F1' },
                                            { maintitle: 'F2' },
                                            { maintitle: 'F3' },
                                            { maintitle: 'F4' },
                                            { maintitle: 'F5' },
                                            { maintitle: 'F6' },
                                            { maintitle: 'F7' },
                                        ];

                                        async function ExcavationnewSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                    console.log(objID);
                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                    console.log('Data saved:', savedData);
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ExcavationnewSnags();
                                    }
























                                    if (newDatanew.subactivityname === "P.C.C Work") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Compaction Check', checksdescription: 'Check if the loose material is properly compacted and ready for PCC' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Ratio Check', checksdescription: 'Check if the ratio of the concrete used in PCC as per the specifications' },
                                            { checksHeading: 'Height Check', checksdescription: 'Check for pouring height.' },
                                            { checksHeading: 'Finishing Check', checksdescription: 'Check if the top surface is properly finished and kept rough enough' },
                                            { checksHeading: 'Compaction Check', checksdescription: 'Check for ramming and compaction of PCC with proper tools.' },
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





                                    if (newDatanew.subactivityname === "P.C.C Work") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Material Calculation as per Task' },
                                            { subtaskdescription: 'Ask the procurement manager to arrange the materials required for PCC' },
                                            { subtaskdescription: 'Assign the contractor and labour for the pcc work' },
                                            { subtaskdescription: 'Ask the contractor to arrange to concrete mixer , vibrator and Diesel' },
                                            { subtaskdescription: 'Make the water arrangements' },
                                            { subtaskdescription: 'Ask the contractor to arrange the required shuttering' },
                                            { subtaskdescription: 'Aks the contractor to arrange the finishing tools and tools for centreline' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Inform the contractor about the concrete mix ratio which is to be used' },
                                            { subtaskdescription: 'Ask the contractor to mark proper centreline' },
                                        ];

                                        async function PCCWorkfuncall() {
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
                                        PCCWorkfuncall();
                                    }













                                    // if (newDatanew.subactivityname === "P.C.C Work") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[3].materialsName
                                    //     }
                                    //     async function newFunctionPCCWOrk() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionPCCWOrk()
                                    // }







                                    if (newDatanew.subactivityname === "Steel Reinforcement") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Arrange  the rebars and binding wire at site' },
                                            { subtaskdescription: 'Assignt the labour and Contractor for the work' },
                                            { subtaskdescription: 'Ask the contractor to arrange the supports and Shuttering' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Explain the contractor about the dimension and steel detailing of the footing' },
                                            { subtaskdescription: 'Check the excavated pits for steel placement' },
                                            { subtaskdescription: 'Ask to contractor to properly place the cover blocks' },
                                            { subtaskdescription: 'Ask the contractor  to tie the rebars properly as per the specifications' },
                                            { subtaskdescription: 'Ask the contractor  to check the column for verticality' },
                                            { subtaskdescription: 'Ask the contractor to place supports in the column' },
                                        ];

                                        async function SteelReinforcementfunCall() {
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
                                        SteelReinforcementfunCall();
                                    }











                                    if (newDatanew.subactivityname === "Steel Reinforcement") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Centreline Check', checksdescription: 'Check whether the centreline is properly marked' },
                                            { checksHeading: 'Curing Check', checksdescription: 'PCC should be properly cured' },
                                            { checksHeading: 'Drawings Check', checksdescription: 'Check if the contractor is working with the relevant drawings' },
                                            { checksHeading: 'Column marking check', checksdescription: 'Check if the the column marking has been done before placing the steel of the footing ' },
                                            { checksHeading: 'Cleaning Check', checksdescription: 'Check if the pcc surface is clean and free from soil' },
                                            { checksHeading: 'Steel Clean Check', checksdescription: 'Check if the steel is free from dust , oil and any other contamination' }
                                        ];

                                        async function stellorkchChacks() {
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
                                        stellorkchChacks();
                                    }












                                    if (newDatanew.subactivityname === "R.C.C Footing") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Shuttering oil check', checksdescription: 'Check if the shuttering is properly cleaned and oiled' },
                                            { checksHeading: 'Material Check', checksdescription: 'The material (cement,sand and aggregate) to be used for  concreting are of good quality' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Compaction Check', checksdescription: 'Check if the concrete is properly compacted with the help of vibrators to reduce the air voids' },
                                            { checksHeading: 'Concrete level Check', checksdescription: 'Concrete filled evenly upto required level' },
                                            { checksHeading: 'Height check', checksdescription: 'Concrete not dropped from height greater than 1.5 - 1.8 m and thrown at distance greater than 2m' },
                                            { checksHeading: 'Concrete Filling Check', checksdescription: 'Concrete filling should be continuous, for every footing, No Break in between or Mixer Break' },
                                            { checksHeading: 'Finishing check', checksdescription: 'Proper levelling of concrete has been done' },
                                            { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Deshuttering check', checksdescription: 'Check if the deshuttering has been done as per the standards' },
                                            { checksHeading: 'Curing Check', checksdescription: 'Check if proper curing has been done' },
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






                                    if (newDatanew.subactivityname === "R.C.C Footing") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Assign the labour and Contractor' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangements for concrete mixer ,vibrator and Diesel' },
                                            { subtaskdescription: 'Calculate the material required for RCC and infrom the purchase manager' },
                                            { subtaskdescription: 'Ask the contractor to arrange the shuttering and Supports' },
                                            { subtaskdescription: 'Ask the contractor to use workable shuttering only and apply shuttering oil' },
                                            { subtaskdescription: 'Arrange the cover blocks and ask the contractor to place them properly' },
                                            { subtaskdescription: 'Arrange the putty,thermocol and tape' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangments for concrete pouring' },
                                            { subtaskdescription: 'Ask the contractor to mark the top level of concrete' },
                                            { subtaskdescription: 'Ask the contractor to fill the gaps' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Ask the contractor for proper compaction of concrete' },
                                            { subtaskdescription: 'Ask the contractor to do the concreting continuously' },
                                            { subtaskdescription: 'Ask the contractor to do the proper levelling of concrete' },
                                            { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Check if any honeycombing occures and ask the contractor to repair it immediately' },
                                            { subtaskdescription: 'Make the arrangements for curing' },
                                            { subtaskdescription: 'Ask the guard to do proper Curing' },
                                        ];

                                        async function RCCFootingfunCall() {
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
                                        RCCFootingfunCall();
                                    }











                                    // if (newDatanew.subactivityname === "R.C.C Footing") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[4].materialsName
                                    //     }
                                    //     async function newFunctionRCCFOoting() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionRCCFOoting()
                                    // }







                                    if (newDatanew.subactivityname === "R.C.C Footing") {

                                        const dataArranew = [
                                            { maintitle: 'F1', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F2', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F3', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F4', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F5', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F6', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F7', headingforshorting: 'Rein', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F1', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F2', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F3', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F4', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F5', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F6', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F7', headingforshorting: 'Shuttering', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F1', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F2', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F3', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F4', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F5', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F6', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'F7', headingforshorting: 'R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function RccsnagsSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)
                                                    console.log(objID);
                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                    console.log('Data saved:', savedData);
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        RccsnagsSnags();
                                    }



                                    if (newDatanew.subactivityname === "R.C.C Pedestal") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Gridline check', checksdescription: 'Plotting of gridline for center of column above plinth / floor slab.' },
                                            { checksHeading: 'Lapping check', checksdescription: 'Binding & placing column reinforcement above upper floor slab as per required height, considering lap length of the bar.' },
                                            { checksHeading: 'Drawing check', checksdescription: 'Check if the column reinforcement is as per the lastest structural drawings' },
                                            { checksHeading: 'Shuttering Oil check', checksdescription: 'Check if the shuttering is properly cleaned and oiled' },
                                            { checksHeading: 'Packing check', checksdescription: 'Check if the gaps at joints are properly packed' },
                                            { checksHeading: 'Support check', checksdescription: 'Check if the props are resting on hard surface so as to prevent misalignment of columns' },
                                            { checksHeading: 'Concrete level check', checksdescription: 'Check if the top level of concrete has been marked' },
                                            { checksHeading: 'Material check', checksdescription: 'The material (cement,sand and aggregate) to be used for  concreting are of good quality' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Compaction check', checksdescription: 'Check if the concrete is properly compacted with the help of vibrators to reduce the air voids' },
                                            { checksHeading: 'Concrete Filling Check', checksdescription: 'Concrete filling should be continuous, for each column No Break in between or Mixer Break' },
                                            { checksHeading: 'W/C ratio check', checksdescription: 'Controlled water cement ratio.' },
                                            { checksHeading: 'Compaction check', checksdescription: 'Proper compaction of concrete' },
                                            { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Deshuttering check', checksdescription: 'Deshuttering of columns after 24 hrs-48 hrs.' },
                                            { checksHeading: '', checksdescription: 'Submission of the deshuttering report to higher authority.' },
                                            { checksHeading: 'Curing check', checksdescription: 'Curing of Columns minimum for 10 days' },
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




                                    if (newDatanew.subactivityname === "R.C.C Pedestal") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Assign the labour and Contractor for the work' },
                                            { subtaskdescription: 'Explain the contractor about the work' },
                                            { subtaskdescription: 'Arrange the rebars and Binding Wires at site' },
                                            { subtaskdescription: 'Ask the contractor to arrange the shuttering and supports at site' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangements for concrete mixer ,vibrator and Diesel' },
                                            { subtaskdescription: 'Calculate the material required for RCC and infrom the purchase manager' },
                                            { subtaskdescription: 'Aks the contractor to use the workable shuttering only  and do proper oiling of shuttering' },
                                            { subtaskdescription: 'Arrange the cover blocks at site and ask the contractor to place them' },
                                            { subtaskdescription: 'Arrange the putty,thermocol and Tape' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangements for pouring of concrete' },
                                            { subtaskdescription: 'Arrange the water for concreting' },
                                            { subtaskdescription: 'Ask the contractor to check the electricity connections' },
                                            { subtaskdescription: 'Ask the contractor to clean and oil the shuttering and fill the gaps' },
                                            { subtaskdescription: 'Ask the contractor to mark the top level of concreting' },
                                            { subtaskdescription: 'Ask the contractor to check the line and Level' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Inform the contractor about the concrete mix ratio' },
                                            { subtaskdescription: 'Ask the contractor to control the water cement ratio' },
                                            { subtaskdescription: 'Ask the contractor to do proper compaction' },
                                            { subtaskdescription: 'Inform the contractor about the date of deshuttering' },
                                            { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Check for honeycombing during deshuttering and ask the contractor to repair it properly' },
                                            { subtaskdescription: 'Ask the guard to paint the curing compound' },
                                            { subtaskdescription: 'Ask the Guard to do three times curing' },
                                        ];

                                        async function RCCPedestalfunCall() {
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
                                        RCCPedestalfunCall();
                                    }









                                    // if (newDatanew.subactivityname === "R.C.C Pedestal") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[5].materialsName
                                    //     }
                                    //     async function newFunctionRCCPedestal() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionRCCPedestal()
                                    // }






                                    if (newDatanew.subactivityname === "Back Filling") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Deshuttering check', checksdescription: 'All the concrete structures like footings, columns, plinth beams, etc. should be completed with de-shuttering of the formwork, removal of stagings, etc.' },
                                            { checksHeading: 'Honeycombing repair check', checksdescription: 'All the honeycomb in the structures should be repaired before doing the plinth filling.' },
                                            { checksHeading: 'Masonry and Plaster check', checksdescription: 'All the plinth masonry work should be completed with the internal plaster, or by filling the leftover joints in a proper way.' },
                                            { checksHeading: 'Curing check', checksdescription: 'Before doing filling, ensure that all the concrete structures and masonry works have completed their minimal curing period. It should be properly set, attaining its design ' },
                                            { checksHeading: 'Leftover formwork Check', checksdescription: 'The plinth area and footing pit should be checked for any leftover formwork materials and should be removed before filling. ' },
                                            { checksHeading: 'Cleaning check', checksdescription: 'Any organic matter, wooden logs, plant roots, etc. should be cleaned, as they form voids after decay, causing settlement in the filling, due to weak compaction. ' },
                                            { checksHeading: 'Water Check', checksdescription: 'If there is any water in the pit, trenches, and plinth areas, it should be drained out.' },
                                            { checksHeading: 'Material check', checksdescription: 'The construction soil (moorum) should be free from organic matter, plant roots, clay lumps, chemicals, etc. The soil should be granular in structure, with a reddish-brown' },
                                            { checksHeading: 'Soil Check', checksdescription: 'If the soil excavated from the footing pit is black cotton, it should be removed completely and strictly avoided from refilling.' },
                                            { checksHeading: 'Top level check', checksdescription: 'Top level of filling has been marked' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Filling Layers Check', checksdescription: 'Construction soil should be spread in layers of 15 to 20cm. thickness, if you are using manual rammers, and it can be filled up to 30cm in thickness for the mechanical ' },
                                            { checksHeading: 'Layer Check', checksdescription: 'In any case, you should not fill the soil layer above 30cm depth, to achieve good compaction of the soil.' },
                                            { checksHeading: 'Watering Check', checksdescription: 'After completing the first layer of spreading, sprinkled with water to attain optimum moisture content, so that we can achieve the maximum dry density of soil after ' },
                                            { checksHeading: 'Ramming check', checksdescription: 'The ramming should be done from one end, covering all the areas. It is always advisable to use mechanical compactors, as the work carried out will be more efficient.' },
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



                                    if (newDatanew.subactivityname === "Back Filling") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Calculate the quantity of backfilling material and ask the purchase manager to arrange it' },
                                            { subtaskdescription: 'Assign the labour and Contractor for the backfilling' },
                                            { subtaskdescription: 'Make the arrangements for water' },
                                            { subtaskdescription: 'Arrange the rammer at site ' },
                                            { subtaskdescription: 'Inform the contractor about the filling procedure' },
                                            { subtaskdescription: 'Ask the contractor to remove the debris if any from the filling material' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Ask the contractor to mark the top level of filling in each section i.e, which area will be down or up' },
                                            { subtaskdescription: 'Ask the contractor not to fill the layers more than 300mm' },
                                            { subtaskdescription: 'Ask the contractor for watering the filling material' },
                                            { subtaskdescription: 'Ask the contractor for proper compaction' },
                                            { subtaskdescription: 'Ask the contractor to give the final level in compaction and 6mm Aggreagte to be laid so that the grade slab work can be carried out directly' },
                                        ];

                                        async function BackFillingfunCall() {
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
                                        BackFillingfunCall();
                                    }













                                    // if (newDatanew.subactivityname === "Back Filling") {

                                    //     const dataArrayFootingMaterial = {
                                    //         materialsName: singltwo.Footing[6].materialsName
                                    //     }
                                    //     async function newFunctionBackFilling() {
                                    //         let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                    //         await SubActivities.updateOne(
                                    //             { _id: newss },
                                    //             { $set: dataArrayFootingMaterial }

                                    //         )
                                    //     }
                                    //     newFunctionBackFilling()
                                    // }






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

                        if (fottingtypecheck === "Isolated") {
                            var dataArrayplinthwok = [
                                { subactivityname: 'R.C.C Plinth', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Sewage Line', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Filling + Ramming', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Anti - Termite', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Grade Slab', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            ];
                        }

                        if (fottingtypecheck === "Pile") {
                            var dataArrayplinthwok = [
                                { subactivityname: 'Shuttering Pile Cap + Plinth', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Piling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Sewage Line', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Filling + Ramming', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Anti - Termite', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Grade Slab', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            ];
                        }

                        if (fottingtypecheck === "Raft") {
                            var dataArrayplinthwok = [
                                { subactivityname: 'Sewage Line', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Waterproofing', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Back Filling', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Anti - Termite', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'P.C.C.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'Plinth Steel Reinforcement', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                                { subactivityname: 'R.C.C Raft Slab', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            ];
                        }

                        async function plinthCalling() {
                            for (let i = 0; i < dataArrayplinthwok.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArrayplinthwok[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)



                                    if (newDatanew.subactivityname === "R.C.C Plinth") {

                                        const dataArranew = [
                                            { maintitle: 'PB - 1', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 2', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 3', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 4', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 5', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 6', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'PB - 7', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function rccplinthbeam() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        rccplinthbeam();
                                    }




                                    if (newDatanew.subactivityname === "Sewage Line") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Assign the plumber for the sewage line work' },
                                            { subtaskdescription: 'Estimate the material as per the drawing and give it to the purchase manager' },
                                            { subtaskdescription: 'Ask the purchase manager to arrange the materials' },
                                            { subtaskdescription: 'Ask the plumber to check the quanity of the delivered materials.If any material is less then it should be informed that day only' },
                                            { subtaskdescription: 'Ask the plumber to make the arrangements for the leakage and pressure test' },
                                            { subtaskdescription: 'Check if the concrete material is available. If not then inform the purchase manager' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Mark the path for the sewage without beam cutting' },
                                            { subtaskdescription: 'Inform the contractor about the location of the chambers' },
                                            { subtaskdescription: 'Ask the contractor to do the leak and Pressure test' },
                                            { subtaskdescription: 'Ask the contractor to do proper concreting over the pipe so that it does not get damaged' }
                                        ];

                                        async function SewageLinefunCall() {
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
                                        SewageLinefunCall();
                                    }




                                    if (newDatanew.subactivityname === "Sewage Line") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Material check', checksdescription: 'Approved materials has been visually checked for quantity and condition' },
                                            { checksHeading: 'Material check', checksdescription: 'Pipe checked for damages, flaws and cracks before lowering' },
                                            { checksHeading: 'Material check', checksdescription: 'Enough quantity of pipe and fitting material is at site and stored as per manufacturers instructions' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Handling Check', checksdescription: 'All pipes & fitting materials are properly handled by skilled plumbers as per standard procedure without any damage to pipes' },
                                            { checksHeading: 'Alignment Check', checksdescription: 'Alignment of sewerline is properly set out as per construction drawing and to suit site conditions' },
                                            { checksHeading: 'Level Check', checksdescription: 'All invert levels are checked & confirmed by qualified surveyor and their setting out approved' },
                                            { checksHeading: 'Cleaning check', checksdescription: 'Interior of each pipe is cleaned and free of sand, dirt, etc.' },
                                            { checksHeading: 'Cleaning check', checksdescription: 'Exterior of joints carefully cleaned before jointing' },
                                            { checksHeading: 'Leak test check', checksdescription: 'All the necessary leak tests and light tests done and witnessed by PWD Sewerage Section' },
                                            { checksHeading: 'Concrete work check', checksdescription: 'All associated concrete works done as per construction drawing' },
                                        ];

                                        async function SewageLineChacks() {
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
                                        SewageLineChacks();
                                    }











                                    if (newDatanew.subactivityname === "Plinth Steel Reinforcement") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Arrange the rebars and Binding wire at site' },
                                            { subtaskdescription: 'Assign the labor and Contractor for the work' },
                                            { subtaskdescription: 'Ask the contractor to arrange the supports and install proper supports to the plinth shuttering' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Explain the contractor about the dimensions and Steel detailing of the plinth' },
                                            { subtaskdescription: 'Arrange the cover blocks at site and ask the contractor to place them properly' },
                                            { subtaskdescription: 'Inform the contractor to maintain the proper spacing between the bars' },
                                            { subtaskdescription: 'Ask the cotractor to minimise the wastage during cutting and Binding' },
                                            { subtaskdescription: 'Ask the contractor to use the old rebars first if balance at site' }
                                        ];

                                        async function PlinthSteelReinforcementfunCall() {
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
                                        PlinthSteelReinforcementfunCall();
                                    }





                                    if (newDatanew.subactivityname === "Plinth Steel Reinforcement") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Rebar cleaning check', checksdescription: 'Reinforcement bars shall be free from rust, mud, oil, slurry, loose materials, etc.' },
                                            { checksHeading: 'Steel grade check', checksdescription: 'The grade of the steel Bar (Both for Main Reinforcement and Transverse Reinforcement) shall be checked as per Structural drawings.' },
                                            { checksHeading: 'Grid check', checksdescription: 'Before going to check the reinforcement, identify Grid Name such Along with Grid A, B, C,1, 2.3, etc, and Beam Name such as B1, B2, etc.' },
                                        ];

                                        async function PlinthSteelReinforcementChacks() {
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
                                        PlinthSteelReinforcementChacks();
                                    }














                                    if (newDatanew.subactivityname === "R.C.C Plinth") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Assign the contractor and Labour for the work' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangements for concrete mixer ,vibrator and Diesel' },
                                            { subtaskdescription: 'Calculate the material required for RCC and infrom the purchase manager' },
                                            { subtaskdescription: 'Make the arrangements for water' },
                                            { subtaskdescription: 'Ask the contractor to make the arrangements for pouring of concrete' },
                                            { subtaskdescription: 'Ask the contractor to check the line and level of plinth' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Inform the concractor about the concrete mix ratio' },
                                            { subtaskdescription: 'Ask the contractor to control the water cement  ratio' },
                                            { subtaskdescription: 'Ask the contractor to pour the concrete evenly with proper finishing and not from a greater height because it causes segregation' },
                                            { subtaskdescription: 'Ask the contractor for compaction of  concrete' },
                                            { subtaskdescription: 'Inform the contractor about the deshuttering time' },
                                            { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Check the structure for honeycombing during the deshuttering and ask the contractor to repair it' },
                                            { subtaskdescription: 'Make the arrangements for the curing' },
                                            { subtaskdescription: 'Ask the guard to do three times curing' },
                                        ];

                                        async function RCCPlinthfunCall() {
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
                                        RCCPlinthfunCall();
                                    }






                                    if (newDatanew.subactivityname === "R.C.C Plinth") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Supervision check', checksdescription: 'See that concreting is done under skilled supervision. Never leave it to labour on site' },
                                            { checksHeading: 'Manpower check', checksdescription: 'Start placement of concrete with adequate manpower, proper equipment and tools.' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Mix check', checksdescription: 'Choose right concrete mix as per specifications' },
                                            { checksHeading: 'W/c ratio check', checksdescription: 'Add water as per predetermined quantity only. Always measure the water with measuring container before adding in concrete.' },
                                            { checksHeading: 'Mix Time Check', checksdescription: 'Mix the wet concrete thoroughly for around 2 minutes to get the consistent concrete' },
                                            { checksHeading: 'compaction check', checksdescription: 'Do the proper compaction to the concrete with a vibrator or wooden tamp to remove air from the concrete. If compaction is not well, it will create voids/honeycomb in concrete resulting in leakages from the concrete structure, thereby causing corrosion and reducing the strength.' },
                                            { checksHeading: 'Thickness check', checksdescription: 'Pour the concrete throughout in an even thickness' },
                                            { checksHeading: 'Support check', checksdescription: 'Always keep on checking the stability of props/ supports of formwork below.' },
                                            { checksHeading: 'Covers check', checksdescription: 'See that the covers insert doesn’t get displaced.' },
                                            { checksHeading: 'Finishing check', checksdescription: 'Finish the surface and edges of concrete after placing of concrete using with trowels or wooden floats or metal floats. Ensure that the concrete is finished in the same' },
                                            { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Curing Check', checksdescription: 'Proper curing when the concrete has hardened initially' },
                                        ];

                                        async function RCCPlinthChacks() {
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
                                        RCCPlinthChacks();
                                    }



















                                    if (newDatanew.subactivityname === "Anti - Termite") {

                                        const dataArranew = [
                                            { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Complete all  the prechecks' },
                                            { subtaskdescription: 'Assign the specialised party for the antitermite work' },
                                            { subtaskdescription: 'Ask the workers to take the necessary precautions' },
                                            { subtaskdescription: 'Ask the contractor to first drill the holes and then mix the chemical' },
                                            { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { subtaskdescription: 'Define the ratio of the chemical with water' },
                                            { subtaskdescription: 'Check that chemical is filled in each and every hole' },
                                            { subtaskdescription: 'Check that the hole made is of appropriate depth' },
                                            { subtaskdescription: 'Ask the contractor to remove all the boxes once the treatment has been done' },
                                            { subtaskdescription: 'Inform the rcc contractor that the antitermite treatment has been done and now he can proceed with the grade slab work from the next day' },
                                            { subtaskdescription: 'Ask the antitermite party for the certificate' },
                                        ];

                                        async function AntiTermitefunCall() {
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
                                        AntiTermitefunCall();
                                    }





                                    if (newDatanew.subactivityname === "Anti - Termite") {

                                        const dataArranew = [
                                            { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Chemical check', checksdescription: 'If the chemical of the required concentration' },
                                            { checksHeading: 'Brand check', checksdescription: 'Check the brand of the chemical' },
                                            { checksHeading: 'Treatment Area Check', checksdescription: 'Treatment area is ready to receive the treatment' },
                                            { checksHeading: 'Cleaning Check', checksdescription: 'All debris and unwanted materials have been removed' },
                                            { checksHeading: 'Services Check', checksdescription: 'All underground M&E services completed and secured' },
                                            { checksHeading: 'Sand Compaction Check', checksdescription: 'Sand bedding properly compacted' },
                                            { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
                                            { checksHeading: 'Hole Size Check', checksdescription: 'Drill holes with 2 cm diameter, 60 cm apart and 15cm around the premises area. If concreted floor, drill minimum 60 cm deep so as to reach the soil' },
                                            { checksHeading: 'Ratio Check', checksdescription: 'Correct mixing method and ratio as per manufacturers specification' },
                                            { checksHeading: 'Application Process', checksdescription: 'Footings: Soil treated before the concrete is poured, and in the backfill for every 600mm of depth for 300mm around the column to ground levels' },
                                            { checksHeading: 'Application Process', checksdescription: 'Ground beams : Both sides to a depth of 300mm treated at a rate of 18 litres per 3.0m run' },
                                            { checksHeading: 'Application Process', checksdescription: 'Floor slab : treated before the blinding is laid' },
                                            { checksHeading: 'Application Process', checksdescription: 'Services pipes : areas entering the building are treated' },
                                            { checksHeading: 'Holes filling Check', checksdescription: 'Holes will be filled with cement and sand mortar (1:3) mixed in putty consistency' },
                                            { checksHeading: 'Completion Check', checksdescription: 'Application of anti-termite treatment covers all areas' },
                                        ];

                                        async function AntiTermiteChacks() {
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
                                        AntiTermiteChacks();
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
                        plinthCalling();
                    }

                    if (newData.categoryname === "RCC Work") {

                        const dataArranew = [
                            { subactivityname: 'GF R.C.C Column', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'GF R.C.C Slab + Staircase', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF R.C.C Column', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF R.C.C Slab + Staircase', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF R.C.C Column', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF R.C.C Slab + Staircase', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF R.C.C Column', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF R.C.C Slab + Staircase', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF R.C.C Column.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF R.C.C Slab + Staircase.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower R.C.C Column + Slab', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function rccCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)







                                    if (newDatanew.subactivityname === "GF R.C.C Column") {

                                        const dataArranew = [
                                            { maintitle: 'C1', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function GfRccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        GfRccColoumnSnags();
                                    }







                                    if (newDatanew.subactivityname === "FF R.C.C Column") {

                                        const dataArranew = [
                                            { maintitle: 'C1', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function FFRccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        FFRccColoumnSnags();
                                    }








                                    if (newDatanew.subactivityname === "SF R.C.C Column") {

                                        const dataArranew = [
                                            { maintitle: 'C1', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function SfRccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        SfRccColoumnSnags();
                                    }










                                    if (newDatanew.subactivityname === "TF R.C.C Column") {

                                        const dataArranew = [
                                            { maintitle: 'C1', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function TfRccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        TfRccColoumnSnags();
                                    }







                                    if (newDatanew.subactivityname === "FF R.C.C Column.") {

                                        const dataArranew = [
                                            { maintitle: 'C1', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Starter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Rein.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C1', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C2', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C3', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'C4', headingforshorting: 'Shutter & R.C.C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function fffRccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        fffRccColoumnSnags();
                                    }






                                    if (newDatanew.subactivityname === "GF R.C.C Slab + Staircase") {

                                        const dataArranew = [
                                            { maintitle: 'GFB - 01', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function GfbeamSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        GfbeamSnags();
                                    }









                                    if (newDatanew.subactivityname === "FF R.C.C Slab + Staircase") {

                                        const dataArranew = [
                                            { maintitle: 'GFB - 01', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function GfRccbeamSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        GfRccbeamSnags();
                                    }









                                    if (newDatanew.subactivityname === "SF R.C.C Slab + Staircase") {

                                        const dataArranew = [
                                            { maintitle: 'GFB - 01', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function GfRloumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        GfRloumnSnags();
                                    }





                                    if (newDatanew.subactivityname === "TF R.C.C Slab + Staircase") {

                                        const dataArranew = [
                                            { maintitle: 'GFB - 01', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function tfbeamccColoumnSnags() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        tfbeamccColoumnSnags();
                                    }






                                    if (newDatanew.subactivityname === "FF R.C.C Slab + Staircase.") {

                                        const dataArranew = [
                                            { maintitle: 'GFB - 01', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Pre RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 01', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 02', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GFB - 03', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Staircase', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S1', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'S2', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Sunken', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Cut Out', headingforshorting: 'Post RCC', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function fifthfloorbeam() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        fifthfloorbeam();
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
                        rccCalling();
                    }



                    if (newData.categoryname === "Brick Work") {

                        const dataArranew = [
                            { subactivityname: 'GF Masonry', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Masonry', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Masonry', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Masonry', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Masonry.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower Masonry', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function brickCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)





                                    if (newDatanew.subactivityname === "GF Masonry") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfmasonaryworkmm() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfmasonaryworkmm();
                                    }









                                    if (newDatanew.subactivityname === "FF Masonry") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfmasonaryworkmm() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfmasonaryworkmm();
                                    }









                                    if (newDatanew.subactivityname === "SF Masonry") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function ffmasonarywork() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ffmasonarywork();
                                    }





                                    if (newDatanew.subactivityname === "TF Masonry") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function tfaryworkmm() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        tfaryworkmm();
                                    }






                                    if (newDatanew.subactivityname === "FF Masonry.") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Others', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Masonry', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Align', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function ffffmasonaryworkmm() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ffffmasonaryworkmm();
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
                        brickCalling();
                    }



                    if (newData.categoryname === "Electrical") {

                        const dataArranew = [
                            { subactivityname: 'GF Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Electrical.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Elevation Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Wiring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Switch & Socket', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function electricalCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)







                                    if (newDatanew.subactivityname === "GF Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfelectriclpiplin() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfelectriclpiplin();
                                    }








                                    if (newDatanew.subactivityname === "FF Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfelectriclpiplin() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfelectriclpiplin();
                                    }












                                    if (newDatanew.subactivityname === "SF Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfelectriclpiplin() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfelectriclpiplin();
                                    }












                                    if (newDatanew.subactivityname === "TF Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function gfelectriclpiplin() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfelectriclpiplin();
                                    }














                                    if (newDatanew.subactivityname === "FF Electrical.") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function ffelectricalt() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ffelectricalt();
                                    }












                                    if (newDatanew.subactivityname === "Tower Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function towereleckf() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        towereleckf();
                                    }














                                    if (newDatanew.subactivityname === "Elevation Electrical") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Layout', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function elevatilnelec() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        elevatilnelec();
                                    }






                                    if (newDatanew.subactivityname === "Wiring") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function wiringonly() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        wiringonly();
                                    }








                                    if (newDatanew.subactivityname === "Switch & Socket") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Dinning Room', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Kitchen', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Powder Wash', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Wash Area', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Parking', firstcheck: 'No', secondcheck: 'No' },
                                            { maintitle: 'Garden Area', firstcheck: 'No', secondcheck: 'No' },
                                        ];

                                        async function switchandsocetcall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        switchandsocetcall();
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
                        electricalCalling();
                    }


                    if (newData.categoryname === "Plumbing") {

                        const dataArranew = [
                            { subactivityname: 'Toilet - Floor', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Toilet - Wall', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Kitchen Pipeline', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Vertical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'A.C', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Other Fitting', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Sanitary Toilets', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Sanitary Kitchen', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function plumbingCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)



                                    if (newDatanew.subactivityname === "Toilet - Floor") {

                                        const dataArranew = [
                                            { maintitle: 'GF', headingforshorting: 'Duct', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Duct', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Duct', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Duct', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Duct', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Duct', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Points', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Points', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Points', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Points', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Points', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Points', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Pipeline', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Pipeline', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Pipeline', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Pipeline', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Pipeline', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Pipeline', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function toiletpointscall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        toiletpointscall();
                                    }







                                    if (newDatanew.subactivityname === "Toilet - Wall") {

                                        const dataArranew = [
                                            { maintitle: 'GF', headingforshorting: 'Heights', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Heights', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Heights', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Heights', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Heights', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Heights', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Internal', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Internal', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Internal', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Internal', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Internal', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Internal', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Pipeline', subtitle: 'T - A', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Pipeline', subtitle: 'T - B', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Pipeline', subtitle: 'T - C', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Pipeline', subtitle: 'T - D', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Pipeline', subtitle: 'T - E', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tow', headingforshorting: 'Pipeline', subtitle: 'T - F', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function toiletwallfunctioncallnow() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        toiletwallfunctioncallnow();
                                    }












                                    if (newDatanew.subactivityname === "Kitchen Pipeline") {

                                        const dataArranew = [
                                            { maintitle: 'Kit - Sink', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dish Washer', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Sink', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Washing Mac', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Point', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking - Point', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Balco. - Point', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Terra. - Point', headingforshorting: 'Pipeline', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kit - Sink', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dish Washer', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Sink', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Washing Mac', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Point', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking - Point', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Balco. - Point', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Terra. - Point', headingforshorting: 'Points', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function kitchenpiplinecall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        kitchenpiplinecall();
                                    }







                                    if (newDatanew.subactivityname === "Vertical") {

                                        const dataArranew = [
                                            { maintitle: 'Ducts', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Rain Harvest', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Elevation', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Others', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function verticalpippecallnow() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        verticalpippecallnow();
                                    }





                                    if (newDatanew.subactivityname === "A.C") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom - 1', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom - 2', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom - 3', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom - 4', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Multi Purpose', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function accallnowmeet() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        accallnowmeet();
                                    }









                                    if (newDatanew.subactivityname === "Other Fitting") {

                                        const dataArranew = [
                                            { maintitle: 'O.H.W.T', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'U.G.W.T', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Water Flow', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Floor to Floor', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Municipal Line', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Heater / Solar', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Pressure Pump', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Reverse Line', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function otherfittinggcall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        otherfittinggcall();
                                    }








                                    if (newDatanew.subactivityname === "Sanitary Toilets") {

                                        const dataArranew = [
                                            { maintitle: 'T - A', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Water Closet', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - A', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Shower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - A', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Wash Basin', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function sanatortytioletcall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        sanatortytioletcall();
                                    }








                                    if (newDatanew.subactivityname === "Sanitary Kitchen") {

                                        const dataArranew = [
                                            { maintitle: 'Kit - Sink', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dish Washer', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Sink', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Washing Mac', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash - Point', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking - Point', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Balco. - Point', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Terra. - Point', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function stanatortykitchenandthers() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        stanatortykitchenandthers();
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
                        plumbingCalling();
                    }






                    if (newData.categoryname === "Plaster") {
                        const dataArranew = [
                            { subactivityname: 'GF Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Plaster.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Elevation Plaster', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function plasterCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)



                                    if (newDatanew.subactivityname === "GF Plaster") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfplastercall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfplastercall();
                                    }








                                    if (newDatanew.subactivityname === "FF Plaster") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function ffplastercall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ffplastercall();
                                    }





                                    if (newDatanew.subactivityname === "SF Plaster") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function sfplastercall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        sfplastercall();
                                    }










                                    if (newDatanew.subactivityname === "TF Plaster") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function tfplastercall() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        tfplastercall();
                                    }










                                    if (newDatanew.subactivityname === "FF Plaster.") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Initial', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Alignment', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Post Plaster', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfplastcalln() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfplastcalln();
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
                        plasterCalling();
                    }



                    if (newData.categoryname === "Other Interior") {
                        const dataArranew = [
                            { subactivityname: 'P.O.P Frame', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'P.O.P Putty', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'P.O.P Lights', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'External Electrical', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Internal Wall Tile', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Changes in Points', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Washroom Design', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
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
                            { subactivityname: 'GF Door & Window', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Door & Window', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Door & Window', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Door & Window', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Door & Window.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Towe Door & Window', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function doorandwindowCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)







                                    if (newDatanew.subactivityname === "GF Door & Window") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }




                                    if (newDatanew.subactivityname === "FF Door & Window") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function ffdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        ffdoorandfarame();
                                    }








                                    if (newDatanew.subactivityname === "SF Door & Window") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function sflordoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        sflordoorandfarame();
                                    }






                                    if (newDatanew.subactivityname === "TF Door & Window") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function thiridefloordoor() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        thiridefloordoor();
                                    }







                                    if (newDatanew.subactivityname === "FF Door & Window.") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Frame', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'D Panel', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'W&D Acc.', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function forthfloordoorandwindow() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        forthfloordoorandwindow();
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
                        doorandwindowCalling();
                    }



                    if (newData.categoryname === "Flooring") {
                        const dataArranew = [
                            { subactivityname: 'Toilet Wall Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Kitchen', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'GF Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Flooring.', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Terrace Flooring', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Staircase', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function flooringCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)







                                    if (newDatanew.subactivityname === "GF Flooring") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }








                                    if (newDatanew.subactivityname === "FF Flooring") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }









                                    if (newDatanew.subactivityname === "SF Flooring") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }









                                    if (newDatanew.subactivityname === "TF Flooring") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }







                                    if (newDatanew.subactivityname === "FF Flooring.") {

                                        const dataArranew = [
                                            { maintitle: 'Drawing Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Base', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Floor Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Drawing Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Dinning Room', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Kitchen', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Bedroom + Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Powder Wash.', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Wash Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Parking', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Garden Area', headingforshorting: 'Skirting', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }







                                    if (newDatanew.subactivityname === "Toilet Wall Flooring") {

                                        const dataArranew = [
                                            { maintitle: 'T - A', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - A', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - A', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - B', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - C', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - D', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - E', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'T - F', headingforshorting: 'Final', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }









                                    if (newDatanew.subactivityname === "Kitchen") {

                                        const dataArranew = [
                                            { maintitle: 'K - 1', headingforshorting: 'Counter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 2', headingforshorting: 'Counter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 3', headingforshorting: 'Counter', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 1', headingforshorting: 'Slab', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 2', headingforshorting: 'Slab', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 3', headingforshorting: 'Slab', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 1', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 2', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'K - 3', headingforshorting: 'Wall', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
                                    }









                                    if (newDatanew.subactivityname === "Staircase") {

                                        const dataArranew = [
                                            { maintitle: 'Plinth', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tower', headingforshorting: 'Tile', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Plinth', headingforshorting: 'Vertical', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'GF', headingforshorting: 'Vertical', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', headingforshorting: 'Vertical', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', headingforshorting: 'Vertical', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tower', headingforshorting: 'Vertical', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
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
                        flooringCalling();
                    }


                    if (newData.categoryname === "Paint & Finishes") {
                        const dataArranew = [
                            { subactivityname: 'White Wash', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'GF Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'SF Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'TF Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'FF Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Tower Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'External & Elevation Paint', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                        ];

                        async function paintCalling() {
                            for (let i = 0; i < dataArranew.length; i++) {
                                try {
                                    const newDatanew = new SubActivities(dataArranew[i]);
                                    const savedData = await newDatanew.save();

                                    let objID = new mongoose.Types.ObjectId(newDatanew.id)
                                    let newss = new mongoose.Types.ObjectId(newData._id)



                                    if (newDatanew.subactivityname === "White Wash") {

                                        const dataArranew = [
                                            { maintitle: 'GF', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'FF', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'SF', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'TF', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                            { maintitle: 'Tower', firstcheck: 'No', secondcheck: 'No', thirdcheck: 'No' },
                                        ];

                                        async function gfdoorandfarame() {
                                            for (let i = 0; i < dataArranew.length; i++) {
                                                try {
                                                    const newDatanewtask = new Snags(dataArranew[i]);
                                                    const savedData = await newDatanewtask.save();

                                                    let objID = new mongoose.Types.ObjectId(newDatanewtask.id)
                                                    let newss = new mongoose.Types.ObjectId(newDatanew._id)

                                                    await SubActivities.updateOne(
                                                        { _id: newss },
                                                        {
                                                            $push: {
                                                                snagsID: objID
                                                            }
                                                        }
                                                    )
                                                } catch (error) {
                                                    console.error('Error saving data:', error);
                                                }
                                            }
                                        }
                                        gfdoorandfarame();
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
                        paintCalling();
                    }



                    if (newData.categoryname === "Miscellenous") {
                        const dataArranew = [
                            { subactivityname: 'M.S Work', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Main Gate', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Ramp & Other Work', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Electrical Check', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Plumbing Check', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Flooring Check', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
                            { subactivityname: 'Paint Check', activityID: newData._id , projectID: objectproID, estimateDays: 4 },
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


                    await Project.updateOne(
                        { _id: objectproID },
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
        resp.send("Done");
    } catch (error) {
        resp.status(500).json(error);
    }
};


























module.exports = {
    createAllActivites,
    getSingleLeadactivities,
    addNewActivities,
    updateActivities,
    deleteActivities
};