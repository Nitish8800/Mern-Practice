const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Hello World Home ");
});

router.get("/list", userController.userList);

module.exports = router;
