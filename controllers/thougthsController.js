const { thoughts } = require("../models/thoughts");
module.exports = thoughtsController;

// Create thought
// Get all thoughts

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.findAll({})
            
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

        // get one user by id
        getThoughtById({ params }, res) {
            Thought.findOne({ _id: params.thoughtId })
                .then(dbThoughtData => {
                    if (!dbThoughtData) {
                        res.status(404).json({ message: 'No id matched, please try again' });
                        return;
                    }
                    res.json(dbThoughtData);
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json(err);
                });
        },
    