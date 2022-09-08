const { thoughts } = require("../models/thoughts");
module.exports = thoughtsController;

// Create thought
// Get all thoughts

// get all thoughts

const thoughtController = {
  getAllThoughts(req, res) {
    thoughts
      .findAll({})

      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one thought user by id
  getThoughtById({ params }, res) {
    thoughts
      .findOne({ _id: params.thoughtId })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No id matched, please try again" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // create a thought
  addThought({ params, body }, res) {
    console.log(body);
    thoughts
      .create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
};
