const mongoose = require('mongoose');

const projectstructureSchema = mongoose.Schema({
    foundation: String,
    structurelevel: String,
    masonrywall: String,
    eightinchbrickwork: String,
    uwtquantityinliter: String,
    liftprovision: String,
    numberofpeoples: String,
    structureaboveplinthlevelrcc: String,
    workuptoplinthlevelonly: String,
    floors: String,
    isolatedfooting: String,
    isolength: String,
    isowidth: String,
    isoheight: String,
    doublecage: String,
    pilefooting: String,
    piledepth: String,
    piledig: String,
    nounderbeam: String,
    staircase: String,
    stairwidth: String,
    windowy: String,
    location: String,
    rccconstructiontype: String,
    cleardoorsheight: String,
    cleardoorswidth: String,
    doorsframeheight: String,
    doorsframewidth: String,
    doorlintel:String,
    externalflydoor: String,
    windowssize: String,
    material: String,
    granitechowkat: String,
    levelssill: String,
    lintel: String,
    waterproofing: String,
    flooring: String,
    flooringsill: String,
    flooringlintel: String,
    elevation: String,
    staircaseconstructionways: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    quotationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quotation'
    }
});

module.exports = mongoose.model("projectstructure", projectstructureSchema);