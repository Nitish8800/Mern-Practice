const Users = require("../models/userModel");

const userList = async (req, res) => {

let data = await Users.find();

  res.send("User List ");
};

module.exports = { userList };
