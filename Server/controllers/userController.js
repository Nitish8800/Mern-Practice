const Users = require("../models/userModel");

const userList = async (req, res) => {
  let data = await Users.find();

  res.json(data);
};

// userAdd

const userAdd = async (req, res) => {
  let { name, email, password, phoneNumber, pic } = req.body;
  let data = await Users.create({
    name,
    email,
    password,
    phoneNumber,
    pic,
  });
  console.log(req.body);
  res.status(200).json({ message: "ok", data });
};

module.exports = { userList, userAdd };
