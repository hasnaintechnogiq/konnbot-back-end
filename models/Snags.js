const mongoose = require('mongoose');

const snagsSchema = mongoose.Schema({
    headingforshorting: String,
    maintitle: String,
    subtitle: String,
    firstcheck: {
        type: String,
        default: "No"
    },
    secondcheck: {
        type: String,
        default: "No"
    },
    thirdcheck: {
        type: String,
        default: "No"
    },
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("snags", snagsSchema);