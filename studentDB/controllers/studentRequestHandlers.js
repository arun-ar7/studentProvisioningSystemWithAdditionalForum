var express = require("express");
var router = express.Router();
let studentModel = require("../models/StudentModels").studentModel;

router.get("/:rollNo", async function (req, res) {
  try {
    let student = await studentModel.findOne({ rollNo: req.params.rollNo });
    if (student == null) {
      throw new Error("Student Not Found", { code: 404 });
    }
    res.json(student);
  } catch (error) {
    if (error.message.includes("Not Found")) {
      res.status(404).send({
        code: 404,
        message: error.message,
      });
    }
    console.log(error);
    res.send("Error");
  }
});

router.get("/", async function (req, res) {
  let students;
  if (req.query?.isActive) {
    students = await studentModel.find({
      isActive: req.query.isActive == "true",
    });
  } else {
    students = await studentModel.find();
  }
  res.json(students);
});

router.post("/", async function (req, res) {
  try {
    let body = req.body;
    let student = new studentModel({
      rollNo: body.rollNo,
      email: body.email,
      firstname: body.firstname,
      lastname: body.lastname,
      dateOfBirth: body.dateOfBirth,
      address: body.address,
      department: body.department,
      parentName: body.parentName,
      bloodGroup: body.bloodGroup,
      isActive: body.isActive,
    });
    await student.save();
    res.send("post");
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        code: 400,
        message: "Duplicate Entry",
      });
    }
    console.log("Duplicate Entry for Student");
  }
});

router.put("/:rollNo/activate", async (req, res) => {
  try {
    const updatedStudent = await studentModel.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      { $set: { ["isActive"]: true } },
      { new: true }
    );
    if (!updatedStudent) {
      throw new Error("Student ID Not Found");
    }
    res.json(updatedStudent);
  } catch (error) {
    if (error.message.includes("Student ID Not Found")) {
      res.status(404).json({
        code: 404,
        message: "Student ID Not Found",
      });
      return;
    }
    res.status(500).send("Error in updating");
  }
});

router.put("/:rollNo/deactivate", async (req, res) => {
  try {
    const updatedStudent = await studentModel.findOneAndUpdate(
      { rollNo: req.params.rollNo },
      { $set: { ["isActive"]: false } },
      { new: true }
    );
    if (!updatedStudent) {
      throw new Error("Student ID Not Found");
    }
    res.json(updatedStudent);
  } catch (error) {
    if (error.message.includes("Student ID Not Found")) {
      res.status(404).json({
        code: 404,
        message: "Student ID Not Found",
      });
      return;
    }
    res.status(500).send("Error in updating");
  }
});

module.exports = router;
