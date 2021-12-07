const mongoose = require("mongoose");
const validator = require("validator");
const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    require: true,
    validate: {
      validator: function (val) {
        return val === this.password;
      },
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.confirmPassword = undefined;
  next();
});

const userModel = mongoose.model("userTable", userSchema);
module.exports = userModel;
