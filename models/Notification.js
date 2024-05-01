const mongoose = require('mongoose');
const notificationSchema = mongoose.Schema({
    tittle: String,
    description: String,
    date: Date
});

module.exports = mongoose.model("notifications", notificationSchema);