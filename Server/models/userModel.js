const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
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
      default: false,
    },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
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

userSchema.pre("save", function (next) {
  var salt = bcrypt.genSaltSync(10);

  if (this.password && this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, salt);
  }
  next();
});

userSchema.methods.getAuthToken = async function (data) {
  let params = {
    id: this._id,
    email: this.email,
    phone: this.phoneNumber,
  };

  var tokenValue = jwt.sign(params, process.env.JWT_SECRET);
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
