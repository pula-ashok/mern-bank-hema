const mongoose = require("mongoose");

const withdrawSchema = new mongoose.Schema({
  username: String,
  accountNumber: Number,
  withdrawAmount: Number,
  withdrawType: String,
  date: String,
});
const Withdraw = mongoose.model("Withdraw", withdrawSchema);

module.exports = Withdraw;
