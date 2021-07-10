const { Schema, model } = require("mongoose");
const authSchema = require("../models/user");

authSchema.statics = {
  create: function (data, cb) {
    const user = new this(data);
    user.save(cb);
  },
  login: function (query, cb) {
    this.find(query, cb);
  },
};

const authModel = model("user", authSchema.scheme);
module.exports = authModel;
