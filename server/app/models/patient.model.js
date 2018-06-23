const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: String,
    birthday: String

}, {
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);