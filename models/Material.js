const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({
    materailname: String,
    materailquantity: Number,
    materailUnit: String,
    POstatus: {
        type: String,
        default: "No"
    },
    Sitestatus: {
        type: String,
        default: "No"
    },
});

module.exports = mongoose.model("material", materialSchema);