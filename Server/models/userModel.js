const mongoose = require("mongoose");
const conn = require("../config/db");

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

let users = conn.model("users", userSchema);

module.exports = users;
