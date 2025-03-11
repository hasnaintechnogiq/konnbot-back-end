const mongoose = require('mongoose');

const websiteleadSchema = mongoose.Schema({
    cityName: String,
    PlotArea: Number,
    PlotFrontageAreainFeet: Number,
    NoofFloors: Number,
    BuiltuponTopFloor: String,
    NoofToilets: Number,
    Lift: String,
    ClientName: String,
    MobileNumber: Number,










    Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("websitelead", websiteleadSchema);