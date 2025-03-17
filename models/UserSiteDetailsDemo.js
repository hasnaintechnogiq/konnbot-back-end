const mongoose = require('mongoose');

const usersitedetailsdemoSchema = mongoose.Schema({
    projectstatus: String,
    priority: String,
    goingtostart: String,
    units: String,
    area: Number,
    frontunitmain: Number,
    frontunitsecond: Number,
    depthunitmain: Number,
    depthunitsecond: Number,
    buildingtype: String,
    basement: String,
    numbersoffloors: Number,
    staircasetower: String,
    numbersofwashroom: Number,
    floorheigth: Number,
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    Createdate: { type: Date, default: Date.now },

});

module.exports = mongoose.model("usersitedetailsdemo", usersitedetailsdemoSchema);