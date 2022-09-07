const { Schema, model } = require("mongoose");

const thoughtsSchema = new Schema({
  thoughtText: {
    type: String,
    require: true,
    max_length: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});
