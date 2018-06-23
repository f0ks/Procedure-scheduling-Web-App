module.exports = (app) => {
    const studies = require('../controllers/study.controller.js');

    // Create a new study
    app.post('/studies', studies.create);

    // Retrieve all studies
    app.get('/studies', studies.findAll);

    // Retrieve a single study with studyId
    app.get('/studies/:studyId', studies.findOne);

    // Update a study with studyId
    app.put('/studies/:studyId', studies.update);

    // Delete a study with studyId
    app.delete('/studies/:studyId', studies.delete);
};