const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  street: {
    type: String,
  },
  district: {
    type: String,
  },
  number: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  cep: {
    type: String,
  },
  complement: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
});

const Address = mongoose.model("Adress", AddressSchema);

module.exports = Address;
