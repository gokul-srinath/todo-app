const { Schema, model } = require("mongoose");

const TodoSchema = new Schema({
  desc: String,
  completed: Boolean,
});

const TodoModel = model("Todo", TodoSchema);

module.exports = TodoModel;
