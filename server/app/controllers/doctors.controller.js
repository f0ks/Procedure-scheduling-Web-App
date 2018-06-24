const doctors = [
    {
        id: '1',
        name: 'John Smith'
    },
    {
        id: '2',
        name: 'Jane Doe'
    },
    {
        id: '3',
        name: 'Mark Spenser'
    },
    {
        id: '4',
        name: 'Sarah Williams'
    },
];


exports.findAll = (req, res) => {
    res.send(doctors);
};

// find doctor by id
exports.findOne = (req, res) => {
    res.send(doctors.find(doc => doc.id === req.params.doctorId));
};