const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmpass: {
      type: String,
      required: true,
      trim: true,
      default: "unsigned",
    },
    task: {
      type: Object,
      trim: true,
      default: "unsigned",
    },
    count: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
