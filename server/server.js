const { promisify } = require("util");
const { exec } = require("child_process");
const axios = require("axios");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const { callApi } = require("./serverUtil");
const userHandler = require("./controllers/userController");

app.use(cors());
app.use(express.json());

async function callAwaitFunction() {
  await mongoose.connect("mongodb://127.0.0.1:27017/student");
  console.log("connect to mongodb");
}

callAwaitFunction();

app.use("/users", userHandler);
app.post("/run", async (req, res) => {
  try {
    // for provisioning
    let activeStudents = await axios.get("http://localhost:8080/users");
    activeStudents = activeStudents.data;
    let invitedStudents = [];
    for (let i = 0; i < activeStudents.length; i++) {
      let isStudentInvited = false;
      isStudentInvited = await callApi({
        name: activeStudents[i]?.firstname,
        email: activeStudents[i]?.email,
      });
      if (isStudentInvited) {
        invitedStudents.push(activeStudents[i]?.email);
      }
    }
    res.send(invitedStudents);
  } catch (error) {
    console.error(`Error executing curl command: ${error.message}`);
    // res.send("Students invited successfully");
    res
      .status(200)
      .json({ messge: "Student invitation Executed Successfully" });
  }
});

app.get("/run", (req, res) => {});

app.listen(8008, (err) => {
  console.log(err);
  console.log("Server started successfully at 8008");
});
