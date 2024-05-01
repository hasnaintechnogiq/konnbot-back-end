const mongoose = require('mongoose');

const snagsSchema = mongoose.Schema({
    headingforshorting: String,
    maintitle: String,
    subtitle: String,
    firstcheck: String,
    secondcheck: String,
    thirdcheck: String,
    subactivityID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subactivities'
    }
});

module.exports = mongoose.model("snags", snagsSchema);