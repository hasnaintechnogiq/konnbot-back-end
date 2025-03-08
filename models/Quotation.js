const mongoose = require('mongoose');

// const materialsSchema = new mongoose.Schema({
//     materailname: String,
//     materailquantity: Number,
//     materailAmount: Number
// });


// const subActivityNameCheckSchema = new mongoose.Schema({
//     subActivityName: String,
//     materialsName: [materialsSchema]
// });




const quotationSchema = mongoose.Schema({
    QuotationCreated: {
        type: String,
        default: "No"
    },
    tentativebudget: Number,
    persquarefeetcost: Number,
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
    quantitiesAndMaerialID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuantitiesMaterial'
    },




    SiteArea: {
        type: Number,
        default: 0
    },
    SiteLength: {
        type: Number,
        default: 0
    },
    SiteBreath: {
        type: Number,
        default: 0
    },
    FloorGPlus: {
        type: Number,
        default: 0
    },
    BasementFloor: {
        type: Number,
        default: 0
    },




    // Offset
    PheripheryLimit: String,
    SurroundingFront: String,
    SurroundingRight: String,
    SurroundingBack: String,
    SurroundingLeft: String,
    OffsetFront: String,
    OffsetRight: String,
    OffsetBack: String,
    OffsetLeft: String,
    // OffsetBackInNUmber : OffsetBack === "OFFSET" ? 1.5 * 3.28 : 0,



    // Site Clearance
    SiteClearanceTobeDone: String,
    SiteClearanceThick: {
        type: Number,
        default: 0
    },
    SiteClearanceSoil: String,
    RoadLeveltoExistingAvgSiteLevel: {
        type: Number,
        default: 0
    },
    RoadtoPlinth: {
        type: Number,
        default: 0
    },
    AntiTermiteSystem: String,
    PlinthFillingMaterial: String,
    BackfillingMaterialInFooting: String,


    // Area Coefficient

    AreaCoefficientBasment1: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasment2: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasment3: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasment4: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentGF: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentFF: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentSF: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentTF: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentFoF: {
        type: Number,
        default: 0
    },
    AreaCoefficientBasmentTower: {
        type: Number,
        default: 0
    },

    NumberofWashroomBasment1: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasment2: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasment3: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasment4: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentGF: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentFF: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentSF: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentTF: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentFoF: {
        type: Number,
        default: 0
    },
    NumberofWashroomBasmentTower: {
        type: Number,
        default: 0
    },

    // No. of Washroom & Kitchen


    Kitchenshape: String,
    RMCInFooting: String,
    RMCInSuper: String,

    WashroomLength: {
        type: Number,
        default: 0
    },
    WashroomWidth: {
        type: Number,
        default: 0
    },

    KitchenLength: {
        type: Number,
        default: 0
    },
    KitchenWidth: {
        type: Number,
        default: 0
    },

    // Electrical Work

    WiringFactorB57: String,
    WiringFactoD57: String,

    // Additonal Points

    // OpticalFiber : String,

    // AC
    runninglengthperpoint: {
        type: Number,
        default: 0
    },
    ACSystem: String,

    // Flase Ceiling Type
    FlaseCeilingType: String,
    FlaseCeilingPVCType: String,
    FasleCeiling: String,
    FlaseCeilingTypeAreaFactor: {
        type: Number,
        default: 0
    },

    // MS Work

    MSWorkFactor: String,

    MSMaterialType: String,
    BackSideCoverinMSOther: String,
    DuctCoveronRoofwithMSFrame: String,

    BackSideCoverinMSOtherType: String,
    DuctCoveronRoofwithMSFrameType: String,
    CutOut: String,
    CutOutAreaC101: {
        type: Number,
        default: 0
    },
    CutOutAreaD101: {
        type: Number,
        default: 0
    },

    Gazebo: String,
    TopCoverD102: String,
    GazeboAreaC101: {
        type: Number,
        default: 0
    },
    GazeboAreaD103: {
        type: Number,
        default: 0
    },
    Elevation: String,
    ElevationAreaC105: {
        type: Number,
        default: 0
    },
    ElevationAreaD105: {
        type: Number,
        default: 0
    },

    // Basement Floor Details

    BasementFloortoFloorHeight: {
        type: Number,
        default: 0
    },
    BasementHeight: {
        type: Number,
        default: 0
    },
    BasetoRoadLevel: {
        type: Number,
        default: 0
    },
    Shoring: String,
    RaftFooting: String,
    IfIsoBaseType: String,
    BasementIsoD: {
        type: Number,
        default: 0
    },
    // NumberofBasmentFloor: BasementFloor,
    // Ramp



    LiftforRamp: String,
    NumberofRampF: {
        type: Number,
        default: 0
    },
    RampRatioF: {
        type: Number,
        default: 0
    },
    BaseFloorF: String,
    TopFloorF: String,
    RampWidthF: {
        type: Number,
        default: 0
    },
    RailingTypeF: String,
    RailingMaterialF: String,


    NumberofRampS: {
        type: Number,
        default: 0
    },
    RampRatioS: {
        type: Number,
        default: 0
    },
    BaseFloorS: String,
    TopFloorS: String,
    RampWidthS: {
        type: Number,
        default: 0
    },
    RailingTypeS: String,
    RailingMaterialS: String,
    RampWaterproofing: String,

    // Structural Factors


    StructureFactor: {
        type: Number,
        default: 0
    },
    NormalFooting: String,
    FullExcavation: String,
    IfIsolatedDepth: {
        type: Number,
        default: 0
    },
    ColumnFactor: {
        type: Number,
        default: 0
    },
    BeamFactor: {
        type: Number,
        default: 0
    },

    // Curtain Wall below Plinth


    Lift: String,
    CurtainWallType: String,

    // Plumbing Work

    LineWorkType: String,

    OverheadTankCapacity: {
        type: Number,
        default: 0
    },
    SeperateWCOther: String,
    SolarLine: String,

    ReverseLine: String,

    // COBA Work


    COBAWorkFilling: String,

    WashroomWall: String,
    WashroomWallNumber: {
        type: Number,
        default: 0
    },
    WashroomWallI69: String,
    UGWTTile: String,
    ParapetStone: String,
    KitchenCounter: String,
    BoundaryWall: String,
    COBARailing: String,
    CobaRamp: String,
    WashArea: String,
    KitchenWall: String,

    // Paint Work
    NumberofPuttyCoat: {
        type: Number,
        default: 0
    },
    NumberofPrimerCoat: {
        type: Number,
        default: 0
    },
    ExternalPaintType: String,


    // Other Work

    StaricaseRailing: String,
    StaricaseRailingFactor: {
        type: Number,
        default: 0
    },
    ElevationalRailing: String,
    Schedule: String,

    // Tank

    UGWTTank: String,
    UGWTTankCapM3: {
        type: Number,
        default: 0
    },
    UGWTTankTypeN3: String,
    OHTank: String,
    OHTankCapacityM4: {
        type: Number,
        default: 0
    },
    OHTankTypeN4: String,
    SepticTank: String,
    SepticTankCapacityM5: {
        type: Number,
        default: 0
    },
    SepticTankTypeN5: String,
    FireTank: String,
    FireTankCapacityM6: {
        type: Number,
        default: 0
    },
    FireTankTypeN6: String,

    // Lift

    LiftProvision: String,
    NoOfLift: {
        type: Number,
        default: 0
    },
    NoOfPeople: String,
    LiftType: String,
    LiftStructure: String,
    MachineRoom: String,

    // Staricase 


    NoOfStaircase: {
        type: Number,
        default: 0
    },
    StaircaseWidth: {
        type: Number,
        default: 0
    },
    StaircaseType: String,
    StaircaseMaterialType: String,
    StaircaseStandard: String,
    StaricaseBaseFloor: String,
    StaricaseTopFloor: String,
    ExtraStraicase: String,
    ExtraStraicaseNoOfStaircase: {
        type: Number,
        default: 0
    },
    ExtraStraicaseStaircaseWidth: {
        type: Number,
        default: 0
    },
    ExtraStraicaseType: String,
    ExtraStraicaseMaterialType: String,
    ExtraStraicaseBaseFloor: String,
    ExtraStraicaseTopFloor: String,


    // Brick & Plaster Work

    BrickType: String,
    OuterBrickWall: String,
    ParapetWallK41: {
        type: Number,
        default: 0
    },
    BoundaryWallL41: {
        type: Number,
        default: 0
    },
    RailingN41: {
        type: Number,
        default: 0
    },
    ParapetWallK42: {
        type: Number,
        default: 0
    },
    RailingN42: {
        type: Number,
        default: 0
    },

    PlasteronRCCRoof: String,
    PlasterMaterial: String,
    InternalPlaster: String,
    Punning: String,
    PunningApplication: String,

    // Flooring

    TileSizeF: String,
    SpacinginTileF: String,
    FillersinGapsF: String,
    TileSizeS: String,
    FillersinGapsS: String,
    TileFixtures: String,
    DesignerTIle: String,
    FlooringAreaFactor: {
        type: Number,
        default: 0
    },
    AreaofApplication: String,
    FlooringBoundaryWall: String,
    WashroomHeight: {
        type: Number,
        default: 0
    },
    WashareaHeight: {
        type: Number,
        default: 0
    },
    KitchenHeight: {
        type: Number,
        default: 0
    },
    BoundaryWallN74: {
        type: Number,
        default: 0
    },
    TerraceTilingWork: String,
    TowerTIlingWork: String,


    // Door

    DoorFrameHeight: {
        type: Number,
        default: 0
    },
    MainDoor: String,
    InternalDoorN87: String,
    WashroomDoorN88: String,
    MainDoorFrame: String,
    MainDoorPanelMaterial: String,
    MainDoorSurface: String,
    MainDoorFinish: String,
    InternalDoor: String,
    InternalDoorPanelMaterial: String,
    InternalDoorSurface: String,
    InternalDoorFinish: String,
    WashroomDoor: String,
    WashroomDoorPanelMaterial: String,
    WashroomDoorSurface: String,
    WashroomDoorFinish: String,

    // Window
    WindowSizeType: String,
    WindowsMaterialType: String,
    WoodenFraming: String,
    IncludesFlyMesh: String,
    WindowFrameMaterialL109: String,
    WindowFrameMaterialN109: String,
    GrillType: String,
    Guage: String,
















    // units: String,
    // SiteArea: Number,
    // SiteLength: Number,
    // frontinch: Number,
    // SiteBreath: Number,
    // depthinch: Number,
    // blockinsite: String,
    // asperbyelaws: String,
    // asperbylawsfront: Number,
    // asperbylawsleft: Number,
    // asperbylawsright: Number,
    // asperbylawsback: Number,
    // siteclearance: String,
    // roadtositelevel: Number,
    // roadtoplinthlevel: Number,
    // soiltype: String,
    // rccstructureuptoplinthlevel: String,
    // basementrequirement: String,
    // noofbasementfloor: Number,
    // roadtobasement: Number,
    // roadtoupperfloor: Number,
    // basementtoupperfloor: Number,
    // provisionoframp: String,
    // ratiooframp: Number,
    // widthoframp: Number,
    // drainagesystem: String,
    // waterproofingtype: String,
    // septictanksize: Number,
    // FloorGPlus: Number,
    // tower: String,
    // floorleveltofloorlevel: Number,
    // mezzaninefloor: String,
    // towerheight: Number,
    // aspersitesurroundingdata: String,
    // groundfloorfactor: Number,
    // firstfloorfactor: Number,
    // secondfloorfactor: Number,
    // thirdfloorfactor: Number,
    // fourthfloorfactor: Number,
    // towerfactor: Number,
    // NormalFooting: String,
    // structurelevel: String,
    // ugwt: String,
    // lift: String,
    // noofpeople: Number,
    // staircasematerialtype: String,
    // shuttering: String,
    // iffootingfillingthematerial: String,
    // plinthfillingmaterial: String,
    // antitermite: String,
    // noofcolumnfactor: Number,
    // clengthinch: Number,
    // cwidthinch: Number,
    // creinforcementfactor: Number,
    // beamfactor: Number,
    // bwidthinch: Number,
    // bdepthinch: Number,
    // beamreinforcementfactor: Number,
    // slabthicknessinch: Number,
    // sreinforcementfactor: Number,
    // footinglengthfeet: Number,
    // footingwidthfeet: Number,
    // footingreinforcementfactor: Number,
    // curtainwalllengthfeet: Number,
    // curtainwallwidthfeet: Number,
    // curtainwallreinforcementfactor: Number,
    // gradeslabthicknessinch: Number,
    // gradesreinforcementfactor: Number,
    // sizeoftank: Number,
    // sizeoftanklengthfeet: Number,
    // sizeoftankwidthfeet: Number,
    // sizeoftankheightfeet: Number,
    // sizeoftankreinforcementfactor: Number,
    // liftlengthfeet: Number,
    // liftwidthfeet: Number,
    // liftperipherywall: String,
    // liftperipherywallreinforcementfactor: Number,
    // outerwall: String,
    // brickfactor: Number,
    // staircasewidth: Number,
    // staircasetype: String,
    // staircaselocation: String,
    // railingonbothside: String,
    // sidehandrailwithmainrailing: String,
    // railingmaterial: String,
    // towerstaircase: String,
    // plasteronrccroof: String,
    // outerplaster: String,
    // internalplaster: String,
    // waterproofinginfooting: String,
    // waterproofinginfootingpilecapraft: String,
    // waterproofingonwall: String,
    // waterproofingonwallheight: String,
    // washroomwaterproofingworktype: String,
    // terracewallwaterproofingworktype: String,
    // washareawaterproofingworktype: String,
    // bedroomwaterproofingworktype: String,
    // kitchenwaterproofingworktype: String,
    // cobainsunkenducts: String,
    // cobainterraceorroof: String,
    // grade: String,
    // electricalindividualfloorline: String,
    // includefalseceilingwiring: String,
    // inverterwiring: String,
    // earthing: String,
    // noofearthingpit: Number,
    // ifearthingthentype: String,
    // elevationallightingwork: Number,
    // securitycamerawiring: String,
    // noofsecuritycamera: Number,
    // lanethernet: String,
    // noofroomtoconnect: Number,
    // linelength: Number,
    // sewageline: String,
    // readymadechamber: String,
    // ifcastinsituthenchambercover: String,
    // pressurepump: String,
    // pressurepumpcapacity: Number,
    // watersoftner: String,
    // watersoftnercapacity: Number,
    // overheadtank: Number,
    // overheadtankmaterialtype: String,
    // additionalplumbingpoints: Number,
    // individualfloorline: String,
    // separatelineforwcandotherthings: String,
    // individualdrinkingwatertank: String,
    // reverseline: String,
    // concealedtanktype: String,
    // washbasintype: String,
    // washbasintop: String,
    // showerconcealedbody: String,
    // waterclosettype: String,
    // nahanitraptype: String,
    // toghenedglass: String,
    // mirror: String,
    // nichesabovewc: String,
    // nichesalongshower: String,
    // floortileclassification: String,
    // tilesize: String,
    // spacingintileinstallation: String,
    // tilefixtures: String,
    // stonepartitiononchangeinspace: String,
    // heightintoilet: Number,
    // heightinwasharea: Number,
    // kitchen: Number,
    // fourtyfivedegreeatcorner: String,
    // steelstripatcorner: String,
    // ifspacingintile: String,
    // washroomtypeoftile: String,
    // kitchentypeoftile: String,
    // washareatypeoftile: String,
    // bedroomtypeoftile: String,
    // terracewalltypeoftile: String,
    // ifvertifiedthentilesize: String,
    // terracetile: String,
    // iffillingthenspacingintile: String,
    // ugwttileinstallation: String,
    // ifdoingugwttileworkthenmaterial: String,
    // stoneworkonparapetboundarywallbalconyotherareasmaterial: String,
    // ifstoneworkonaboveareasmaterial: String,
    // washbasincounter: String,
    // ifcounterthanmaterial: String,
    // lengthofkitchencounter: Number,
    // kichencountertop: String,
    // ifmodularkitchenthentheinternalpartitioninbottomisofhdmrplywoodormdf: String,
    // moldingtype: String,
    // staircasematerial: String,
    // samematerialonriser: String,
    // punningforbetterfinishesonwall: String,
    // ifpunninglevelofexecution: String,
    // noofputtycoat: Number,
    // noofprimercoat: Number,
    // textureonnoofwallinaroom: String,
    // paintonfalseceiling: String,
    // internalpaint: String,
    // externalelevationfacingwall: String,
    // otherthanelevationwall: String,
    // externalpaint: String,
    // designerboundarywall: String,
    // boundarywallfinishes: String,
    // doorframeheight: Number,
    // doorframe: String,
    // externalflydoor: String,
    // panelthickness: Number,
    // panel: String,
    // windowsheight: Number,
    // sizeofwindow: Number,
    // windowsmaterial: String,
    // incaseofslidingormovablespecifyarea: String,
    // areaofslidingopenablegrill: String,
    // grilltype: String,
    // frame: String,
    // weightofmaingateinkg: Number,
    // gatemechanism: String,
    // lazercutdesign: String,
    // ductcoveronroofwithmsframe: String,
    // ductcovertop: String,
    // gazebo: String,
    // areaofgazebo: String,
    // msworkinelevation: String,
    // msworkinelevationinkg: Number,
    // wanttocoverbackareawithms: String,
    // areaofmswork: Number,
    // acsystemtype: String,
    // acconduitpipeandoutlet: String,
    // noofacpoints: Number,
    // runninglengthperpoint: Number,
    // solartype: String,
    // solarcapacity: Number,
    // solarheater: String,
    // ifsolarheaterthan: String,
    // falseceilingtype: String,
    // falseceilingarea: Number,
    // pvcfalseceilinginopenareas: String,
    // pvcfalseceilinginopenareasarea: Number,
    // pvcfalseceilinginwashroom: String,
    // pvcfalseceilinginwashroomarea: Number,
    // rainwaterharvestingsystem: String,
    // rainwaterharvestingtype: String,
    // Footing: [subActivityNameCheckSchema],
    // Plinth: [subActivityNameCheckSchema],
    // RCCWork: [subActivityNameCheckSchema],
    // BrickWork: [subActivityNameCheckSchema],
    // Electrical: [subActivityNameCheckSchema],
    // Plumbing : [subActivityNameCheckSchema],
    // Plaster : [subActivityNameCheckSchema],
    // OtherInterior : [subActivityNameCheckSchema],
    // DoorAndWindow : [subActivityNameCheckSchema],
    // Flooring : [subActivityNameCheckSchema],
    // PaintAndFinishes : [subActivityNameCheckSchema],
    // Miscellenous : [subActivityNameCheckSchema],

});

module.exports = mongoose.model("quotation", quotationSchema);