const mongoose = require('mongoose');

const quotationSchema = mongoose.Schema({
    quotationname: String,
    status: String,
    Quotationselectionstatusbyclient: {
        type: String,
        default: "No"
    },
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    projectstructureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectstructure'
    },
    projectspaceID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }],
    documentsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    }],
    commentsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commentsonquotation'
    }],
    quatationdate: { type: Date, default: Date.now },
    // new changes Here,
    units: String,
    area: Number,
    frontfeet: Number,
    frontinch: Number,
    depthfeet: Number,
    depthinch: Number,    
    blockinsite: String,
    asperbyelaws : String,
    asperbylawsfront: Number,
    asperbylawsleft: Number,
    asperbylawsright: Number,
    asperbylawsback: Number,
    siteclearance: String,
    roadtositelevel: Number,
    roadtoplinthlevel: Number,
    soiltype: String,
    rccstructureuptoplinthlevel: String,
    basementrequirement: String,
    noofbasementfloor: Number,
    roadtobasement: Number,
    roadtoupperfloor: Number,
    basementtoupperfloor: Number,
    provisionoframp: String,
    ratiooframp: Number,
    widthoframp: Number,
    drainagesystem: String,
    waterproofingtype: String,
    septictanksize: Number,
    numbersoffloors: Number,
    tower: String,
    floorleveltofloorlevel: Number,
    mezzaninefloor: String,
    towerheight: Number,
    aspersitesurroundingdata: String,
    groundfloorfactor: Number,
    firstfloorfactor: Number,
    secondfloorfactor: Number,
    thirdfloorfactor: Number,
    fourthfloorfactor: Number,
    towerfactor: Number,
    footingstructuretype: String,
    structurelevel: String,
    ugwt: String,
    lift: String,
    noofpeople: Number,
    staircasematerialtype: String,
    shuttering: String,
    iffootingfillingthematerial: String,
    plinthfillingmaterial: String,
    antitermite: String,
    noofcolumnfactor: Number,
    clengthinch: Number,
    cwidthinch: Number,
    creinforcementfactor: Number,
    beamfactor: Number,
    bwidthinch: Number,
    bdepthinch: Number,
    beamreinforcementfactor: Number,
    slabthicknessinch: Number,
    sreinforcementfactor: Number,
    footinglengthfeet: Number,
    footingwidthfeet: Number,
    footingreinforcementfactor: Number,
    curtainwalllengthfeet: Number,
    curtainwallwidthfeet: Number,
    curtainwallreinforcementfactor: Number,
    gradeslabthicknessinch: Number,
    gradesreinforcementfactor: Number,
    sizeoftank: Number,
    sizeoftanklengthfeet: Number,
    sizeoftankwidthfeet: Number,
    sizeoftankheightfeet: Number,
    sizeoftankreinforcementfactor: Number,
    liftlengthfeet: Number,
    liftwidthfeet: Number,
    liftperipherywall: String,
    liftperipherywallreinforcementfactor: Number,
    outerwall: String,
    brickfactor: Number,
    staircasewidth: Number,
    staircasetype: String,
    staircaselocation: String,
    railingonbothside: String,
    sidehandrailwithmainrailing: String,
    railingmaterial: String,
    towerstaircase: String,
    plasteronrccroof: String,
    outerplaster: String,
    internalplaster: String,
    waterproofinginfooting: String,
    waterproofinginfootingpilecapraft: String,
    waterproofingonwall: String,
    waterproofingonwallheight: String,
    washroomwaterproofingworktype: String,
    terracewallwaterproofingworktype: String,
    washareawaterproofingworktype: String,
    bedroomwaterproofingworktype : String,
    kitchenwaterproofingworktype : String, 
    cobainsunkenducts: String,
    cobainterraceorroof: String,
    grade: String,
    electricalindividualfloorline: String,
    includefalseceilingwiring: String,
    inverterwiring: String,
    earthing: String,
    noofearthingpit: Number,
    ifearthingthentype: String,
    elevationallightingwork: Number,
    securitycamerawiring: String,
    noofsecuritycamera: Number,
    lanethernet: String,
    noofroomtoconnect: Number,
    linelength: Number,
    sewageline: String,
    readymadechamber: String,
    ifcastinsituthenchambercover: String,
    pressurepump: String,
    pressurepumpcapacity: Number,
    watersoftner: String,
    watersoftnercapacity: Number,
    overheadtank: Number,
    overheadtankmaterialtype: String,
    additionalplumbingpoints: Number,
    individualfloorline: String,
    separatelineforwcandotherthings: String,
    individualdrinkingwatertank: String,
    reverseline: String,
    concealedtanktype: String,
    washbasintype: String,
    washbasintop: String,
    showerconcealedbody: String,
    waterclosettype: String,
    nahanitraptype: String,
    toghenedglass: String,
    mirror: String,
    nichesabovewc: String,
    nichesalongshower: String,
    floortileclassification: String,
    tilesize: String,
    spacingintileinstallation: String,
    tilefixtures: String,
    stonepartitiononchangeinspace: String,
    heightintoilet : Number,
    heightinwasharea : Number,
    kitchen : Number,
    fourtyfivedegreeatcorner : String,
    steelstripatcorner : String,
    ifspacingintile : String,
    washroomtypeoftile : String,
    kitchentypeoftile : String,
    washareatypeoftile : String,
    bedroomtypeoftile : String,
    terracewalltypeoftile : String,
    ifvertifiedthentilesize : String,
    terracetile : String,
    iffillingthenspacingintile : String,
    ugwttileinstallation : String,
    ifdoingugwttileworkthenmaterial : String,
    stoneworkonparapetboundarywallbalconyotherareasmaterial : String,
    ifstoneworkonaboveareasmaterial : String,
    washbasincounter : String,
    ifcounterthanmaterial : String,
    lengthofkitchencounter : Number,
    kichencountertop : String,
    ifmodularkitchenthentheinternalpartitioninbottomisofhdmrplywoodormdf : String,
    moldingtype : String,
    staircasematerial : String,
    samematerialonriser : String,
    punningforbetterfinishesonwall : String,
    ifpunninglevelofexecution : String,
    noofputtycoat : Number,
    noofprimercoat : Number,
    textureonnoofwallinaroom : String,
    paintonfalseceiling : String,
    internalpaint : String,
    externalelevationfacingwall : String,
    otherthanelevationwall : String,
    externalpaint : String,
    designerboundarywall : String,
    boundarywallfinishes : String,
    doorframeheight : Number,
    doorframe : String,
    externalflydoor : String,
    panelthickness : Number,
    panel : String,
    windowsheight : Number,
    sizeofwindow : Number,
    windowsmaterial : String,
    incaseofslidingormovablespecifyarea : String,
    areaofslidingopenablegrill : String,
    grilltype : String,
    frame : String,
    weightofmaingateinkg : Number,
    gatemechanism : String,
    lazercutdesign : String,
    ductcoveronroofwithmsframe : String,
    ductcovertop : String,
    gazebo : String,
    areaofgazebo : String,
    msworkinelevation : String,
    msworkinelevationinkg : Number,
    wanttocoverbackareawithms : String,
    areaofmswork : Number,
    acsystemtype : String,
    acconduitpipeandoutlet : String,
    noofacpoints : Number,
    runninglengthperpoint : Number,
    solartype : String,
    solarcapacity : Number,
    solarheater : String,
    ifsolarheaterthan : String,
    falseceilingtype : String,
    falseceilingarea : Number,
    pvcfalseceilinginopenareas : String,
    pvcfalseceilinginopenareasarea : Number,
    pvcfalseceilinginwashroom : String,
    pvcfalseceilinginwashroomarea : Number,
    rainwaterharvestingsystem : String,
    rainwaterharvestingtype : String,


});

module.exports = mongoose.model("quotation", quotationSchema);