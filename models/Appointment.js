const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    clientname: String,
    cnumber: Number,
    cityb: String,
    Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("appointment", appointmentSchema);