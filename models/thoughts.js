const { Schema, model } = require("mongoose");
const { reactionSchema } = require("./reaction");
const dateFormatting = require("../utils/dateformatting");

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
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

module.exports = Thoughts;
