const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const bodyParser = require("body-parser");
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello World Home ");
});

router.get("/list", userController.userList);

router.post("/add", userController.userAdd);

module.exports = router;
