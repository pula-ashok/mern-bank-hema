const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    accountNumber: Number,
    branch: String,
    phoneNumber: Number,
    balance: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", UserSchema);

module.exports = Customer;
