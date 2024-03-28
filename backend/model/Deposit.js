const mongoose = require("mongoose");

const DepositSchema = new mongoose.Schema({
  username: String,
  accountNumber: Number,
  date: String,
  depositAmount: Number,
  depositType: String,
});

const Deposit = mongoose.model("Deposit", DepositSchema);
module.exports = Deposit;
