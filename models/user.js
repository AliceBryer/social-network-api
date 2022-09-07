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
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  ],
});

module.exports = User;
