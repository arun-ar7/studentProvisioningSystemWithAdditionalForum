const { promisify } = require("util");
const { exec } = require("child_process");
const axios = require("axios");
const express = require("express");
const app = express();
app.use(express.json());
const execAsync = promisify(exec);
const { callApi } = require("./serverUtil");

app.post("/run", async (req, res) => {
  try {
    // const curlCommand = req.body.curl;
    let activeStudents = await axios.get("http://localhost:8080/students");
    activeStudents = activeStudents.data;
    let isStudentInvited = false;
    let invitedStudents = [];
    for (let i = 0; i < activeStudents.length; i++) {
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
