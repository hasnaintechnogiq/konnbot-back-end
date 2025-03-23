const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    clientname: String,
    cnumber: Number,
    cityb: String,
    SendUpdateOnWhatsapp: {
        type: String,
        default: "No"
    },
    Createdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("appointment", appointmentSchema);