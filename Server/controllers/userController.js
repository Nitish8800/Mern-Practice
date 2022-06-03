const Users = require("../models/userModel");
const bcrypt = require("bcryptjs");

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
  let response = await data.save();
  let mytoken = await data.getAuthToken();
  // console.log(req.body);
  res.status(200).json({ message: "ok", mytoken, response });
};

// userLogin
const userLogin = async (req, res) => {
  let { email, password } = req.body;
  let user = await Users.findOne({ email });

  var responseType = {
    message: "ok",
  };

  if (user) {
    console.log(user.password);
    let match = await bcrypt.compare(password, user.password);

    if (match) {
      responseType.message = "Login Sucessfull";
      responseType.token = "ok";
      // let mytoken = await user.getAuthToken();
      // res.status(200).json({ message: "Login Scessfully", user });
    } else {
      responseType.message = "Password is wrong";

      // res.status(401).json({ message: "Error", message: "Password is wrong" });
    }
  } else {
    // res.status(404).json({ message: "User Not Found" });
    responseType.message = "User Not Found";
  }

  res.status(200).json({ message: "ok", user, responseType });
};


module.exports = { userList, userAdd, userLogin };
