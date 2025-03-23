const mongoose = require('mongoose');

const renovationSchema = mongoose.Schema({
    Flat: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    FlatBHK: {
        type: String,
        default: 'None'
    },
    Duplex: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    DuplexGplus: {
        type: Number,
        default: 0
    },
    DrawingRoom: {
        type: Number,
        default: 0
    },
    LivingDinningRoom: {
        type: Number,
        default: 0
    },
    Kitchen: {
        type: Number,
        default: 0
    },
    BedRoom: {
        type: Number,
        default: 0
    },
    WashRoom: {
        type: Number,
        default: 0
    },
    Balcony: {
        type: Number,
        default: 0
    },
    Others: {
        type: Number,
        default: 0
    },
    Civil: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    CivilOption: {
        type: String,
        default: 'None'
    },
    Electrical: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    ElectricalOption: {
        type: String,
        default: 'None'
    },
    Ceiling: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    CeilingOption: {
        type: String,
        default: 'None'
    },
    Tiling: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    TilingOption: {
        type: String,
        default: 'None'
    },
    Finishes: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    FinishesOption: {
        type: String,
        default: 'None'
    },
    Plumbing: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    PlumbingOption: {
        type: String,
        default: 'None'
    },
    DoorWindows: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    DoorWindowsOption: {
        type: String,
        default: 'None'
    },
    Name: {
        type: String,
        required: true
    },
    MobileNumber: {
        type: Number,
        required: true
    },
    Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("renovation", renovationSchema);











