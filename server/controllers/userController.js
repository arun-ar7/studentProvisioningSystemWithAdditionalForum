var express = require("express");
var router = express.Router();
let UserModel = require("../model/UserModel").UserModel;

router.post("/signup", async function (req, res) {
  try {
    let body = req.body;
    let user = new UserModel({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        code: 400,
        message: "Duplicate Entry",
      });
      console.warn("Duplicate Entry for Student");
      return;
    }
    res.status(400).send(error);
  }
});

router.post("/login", async function (req, res) {
  try {
    let user = await UserModel.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user == null) {
      throw new Error("User Not Found", { code: 404 });
    }
    res.json(user);
  } catch (error) {
    if (error.message.includes("Not Found")) {
      res.status(404).send({
        code: 404,
        message: error.message,
      });
      return;
    }
    console.log(error);
    res.send("Error");
  }
});

module.exports = router;
