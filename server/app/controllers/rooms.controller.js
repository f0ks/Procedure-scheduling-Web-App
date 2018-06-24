const rooms = [
    {
        id: '1',
        name: 'Operating room'
    },
    {
        id: '2',
        name: 'Treatment room'
    },
    {
        id: '3',
        name: 'White room'
    },
    {
        id: '4',
        name: 'Green room'
    },
];


exports.findAll = (req, res) => {
    res.send(rooms);
};

// find room by id
exports.findOne = (req, res) => {
    res.send(rooms.find(room => room.id === req.params.roomId));
};