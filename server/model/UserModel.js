const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  isActive: { type: Boolean, default: true },
  createdTime: { type: Date, default: Date.now },
});

const userModel = mongoose.model("users", User);

exports.UserModel = userModel;
