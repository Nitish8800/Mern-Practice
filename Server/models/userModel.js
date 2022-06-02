const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
      _id: mongoose.Schema.Types.ObjectId,
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true, select: false },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// userSchema.pre("save", async function (next) {
//   if (!this.isModified) {
//     // if password is not modified, then skip this
//     next();
//   }

//   if (this.password) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
// });

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
