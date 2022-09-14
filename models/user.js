const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // add valid email address property here.
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought_id",
    },
  ],
});

// add a virtual called friendCount that retrieves the length of the user's friends array field on query

const User = model("User", userSchema);

module.exports = User;
