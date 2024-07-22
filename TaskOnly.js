if (newDatanew.subactivityname === "Beamgggggggggg") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Phase 4', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
        { subtaskdescription: 'Assign' },
    ];

    async function BeamSlabShutteringReinforcementRCCfunCall() {
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
    BeamSlabShutteringReinforcementRCCfunCall();
}






if (newDatanew.subactivityname === "Grade Slab") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the contractor and Labour for the work' },
        { subtaskdescription: 'Calculate the steel quantity required and Give it to the purchase manager' },
        { subtaskdescription: 'Explain the contractor about the dia and Spacing of rebars in grade slab' },
        { subtaskdescription: 'Ask the contractor to make the arrangements for concrete mixer ,vibrator and Diesel' },
        { subtaskdescription: 'Calculate the material required for RCC and infrom the purchase manager' },
        { subtaskdescription: 'Make the arrangements for water' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to make the arrangements for pouring of concrete' },
        { subtaskdescription: 'Ask the contractor to mark the level dots before concreting' },
        { subtaskdescription: 'Inform the concractor about the concrete mix ratio' },
        { subtaskdescription: 'Ask the contractor to control the water cement  ratio' },
        { subtaskdescription: 'Ask the contractor to pour the concrete evenly with proper finishing' },
        { subtaskdescription: 'Ask the contractor for compaction of  concrete' },
        { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Make the arrangements for the curing' },
        { subtaskdescription: 'Ask the guard to do three times curing' },
    ];

    async function GradeSlabfunCall() {
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
    GradeSlabfunCall();
}





if (newDatanew.subactivityname === "Beam & Slab Shuttering | Reinforcement | R.C.C") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the labour and the contractor' },
        { subtaskdescription: 'Arrange the rebars and binding wire  at site' },
        { subtaskdescription: 'Ask the contractor to arrange  the shuttering  and supports at site' },
        { subtaskdescription: 'Arrange  the shuttering  oil and cover blocks at site' },
        { subtaskdescription: 'Arrange the stock of cement , sand & aggregate,steel and waterproofing compound required for casting of slab.(Check the manfacturing date of Cement)' },
        { subtaskdescription: 'Arrangement of water & standby arrangement of water in case of electrical failure.' },
        { subtaskdescription: 'Ask the contractor to arrange the sufficient labour strength for slab casting' },
        { subtaskdescription: 'Inform contractor about starting time of slab & maximum allowable time for slab casting.' },
        { subtaskdescription: 'Ask the contractor to mark the levels  in the column for checking the slab shuttering level with water level' },
        { subtaskdescription: 'Ask the contractor to remove the damaged shuttering and only workable shuttering should be used at site' },
        { subtaskdescription: 'Ask the contractor  to check the line and level of beam bottom' },
        { subtaskdescription: 'Ask the contractor  to do proper fiing of sides with line and level' },
        { subtaskdescription: 'Ask the contractor to check the individual level of each slab bay' },
        { subtaskdescription: 'Ask the contractor  for proper tightening of joints and oiling of shuttering' },
        { subtaskdescription: 'Ask the contractor to check the individual beam to beam measurement' },
        { subtaskdescription: 'Finalise the location and depth of sunken  as per the drawing' },
        { subtaskdescription: 'Ask the contractor to arrange the shuttering and Supports' },
        { subtaskdescription: 'Ask the contractor to use workable shuttering only and apply shuttering oil' },
        { subtaskdescription: 'Arrange the cover blocks and ask the contractor to place them properly' },
        { subtaskdescription: 'Arrange the putty,thermocol and tape' },
        { subtaskdescription: 'Ask the contractor to fill the gaps' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to check the reinforcement  as per the drawing' },
        { subtaskdescription: 'Ask the contractor to do proper lapping,cover,bentup bar,pin bar and extra bars' },
        { subtaskdescription: 'Ask the contractor to provide the master ring and Dowel bars in slab' },
        { subtaskdescription: 'Decide the position of concrete joints in case of big slab after consulting & approval of R.C.C. Consultant.' },
        { subtaskdescription: 'Ask the contractor to make the arrangements for concrete mixer ,vibrator and Diesel' },
        { subtaskdescription: 'Calculate the material required for RCC and infrom the purchase manager' },
        { subtaskdescription: 'Ask the contractor to make the arrangments for concrete pouring' },
        { subtaskdescription: 'Ask the contractor to mark the top level of concrete' },
        { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to make the arrangements for pouring of concrete' },
        { subtaskdescription: 'Ask the contractor to mark the level  before concreting' },
        { subtaskdescription: 'Inform the concractor about the concrete mix ratio' },
        { subtaskdescription: 'Ask the contractor to control the water cement  ratio and mix waterproof chemical' },
        { subtaskdescription: 'Ask the contractor to pour the concrete evenly with proper finishing' },
        { subtaskdescription: 'Ask the contractor for compaction of  concrete' },
        { subtaskdescription: 'Phase 4', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Check if any honeycombing occures and ask the contractor to repair it immediately' },
        { subtaskdescription: 'Ask the contractor to make the bunds for the curing' },
        { subtaskdescription: 'Ask the guard to do proper Curing' },
    ];

    async function BeamSlabShutteringReinforcementRCCfunCall() {
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
    BeamSlabShutteringReinforcementRCCfunCall();
}




if (newDatanew.subactivityname === "Reinforcement Work") {

    const dataArranew = [
        { subtaskdescription: 'To be Checked Before Slab Casting', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Contractor been assigned and informed that he would check all the reinforcement with the Engineer' },
        { subtaskdescription: 'Contractor been informed to minimise the wastage during cutting' },
    ];

    async function ReinforcementWorkfunCall() {
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
    ReinforcementWorkfunCall();
}




if (newDatanew.subactivityname === "Waterproofing") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the contractor and labour  for waterproofing' },
        { subtaskdescription: 'Arrange the  the material/chemical for water proofing ' },
        { subtaskdescription: 'Arrange the  the gi/pvc pipe  at site' },
        { subtaskdescription: 'Arrange the the Brick bat made available in site in case of brick bat coba type waterproofing' },
        { subtaskdescription: 'Ask the contractor to mark the level  for the waterproofing' },
        { subtaskdescription: 'Ask the contractor to fill all the holes before waterproofing' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard for curing of the waterproofed surface' },
        { subtaskdescription: 'Ask the contractor to check the waterproofed area for leakage' },
        { subtaskdescription: 'Phase 1 Terrace Waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the contractor and labour  for waterproofing' },
        { subtaskdescription: 'Arrange the  the material/chemical for water proofing ' },
        { subtaskdescription: 'Arrange the  the gi/pvc pipe  at site' },
        { subtaskdescription: 'Arrange the the Brick bat made available in site in case of brick bat coba type waterproofing' },
        { subtaskdescription: 'Ask the contractor to mark the level  for the waterproofing' },
        { subtaskdescription: 'Ask the contractor to fill all the holes before waterproofing' },
        { subtaskdescription: 'Phase 2 Terrace Waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard for curing of the waterproofed surface' },
        { subtaskdescription: 'Ask the contractor to check the waterproofed area for leakage' },
        { subtaskdescription: 'Phase 1 Chajja Waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the contractor and labour  for waterproofing' },
        { subtaskdescription: 'Arrange the  the material/chemical for water proofing ' },
        { subtaskdescription: 'Arrange the  the gi/pvc pipe  at site' },
        { subtaskdescription: 'Ask the contractor to mark the level  for the waterproofing' },
        { subtaskdescription: 'Ask the contractor to fill all the holes before waterproofing' },
        { subtaskdescription: 'Phase 2 Chajja Waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard for curing of the waterproofed surface' },
        { subtaskdescription: 'Phase 1 Sloping terrace waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the contractor and labour  for waterproofing' },
        { subtaskdescription: 'Arrange the  the material/chemical for water proofing ' },
        { subtaskdescription: 'Arrange the  the gi/pvc pipe  at site' },
        { subtaskdescription: 'Ask the contractor to mark the level  for the waterproofing' },
        { subtaskdescription: 'Ask the contractor to fill all the holes before waterproofing' },
        { subtaskdescription: 'Phase 2 Sloping terrace waterproofing', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard for curing of the waterproofed surface' },
    ];

    async function WaterproofingfunCall() {
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
    WaterproofingfunCall();
}



if (newDatanew.subactivityname === "Brick Work") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Arrange the bricks/blocks ,sand and cement at site' },
        { subtaskdescription: 'Assign the  contractor for the work' },
        { subtaskdescription: 'Arrange the doors and window frames and hold fasts at site' },
        { subtaskdescription: 'Make the water and electricity arrangements at site' },
        { subtaskdescription: 'Ask the contractor to deliver the scaffholding material at site' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to soak the bricks in water before laying' },
        { subtaskdescription: 'Explain the brick layout to the contractor' },
        { subtaskdescription: 'Finalise the bond of brickwork' },
        { subtaskdescription: 'Ask the contractor to lay the brickwork in line and in plumb with the beam bottom' },
        { subtaskdescription: 'Calculate the quantity of door and Window frames and arrange them' },
        { subtaskdescription: 'Ask the contractor to do proper raking of joints' },
        { subtaskdescription: 'Ask the contractor not to do brickwork more than 1.5m in height in one day' },
        { subtaskdescription: 'Ask the contractor to do brickwork in proper line and level' },
        { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the guard for the curing ' },
        { subtaskdescription: 'Ask the contractor for daily cleaning of site after the work' },
        { subtaskdescription: 'Phase 1 For Block Masonry', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Arrange the bricks/blocks ,sand and cement at site' },
        { subtaskdescription: 'Assign the  contractor for the work' },
        { subtaskdescription: 'Arrange the doors and window frames and hold fasts at site' },
        { subtaskdescription: 'Make the water and electricity arrangements at site' },
        { subtaskdescription: 'Ask the contractor to deliver the scaffholding material at site' },
        { subtaskdescription: 'Phase 2 For Block Masonry', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Explain the brick layout to the contractor' },
        { subtaskdescription: 'Finalise the bond of brickwork' },
        { subtaskdescription: 'Ask the contractor to lay the brickwork in line and in plumb with the beam bottom' },
        { subtaskdescription: 'Calculate the quantity of door and Window frames and arrange them' },
        { subtaskdescription: 'Ask the contractor to do proper raking of joints' },
        { subtaskdescription: 'Ask the contractor not to do brickwork more than 1.5m in height in one day' },
        { subtaskdescription: 'Ask the contractor to do brickwork in proper line and level' },
        { subtaskdescription: 'Phase 3 For Block Masonry', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the guard for the curing ' },
        { subtaskdescription: 'Ask the contractor for daily cleaning of site after the work' },
    ];

    async function BrickWorkfunCall() {
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
    BrickWorkfunCall();
}







if (newDatanew.subactivityname === "Plaster Work") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Arrange  the  sand  cement and chicken mesh  at site' },
        { subtaskdescription: 'Assign the contractor for the plaster work' },
        { subtaskdescription: 'Make the electricity and Water arrangements at site' },
        { subtaskdescription: 'Ask the contractor to arrange the scaffholding material at site' },
        { subtaskdescription: 'Ask the contractor for proper hacking of column before plaster' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to make the level dots before plaster' },
        { subtaskdescription: 'Ask the contractor to keep the plaster in plumb' },
        { subtaskdescription: 'Ask the contractor to properly finish the corners and edges' },
        { subtaskdescription: 'Ask the contractors to fill the holes properly' },
        { subtaskdescription: 'Ask the contractor to maintain 3-4 days gap between two coats of plaster' },
        { subtaskdescription: 'Ask the contractor to fix chicken mesh in Brick-RCC joints' },
        { subtaskdescription: 'Ask the contractor to lay the cement bags below the wall which is being plastered' },
        { subtaskdescription: 'Phase 3', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard to do proper curing of the plaster' },
        { subtaskdescription: 'Phase 1 External Plaster', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to bring good qualities of bamboos for scaffholding' },
        { subtaskdescription: 'Ask the contractor to tie the scaffholding properly' },
        { subtaskdescription: 'Ask the contractors to fill the holes properly' },
        { subtaskdescription: 'Phase 2 External Plaster', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to make the level dots before plaster' },
        { subtaskdescription: 'Ask the contractor to keep the plaster in plumb' },
        { subtaskdescription: 'Ask the contractor to properly finish the corners and edges' },
        { subtaskdescription: 'Ask the contractors to fill the holes properly' },
        { subtaskdescription: 'Ask the contractor to maintain 3-4 days gap between two coats of plaster' },
        { subtaskdescription: 'Ask the contractor to fix chicken mesh in Brick-RCC joints' },
        { subtaskdescription: 'Ask the contractor to lay the cement bags below the wall which is being plastered' },
        { subtaskdescription: 'Phase 3 External Plaster', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the guard to do proper curing of the plaster' },
    ];

    async function PlasterWorkfunCall() {
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
    PlasterWorkfunCall();
}





if (newDatanew.subactivityname === "Electrical") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1  Slab Conduting', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the electrician been for the work' },
        { subtaskdescription: 'Explain the electrician  all the work with the  drawings' },
        { subtaskdescription: 'Ask the electrician to have a initial review and check if any interdepencies occur' },
        { subtaskdescription: 'Take the quantity of materials from the electrician and give to purchase manager' },
        { subtaskdescription: 'Ask the purchase manager to arrange the materials on site' },
        { subtaskdescription: 'Indicate for the electrical lines, locations of DB,Fan box ,etc to the electrician' },
        { subtaskdescription: 'Ask the electrician to check the centre of the fan hook' },
        { subtaskdescription: 'Ask the RCC contractor not to damage the electrical conduits while concreting' },
        { subtaskdescription: 'Phase 2 Wall Conduting', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the electrician been for the work' },
        { subtaskdescription: 'Explain the electrician  all the work with the  drawings' },
        { subtaskdescription: 'Ask the electrician to have a initial review and check if any interdepencies occur' },
        { subtaskdescription: 'Ask the electrician to clear the interdepencies and coordinate with the other agencies' },
        { subtaskdescription: 'Take the quantity of materials from the electrician and give to purchase manager' },
        { subtaskdescription: 'Ask the purchase manager to arrange the materials on site' },
        { subtaskdescription: 'Ask the electrician to check the material' },
        { subtaskdescription: 'Indicate for the electrical lines, locations of DB,MCB ,switch boxes etc to the electrician' },
        { subtaskdescription: 'Ask the contractor to do the chasing work with machine and it should be in line' },
        { subtaskdescription: 'Ask the contractor not to take the sharp bends and do not overlap the conduits' },
        { subtaskdescription: 'Confirm the number of points in each room as per the drawing.' },
        { subtaskdescription: 'Confirm the location of the points.' },
        { subtaskdescription: 'Ensure that the height of all the boards and points is as specified.' },
        { subtaskdescription: 'Check the line, level, and alignment of battening / casing-capping.' },
        { subtaskdescription: 'Ensure that the quality and specification of all the material is as approved.' },
        { subtaskdescription: 'Check the sizes of the boards as per the pictures on it.' },
        { subtaskdescription: 'Ask the contractor to finish the chased portion with cement mortar' },
        { subtaskdescription: 'Phase 3 Wiring', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Inform the contractor to Cover all the boxes with dummy plates | Thermalcol to prevent damage during plastering.' },
        { subtaskdescription: 'Inform the contractor to use color codes in wiring' },
        { subtaskdescription: 'Inform the contractor to Terminate the wires in accessories, considering an extra length for looping.' },
        { subtaskdescription: 'Inform the contractor to Connect the wires in the distribution board and main switch or M.C.B.' },
        { subtaskdescription: 'Check the internal connections inboard for phase and neutral distribution.' },
        { subtaskdescription: 'Check the color codes and sizes of the wire used for various points.' },
        { subtaskdescription: 'Check the operation of all the switches for smooth working.' },
        { subtaskdescription: 'Ensure that there is no gap between the batten and the wall.' },
        { subtaskdescription: 'Ensure that rust-proof clips are fixed.' },
        { subtaskdescription: 'Check the quality and tightening of all the screws with required spacing and with proper gripers Rawal plugs.' },
        { subtaskdescription: 'Check the earthing connections for effective working.' },
        { subtaskdescription: 'Check the supply for all the points by megger or test lamp and prepare the final testing report.' },
        { subtaskdescription: 'Check all the points in the staircase.' },
        { subtaskdescription: 'Check the wiring in the meter cabinet for quality, color codes of wires, a gauge of wire, switches, connections in bus bar, etc.' },
        { subtaskdescription: 'Ensure that the name of the flat owner is painted on the respective meter and the main switch.' },
        { subtaskdescription: 'Check the sizes of cables for the required capacity.' },
        { subtaskdescription: 'Check the main supply for sufficient voltage.' },
        { subtaskdescription: 'Check the parking, street lighting, and all common supply.' },
    ];

    async function ElectricalfunCall() {
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
    ElectricalfunCall();
}







if (newDatanew.subactivityname === "Plumbing") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the plumber for the work' },
        { subtaskdescription: 'Explain all the drawings to the plumber and ask him to carry out the work as per the drawings' },
        { subtaskdescription: 'Stormwater drawing' },
        { subtaskdescription: 'Drainage drawing' },
        { subtaskdescription: 'Water supply lines' },
        { subtaskdescription: 'Septic tank' },
        { subtaskdescription: 'O.H.W.T.' },
        { subtaskdescription: 'U.G.W.T.' },
        { subtaskdescription: 'Terrace level distribution' },
        { subtaskdescription: 'Internal plumbing work details' },
        { subtaskdescription: 'Swimming pool (if provided), details regarding plumbing requirements/filtration plant' },
        { subtaskdescription: 'Ask the Plumber to have a initial review and check if any interdepencies occur' },
        { subtaskdescription: 'Ask the Plumber to clear the interdepencies and coordinate with the other agencies' },
        { subtaskdescription: 'Inform the Plumber not to cut beam or column' },
        { subtaskdescription: 'Indicate the plumbing lines ie, sanitary and drainage line to the plumber' },
        { subtaskdescription: 'Take the quantity of materials  from the plumber and give to purchase manager' },
        { subtaskdescription: 'Ask the purchase manager to arrange the materials at site' },
        { subtaskdescription: 'Ask the plumber to check the materials which has been delivered' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ensure that all fixtures like bibcocks, mixers etc. are fixed properly.' },
        { subtaskdescription: 'Confirm that there is no leakage from cocks/ other C.P. fixtures.' },
        { subtaskdescription: 'Confirm that there is proper pressure to all the cocks / other C.P. fixtures.' },
        { subtaskdescription: 'Ensure that the half turn flush cock is operating properly.' },
        { subtaskdescription: 'Ensure that there is not any choke up in W.C. after continuous flow of water from half turn flush cock.' },
        { subtaskdescription: 'Confirm that there not any cement lump observed in P-trap of W.C.' },
        { subtaskdescription: 'Ensure that there is not any choke up of Nahani trap of bath room after continuous flow of water for five minutes.' },
        { subtaskdescription: 'Ensure that the hot & cold water mixer is operating properly.' },
        { subtaskdescription: 'Ensure that the boiler connections are properly plugged .' },
        { subtaskdescription: 'Ensure that the low level water tank of E.W.C. is operating properly.' },
        { subtaskdescription: 'Confirm that the seat cover of E.W.C. fixed properly.' },
        { subtaskdescription: 'Ensure that proper cleaning is done for all sanitary fixtures.' },
        { subtaskdescription: 'Confirm that the brackets of W.H.B. are painted with oil paint.' },
        { subtaskdescription: 'Confirm that open G.I. pipes fitting connected to E.W.C.are painted.' },
        { subtaskdescription: 'W.H.B. is fitted properly. ( It should not shake).' },
        { subtaskdescription: 'Check the cracks/ breakages for any of the sanitary fittings.' },
        { subtaskdescription: 'Confirm that there is no leakage from G.I. lines in duct after continuous water flow for fifteen minutes.' },
        { subtaskdescription: 'Confirm that the fixing of G.I. / C.I./ P.V.C. lines in plumb and with proper clamping.' },
        { subtaskdescription: 'Confirm that there is no leakage in the drainage chambers.' },
        { subtaskdescription: 'Confirm that there are no cracks on white cement filled between wash basin and wall.' },
        { subtaskdescription: 'Confirm that there is no leakage in the main inlet and outlet G.I. lines or water tanks.' },
        { subtaskdescription: 'Ensure that the P.V.C. outlet pipes for wash hand basin and kitchen sink are fixed properly.' },
        { subtaskdescription: 'Ensure that the escape spouts from W.C. and bath are provided.' },
        { subtaskdescription: 'Ask the plumber to make the arrangements for the pressure and the leakage test' },
        { subtaskdescription: 'Ask the plumber to do the final check and the rectification works' },
    ];

    async function PlumbingfunCall() {
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
    PlumbingfunCall();
}






if (newDatanew.subactivityname === "Flooring") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Arrange the latest GFC Drawings at Site' },
        { subtaskdescription: 'Ask the contractor for cleaning and surface preparation for tiling' },
        { subtaskdescription: 'Confirm the availability of clearance from Brick and plaster department to start the work.' },
        { subtaskdescription: 'Confirm the availability of clearance from Plumbing and Electrical department to proceed tiling works.' },
        { subtaskdescription: 'Ask the contractor to arrange the required tools at site' },
        { subtaskdescription: 'Arrange the quantity of tiles required to complete the work available.Code and Brand to be checked' },
        { subtaskdescription: 'Explain the contractor about the pattern of laying the tiles' },
        { subtaskdescription: 'Ask the purchase manager to arrange the materials at site' },
        { subtaskdescription: 'Assign the contractor for the work' },
        { subtaskdescription: 'Make the electricity and Water arrangements at the site' },
        { subtaskdescription: 'Arrange the adhesive,grouting compound and silicon a site' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to fix the height indicators properly' },
        { subtaskdescription: 'Ask the contractor to cure the ceramic tiles before placing when fiing done using cement mortar' },
        { subtaskdescription: 'Ask the contractor to maintain the line and level of skirting' },
        { subtaskdescription: 'Ask the contractor to maintain the slopes as per the specifications' },
        { subtaskdescription: 'Ask the contractor that the corners of the tiles should be matched' },
        { subtaskdescription: 'Ask the contractor to remove the adhesive from the tile surface' },
        { subtaskdescription: 'Ask the contractor to gently tap the tiles on the mortar bed for the better settlement' },
        { subtaskdescription: 'Ask the contractor to do grouting after 24 hrs of tiling' },
        { subtaskdescription: 'Ask the contractor to properly alignt the joints of the tiles' },
        { subtaskdescription: 'Ask the contractor for barricading of tile area and covering the tiles with plastic sheets' },
        { subtaskdescription: 'Phase 1 Wall Tiles', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Arrange the latest GFC Drawings at Site' },
        { subtaskdescription: 'Ask the contractor for cleaning and surface preparation for tiling' },
        { subtaskdescription: 'Confirm the availability of clearance from Brick and plaster department to start the work.' },
        { subtaskdescription: 'Confirm the availability of clearance from Plumbing and Electrical department to proceed tiling works.' },
        { subtaskdescription: 'Ask the contractor to arrange the required tools at site' },
        { subtaskdescription: 'Arrange the quantity of tiles required to complete the work available.Code and Brand to be checked' },
        { subtaskdescription: 'Explain the contractor about the pattern of laying the tiles' },
        { subtaskdescription: 'Ask the purchase manager to arrange the materials at site' },
        { subtaskdescription: 'Assign the contractor for the work' },
        { subtaskdescription: 'Make the electricity and Water arrangements at the site' },
        { subtaskdescription: 'Arrange the adhesive,grouting compound and silicon a site' },
        { subtaskdescription: 'Phase 2 Wall Tiles', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ask the contractor to fix the height indicators properly' },
        { subtaskdescription: 'Ask the contractor to cure the ceramic tiles before placing when fiing done using cement mortar' },
        { subtaskdescription: 'Ask the contractor that the corners of the tiles should be matched' },
        { subtaskdescription: 'Ask the contractor to remove the adhesive from the tile surface' },
        { subtaskdescription: 'Ask the contractor to gently tap the tiles  for the better settlement' },
        { subtaskdescription: 'Ask the contractor to do grouting after 24 hrs of tiling' },
        { subtaskdescription: 'Ask the contractor to properly align the joints of the tiles' },
    ];

    async function FlooringfunCall() {
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
    FlooringfunCall();
}










if (newDatanew.subactivityname === "Door") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the carpenter for the work' },
        { subtaskdescription: 'Ask the Carpenter to have a initial review and check if any interdepencies occur' },
        { subtaskdescription: 'Ask the Carpenter to clear the interdepencies and coordinate with the other agencies' },
        { subtaskdescription: 'Arrange the wood ,screw,fiitings,beading,sand paper etc. at site' },
        { subtaskdescription: 'Ask the carpenter to bring all his tools and machinaries' },
        { subtaskdescription: 'Explain the door size,swing and opening direction to the carpenter' },
        { subtaskdescription: 'Make the arrangement for the electriciy' },
        { subtaskdescription: 'Ask the contractor to make the  arrangements  for the spports to the frame ' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Ensure that Access is clear and safe, temporary access has been provided as required.' },
        { subtaskdescription: 'Fastening methods to be confirmed with drawings and details.' },
        { subtaskdescription: 'All walls and ceilings to be confirmed plumb and square/are within tolerances for for frames.' },
        { subtaskdescription: 'Ensure that Door frame has been installed per drawings and specifications' },
        { subtaskdescription: 'Verify the frame as per the hardware schedule' },
        { subtaskdescription: 'Check the Size & specification of shutter,Side of opening,Slots & spacing of hinges.' },
        { subtaskdescription: 'Confirm the Frames for plumb & alignment' },
        { subtaskdescription: 'Ensure the clearance from all side of the shutters' },
    ];

    async function DoorfunCall() {
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
    DoorfunCall();
}














if (newDatanew.subactivityname === "Windows") {

    const dataArranew = [
        { subtaskdescription: 'Phase 1', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Assign the carpenter for the work' },
        { subtaskdescription: 'Ask the Carpenter to have a initial review and check if any interdepencies occur' },
        { subtaskdescription: 'Ask the Carpenter to clear the interdepencies and coordinate with the other agencies' },
        { subtaskdescription: 'Arrange the wood ,screw,fiitings,beading,sand paper etc. at site' },
        { subtaskdescription: 'Ask the carpenter to bring all his tools and machinaries' },
        { subtaskdescription: 'Explain the window size,swing and opening direction to the carpenter' },
        { subtaskdescription: 'Make the arrangement for the electriciy' },
        { subtaskdescription: 'Ask the contractor to make the  arrangements  for the spports to the window frame' },
        { subtaskdescription: 'Phase 2', phaseHeadingShow: 'Yes' },
        { subtaskdescription: 'Fastening methods to be confirmed with drawings and details.' },
        { subtaskdescription: 'All windows to be confirmed plumb and square/are within tolerances for for frames.' },
        { subtaskdescription: 'Ensure that window frame has been installed per drawings and specifications' },
        { subtaskdescription: 'Verify the frame as per the hardware schedule' },
        { subtaskdescription: 'Confirm the Frames for plumb & alignment' },
        { subtaskdescription: 'Ensure  the sliding operation of the shutters for free movement.' },
    ];

    async function WindowsfunCall() {
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
    WindowsfunCall();
}





if (newDatanew.subactivityname === "Paint Work") {

    const dataArranew = [
        { subtaskdescription: 'Arrange the paint material (primer,paint,putty,distemper,oil paint, red oxide,turpentine oil ,brush ) at site or  inform to the purchase manager' },
        { subtaskdescription: 'Assign the contractor for the work' },
        { subtaskdescription: 'Assign the labour for the cleaning work' },
        { subtaskdescription: 'Complete all the prechecks  and contractor to be informed to start the work' },
        { subtaskdescription: 'If the defects been identified ask the contractor  to rectify the defects within the given deadline' },
        { subtaskdescription: 'Ensure that the brand and color shade of paint is as per approval' },
    ];

    async function PaintWorkfunCall() {
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
    PaintWorkfunCall();
}