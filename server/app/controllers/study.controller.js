const Study = require('../models/study.model.js');

// Create and Save a new Study
exports.create = (req, res) => {

    // Create a Study
    const study = new Study(req.body);

    // Save Study in the database
    study.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Study."
        });
    });
};

// Retrieve and return all studies from the database.
exports.findAll = (req, res) => {
    Study.find()
        .then(studys => {
            res.send(studys);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving studies."
        });
    });
};

// Find a single study with a studyId
exports.findOne = (req, res) => {
    Study.findById(req.params.studyId)
        .then(study => {
            if (!study) {
                return res.status(404).send({
                    message: "Study not found with id " + req.params.studyId
                });
            }
            res.send(study);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Study not found with id " + req.params.studyId
            });
        }
        return res.status(500).send({
            message: "Error retrieving study with id " + req.params.studyId
        });
    });
};

// Update a study identified by the studyId in the request
exports.update = (req, res) => {

    // Find Study and update it with the request body
    Study.findByIdAndUpdate(req.params.studyId, {
        name: req.body.name,
        sex: req.body.sex,
        birthday: req.body.birthday
    }, {new: true})
        .then(study => {
            if (!study) {
                return res.status(404).send({
                    message: "Study not found with id " + req.params.studyId
                });
            }
            res.send(study);
        }).catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Study not found with id " + req.params.studyId
            });
        }
        return res.status(500).send({
            message: "Error updating Study with id " + req.params.studyId
        });
    });

};

// Delete a study with the specified studyId in the request
exports.delete = (req, res) => {

    Study.findByIdAndRemove(req.params.studyId)
        .then(study => {
            if (!study) {
                return res.status(404).send({
                    message: "Study not found with id " + req.params.studyId
                });
            }
            res.send({message: "Study deleted successfully!"});
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Study not found with id " + req.params.studyId
            });
        }
        return res.status(500).send({
            message: "Could not delete Study with id " + req.params.studyId
        });
    });

};