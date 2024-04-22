const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentHandler = require("./controllers/studentRequestHandlers.js");

app.use(express.json());

async function callAwaitFunction() {
  await mongoose.connect("mongodb://127.0.0.1:27017/student");
  console.log("connect to mongodb");
}

callAwaitFunction();

app.use("/students", studentHandler);

app.listen(8080, (err) => {
  if (err) {
    console.log("There is an error");
  } else {
    console.log("Server started successfully at ", 8080);
  }
});

// module.export.mongoose = mongoose;
