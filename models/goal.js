const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
  rank: { type: Number, required: true },
  goal: { type: String, required: true },
  likes: { type: Number, required: true },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
