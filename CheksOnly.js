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
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Rebars Check', checksdescription: 'Bottom bars, top bars, etra bars,bentup bars, stirrups, distance of bentup bars from face of supports, spacing of the stirrups as per R.C.C. drawing, proper tying of stirrups.etc' },
        { checksHeading: 'Dia of bar check', checksdescription: 'Diameter of bars, binding of stirrups in line.' },
        { checksHeading: 'Bentup Bar Check', checksdescription: 'Length of bentup bars projecting in the adjacent beams.' },
        { checksHeading: 'Bentup Bar Check', checksdescription: 'L for bentup at discontinuous end.' },
        { checksHeading: 'Cover check', checksdescription: 'Side covers & bottom covers for beams.' },
        { checksHeading: 'Pin bar Check', checksdescription: 'Pin is provided at required places between reinforcement.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of laps in beam if provided with required length.' },
        { checksHeading: 'Lapping check', checksdescription: 'Lapping of bars' },
        { checksHeading: 'Stirrups check', checksdescription: 'Extra stirrups at the junction of beams.' },
        { checksHeading: 'Spacing check', checksdescription: 'Spacing, diameter of bent up bars & main bars.' },
        { checksHeading: 'Bentup bar check', checksdescription: 'Distance of bent ups from face of beamLength of bent up bars projecting in adjacent bays.Height of the bent up bars.' },
        { checksHeading: 'Chair bar check', checksdescription: 'Chair below  bent up bar.Covering for slab at bottom.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of laps of required length.Dowels of slab & beam.' },
        { checksHeading: 'Steel dia check', checksdescription: 'Distribution steel diameters, spacing & ties.' },
        { checksHeading: 'Fan hook check', checksdescription: 'Location, proper binding diameter & length of fan hook & quality of the hook box.' },
        { checksHeading: 'Stirrups check', checksdescription: 'Stirrups in column for upper floor column size.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of reinforcement in the beam column joints' },
        { checksHeading: 'Electrical conduit check', checksdescription: 'check the concealed electrical conduit work for slabs as per drawing; check I.S.I mark on P.V.C. pipes& note down the length of all pipes for billing purpose. ' },
        { checksHeading: 'Junctions check', checksdescription: 'Check the junctions & all electrical layout, position of fan points, M,S, boxes, junction boxes.' },     
        { checksHeading: 'Phase 3', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Supervision Check', checksdescription: 'See that concreting is done under skilled supervision. Never leave it to labour on site' },
        { checksHeading: 'Mix ratio check', checksdescription: 'The ratio of concrete and the water cement ratio should be as per the specifications or as directed by the engineer in charge' },
        { checksHeading: 'W/C Ratio check', checksdescription: 'Add water as per predetermined quantity only. Always measure the water with measuring container before adding in concrete.' },
        { checksHeading: 'Mix time check', checksdescription: 'Mix the wet concrete thoroughly for around 2 minutes to get the consistent concrete' },
        { checksHeading: 'Finishing check', checksdescription: 'Finish the surface and edges of concrete after placing of concrete using with trowels or wooden floats or metal floats.' },
        { checksHeading: 'Phase 4', phaseHeadingShow: 'Yes' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of sides of outer beams after 48 hours.' },
        { checksHeading: 'curing check', checksdescription: 'Making small bunds in sand & cement mortar (1:10) for ponding method of curing for slab, with each bay having maximum size of 2.0 m x 2.0 m.' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of internal beam sides after 72 hours.' },
        { checksHeading: 'curing check', checksdescription: 'Curing of slab for 28 days.' },
        { checksHeading: 'deshuttering check', checksdescription: 'Deshuttering of slab after 7 days, 10 days or 15 days depending on spans.' },
        { checksHeading: 'Hacking check', checksdescription: 'Hacking of beam sides, beam bottom, slab bottom.' },
        { checksHeading: 'Honeycombing check', checksdescription: 'Minor honey combing surfaces, finished with rich mortar.' },
        { checksHeading: 'Honeycombing check', checksdescription: 'Major honeycombing shall be brought to the notice of R.C.C.Consultant.' },
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







if (newDatanew.subactivityname === "Reinforcement Work") {

    const dataArranew = [
        { checksHeading: 'To be Checked Before Slab Casting', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Rebar dia check', checksdescription: 'The diameter of Top and Bottom Extra Reinforcement of the beam shall be checked.' },
        { checksHeading: 'Bar position check', checksdescription: 'The location of Top extra shall be checked.' },
        { checksHeading: 'Bar position check', checksdescription: 'Ensure proper position of Bottom extra reinforcement.' },
        { checksHeading: 'Extra bar check', checksdescription: 'The length of Top extra bars shall be checked as per drawings.' },
        { checksHeading: 'Extra bar check', checksdescription: 'Length of top extra bars beyond the column shall also be checked as per structural drawings.' },
        { checksHeading: 'Extra bar check', checksdescription: 'The length of the bottom extra reinforcement shall be measured.' },
        { checksHeading: 'Pin bar check', checksdescription: 'Check the vertical clear distance between the top Main bars and Top extra bar. To maintain the gap, the Pin bar is placed.' },
        { checksHeading: 'Pin bar check', checksdescription: 'Make sure that the diameter of the Pin bar or Spacer shall be greater than the size or aggregate that is used for concrete.' },
        { checksHeading: 'Dia check', checksdescription: 'The diameter of the stirrups shall be checked.' },     
        { checksHeading: 'Spacing check', checksdescription: 'Check the spacing between the stirrups near the support as well as mid-span of the entire beam.' },
        { checksHeading: 'Bend check', checksdescription: 'The end of the stirrups or hook shall be at 135 degrees.' },
        { checksHeading: 'Stirrups check', checksdescription: 'Extra stirrups shall be provided at the junction of beams.' },
        { checksHeading: 'Cover check', checksdescription: 'Check the Thickness of the cover block as per drawings given by Structural Consultants.' },
        { checksHeading: 'Grade check', checksdescription: 'The grade of the concrete cover block shall be the same as of Grade of concrete.' },
        { checksHeading: 'Lapping position check', checksdescription: 'The position of Lapping of the Top Main bar shall be checked as per structural drawings.' },
        { checksHeading: 'Lapping position check', checksdescription: 'The position of the Lapping of the Bottom Main bar shall also be checked as per structural drawings.' },
        { checksHeading: 'Binding check', checksdescription: 'Proper binding of Lapped bars shall be checked.' },
        { checksHeading: 'Lapping check', checksdescription: 'Bottom bars Lapping should not be placed at the middle span of the beam. It is because of the maximum bending moment.' },     
        { checksHeading: 'Lapping check', checksdescription: 'Top Main lapping should not be placed near the support of the beam. It is because of the maximum shear force.' },
        { checksHeading: 'Lapping check', checksdescription: 'Make sure the lap should be placed in a staggered manner.' },
        { checksHeading: 'Development length check', checksdescription: 'Measure the development length of Top Main reinforcement.' },
        { checksHeading: 'Development length check', checksdescription: ' Make sure that the Main bars shall be extending into the columns.' },
        { checksHeading: 'Development length check', checksdescription: 'Development length of Top Extra and Bottom Main bars (L shape reinforcement) shall be checked.' },
        { checksHeading: 'Binding check', checksdescription: 'Ensure the proper binding of reinforcement at the junction of main bars and stirrups.' },
        { checksHeading: 'Binding check', checksdescription: 'Bottom extra and Top extra shall be bind properly using binding wire.' },
        { checksHeading: 'Binding check', checksdescription: 'The binding wire should not be loose or remove from steel bars while concreting.' },
        { checksHeading: 'Cleaning check', checksdescription: 'Check that oil should not come in contact with the surface of Reinforcement.' },
        { checksHeading: 'Ties check', checksdescription: 'Temporary ties in column reinforcement shall be provided.' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Dowel bars shall be provided for a future extension for the upper story column.' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Check the reinforcement shall be left for the upper floor staircase or not.' },
        { checksHeading: 'Dowel bar check', checksdescription: 'Ensure the reinforcement shall be left for balconies.' },
        { checksHeading: 'Dia of dowel check', checksdescription: 'Check the diameter of the dowels bars.' },
        { checksHeading: 'Length check', checksdescription: 'Check the length of dowel bars as per approved drawings.' },
        { checksHeading: 'Dowel check', checksdescription: 'Dowel bars of the beam shall be checked.' },
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









if (newDatanew.subactivityname === "Waterproofing") {

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
        { checksHeading: 'Material check', checksdescription: '1. Lay well burnt brick bats, thoroughly soaked in water, on edge and fill the joint cement mortar in 1:6 proportion with slope of 1:100 ,with waterproofing.' },
        { checksHeading: 'Hole check', checksdescription: '2. Fill the holes in wall for P.V.C./G.I. pipe connection is filled with waterproofing coba.' },
        { checksHeading: 'Curing check', checksdescription: '3. Curing for 4 days & confirm that there is no leakages' },
        { checksHeading: 'Slope check', checksdescription: '1. Topping with 1:4 cement mortar with waterproofing compound and maintain proper slope from entrance to nahani trap & finish with neat cement slurry.' },    
        { checksHeading: 'Curing check', checksdescription: '2. Provide curing for minimum 7 days with water. Minimum 7.5 cm depth of water to be maintained.' }, 
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
        { checksHeading: 'Phase 1 Chajja Waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Cleaning check', checksdescription: '1. Cleaning the top of the chajja and chiselling out any extra mortar.' },
        { checksHeading: '', checksdescription: '2. Top of chajja applying thick cement slurry.' },
        { checksHeading: '', checksdescription: '3. Metal screen coat 1:1, 1:2,1:3 as specified.' },
        { checksHeading: '', checksdescription: '4. Watta rounding at the junction of chajja & wall.' },
        { checksHeading: 'Phase 2 Chajja Waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Curing check', checksdescription: '5. Curing for atleast 7 days.' },
        { checksHeading: 'Phase 1 Sloping terrace waterproofing', phaseHeadingShow: 'Yes' },
        { checksHeading: 'slope check', checksdescription: '1. Cleaning sloping surface of slab properly.' },
        { checksHeading: 'Screen coat check', checksdescription: '2. Making metal screen coat 1:1,1:2 properly.' },
        { checksHeading: 'Finising check', checksdescription: '3. Applying finishing coat with C.M. 1:4 & water proofing method.' },
        { checksHeading: 'Edges check', checksdescription: '4. Making edge between parapet wall & sloping slab.' },   
        { checksHeading: 'Phase 2 Sloping terrace waterproofing', phaseHeadingShow: 'Yes' },  
        { checksHeading: 'Curing check', checksdescription: '5. Curing the waterproofing for atleast 15 days.' }, 
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










if (newDatanew.subactivityname === "Brick Work") {

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












if (newDatanew.subactivityname === "Plaster Work") {

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
        { checksHeading: 'Phase 1 External Plaster', phaseHeadingShow: 'Yes' },
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
















if (newDatanew.subactivityname === "Electrical") {

    const dataArranew = [
        { checksHeading: 'Phase 1 Slab Conduting', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Drawing Check', checksdescription: 'Check the electrical conduting layout as per the drawing' },
        { checksHeading: 'Layout check', checksdescription: 'Check the actual layout of the conduting in the slab for bill preparation and record purposes.' },
        { checksHeading: 'Location Check', checksdescription: 'Check the center of the fan hook box diagonally for center alignment, considering the loft position in the room.' },
        { checksHeading: 'Fixing Check', checksdescription: 'A bonding solution should be applied to all the pipes and accessories, to avoid the loose fixing of pipes with accessories.' },
        { checksHeading: 'Tieing check', checksdescription: 'Tie the conduits, using binding wire, to each other, and to the slab steel.' },
        { checksHeading: 'Conduit safety check', checksdescription: 'Ensure that conduits do not get damaged with the movement of the laborers on the slab.' },
        { checksHeading: 'Fan box check', checksdescription: 'Ensure that the fan box entries/holes are intact to prevent the cement slurry from entering.' },
        { checksHeading: 'Phase 2 Wall Conduting', phaseHeadingShow: 'Yes' },
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
        { checksHeading: 'Phase 3 Wiring', phaseHeadingShow: 'Yes' },
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














if (newDatanew.subactivityname === "Plumbing") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Sunken floor check', checksdescription: 'Sunken floor should be plastered with C.M. 1:4 with a water-proofing compound and tested for water tightness.' },
        { checksHeading: 'Waterproofing check', checksdescription: 'The first coat of water-proofing should be done before fixing sanitary traps, in case of water closets (W.C.) and toilets.' },
        { checksHeading: 'Waterproofing check', checksdescription: 'The first coat of water-proofing and brickbat Coba coat should be done before fixing the bends of rainwater lines at the terrace level.' },
        { checksHeading: 'Trap and pipe check', checksdescription: '1. Sanitary traps and waste pipes of wash hand basins (W.H.B.) should be well embedded in the brickbat coba coat.' },
        { checksHeading: 'Final coat check', checksdescription: '2. The final finishing coat should be carried out for the toilet and terrace after the curing of the brickbat coba coat.' },
        { checksHeading: 'Curing check', checksdescription: '3. Curing should be done for 14 days.' },
        { checksHeading: 'Rainwater pipe check', checksdescription: 'In the case of terrace rainwater pipes, the joint near the bend should be neatly finished with cement mortar, to prevent leakages.' },
        { checksHeading: 'Outlets and traps check', checksdescription: 'Generally, all outlets are fixed and taken out from the building face, or sleeves are provided before the external plaster, Traps should be well embedded in cement mortar at the junction.' },
        { checksHeading: 'Chasing check', checksdescription: 'The walls of the W.C. and bathroom should be strong enough for the chasing of grooves for concealed pipes. Masonry of these walls must be done with the correctly specified ' },     
        { checksHeading: 'Grooves check', checksdescription: 'After concealing the pipes, grooves should be finished with the specified cement-sand-mortar and the surface should be roughened.' },
        { checksHeading: 'Holes plaster check', checksdescription: 'After fixing vertical C.I./P.V.C./G.I. lines, all holes should be plastered with rich cement-sand mortar to prevent any leakages in the future.' },
        { checksHeading: 'Trap joints check', checksdescription: 'All the trap joints should be properly finished to avoid any leakage problems in the future. ' },
        { checksHeading: 'Bend check', checksdescription: 'In the case of terrace rainwater pipes, the joint near the bend should be neatly finished with cement mortar, to prevent leakages.' },
        { checksHeading: 'Line and level check', checksdescription: 'Hence duct plaster must be done in perfect plumb, line, and level. engineers contractors.' },
        { checksHeading: '', checksdescription: 'Generally, tiling is done after laying of plumbing pipes. So, there is hardly any pre-work as far as tiling is concerned.' },
        { checksHeading: 'Concealed pipes check', checksdescription: 'All the concealed pipes should be properly placed and tested before fixing the glazed tile dado of the toilet.' },
        { checksHeading: 'Washbasin outlet check', checksdescription: 'Washbasin outlets and all the traps should be laid before the bathroom flooring work.' },
        { checksHeading: '', checksdescription: 'This causes the pipes to choke up and may lead to repairing/replacing the pipes. To prevent this, the tile powder slurry should be collected and disposed of manually. In addition, the following points should be observed-' },   
        { checksHeading: 'Opening check', checksdescription: 'The opening of I.W.C. should be filled with sand, gunny bags, and the top layer should be covered with a thick layer of P.O.P.' },
        { checksHeading: 'Nahani trap check', checksdescription: 'Nahani trap hole should be made in the flooring tile after the completion of the polishing work.' },
        { checksHeading: 'Concelaed pipes check', checksdescription: 'Concealed plumbing and concealed electrification work are inter-linked activities, as far as bathrooms and toilets are concerned.' },
        { checksHeading: 'Concelaed pipes check', checksdescription: 'Since, both activities run simultaneously, pipes should be laid very carefully.' },
        { checksHeading: 'Electrical conduits check', checksdescription: 'Electrical conduits should not cross the plumbing pipes, so as to prevent any short circuits.' },
        { checksHeading: 'Painting check', checksdescription: 'Painting is the final finishing item and starts after 90% of the plumbing work is over.' },
        { checksHeading: 'Painting check', checksdescription: 'Painters should not wash the used paint tins in bathroom washbasins. The sediments of the paints can cause choking up of the plumbing lines' },
        { checksHeading: 'Handling check', checksdescription: 'Plumbers themselves should exercise precautions, since handling all agencies at a time is difficult.' },
        { checksHeading: 'Trap check', checksdescription: 'Plumbers should seal all the traps with gunny bags and a layer of plaster of Paris at the top, to minimize the choke-up problem.' },
        { checksHeading: 'Seal Check', checksdescription: 'Remove these seals at the time of testing.' },
        { checksHeading: '', checksdescription: 'The site engineer must supervise these activities, to avoid any problems.' },     
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Delivery pipe check', checksdescription: 'The delivery pipe coming out of the pump room should be taken below ground and then to individual buildings.' },
        { checksHeading: 'Bends check', checksdescription: 'The pipe used should be of ‘C’ class and precautions should be taken to avoid leakages, due to faulty connections, etc. All bends used for the connections should belong ' },
        { checksHeading: 'GI tees check', checksdescription: 'G.I. tees are provided to take out the branches from the mainline near each building.' },
        { checksHeading: 'Line and level check', checksdescription: 'All necessary care should be taken to fix the line in a straight line and plumb. It should be properly clamped.' },
        { checksHeading: 'Freeboard check', checksdescription: 'The inlet to O.H. Tank should be provided considering the proper freeboard in the tank.' },
        { checksHeading: 'Ball cock check', checksdescription: 'Ball cock arrangement should be provided at inlet to stop the flow of incoming water when it reaches the freeboard level.' },
        { checksHeading: 'Gate valve check', checksdescription: 'A separate gate valve should be provided at about 0.9m (3′) which can be used to prevent the water from going to that particular O.H. tank on the same main line.' },
        { checksHeading: 'Pump system check', checksdescription: 'A suitable pump controlling system should be used as per the requirements of the project.' },
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
        { checksHeading: 'Curing check', checksdescription: 'Curing should be done over the ghabadi for at least seven days.' },
        { checksHeading: 'Concealed gi check', checksdescription: 'Don’t start the plastering work of concealed G.I. lines before checking for leakages, under pressure for all concealed joints.' },
        { checksHeading: 'Gi pipe check', checksdescription: 'Don’t leave G.I. portions outside the plaster finish or glazed tile work.' },
        { checksHeading: 'Paint check', checksdescription: 'Don’t keep the open G.I. pipelines unpainted.' },
        { checksHeading: 'Waterproofing check', checksdescription: 'Don’t damage any water-proofing work during plumbing.' },
        { checksHeading: 'Nahani trap check', checksdescription: 'Don’t keep the nahani trap/P-trap etc. unplugged.' },
        { checksHeading: 'Openings check', checksdescription: 'Don’t keep the openings in G.I. pipe lines unplugged before starting the internal plaster.' },
        { checksHeading: 'Operation check', checksdescription: 'Don’t start the pumping operation before checking for priming.' },
        { checksHeading: 'Fixing check', checksdescription: 'Don’t allow loose fixing of W.H.B.' },
        { checksHeading: 'Safety check', checksdescription: 'Don’t fix costly C.P. fitting at an early stage and avoid thefts.' },
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









if (newDatanew.subactivityname === "Flooring") {

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















if (newDatanew.subactivityname === "Door ") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Quality Check', checksdescription: 'Quality of door shutters should be good. Warping of surface i.e. formation of the wave pattern on the surface of shutter & broken edges of the shutters should be avoided.' },
        { checksHeading: 'Bend Check', checksdescription: 'Shutters with bends at the corners should be rejected.' },
        { checksHeading: 'Phase 2', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Paint Check', checksdescription: 'Primer, putty & first coat of the oil paint should be completed before fixing any fittings on the shutter.' },
        { checksHeading: 'Tolerance Check', checksdescription: 'Once the shutter is fixed, there should be just the nominal gap between the shutter & frame, required for working tolerance.' },
        { checksHeading: 'Beading Check', checksdescription: 'Beading should be fixed to three sides before fixing the shutter.' },
        { checksHeading: 'Moulding Check', checksdescription: 'No joint should be provided to cover moulding except at the corners.' },
        { checksHeading: 'Unevenness check', checksdescription: 'All visible dents, scratches, unevenness, etc. should be properly repaired by applying putty made from wood dust & resin. It should be properly scraped with sandpaper.' },
        { checksHeading: 'Aldrop check', checksdescription: 'As soon as the door shutter is fitted, fix at least one aldrop per shutter for locking, to prevent the shutter from banging on the door frame due to wind.' },
        { checksHeading: 'Support Check', checksdescription: 'Temporary frame supports are in place.' },
        { checksHeading: 'Support Check', checksdescription: 'Proper placing and support to the frames' },
        { checksHeading: 'Clerance check', checksdescription: 'Clearance from all sides of shutters.' },     
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






















if (newDatanew.subactivityname === "Windows") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'Diagonal check', checksdescription: 'For fixing the aluminium window frames, the plastered opening must be exactly at right angles and the diagonals of the opening must be equal, otherwise, gaps are created between the window and the plaster.' },
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
















if (newDatanew.subactivityname === "Paint Work") {

    const dataArranew = [
        { checksHeading: 'Phase 1', phaseHeadingShow: 'Yes' },
        { checksHeading: 'brand and shade check', checksdescription: 'Check that the brand and color shade of paint is as per approval' },
        { checksHeading: 'primer check', checksdescription: 'Primer allowed to dry for atleast 24 hours before application of putty.' },
        { checksHeading: 'cleaning check', checksdescription: 'The floor has been cleaned immediately and first coat is allowed to dry for atleast 24 hours, before application of successive coat.' },
        { checksHeading: 'cleaning check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },
        { checksHeading: 'primer check', checksdescription: 'All cement mortar, unwanted welding burr etc. are removed before application of primer.' },
        { checksHeading: 'hinges check', checksdescription: 'Free movement of hinges, working systems before application of primer.' },
        { checksHeading: 'metal primer check', checksdescription: 'Application of zinc cromite metal primer before application of first coat of oil paint.' },
        { checksHeading: 'cleaning check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },
        { checksHeading: 'cleaning check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },     
        { checksHeading: 'cleaning check', checksdescription: 'External wall surface is cleaned properly.' },
        { checksHeading: 'electrical and plumbing holes check', checksdescription: 'All the electrical and plumbing holes are finished properly before the application of the first coat.' },
        { checksHeading: 'watering check', checksdescription: 'The surface is watered for 12 hours before application of the first coat' },
        { checksHeading: 'mix preparation check', checksdescription: 'The first coat for proper mix, preparation, thickness & finishing of surface.' },
        { checksHeading: 'mix preparation check', checksdescription: 'Second coat for proper mix, preparation, thickness & finishing of surface.' },
        { checksHeading: 'cleaning check', checksdescription: 'Cleaning of the window glass, terrace, floor, pipes, doors, fixtures, electrical switches etc. has been done properly.' },
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
