const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    clientname: String,
    cnumber: Number,
    cityb: String,
});

module.exports = mongoose.model("appointment", appointmentSchema);