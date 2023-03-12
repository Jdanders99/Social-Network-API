const { User, Thought } = require('../models');

const userController = {
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((data) => {
                if (!data) {
                    res.status(404).json({ message: 'Error - User not found' });
                }
                res.json(data);
            })
            .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
}