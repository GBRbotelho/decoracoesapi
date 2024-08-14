const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  cpf: {
    type: String,
  },
  password: {
    type: String,
  },
  level: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
