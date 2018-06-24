module.exports = (app) => {
    const doctors = require('../controllers/doctors.controller.js');

    // Retrieve all doctors
    app.get('/doctors', doctors.findAll);

    // Retrieve a single doctor with doctorId
    app.get('/doctors/:doctorId', doctors.findOne);

};