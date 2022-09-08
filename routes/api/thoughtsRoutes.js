const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  addThought,
} = require("../../controllers/thougthsController");

router.route("/").get(getAllThoughts);

router.route("/:thoughtId").(getThoughtById);

router.route("/:userId").post(addThought);

module.exports = router;
