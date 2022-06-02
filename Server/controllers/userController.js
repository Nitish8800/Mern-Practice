const Users = require("../models/userModel");

const userList = async (req, res) => {
  let data = await Users.find();

  res.json(data);
};

// userAdd

const userAdd = async (req, res) => {
  res.json(200).json({ message: "ok" });
};

module.exports = { userList, userAdd };
