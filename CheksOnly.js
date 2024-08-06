if (newDatanew.subactivityname === "Gradeaaaaaaaaaaa") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },     
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },     
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
        { checksHeading: 'Compaction', checksdescription: 'Ensurevvvvvvv' },
    ];

    async function GradeSlabChacks() {
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
    GradeSlabChacks();
}








if (newDatanew.subactivityname === "Site Mobilization - Shoring | Protection (13)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Layout Check', checksdescription: 'Shoring layout is on site and accessible for review.' },
        { checksHeading: 'Shoring material Check', checksdescription: 'Material Chek as per usage for the shoring purpose' },
        { checksHeading: 'Soil Check ', checksdescription: 'The soil that supports shoring/reshoring has been evaluated by a qualified person' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Levels', checksdescription: 'All beams have been installed level and plumb and are centered in U-heads.' },
        { checksHeading: 'Equipment Check', checksdescription: 'inspected the shoring equipment.' },
        { checksHeading: 'Spacing Check', checksdescription: 'Shoring Bay spacing does not exceed that shown on the drawings/specifications' },
        { checksHeading: 'Supports load Check', checksdescription: 'Shore heads are not eccentrically loaded, unless designed for such loading' },
    ];

    async function SiteMobilizationShoringProtection() {
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
    SiteMobilizationShoringProtection();
}










if (newDatanew.subactivityname === "Plinth Beam Shuttering - Shuttering Bottom Case - 02 (158)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'General Check', checksdescription: 'In case of pile cap check if the plinth beam is to be laid above the pile cap or along the pile cap' },
        { checksHeading: 'Plinth height check', checksdescription: 'It is recommended that the minimum plinth height of 150 mm is adopted from the top of the road in front of your plot.' },
        { checksHeading: 'Drain board check', checksdescription: 'Polythene/ Drain board shall be placed between the adjacent plot boundaries from the foundation level to avoid ingress of water in future.' },
        { checksHeading: 'PCC check', checksdescription: 'P.C.C. of appropriate grade and thickness (minimum 50 mm and M 5 or 1: 4:8 grade) should be done before starting shuttering for ground beam and it should be properly levelled and in perfect line. (Since we are not doing any PCC above Brickwork. Please do proper curing of brickwork before start of plinth beam concreting.' },
        { checksHeading: 'PCC check', checksdescription: 'The P.C.C. shall extended minimum 50 mm beyond the width of beam on both faces. Check all the level of ground beams. It should be min 150 mm in natural ground, so that the earth filled within walls or a beam doesn’t escape during plinth filling. Do it even, not mention in drawings. See that all Ground beams are on same level. (Not applicable in our case)' },
        { checksHeading: 'Brickwork check', checksdescription: 'See that all the Brick work on which beam is laid is properly aligned (particularly in case of freshly excavated foundation pits) to that the ground beam doesn’t sag during curing or watering because of settlement of loose soil.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Formwork check', checksdescription: 'Carryout formwork for ground beams or plinth beams after filling as providing props may result in delay as removal props needs time and as filling work can be taken up during that period resulting in delay of slab.' },
        { checksHeading: 'Shuttering check', checksdescription: 'The shuttering should be dry and shall be cleaned carefully before applying mould release agent. The same type of release agent should be used throughout on similar shuttering materials.' },
        { checksHeading: 'Shuttering check', checksdescription: 'The surface of shuttering should be even and thinly coated with mould release agent (Shuttering Oil).' },
        { checksHeading: 'Shuttering check', checksdescription: 'Shuttering should be fixed in such a manner that the joints should be tight against leakage of cement slurry.' },
        { checksHeading: 'Beam column Junction check', checksdescription: 'Ensure that at junction of beam column is tight and it shouldn’t bulge during concreting.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Remove all the debris e.g. dust, paper, leaves, chippings of woods, nails, reinforcement wastage, soil particles etc.' },
    ];

    async function PlinthBeamShutteringShutteringBottomCaseCheck() {
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
    PlinthBeamShutteringShutteringBottomCaseCheck();
}









if (newDatanew.subactivityname === "Grade Slab") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Compaction check', checksdescription: 'Ensure that proper compaction of backfilled soil has been done' },
        { checksHeading: 'Antitermite check', checksdescription: 'Antitertermite treatment has been done' },
        { checksHeading: 'Seawage line check', checksdescription: 'Sewage plumbing work has been completed' },
        { checksHeading: 'Level check', checksdescription: 'The level of the grade slab has been finalised and marked on the site' },
        { checksHeading: 'Cleaning check', checksdescription: 'Remove all the debris e.g. dust, paper, leaves, chippings of woods, nails, reinforcement wastage, soil particles etc.' },
        { checksHeading: 'Rebars check', checksdescription: 'Reinforcement has been laid as per the drawing. The cover ,spacing and lapping of bars is as per the specifications' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding has been done and proper cover has been provided' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Supervision Check', checksdescription: 'See that concreting is done under skilled supervision. Never leave it to labour on site' },
        { checksHeading: 'Mix ratio check', checksdescription: 'The ratio of concrete and the water cement ratio should be as per the specifications or as directed by the engineer in charge' },
        { checksHeading: 'W/C Ratio check', checksdescription: 'Add water as per predetermined quantity only. Always measure the water with measuring container before adding in concrete.' },
        { checksHeading: 'Mix time check', checksdescription: 'Mix the wet concrete thoroughly for around 2 minutes to get the consistent concrete' },
        { checksHeading: 'Finishing check', checksdescription: 'Finish the surface and edges of concrete after placing of concrete using with trowels or wooden floats or metal floats.' },
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Curing check', checksdescription: 'Do proper curing when the concrete has hardened initially' },

    ];

    async function GradeSlabChacks() {
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
    GradeSlabChacks();
}







if (newDatanew.subactivityname === "Beam & Slab Shuttering | Reinforcement | R.C.C") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Height Check', checksdescription: 'Height of slab from plinth / slab level.' },
        { checksHeading: 'Shuttering material Check', checksdescription: 'Quality of shuttering material.' },
        { checksHeading: 'Column cap check', checksdescription: 'Proper fixing of cap on column to take load of beam & slab shuttering.' },
        { checksHeading: 'Beam bottom check', checksdescription: 'Proper fixing of beam bottom cap.' },
        { checksHeading: 'Plumb and line check', checksdescription: 'Proper fixing of props for bottom in line & plumb at every 0.6 m internal.' },
        { checksHeading: 'Packing check', checksdescription: 'Packing below props only one or two wooden plank pieces is allowed. (No bricks or blocks are allowed).' },
        { checksHeading: 'Support check', checksdescription: 'Support to vertical joint of shuttering for 0.6 m beam or 0.75 m beam.' },
        { checksHeading: 'Packing check', checksdescription: 'Gaps in beam sides to be filled.' },
        { checksHeading: 'Beam sides check', checksdescription: 'Ensure fixing of steel plates over beam sides in flush position.' },
        { checksHeading: 'Side Plank Check', checksdescription: '‘Side plank’ for slab panel periphery' },
        { checksHeading: 'Tightening check', checksdescription: 'Water tightening of plates joints & ghabadi work.' },
        { checksHeading: 'Oiling check', checksdescription: 'Oiling of slab shuttering.' },
        { checksHeading: 'Line check', checksdescription: 'Outer line of beam sides.' },
        { checksHeading: 'Dimension check', checksdescription: 'Room sides & diagonals.' },
        { checksHeading: 'Tightening check', checksdescription: 'Water tightness near junctions of columns & beams.' },

    ];

    async function BeamSlabShutteringReinforcementRCCChacks() {
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
    BeamSlabShutteringReinforcementRCCChacks();
}






if (newDatanew.subactivityname === "Beam & Slab  Reinforcement - GF (178) + FF (186) + SF (194) + TF (202) + FoF (210) + Tower (218) Reinforcement") {

    const dataArranew = [
        { checksHeading: 'Checking of reinforcement for Beams.', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Rebars Check', checksdescription: 'Bottom bars, top bars, etra bars,bentup bars, stirrups, distance of bentup bars from face of supports, spacing of the stirrups as per R.C.C. drawing, proper tying of stirrups.etc' },
        { checksHeading: 'Dia of bar check', checksdescription: 'Diameter of bars, binding of stirrups in line.' },
        { checksHeading: 'Bentup Bar Check', checksdescription: 'Length of bentup bars projecting in the adjacent beams.' },
        { checksHeading: 'Bentup Bar Check', checksdescription: 'L for bentup at discontinuous end.' },
        { checksHeading: 'Cover check', checksdescription: 'Side covers & bottom covers for beams.' },
        { checksHeading: 'Pin bar Check', checksdescription: 'Pin is provided at required places between reinforcement.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of laps in beam if provided with required length.' },
        { checksHeading: 'Lapping check', checksdescription: 'Lapping of bars' },
        { checksHeading: 'Steel for slab', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Spacing check', checksdescription: 'Spacing, diameter of bent up bars & main bars.' },
        { checksHeading: 'Bentup bar check', checksdescription: 'Distance of bent ups from face of beamLength of bent up bars projecting in adjacent bays.Height of the bent up bars.' },
        { checksHeading: 'Chair bar check', checksdescription: 'Chair below  bent up bar.Covering for slab at bottom.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of laps of required length.Dowels of slab & beam.' },
        { checksHeading: 'Steel dia check', checksdescription: 'Distribution steel diameters, spacing & ties.' },
        { checksHeading: 'Stirrups check', checksdescription: 'Stirrups in column for upper floor column size.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of reinforcement in the beam column joints' },
        { checksHeading: 'Checklist for Top and Bottom Extra Bars', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Rebar dia check', checksdescription: 'The diameter of Top and Bottom Extra Reinforcement of the beam shall be checked.' },
        { checksHeading: 'Top Bar position check', checksdescription: 'The location of Top extra shall be checked.' },
        { checksHeading: 'Bottom Bar position check', checksdescription: 'Ensure proper position of Bottom extra reinforcement.' },
        { checksHeading: 'Extra bar check', checksdescription: 'The length of Top extra bars shall be checked as per drawings.' },
        { checksHeading: 'Extra bar check', checksdescription: 'Length of top extra bars beyond the column shall also be checked as per structural drawings.' },
        { checksHeading: 'Extra bar check', checksdescription: 'The length of the bottom extra reinforcement shall be measured.' },
        { checksHeading: 'Pin bar check', checksdescription: 'Check the vertical clear distance between the top Main bars and Top extra bar. To maintain the gap, the Pin bar is placed.' },
        { checksHeading: 'Pin bar check', checksdescription: 'Make sure that the diameter of the Pin bar or Spacer shall be greater than the size or aggregate that is used for concrete.' },
        { checksHeading: 'Checklist for Stirrups', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Dia check', checksdescription: 'The diameter of the stirrups shall be checked.' },     
        { checksHeading: 'Spacing check', checksdescription: 'Check the spacing between the stirrups near the support as well as mid-span of the entire beam.' },
        { checksHeading: 'Bend check', checksdescription: 'The end of the stirrups or hook shall be at 135 degrees.' },
        { checksHeading: 'Stirrups check', checksdescription: 'Extra stirrups shall be provided at the junction of beams.' },
        { checksHeading: 'Checklist for Cover Block', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cover check', checksdescription: 'Check the Thickness of the cover block as per drawings given by Structural Consultants.' },
        { checksHeading: 'Grade check', checksdescription: 'The grade of the concrete cover block shall be the same as of Grade of concrete.' },
        { checksHeading: 'Checklist for Lapping', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Lapping position check', checksdescription: 'The position of Lapping of the Top Main bar shall be checked as per structural drawings.' },
        { checksHeading: 'Lapping position check', checksdescription: 'The position of the Lapping of the Bottom Main bar shall also be checked as per structural drawings.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of Lapped bars shall be checked.' },
        { checksHeading: 'Lapping check', checksdescription: 'Bottom bars Lapping should not be placed at the middle span of the beam. It is because of the maximum bending moment.' },     
        { checksHeading: 'Lapping check', checksdescription: 'Top Main lapping should not be placed near the support of the beam. It is because of the maximum shear force.' },
        { checksHeading: 'Lapping check', checksdescription: 'Make sure the lap should be placed in a staggered manner.' },
        { checksHeading: 'Checklist for development length', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Development length check', checksdescription: 'Measure the development length of Top Main reinforcement.' },
        { checksHeading: 'Development length check', checksdescription: ' Make sure that the Main bars shall be extending into the columns.' },
        { checksHeading: 'Development length check', checksdescription: 'Development length of Top Extra and Bottom Main bars (L shape reinforcement) shall be checked.' },
        { checksHeading: 'Checklist for Bar Binding', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Binding check', checksdescription: 'Ensure the proper binding of reinforcement at the junction of main bars and stirrups.' },
        { checksHeading: 'Binding check', checksdescription: 'Bottom extra and Top extra shall be bind properly using binding wire.' },
        { checksHeading: 'Binding check', checksdescription: 'The binding wire should not be loose or remove from steel bars while concreting.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Check that oil should not come in contact with the surface of Reinforcement.' },
        { checksHeading: 'Ties check', checksdescription: 'Temporary ties in column reinforcement shall be provided.' },
        { checksHeading: 'Checklist for Dowel Bars', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Dowel bars shall be provided for a future extension for the upper story column.' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Check the reinforcement shall be left for the upper floor staircase or not.' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Ensure the reinforcement shall be left for balconies.' },
        { checksHeading: 'Dia of dowel check', checksdescription: 'Check the diameter of the dowels bars.' },
        { checksHeading: 'Length check', checksdescription: 'Check the length of dowel bars as per approved drawings.' },
        { checksHeading: 'Dowel check', checksdescription: 'Dowel bars of the beam shall be checked.' },
    ];

    async function beamAndSlabChacks() {
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
    beamAndSlabChacks();
}













if (newDatanew.subactivityname === "Beam & Slab  RCC- GF (180) + FF (188) + SF (196) + TF (205) + FoF (212) + Tower (220)  RCC Slab") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Supervision Check', checksdescription: 'See that concreting is done under skilled supervision. Never leave it to labour on site' },
        { checksHeading: 'Mix ratio check', checksdescription: 'The ratio of concrete and the water cement ratio should be as per the specifications or as directed by the engineer in charge' },
        { checksHeading: 'W/C Ratio check', checksdescription: 'Add water as per predetermined quantity only. Always measure the water with measuring container before adding in concrete.' },
        { checksHeading: 'Mix time check', checksdescription: 'Mix the wet concrete thoroughly for around 2 minutes to get the consistent concrete' },
        { checksHeading: 'Finishing check', checksdescription: 'Finish the surface and edges of concrete after placing of concrete using with trowels or wooden floats or metal floats.' },
        { checksHeading: 'Checklist after concreting', phaseHeadingShow: 'Yes' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of sides of outer beams after 48 hours.' },
        { checksHeading: 'curing check', checksdescription: 'Making small bunds in sand & cement mortar (1:10) for ponding method of curing for slab, with each bay having maximum size of 2.0 m x 2.0 m.' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of internal beam sides after 72 hours.' },
        { checksHeading: 'curing check', checksdescription: 'Curing of slab for 28 days.' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of slab after 7 days, 10 days or 15 days depending on spans.' },
        { checksHeading: 'Hacking check', checksdescription: 'Hacking of beam sides, beam bottom, slab bottom.' },
        { checksHeading: 'Honeycombing check', checksdescription: 'Minor honey combing surfaces, finished with rich mortar.' },
        { checksHeading: 'Honeycombing check', checksdescription: 'Major honeycombing shall be brought to the notice of R.C.C.Consultant.' },
    ];

    async function ReinforcementWorkChacks() {
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
    ReinforcementWorkChacks();
}









if (newDatanew.subactivityname === "Toilet Waterproofing : Plumbing - B1 Waterproofing (247) | B2 Waterproofing (252) | B3 Waterproofing (257) | B4 Waterproofing (262) | GF Waterproofing (267) | FF Waterproofing (272) | SF Waterproofing (277) | TF Waterproofing (282) | FoF Waterproofing (287) | Tower Waterproofing (292)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Plaster Check', checksdescription: '1. Internal plaster of walls, leaving margin of 450mm from the final floor level be completed.' },
        { checksHeading: 'Chasing Check', checksdescription: '2. Grooving / chasing for concealed G.I. piping / electrical conduit pipe be completed.' },
        { checksHeading: 'Concealed work check', checksdescription: '3. All concealed G.I. & Electrical work in bathroom / toilet be completed.' },
        { checksHeading: 'Cleaning check', checksdescription: '4. Removal of all debris from toilet/ bathroom & chiseling of extra mortar, if any, to expose the slab.' },
        { checksHeading: 'Nahani trap check', checksdescription: '5. Completion of making holes in external walls for connecting nahani trap, p trap etc. to external drainage line.' },
        { checksHeading: 'Cleaning check', checksdescription: '6. Thorough cleaning of bathroom/ toilet with sufficient quantity of water is done.' },
        { checksHeading: 'Level check', checksdescription: '7. Marking levels on walls with respect to floor level.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Leakage check', checksdescription: '1. Any leakage in base slab.' },
        { checksHeading: 'Slope check', checksdescription: '2. Maintain slope of 1:100 from entrance door towards water escape pipe (drainage pipe) with cement mortar 1:4, thickness 25 mm to 40 mm.' },
        { checksHeading: 'Base coat check', checksdescription: '3. Complete the base coat on walls up to height of 300 mm above toilet finish floor level covering all beam top junction etc. properly.' },
        { checksHeading: 'Curing check', checksdescription: '4. Flood the base coat with water, upto slab drop top, for minimum 4 days for curing & testing of leakage, if any.' },
        { checksHeading: 'Outlet check', checksdescription: '5. Provide 25 mm G.I. / P.V.C. pipe for water escape outlet just above the base coat of W.C./Bath/Toilet.' },
        { checksHeading: 'Layer Check', checksdescription: '6. Check the layers applying as per the design & instruction' },
        { checksHeading: 'Phase 3 : Checklist for Topping Coat for Toilet/ Bathroom Waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Slope check', checksdescription: '1. Topping with 1:4 cement mortar with waterproofing compound and maintain proper slope from entrance to nahani trap & finish with neat cement slurry.' },    
        { checksHeading: 'Curing check', checksdescription: '2. Provide curing for minimum 7 days with water. Minimum 7.5 cm depth of water to be maintained.' },
    ];

    async function WaterproofingChacks() {
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
    WaterproofingChacks();
}

















if (newDatanew.subactivityname === "Terrace Waterproofing :  Terrace Waterproofing Preparation Checks (414) | B1 Sunken Filling COBA (245) | B2 Sunken Filling COBA (250) | B3 Sunken Filling COBA (255) |  B4 Sunken Filling COBA (260) | GF Sunken Filling COBA (265) | FF Sunken Filling COBA (270) | SF Sunken Filling COBA (275) | TF Sunken Filling COBA (280) | FoF Sunken Filling COBA (285) | Tower Sunken Filling COBA (290) |") {

    const dataArranew = [
        { checksHeading: 'Phase 1 Terrace Waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: '1. Remove extra mortar accumulated on terrace and clean the surface clean with water.' },
        { checksHeading: 'Application check', checksdescription: '2. Mix and apply cement slurry on terrace.' },
        { checksHeading: 'Bottom level check', checksdescription: '3. Leave sufficient margin (approx. 150mm) w/p from terrace door bottom level.' },
        { checksHeading: 'Level check', checksdescription: '4. Mark the levels on parapet wall all round.' },
        { checksHeading: 'Rain water pipe check', checksdescription: '5. Provide rain water pipe outlet bend in correct position.' },
        { checksHeading: 'Soaking check', checksdescription: '6. Make available well burnt brick bats, properly soaked in water.' },
        { checksHeading: 'Phase 2 Terrace Waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Level check', checksdescription: '1. Check for levels & proper slope towards, rain water pipe outlet.' },
        { checksHeading: 'Slope check', checksdescription: '2. Fix the bricks & fill the joints of brick bats with C.M. 1:6 and maintain a slope of 1:150 with waterproofing compound.' },
        { checksHeading: 'Shape Check', checksdescription: '3. Proper round shape to the mortar near water pipe.' },
        { checksHeading: 'Curing check', checksdescription: '4. Curing of brickbat coba for 7 days.' },      
        { checksHeading: 'Mortar check', checksdescription: '1. Spread the cement mortar of 1:4 proportion along with waterproofing compound over brick bat coba.' },
        { checksHeading: 'Finish check', checksdescription: '2. Apply cement slurry over the surface along with waterproofing compound for smooth finish.' },
        { checksHeading: 'Line check', checksdescription: '3. Mark lines on polished surface.' },
        { checksHeading: 'Edges check', checksdescription: '4. Construct projected edge between the parapet & the watta on the next day.' },
        { checksHeading: 'Curing check', checksdescription: '5. Clean & cure the final coat atleast 21 days by ponding 150mm high water, standing on it.' },
    ];

    async function WaterProffingSlabChacks() {
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
    WaterProffingSlabChacks();
}









if (newDatanew.subactivityname === "Brick Work : B1 Brick Work (83) + B2 Brick Work (94) + B3 Brick Work (105) + B4 Brick Work (116) + B1 (222)  + B2 (223) + B3 (224) + B4 (225) + GF (226) + FF (227) + SF (228) + TF (229) + FoF (230) + Tower (231)  Brick Work") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: 'Cleaning the entire floor, before starting the line out of masonry.' },
        { checksHeading: 'Screening check', checksdescription: 'Screening of sand,mortar proportion & soaking of bricks.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Door window check', checksdescription: 'Erection of door & window frames with fixing the  necessary number of holdfast.' },
        { checksHeading: 'Mortar thickness check', checksdescription: 'Thickness of joints not more than 12mm and Racking of joints & surface cleaning after completion of day-to-day work.' },
        { checksHeading: 'Height check', checksdescription: 'Brickwork should be taken up in layers not exceeding one meter height at a time.' },
        { checksHeading: 'Scaffholding check', checksdescription: 'Check type of scaffolding and whether tied and braced properly.' },
        { checksHeading: 'Rebars check', checksdescription: 'Check wheather  reinforcement is provided in lintel in brick wall' },
        { checksHeading: 'Lintel check', checksdescription: 'Above Lintel work till Roof | Beam Bottom' },
        { checksHeading: 'Filling check', checksdescription: 'Filling of alll the Joints' },
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Curing check', checksdescription: 'Curing should be done for 7 days' },
    ];

    async function BrickWorkChacks() {
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
    BrickWorkChacks();
}











if (newDatanew.subactivityname === "Phase 1 For Block Masonry (ACC Block, If in case AAC Block are used for masonry, in that case these checks is to be used  B1 Brick Work (83) + B2 Brick Work (94) + B3 Brick Work (105) + B4 Brick Work (116) + B1 (222)  + B2 (223) + B3 (224) + B4 (225) + GF (226) + FF (227) + SF (228) + TF (229) + FoF (230) + Tower (231)  Brick Work") {

    const dataArranew = [
        { checksHeading: 'Phase 1 For Block Masonry', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: 'Has the contractor cleaned the entire floor before starting the lineout of masonry?' },
        { checksHeading: 'Hacking check', checksdescription: 'Has the RCC surface that is next to brickwork hacked (6 mm deep and 30 mm c/c.) and wetted?' },
        { checksHeading: 'Material check', checksdescription: 'Has the Quality, Size and Type of bricks are delivered to site as per architects specification?' },
        { checksHeading: 'Soaking check', checksdescription: 'Have the Blocks (of approved quality) been soaked in water till the bubble ceases to come up?' },
        { checksHeading: 'Phase 1 For Block Masonry', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Level course check', checksdescription: 'Has a layer of Leveling Course PCC 1:3:6 provided,to adjust full size blocks, if the ground is not in level' },
        { checksHeading: 'Mortar mix check', checksdescription: 'Check if the Mortar mix (mixed as per specification) is uniform and of optimum workability (Ease to work with)?' },
        { checksHeading: 'Alignment check', checksdescription: 'Block work should be in proper alignment and plumb with a systematic bond (English bond unless otherwise specified). Has all the Vertical joints been staggered?' },
        { checksHeading: 'Raking check', checksdescription: 'All Joints to be even and of about 10mm and Raked (8 to 10 mm) out properly when the mortar is green Ensure only 1.5m of brick work is laid in a day.' },
        { checksHeading: 'Rebars check', checksdescription: 'At every 1m height, Is a band of concrete (M20 Grade) with M.S. reinforced (2 nos.of 8mm dia Tor bars and 6mm dia M.S U-bars at 300mm c/c cement) is placed in half brick' },
        { checksHeading: 'Layer check', checksdescription: 'Ensure that the top layer, beneath the beam, contains a full thickness block to allow good distribution of load. Otherwise fill the gap with concrete' },
        { checksHeading: 'Filling check', checksdescription: 'Has all the voids in brick joints filled with consistent grout?' },
        { checksHeading: 'Bags Placing Check', checksdescription: 'Are Empty cement bags placed near to adjoining wall for collecting fallen mortar?' },
        { checksHeading: 'Plumb check', checksdescription: 'Has all the dates of work done been marked on walls (to ensure curing time) Are all courses are in plumb,line & level?' },
        { checksHeading: 'Phase 3 For Block Masonry', phaseHeadingShow: 'Yes' },
        { checksHeading: 'cleaning check', checksdescription: 'Has the entire floor been cleaned after the work?' },
        { checksHeading: 'curing check', checksdescription: 'Has the Block work been Cured for a period of 07 days (minimum)?' },
    ];

    async function BricWorkNweChacks() {
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
    BricWorkNweChacks();
}







if (newDatanew.subactivityname === "Plaster Work - B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Plaster (Row - 302 to 311)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Services check', checksdescription: 'Service line like electrical & plumbing line chasing & filling of voids.' },
        { checksHeading: 'Hacking check', checksdescription: 'Has Sufficient hacking (tacha) been done to to all R.C.C. work.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Cleaning of all R.C.C. & masonry surfaces.' },
        { checksHeading: 'Material check', checksdescription: 'Is the sand and cement used for plaster of good quality and as per the specifications' },
        { checksHeading: 'Watering check', checksdescription: 'Watering of surface before one day of plastering.' },
        { checksHeading: 'Covering check', checksdescription: 'Covering of electrical boxes by dummy plates.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Thickness check', checksdescription: 'Check if the thickness of the plaster is as per the specifications' },
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: 'Cleaning of plastered surface,windows,doors after plastering' },
        { checksHeading: 'Curing check', checksdescription: 'Curing for minimum 10 days.' },
    ];

    async function PlasterWorkChacks() {
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
    PlasterWorkChacks();
}









if (newDatanew.subactivityname === "External Plaster - Non Elevation Side (313) & Elevation Side (315)") {

    const dataArranew = [
        { checksHeading: 'Phase 01 : Scaffolding of External Plaster', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Material check', checksdescription: 'Bamboos  & wooden planks should not be old & weak, so as to avoid probable accidents.' },
        { checksHeading: 'Hard surface check', checksdescription: 'Erect the base bamboos on hard & firm ground, with a minimum anchorage of 45cm (1’6″) in-ground.' },
        { checksHeading: 'Plumb check', checksdescription: 'See that the scaffolding is in plumb & not inclined, Ensure that every junction of the scaffolding is well tied.' },
        { checksHeading: 'Scaffholding check', checksdescription: 'Scaffolding erection should be carried out with the help of skilled workmen so that the structure possesses the required stability.' },
        { checksHeading: 'Opening check', checksdescription: 'Locate the holes/openings for taking mortar ghamelas from room to outside at the skirting level.' },
        { checksHeading: 'Scaffholding check', checksdescription: 'Ensure that the scaffolding is used within a week after its erection.' },
        { checksHeading: 'Scaffholding check', checksdescription: 'Scaffolding should be removed step by step, from top to bottom, as the work finishes.' },
        { checksHeading: 'Scaffholding check', checksdescription: 'Keep 90cm (3’0″) distance between the scaffolding and the wall to be plastered, for sufficient working space for the mason.' },
        { checksHeading: 'Supports check', checksdescription: 'Ensure that all the supporting bamboo are passed through the wall & tied internally, with other vertical & horizontal bamboos. Half anchorage in the wall for support should ' },
        { checksHeading: 'Tightening chec', checksdescription: 'Proper wedges in the masonry hole, for the tightness of bamboo, should be provided.' },
        { checksHeading: 'Safety check', checksdescription: 'While removing the scaffolding, ensure that no one is working under that particular area, so as to avoid accidents.' },
        { checksHeading: 'Phase 2 External Plaster', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Smoothness check', checksdescription: 'Smoothness of concrete surface hacked with tacha.' },
        { checksHeading: 'Watering check', checksdescription: 'Water the surface to be plastered one day in advance.' },
        { checksHeading: 'Gaps check', checksdescription: 'The cement sand mortar between junction of bottom beam & the last layer of masonry shall be filled well in advance before plastering.' },
        { checksHeading: 'Parapet wall check', checksdescription: 'For parapet wall, leave a margin of 0.15m ht. in plaster at bottom level from terrace side.' },
        { checksHeading: 'Time Check', checksdescription: '3 to 4 days gap between two successive coats for double coat plaster.' },
        { checksHeading: 'Finishing check', checksdescription: 'Finishing of scaffolding holes properly & immediately.' },
        { checksHeading: 'Phase 3 External Plaster', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: 'Clean the terrace after plastering work.' },
        { checksHeading: 'Curing check', checksdescription: 'Curing the plaster for minimum 15 days.' },
    ];

    async function ExternalPlasterNewChacks() {
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
    ExternalPlasterNewChacks();
}













if (newDatanew.subactivityname === "Slab Electrical Conduting - B1 (86) + B2 (97) + B3 (108) + B4 (119) + GF (179) + FF (187) + SF (195) + TF (203) + FoF (211) + Tower Slab Electrical Conduting (219)") {

    const dataArranew = [
        { checksHeading: 'Drawing Check', checksdescription: 'Check the electrical conduting layout as per the drawing' },
        { checksHeading: 'Layout check', checksdescription: 'Check the actual layout of the conduting in the slab for bill preparation and record purposes.' },
        { checksHeading: 'Location Check', checksdescription: 'Check the center of the fan hook box diagonally for center alignment, considering the loft position in the room.' },
        { checksHeading: 'Fixing Check', checksdescription: 'A bonding solution should be applied to all the pipes and accessories, to avoid the loose fixing of pipes with accessories.' },
        { checksHeading: 'Tieing check', checksdescription: 'Tie the conduits, using binding wire, to each other, and to the slab steel.' },
        { checksHeading: 'Conduit safety check', checksdescription: 'Ensure that conduits do not get damaged with the movement of the laborers on the slab.' },
        { checksHeading: 'Fan box check', checksdescription: 'Ensure that the fan box entries/holes are intact to prevent the cement slurry from entering.' },
    ];

    async function ElectricalChacks() {
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
    ElectricalChacks();
}












if (newDatanew.subactivityname === "Wall Conditing - B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Wall Electrical Conduting (Row - 233 to 242)") {

    const dataArranew = [
        { checksHeading: 'Drawing Check', checksdescription: 'Study the electrical work procedure drawings for the positions of various points, D.B., etc.' },
        { checksHeading: 'Drawing Check', checksdescription: 'Provide the conduits for mains, light circuits TV, and telephone as per the approved drawings.' },
        { checksHeading: 'Inspection box check', checksdescription: 'Provide suitable inspection boxes to permit periodical inspection and to facilitate the removal of wires, if necessary.' },
        { checksHeading: 'Height check', checksdescription: 'Study the drawings in detail and mark the position of switch boxes with respect to the height from F.F.L.' },
        { checksHeading: 'Line out check', checksdescription: 'Do the line out on the wall by color marking.' },
        { checksHeading: 'Chasing Check', checksdescription: 'Start chasing of the wall with a cutting machine.' },
        { checksHeading: 'Bends check', checksdescription: 'Bends in conduit pipes should not be sharp.' },
        { checksHeading: 'Conduit Check', checksdescription: 'Provide thick conduit pipes of the approved quality in the chased portion and tie them with the help of binding wires and nails.' },
        { checksHeading: 'Conduit Check', checksdescription: 'The conduit pipe should not project out of the It should be at least 5mm inside the wall. the surface of the wall.' },     
        { checksHeading: 'Inspection box check', checksdescription: 'Provide an inspection box on the wall, at a suitable location.' },
        { checksHeading: 'Finishing Check', checksdescription: 'Fix all the boxes flush to the adjacent finished. wall, considering the thickness of the plaster.' },
        { checksHeading: 'Finishing Check', checksdescription: 'Finish the chased portion with cement mortar. Roughen the surface.' },
        { checksHeading: 'Chicken mesh check', checksdescription: 'In case of 3 or more conduits, provide a chicken mesh over the portion of the conduit before finishing.' },
        { checksHeading: 'Dummy plates Check', checksdescription: 'Cover all the boxes with dummy plates to prevent damage during plastering.' },
        { checksHeading: 'Cleaning Check', checksdescription: 'After completion of all plastering work, clean the concealed boxes.' },
        { checksHeading: 'Inspection box check', checksdescription: 'Provide suitable inspection boxes to permit periodical inspection and to facilitate the removal of wires, if necessary.' },
    ];

    async function EleCtriclChacks() {
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
    EleCtriclChacks();
}




















if (newDatanew.subactivityname === "Wiring - B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Wiring Work  (Row - 352 to 361)") {

    const dataArranew = [
        { checksHeading: 'GI wire Check', checksdescription: 'Before starting drop work, lay G.I. wire of 16 gauge in every conduit in the slab up to the concealed box. Keep an extra length of 15cm which is useful in pulling of wires' },
        { checksHeading: 'Drop check', checksdescription: 'Drop work should commence after the completion of masonry work and a satisfactory curing period.' },
        { checksHeading: 'Covering check', checksdescription: 'Cover all the boxes with dummy plates to prevent damage during plastering.' },
        { checksHeading: 'Cleaning Check', checksdescription: 'After completion of all plastering work, clean the concealed boxes.' },
        { checksHeading: 'Wiring Check', checksdescription: 'After plastering and curing, wiring work can start.' },
        { checksHeading: 'Quality check', checksdescription: 'Check the quality, gauge, and brand name of the wires, as per the approvals, before starting the work.' },
        { checksHeading: 'Color code check', checksdescription: 'Check the color code and specification of the wire for various points.' },
        { checksHeading: 'Line and Level Check', checksdescription: 'Fix the accessories on the boards, as required, with line and level.' },
        { checksHeading: 'Looping check', checksdescription: 'Terminate the wires in accessories, considering an extra length for looping.' },
        { checksHeading: 'Fuse wire Check', checksdescription: 'Put the fuse wire of the required current rating in the fuse box.' },
        { checksHeading: 'DB and MCB Check', checksdescription: 'Connect the wires in the distribution board and main switch or M.C.B.' },
        { checksHeading: 'Supply check', checksdescription: 'After starting the supply, switch on the main switch and check all the points with a megger or test lamp.' },
    ];

    async function ElecvtricalChacks() {
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
    ElecvtricalChacks();
}











if (newDatanew.subactivityname === "PIpe Work Line below Floor Level - B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower PIpe Work Line below Floor Level  ( 244 + 249 + 254 + 259 + 264 + 269 + 274 + 279 + 284 + 289)") {

    const dataArranew = [
        { checksHeading: 'Co-Ordination and Role of Water-Proofing Agency - Pre Work ', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Sunken floor check', checksdescription: 'Sunken floor should be plastered with C.M. 1:4 with a water-proofing compound and tested for water tightness.' },
        { checksHeading: 'Waterproofing Toilet Floor check', checksdescription: 'The first coat of water-proofing should be done before fixing sanitary traps, in case of water closets (W.C.) and toilets.' },
        { checksHeading: 'Waterproofing Terrace Floor', checksdescription: 'The first coat of water-proofing and brickbat Coba coat should be done before fixing the bends of rainwater lines at the terrace level.' },
        { checksHeading: 'Rainwater pipe check', checksdescription: 'In the case of terrace rainwater pipes, the joint near the bend should be neatly finished with cement mortar, to prevent leakages.' },
        { checksHeading: 'Co-Ordination and Role of Masonry Plaster Agency - Pre Work', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Outlets and traps check', checksdescription: 'Generally, all outlets are fixed and taken out from the building face, or sleeves are provided before the external plaster, Traps should be well embedded in cement mortar at the junction.' },
        { checksHeading: 'Chasing check', checksdescription: 'The walls of the W.C. and bathroom should be strong enough for the chasing of grooves for concealed pipes. Masonry of these walls must be done with the correctly specified ' },
        { checksHeading: 'Trap joints check', checksdescription: 'All the trap joints should be properly finished to avoid any leakage problems in the future. ' },
        { checksHeading: 'Bend check', checksdescription: 'In the case of terrace rainwater pipes, the joint near the bend should be neatly finished with cement mortar, to prevent leakages.' },
        { checksHeading: 'Line and level check', checksdescription: 'Hence duct plaster must be done in perfect plumb, line, and level. engineers contractors.' },
        { checksHeading: 'Co-Ordination and Role of Masonry Plaster Agency - Pre Work', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Levels Check', checksdescription: 'Levels should be given by the flooring person, for the pipe fitting as per drawing ' },        
        { checksHeading: '', checksdescription: 'This causes the pipes to choke up and may lead to repairing/replacing the pipes. To prevent this, the tile powder slurry should be collected and disposed of manually. In addition, the following points should be observed-' },
        { checksHeading: 'Opening check', checksdescription: 'The opening of I.W.C. should be filled with sand, gunny bags, and the top layer should be covered with a thick layer of P.O.P.' },
        { checksHeading: 'Nahani trap check', checksdescription: 'Nahani trap hole should be made in the flooring tile after the completion of the polishing work.' },      
        { checksHeading: 'Co-Ordination and Role of  Electrification Agency - Pre Work ', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Concelaed pipes check', checksdescription: 'Concealed plumbing and concealed electrification work are inter-linked activities, as far as bathrooms and toilets are concerned.' },
        { checksHeading: 'Concelaed pipes check', checksdescription: 'Since, both activities run simultaneously, pipes should be laid very carefully.' },
        { checksHeading: 'Electrical conduits check', checksdescription: 'Electrical conduits should not cross the plumbing pipes, so as to prevent any short circuits.' },             
        { checksHeading: 'Co-Ordination and Role of  Painting Agency - Pre Work ', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Painting check', checksdescription: 'Painting is the final finishing item and starts after 90% of the plumbing work is over.' },
        { checksHeading: 'Painting check', checksdescription: 'Painters should not wash the used paint tins in bathroom washbasins. The sediments of the paints can cause choking up of the plumbing lines' },
        { checksHeading: 'General Care to be Taken By Plumber', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Handling check', checksdescription: 'Plumbers themselves should exercise precautions, since handling all agencies at a time is difficult.' },
        { checksHeading: 'Trap check', checksdescription: 'Plumbers should seal all the traps with gunny bags and a layer of plaster of Paris at the top, to minimize the choke-up problem.' },
        { checksHeading: 'Seal Check', checksdescription: 'Remove these seals at the time of testing.' },
    ];

    async function PlumbingChacks() {
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
    PlumbingChacks();
}






if (newDatanew.subactivityname === "UGHT or Supply Line to OHT Line - 298") {

    const dataArranew = [
        { checksHeading: 'Distribution Systems from U.G. Tank to O.H. Water Tank', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Delivery pipe check', checksdescription: 'The delivery pipe coming out of the pump room should be taken below ground and then to individual buildings.' },
        { checksHeading: 'Bends check', checksdescription: 'The pipe used should be of ‘C’ class and precautions should be taken to avoid leakages, due to faulty connections, etc. All bends used for the connections should belong ' },
        { checksHeading: 'GI tees check', checksdescription: 'G.I. tees are provided to take out the branches from the mainline near each building.' },
        { checksHeading: 'Line and level check', checksdescription: 'All necessary care should be taken to fix the line in a straight line and plumb. It should be properly clamped.' },
        { checksHeading: 'Freeboard check', checksdescription: 'The inlet to O.H. Tank should be provided considering the proper freeboard in the tank.' },
        { checksHeading: 'Ball cock check', checksdescription: 'Ball cock arrangement should be provided at inlet to stop the flow of incoming water when it reaches the freeboard level.' },
        { checksHeading: 'Gate valve check', checksdescription: 'A separate gate valve should be provided at about 0.9m (3′) which can be used to prevent the water from going to that particular O.H. tank on the same main line.' },
        { checksHeading: 'Pump system check', checksdescription: 'A suitable pump controlling system should be used as per the requirements of the project.' },      
        { checksHeading: 'Distribution from Overhead Water Tank to Individual Units', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'To place the inlet, outlet, and wash out pipes in position, the provision should be made while centering, by providing the necessary holes and placing the pipes of G.I. pipes ' },
        { checksHeading: 'Opening check', checksdescription: 'An opening of size 60cm x 90cm is provided in O.H.W.T. top slab for a manhole cover.' },
        { checksHeading: 'Gate valve check', checksdescription: 'Gate valves for each outlet, i.e., bath/W.C. line and kitchen line should be provided on the terrace parapet, for easy maintenance or replacement.' },
        { checksHeading: 'Freeboard check', checksdescription: 'The minimum freeboard should be 150mm.' },
        { checksHeading: 'Overflow check', checksdescription: 'The overflow should be provided 25mm to 50mm below the inlet. The size should be a little larger than the inlet pipe.' },
        { checksHeading: 'Outlet check', checksdescription: 'Outlets should be 10cm to 15cm above the finished bottom of the tank.' },
        { checksHeading: 'Washout check', checksdescription: 'Washout should be in flush with the finished floor and plugged properly when not in operation.' },
        { checksHeading: 'Ohwt pipline check', checksdescription: 'The pipeline from the O.H.W.T. to individual units should have a minimum length of run and bends (turns).' },
        { checksHeading: 'Gate valve check', checksdescription: 'Gate valve for each outlet should be provided, at a height of 3.0m from the finished terrace level, for easy maintenance of the lines.' },
        { checksHeading: 'Gate valve check', checksdescription: 'A gate valve provided to the water line at the entry of each flat facilitates the maintenance of individual flat without affecting the water supply to other flats.' },
        { checksHeading: 'Leakage test', checksdescription: 'All joints should be checked for any leakages with pressure testing equipment.' },
        { checksHeading: 'Ball valve check', checksdescription: 'Make proper ball valve arrangement for inlets of O.H. and U.G, water tank.' },
    ];

    async function GradNewChacks() {
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
    GradNewChacks();
}









if (newDatanew.subactivityname === "Internal Plumbing Systems (Concealed Type) - B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower Wall Conduting + Internal FItting (246 + 251 + 256 + 261 + 266 + 271 + 276 + 281 + 286 + 291)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Curing check', checksdescription: 'Curing should be done over the ghabadi for at least seven days.' },
        { checksHeading: 'Don’ts for Plumbing Work', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Concealed gi check', checksdescription: 'Don’t start the plastering work of concealed G.I. lines before checking for leakages, under pressure for all concealed joints.' },
        { checksHeading: 'Gi pipe check', checksdescription: 'Don’t leave G.I. portions outside the plaster finish or glazed tile work.' },
        { checksHeading: 'Paint check', checksdescription: 'Don’t keep the open G.I. pipelines unpainted.' },
        { checksHeading: 'Waterproofing check', checksdescription: 'Don’t damage any water-proofing work during plumbing.' },
        { checksHeading: 'Nahani trap check', checksdescription: 'Don’t keep the nahani trap/P-trap etc. unplugged.' },
        { checksHeading: 'Openings check', checksdescription: 'Don’t keep the openings in G.I. pipe lines unplugged before starting the internal plaster.' },
        { checksHeading: 'Operation check', checksdescription: 'Don’t start the pumping operation before checking for priming.' },
        { checksHeading: 'Fixing check', checksdescription: 'Don’t allow loose fixing of W.H.B.' },
        { checksHeading: 'Safety check', checksdescription: 'Don’t fix costly C.P. fitting at an early stage and avoid thefts.' },   

        { checksHeading: 'Post - Work - Role of Water-Proofing Agency', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Trap and pipe check', checksdescription: '1. Sanitary traps and waste pipes of wash hand basins (W.H.B.) should be well embedded in the brickbat coba coat.' },
        { checksHeading: 'Final coat check', checksdescription: '2. The final finishing coat should be carried out for the toilet and terrace after the curing of the brickbat coba coat.' },
        { checksHeading: 'Curing check', checksdescription: '3. Curing should be done for 14 days.' },
        { checksHeading: 'Post - Work -  Role of Masonry Plaster Agency', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Grooves check', checksdescription: 'After concealing the pipes, grooves should be finished with the specified cement-sand-mortar and the surface should be roughened.' },
        { checksHeading: 'Holes plaster check', checksdescription: 'After fixing vertical C.I./P.V.C./G.I. lines, all holes should be plastered with rich cement-sand mortar to prevent any leakages in the future.' },
        { checksHeading: 'Post - Work - Role of Tiling Agency', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Concealed pipes check', checksdescription: 'All the concealed pipes should be properly placed and tested before fixing the glazed tile dado of the toilet.' },
        { checksHeading: 'Washbasin outlet check', checksdescription: 'Washbasin outlets and all the traps should be laid before the bathroom flooring work.' },
    ];

    async function GradeSlabChacks() {
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
    GradeSlabChacks();
}










if (newDatanew.subactivityname === "Floor Tile :  B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower Floornig TIle  (Row - 400 to 409)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Pattern check', checksdescription: 'Are the tile laying pattern, specifications and tile grout color according to approved drawing?' },
        { checksHeading: 'Adhesive check', checksdescription: 'Is the open life of spread adhesive exceeding the recommended limits?' },
        { checksHeading: 'Adhesive check', checksdescription: 'Is the tile adhesive being used up within its pot life?' },
        { checksHeading: 'Tapping check', checksdescription: 'Is the freshly laid tiles are tapped gently, is there any settlement?' },
        { checksHeading: 'Joints check', checksdescription: 'Are the joints properly aligned?' },
        { checksHeading: 'Cleaning check', checksdescription: 'Excessive adhesive / cement coming out of tile joints have been cleaned properly.' },  
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning Check', checksdescription: 'The surface on which screed to be laid made moist, free from dust and other contaminations.' },
        { checksHeading: 'Undulation Check', checksdescription: 'Are there any undulations observed in surface level?' },
        { checksHeading: 'Height indicators Check', checksdescription: 'Button marks / height indicators fixed properly.' },
        { checksHeading: 'Side runners check', checksdescription: 'Side runners have been placed as per requirements.' },
        { checksHeading: 'Screeding Check', checksdescription: 'Screeding is carried out in presence of Engineer.' },
        { checksHeading: 'Sequence check', checksdescription: 'The sequence of concreting well planned and sufficient labours deployed.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Cleaning of joints from loose mortar done immediately after tile laying.' },
    ];

    async function FlooringChacks() {
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
    FlooringChacks();
}












if (newDatanew.subactivityname === "Wall Tiles :  B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower Floornig TIle  (Row - 389 to 398) | Other Vertical Tile Work (411) | Any Tank or Other Areas (416) ") {

    const dataArranew = [
        { checksHeading: 'Phase 1 Wall Tiles', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: 'The surface on which tiles are to be laid is moist, free from dust and other contaminations.' },
        { checksHeading: 'Tile code check', checksdescription: 'The tile name and tile code number to be used for that particular area of work is correct.' },
        { checksHeading: 'Dimension check', checksdescription: 'Are all tiles according to required dimensions?' },
        { checksHeading: 'Chipping check', checksdescription: 'Are there any chipped tile being used for tiling?' },
        { checksHeading: 'Tile boxes check', checksdescription: 'Tiles of different boxes of same batch are mixed to ensure uniform tonality.' },
        { checksHeading: 'Curing check', checksdescription: 'Ceramic tiles cured before placing when cement mortar is being used for tiling.' },
        { checksHeading: 'Procedure check', checksdescription: 'Is correct laying procedure followed (like leveling using rubber hammer and checking with spirit level etc).' },
        { checksHeading: 'Cleaning check', checksdescription: 'Cleaning of joints from loose mortar done immediately after tile laying.' },
        { checksHeading: 'Pvc bead check', checksdescription: 'Is the PVC bead laid in a single piece and cut to 45 degree inclination at the joints?' },
        { checksHeading: 'Cutting check', checksdescription: 'The circular cutting in tile for the pipes have been properly done.' },
        { checksHeading: 'Adhesive check', checksdescription: 'Is flexible tile adhesive used in case of under-tile waterproofing?' },
        { checksHeading: 'Adhesive check', checksdescription: 'Is tile adhesive applied using appropriate notch trowel.' },
        { checksHeading: 'Adhesive check', checksdescription: 'Are tiles being laid before adhesive starts to dry.' },
        { checksHeading: 'Adhesive check', checksdescription: 'Wet tile adhesive cleaned off from the tile surface using damp cloth.' },
        { checksHeading: 'Tapping check', checksdescription: 'Checking of tiles by tapping gently done after laying on the mortar bed for settlement.' },
        { checksHeading: 'Line and level check', checksdescription: 'Tiles around the Bath Tub fixed in level, with gap for silicon filling and proper slope.' },
        { checksHeading: 'Right angle check', checksdescription: 'Skinwalls tiles properly – corner spacing ensured, tile beading and joining unpleasant right angles to the main wall ensured.' },
        { checksHeading: 'Level check', checksdescription: 'Tile adhesive applied to back of the tile to accommodate required levels.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Barricading check', checksdescription: 'Barricading of tiled area suitably done.' },
        { checksHeading: 'Covering check', checksdescription: 'Floor tiling covered with low quality POP.' },
        { checksHeading: 'Grouting check', checksdescription: 'The grouted joints cleaned of dust and mortar before silicon application.' },
        { checksHeading: 'Silicon filling check', checksdescription: 'Silicon filling done in the Kitchen and Bathroom.' },
        { checksHeading: 'Silicon filling check', checksdescription: 'The nozzle of silicon cartridge cut at 45 degree.' },
        { checksHeading: 'Silicon filling check', checksdescription: 'The grouted joints made dry before silicon application.' },
        { checksHeading: 'Cleaning check', checksdescription: 'The surface is found clean and even before silicon application.' },
        { checksHeading: 'Masking tape check', checksdescription: 'The masking tape removed immediately after finishing the tile joints before skin develops' },
        { checksHeading: 'Joints check', checksdescription: 'Silicon joints smoothen with soap water and tool to get a perfect finish after removing of the masking tape.' },
    ];

    async function GradeBlankChacks() {
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
    GradeBlankChacks();
}


























if (newDatanew.subactivityname === "Door Frame (222)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Quality Check', checksdescription: 'Quality of door shutters should be good. Warping of surface i.e. formation of the wave pattern on the surface of shutter & broken edges of the shutters should be avoided.' },
        { checksHeading: 'Bend Check', checksdescription: 'Shutters with bends at the corners should be rejected.' },
        { checksHeading: 'Support Check', checksdescription: 'Temporary frame supports are in place.' },
        { checksHeading: 'Unevenness check', checksdescription: 'All visible dents, scratches, unevenness, etc. should be properly repaired by applying putty made from wood dust & resin. It should be properly scraped with sandpaper.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Paint Check', checksdescription: 'Primer, putty & first coat of the oil paint should be completed before fixing any fittings on the shutter.' },
        { checksHeading: 'Tolerance Check', checksdescription: 'Once the shutter is fixed, there should be just the nominal gap between the shutter & frame, required for working tolerance.' },
        { checksHeading: 'Beading Check', checksdescription: 'Beading should be fixed to three sides before fixing the shutter.' },
        { checksHeading: 'Moulding Check', checksdescription: 'No joint should be provided to cover moulding except at the corners.' },
        { checksHeading: 'Support Check', checksdescription: 'Proper placing and support to the frames' },    
    ];

    async function DoorChacks() {
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
    DoorChacks();
}











if (newDatanew.subactivityname === "Door Shutter (Row - 420 - 429)") {

    const dataArranew = [
        { checksHeading: 'Clerance check', checksdescription: 'Clearance from all sides of shutters.' },
        { checksHeading: 'Installation Check', checksdescription: 'Check installation of door panels/shutters (i.e. alignment with frame, correct fit and smooth operation)' },
        { checksHeading: 'Gap Check', checksdescription: 'Check for gap between door shutter and frame is maintained.' },
        { checksHeading: 'Stopper & Rubber Check', checksdescription: 'Check for rubber silencer' },
        { checksHeading: 'Accessories Check', checksdescription: 'Check type of door hardware and accessories that are installed as per manufacturer instructions and approved door schedule and hardware schedule' },
        { checksHeading: 'FInal Clean Check', checksdescription: 'Check cleaning and protection of installed doors completed' },
        { checksHeading: 'L - Drop check', checksdescription: 'As soon as the door shutter is fitted, fix at least one aldrop per shutter for locking, to prevent the shutter from banging on the door frame due to wind.' },
    ];

    async function GradeSlabChacks() {
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
    GradeSlabChacks();
}















if (newDatanew.subactivityname === "Windows (Aluminium | uPVC | System Aluminium) : Row (431 - 440)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check that any pre-drilled holes are sealed.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cutting Check', checksdescription: 'According to the measurements, cut the aluminium sections for making the window on the site and fix it on the wall with screws.' },
        { checksHeading: 'Fixing Check', checksdescription: 'Fix the shutters in the track of the window, after providing rubber packing on all the sides of the glass panel. These shutters slide because of the rollers attached at the ' },
        { checksHeading: 'Cleaning Check', checksdescription: 'Clean tracks with a vacuum cleaner or air blower.' },
        { checksHeading: 'Gap filling Check', checksdescription: 'The gaps formed between the walls and windows should be grouted with epoxy-based, rubberized compound e.g., tough seal or polysulphide using a grouting gun. ' },
        { checksHeading: 'Grills Check', checksdescription: 'If required, the M.S. aluminium grill should be fixed from outside for safety purposes.' },
        { checksHeading: 'Gaps filling check', checksdescription: 'Gaps between the window and the wall,Sealant filling in gaps' },
        { checksHeading: 'Holes check', checksdescription: 'Holes in the tracks are inside or outside' },
        { checksHeading: 'Cleaning Check', checksdescription: 'Cleanliness of the track,Any damages, cracks, dents, etc.' },     
        { checksHeading: 'Rubber packing check', checksdescription: 'The intactness of rubber packing all around.' },
        { checksHeading: 'Window Glass', checksdescription: 'Check window panes for signs of moisture and scratches or cracks.' },
        { checksHeading: 'Reveal Check', checksdescription: 'Check if your window reveals are even.' },
        { checksHeading: 'Open Check', checksdescription: 'Test each window to see if it opens and closes easily.' },
        { checksHeading: 'Breather Holes', checksdescription: 'Examine window weep or breather holes for obstructions.' },
        { checksHeading: 'Windwo Flim check', checksdescription: 'Inspect your window’s film for damages such as bubbling, discoloring, and scratches.' },
    ];

    async function WindowsChacks() {
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
    WindowsChacks();
}
















if (newDatanew.subactivityname === "Putty & Primer Work : B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower Floornig TIle  (Row - 441 to 450) ") {

    const dataArranew = [
        { checksHeading: 'Before Putty Work', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Previous Work Check', checksdescription: 'All civil and electrical works complete' },
        { checksHeading: 'Curing check', checksdescription: 'Check that the curing period  of the walls is completed.' },
        { checksHeading: 'Cracks check', checksdescription: 'Check the wall cracks , dampness any other defects before application of primer' },
        { checksHeading: 'Cleaning check', checksdescription: 'Check if the wall surface is clean and is rubbed by fine grade paper 120 No.' },
        { checksHeading: 'Door Check', checksdescription: 'Main door provided with locking arrangement' },
        { checksHeading: 'Wall Dry Check', checksdescription: 'Wall surface dry checked' },
        { checksHeading: 'Wall Surface Check', checksdescription: 'Alkalinity of wall surface checked' },
        { checksHeading: 'Dust Check', checksdescription: 'Dirt and dust particles removed off from wall surface by papering' },
        { checksHeading: 'Electrical & Other Service Check', checksdescription: 'Electrical boards/switches/windows/decorative pieces /covered properly with masking tape' },     
        { checksHeading: 'Material Check', checksdescription: 'Material - Primer, paint, putty, to be used of approved brand /color / shade/ texture.' },
        { checksHeading: 'Scaffod Check', checksdescription: 'Scaffold to be used with proper protection for legs to avoid scratches on flooring' },
        { checksHeading: 'Undulations check', checksdescription: 'All the undulations of minor nature, dents, cracks, etc. are filled up with putty and surface is smooth to receive paint.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Check for surface is smooth & uniform and edges & corners are straight and crisp.' },

        { checksHeading: 'During Putty & Primer Coats', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Putty Material Check', checksdescription: 'Check for the proper mixing of Putty as per manufacturer guidelines.' },
        { checksHeading: 'First Coat Putty', checksdescription: 'Check for the proper application of 1st coat putty (i.e. Coarse/Filler putty) ' },
        { checksHeading: 'First Coat Primer', checksdescription: 'Check for the proper application of 1st coat primer (i.e. Coarse/Filler putty) ' },
        { checksHeading: 'Second Coat Putty', checksdescription: 'Check for the proper application of 2nd coat putty (i.e. fine putty) on 1 st coat of putty' },
        { checksHeading: 'Uniform Check', checksdescription: 'Check for the putty is applied uniformly.' },
    ];

    async function PaintWorkChacks() {
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
    PaintWorkChacks();
}













if (newDatanew.subactivityname === "Paint Work  : B1 + B2 + B3 + B4 + GF + FF + SF + TF  + FoF + Tower Floornig TIle  (Row - 479 to 489) ") {

    const dataArranew = [
        { checksHeading: 'First Paint Coat', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Putty & Primer Check', checksdescription: 'Application of putty completed & primer coat applied.' },
        { checksHeading: 'Skirting Check', checksdescription: 'Skirting should have also been completed.' },
        { checksHeading: 'Damage Check', checksdescription: 'Is there any damage to the putty applied surface and if yes, has the same been repaired prior to paint application' },
        { checksHeading: 'Covering Check', checksdescription: 'Check if necessary precautions such as proper covering of floor surface and other finished work surfaces have been undertaken to avoid the paint stains on other surfaces.' },
        { checksHeading: 'Finish Check', checksdescription: 'Check for surface finish and shade of first coat of paint.' },
        { checksHeading: 'Paint Check', checksdescription: 'Check the consistency of paint.' },
        { checksHeading: 'Final Paint Coat', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Other Fixture Check', checksdescription: 'Check if all MEP fixture (including electrical fittings) installation is completed' },
        { checksHeading: 'Surface Check', checksdescription: 'Check the surface for the application of 2nd coat of paint' },
        { checksHeading: 'Undulation Check', checksdescription: 'Prior to application of second coat, check the first coat of paint with light for any undulations that are to be rectified.' },
        { checksHeading: 'Uniform Check', checksdescription: 'Check the Uniformity of 2nd coat of paint' },
        { checksHeading: 'Curing Check', checksdescription: 'Check for curing if required.' },
        { checksHeading: 'Edge Check', checksdescription: 'Check that all edges and other surfaces are cleaned and also the scaffolds are all removed.' },
        { checksHeading: 'Cleaning Check', checksdescription: 'Has the floor, doors, windows and other areas been cleaned after application of paint' },
        { checksHeading: 'Final Clean Check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },
    ];

    async function GradeSlabfuncrtion() {
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
    GradeSlabfuncrtion();
}






if (newDatanew.subactivityname === "Exterior Check  : Side 01 | Side 02 | Side 03 | Side 04  (Row - 452 to 455) ") {

    const dataArranew = [
        { checksHeading: 'PRIOR TO PAINTING', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check for the safety process is followed for Painting activities.' },
        { checksHeading: '', checksdescription: 'Check for approval of work methodology of external painting.' },
        { checksHeading: '', checksdescription: 'Check for availability of Tool and tackles for external painting.' },
        { checksHeading: '', checksdescription: 'Check for Suitability & Safety of Scaffolding for external painting.' },
        { checksHeading: '', checksdescription: 'Check for the availability of approved manufacturers specifications for painting activities.' },
        { checksHeading: '', checksdescription: 'Check for the approved mock-up of process & shade code.' },
        { checksHeading: '', checksdescription: 'Check for the surface is free from dead mortar, dust, oil, grease, etc.' },
        { checksHeading: '', checksdescription: 'Check for the grouting of tie patti / tie rod holes before painting.' },
        { checksHeading: '', checksdescription: 'Check for the repairing of RCC surface id done before painting. (if required)' },  
        { checksHeading: '', checksdescription: 'Check for proper protection of Plumbing & fire fighting pipelines, windows, etc external before start of painting activities to avoid paint stain.' },
        { checksHeading: '', checksdescription: 'Check the watering of surface before application of putty.' },   
        { checksHeading: 'Application for Putty', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check for the proper mixing of Putty as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for the proper application of 1st coat putty (i.e. Coarse/Filler putty) on external wall surface.' },
        { checksHeading: '', checksdescription: 'Check for the proper application of 2nd coat putty (i.e. fine putty) on 1 st coat of putty' },
        { checksHeading: '', checksdescription: 'Check for the putty is applied uniformly.' },
        { checksHeading: '', checksdescription: 'Check the time gape between two coat putty as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for the sanding of putty surface before applying primer. (if applicable)' },  
        { checksHeading: 'Application of Texture', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check the primer is applied evenly / uniformly as per requirements. (if required)' },
        { checksHeading: '', checksdescription: 'Check for the proper mixing of texture as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check the texture is applied evenly / uniformly as per requirements.' },
        { checksHeading: 'Application of Paint', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check the primer is applied evenly / uniformly as per requirements.' },
        { checksHeading: '', checksdescription: 'Check for the proper mixing of paint as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for proper application of 1st coat paint as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for proper application of 2nd coat paint as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for time gape between 1st coat and 2nd coat of paint as per manufacturer guidelines.' },
        { checksHeading: '', checksdescription: 'Check for the uniform thickness of paint application.' },
        { checksHeading: 'After PAINTING', phaseHeadingShow: 'Yes' },
        { checksHeading: '', checksdescription: 'Check for any patch mark / shade variation is visible on painted surface.' },
        { checksHeading: '', checksdescription: 'Check proper cleaning of surrounding surface of windows/ventilators of external wall.' },
        { checksHeading: '', checksdescription: 'Remove all the protection tapes which were provided before painting' },
    ];

    async function GradElectricChacks() {
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
    GradElectricChacks();
}






if (newDatanew.subactivityname === "MS Paint Work (490)") {

    const dataArranew = [
        { checksHeading: 'Oil paint For M.S. Windows, doors, gates, grills & railings etc.', phaseHeadingShow: 'Yes' },
        { checksHeading: 'primer check', checksdescription: 'All cement mortar, unwanted welding burr etc. are removed before application of primer.' },
        { checksHeading: 'hinges check', checksdescription: 'Free movement of hinges, working systems before application of primer.' },
        { checksHeading: 'metal primer check', checksdescription: 'Application of zinc cromite metal primer before application of first coat of oil paint.' },
        { checksHeading: 'cleaning check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },
    ];

    async function GNewSlabChacks() {
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
    GNewSlabChacks();
}





if (newDatanew.subactivityname === "False Ceiling Framing Installtion Work : B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Flase Ceiling Framing Installation  (Row - 337 to 350)") {

    const dataArranew = [
        { checksHeading: 'Plaster Check', checksdescription: 'Uniform thinckness & range should be check ' },
        { checksHeading: 'Ceiling Type', checksdescription: 'Check for the Type of false ceiling to be executed.  (Gypsum board ceiling / Wire Mesh / PVC Board' },
        { checksHeading: 'Working Methodology', checksdescription: 'Check for approval of work methodology in terms of material type for fixing of false ceiling' },
        { checksHeading: 'Drawing Check', checksdescription: 'Check the shape & size of the GI sections for framing work as per drawing' },
        { checksHeading: 'Mateiral Check', checksdescription: 'Check for type of hanging system to be executed. (GI section/Wire with gripe)' },
        { checksHeading: 'Bottom Levels', checksdescription: 'Check for the bottom level of the ceiling is marked on the wall' },
        { checksHeading: 'Mateiral Check', checksdescription: 'Check for the inspection of incoming materials w.r.t. approved specification' },
        { checksHeading: 'Dependencies', checksdescription: 'Check for completion of preceding activities like electrical installation, HVAC Installation, Plastering & Dado of walls etc.' },
        { checksHeading: 'Channel Installation', checksdescription: 'Check for installation of wall channels as shown in drawings.' },
        { checksHeading: 'Levels Check', checksdescription: 'Check for marking of suspended ceiling level on walls as per drawing.' },
        { checksHeading: 'GI | Reep Installation Check', checksdescription: 'Check for fixing of suspenders (GI section / Wire) as per specifications.' },
        { checksHeading: 'Spacing Check', checksdescription: 'Check for the spacing of suspender & GI section as per drawing.' },
        { checksHeading: 'Alighment Check', checksdescription: 'Check for rigidity & alignment of framework of false ceiling.' },
        { checksHeading: 'Panel Fixing', checksdescription: 'Check for fixing of panels as shown in drawings.' },
        { checksHeading: 'Screw Spacing', checksdescription: 'Check for screw spacing as per requirement' },
        { checksHeading: 'Obstruction Check', checksdescription: 'Check provision for fixing of A/C grills, electrical fittings, sprinkler, smoke detector & trap doors etc.' },
    ];

    async function GradeSlabfillowingChacks() {
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
    GradeSlabfillowingChacks();
}






if (newDatanew.subactivityname === "False Ceiling Boarding | POP Wire Mesh : B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Boarding  | POP  (Row - 363 to 372)") {

    const dataArranew = [
        { checksHeading: 'Joints Check', checksdescription: 'Check for matching of joints, closure of gaps & uniform finish' },
        { checksHeading: 'FInal Finish', checksdescription: 'Check for joints finish of ceiling panels.' },
        { checksHeading: 'Other Accessories Check', checksdescription: 'Check for the fixing of A/C grills, electrical fittings, sprinkler, smoke detector & trap doors etc. as per drawing location.' },
        { checksHeading: 'Final Paint Check', checksdescription: 'Check for the ceiling painting / white wash is completed. (if required.)' },
    ];

    async function GradeSlabBrickChacks() {
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
    GradeSlabBrickChacks();
}





if (newDatanew.subactivityname === "Granite Framing Work : B1 + B2 + B3 + B4 + GF + FF + SF + TF + FoF + Tower Granite Framing in Door & WIndow  (Row - 318 to 327) | Stone Work Parapet (329)") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Right Angel Check', checksdescription: 'Do check opening size and its right angle.' },
        { checksHeading: 'Pre Work Check', checksdescription: 'If any correction needs to be done it shall be done prior commencement of work.' },
        { checksHeading: 'Cutting Methodology', checksdescription: 'Do cut the frame members from single slab of granite to ensure the uniformity of visual effect.' },
        { checksHeading: 'Polish Check', checksdescription: 'Edges of frame members cut from slab should be polished / chamfered as specified in approved drawing.' },
        { checksHeading: 'Chamfer Check', checksdescription: 'Frame shall have a 450 chamfer joint on all visible corners of frame.' },
        { checksHeading: 'Adhesive Application Check', checksdescription: 'With the help of Resin hardener adhesive make the back of frame rough to ensure bonding with bedding mortar. Apply resin hardener adhesive on back of granite and sprinkle sand on it to form a key.' },     
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Frame Position Check', checksdescription: 'Frame should be fixed in position according to approved drawing and as per adjacent finishes.' },
        { checksHeading: 'Frame Visibility Check', checksdescription: 'Full thickness of frame should be visible from all side for window and from sides and top for door frame.' },
        { checksHeading: 'Mortor Check', checksdescription: 'With cement mortar of 1:4, fix the verticals of frame in position and check for its alignment with keeping top and bottom member in place.' },
        { checksHeading: 'Adhesive Check', checksdescription: 'With the help of resin hardener fix the top member in place.' },
        { checksHeading: 'Joint Filling Check', checksdescription: 'Do fill void above top frame member with cement mortar.' },
        { checksHeading: 'Curing check', checksdescription: 'Cure the mortar for minimum 7 days.' },
        { checksHeading: 'Verticality Check', checksdescription: 'After 3 days fix the Pentagon nylon frame fixing screws 10 x 125 mm and recheck the verticality. Screws should be counter sunk by 5mm.' },
        { checksHeading: 'Oil Coating', checksdescription: 'Do apply light coat of clear oil on granite face for protection.' },
        { checksHeading: 'Grout Fill Check', checksdescription: 'After first coat of paint, fill the screw hole with Tmax and matching grout mix.' },     
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'FInal Opening Dim. Check', checksdescription: 'Do check for opening dimensions, line, level and plumb.' },
        { checksHeading: 'Granite Cornor Joint Check', checksdescription: 'Do check corner joints and granite to granite joint, there should not be any gap.' },
        { checksHeading: 'Final Check', checksdescription: 'Do check for any visible defect.' },
    ];

    async function GradeSlabAggrigateChacks() {
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
    GradeSlabAggrigateChacks();
}




