const { Schema, model } = require("mongoose");

const tasksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: String,
      required: true,
      trim: true,
    },
    timelimit: {
      type: String,
      required: true,
      trim: true,
    },
    datelimit: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("tasks", tasksSchema);
