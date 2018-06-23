const mongoose = require('mongoose');

const StudySchema = mongoose.Schema({

    patient: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['planned', 'in progress', 'finished'],
        required: true
    },

    startTime: {
        type: Date,
        required: true
    },
    endTime: Date

}, {
    timestamps: true
});

module.exports = mongoose.model('Study', StudySchema);