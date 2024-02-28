const mongoose = require('mongoose');

const quotationSchema = mongoose.Schema({
    quotationname: String,
    status: String,
    leadID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'leads'
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    projectstructureID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectstructure'
    },
    projectspaceID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projectspace'
    }],
    documentsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Document'
    }],
    commentsID: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'commentsonquotation'
    }],
    quatationdate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("quotation", quotationSchema);