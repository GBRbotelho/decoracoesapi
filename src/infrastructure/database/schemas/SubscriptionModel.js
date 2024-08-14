const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  idSubscription: {
    type: String,
  },
  planName: {
    type: String,
  },
  planPrice: {
    type: String,
  },
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

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;
