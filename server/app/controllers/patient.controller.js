const Patient = require('../models/patient.model.js');

// Create and Save a new Patient
exports.create = (req, res) => {

    // Create a Patient
    const patient = new Patient(req.body);

    // Save Patient in the database
    patient.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Patient."
        });
    });
};

// Retrieve and return all patients from the database.
exports.findAll = (req, res) => {
    Patient.find()
        .then(patients => {
            res.send(patients);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving patients."
        });
    });
};

// Find a single patient with a patientId
exports.findOne = (req, res) => {
    Patient.findById(req.params.patientId)
        .then(patient => {
            if (!patient) {
                return res.status(404).send({
                    message: "Patient not found with id " + req.params.patientId
                });
            }
            res.send(patient);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        return res.status(500).send({
            message: "Error retrieving patient with id " + req.params.patientId
        });
    });
};

// Update a patient identified by the patientId in the request
exports.update = (req, res) => {

    // Find Patient and update it with the request body
    Patient.findByIdAndUpdate(req.params.patientId, req.body, {new: true})
        .then(patient => {
            if (!patient) {
                return res.status(404).send({
                    message: "Patient not found with id " + req.params.patientId
                });
            }
            res.send(patient);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        return res.status(500).send({
            message: "Error updating Patient with id " + req.params.patientId
        });
    });

};

// Delete a patient with the specified patientId in the request
exports.delete = (req, res) => {

    Patient.findByIdAndRemove(req.params.patientId)
        .then(patient => {
            if (!patient) {
                return res.status(404).send({
                    message: "Patient not found with id " + req.params.patientId
                });
            }
            res.send({message: "Patient deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });
        }
        return res.status(500).send({
            message: "Could not delete Patient with id " + req.params.patientId
        });
    });

};