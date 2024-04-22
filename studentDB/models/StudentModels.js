const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Student = new Schema({
  rollNo: { type: String, unique: true, required: true },
  email: { type: String, required: true, unique: true },
  firstname: String,
  lastname: String,
  dateOfBirth: String,
  address: String,
  department: String,
  parentName: String,
  bloodGroup: String,
  isActive: Boolean,
  createdTime: { type: Date, default: Date.now },
});

const studentModel = mongoose.model("students", Student);

exports.studentModel = studentModel;
