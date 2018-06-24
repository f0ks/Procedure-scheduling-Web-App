module.exports = (app) => {
    const rooms = require('../controllers/rooms.controller.js');

    // Retrieve all rooms
    app.get('/rooms', rooms.findAll);

    // Retrieve a single room
    app.get('/rooms/:roomId', rooms.findOne);

};