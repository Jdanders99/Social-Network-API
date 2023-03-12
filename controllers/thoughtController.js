const { User, Thought } = require('../models');

const thoughtController = {
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((data) => res.json(data))
            .catch((err) => res.status(500).json(err));
    },
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((data) => {
                if (!data) {
                    res.status(404).json({ message: 'Error - Thought not found' });
                }
                res.json(data);
            })
            .catch((err) => res.status(500).json(err));
    }
};