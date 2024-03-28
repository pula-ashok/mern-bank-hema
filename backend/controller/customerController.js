const Customer = require("../model/Customer");
const Deposit = require("../model/Deposit");
const Withdraw = require("../model/Withdraw");

const customerRegister = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const customerLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const customer = await Customer.findOne({ username });
    if (!customer) {
      return res.status(401).json({ message: "invalid username" });
    }
    if (customer.password !== password) {
      return res.status(401).json({ message: "invalid password" });
    }
    return res.status(200).json({ message: "login successfull", customer });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const customerDeposit = async (req, res) => {
  try {
    const { username, accountNumber, date, depositAmount, depositType } =
      req.body;
    const customer = await Customer.findOne({ username, accountNumber });
    if (!customer) {
      return res
        .status(401)
        .json({ message: "invalid username or accountNumber" });
    }
    const newDeposit = new Deposit({
      username,
      accountNumber,
      date,
      depositAmount,
      depositType,
    });
    const customerDeposit = await newDeposit.save();
    customer.balance = Number(customer.balance) + Number(depositAmount);
    await customer.save();
    return res
      .status(201)
      .json({ message: "deposited successfully", balance: customer.balance });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const customerWithdraw = async (req, res) => {
  try {
    const { username, accountNumber, withdrawAmount, withdrawType } = req.body;
    const customer = await Customer.findOne({ username, accountNumber });
    if (!customer) {
      return res
        .status(401)
        .json({ message: "invalid username or accountNumber" });
    }
    const newWithdraw = new Withdraw({
      username,
      accountNumber,
      withdrawAmount,
      withdrawType,
    });
    const customerWithdraw = await newWithdraw.save();
    customer.balance = Number(customer.balance) - Number(withdrawAmount);
    await customer.save();
    return res
      .status(201)
      .json({ message: "withdraw successfully", balance: customer.balance });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  customerRegister,
  customerLogin,
  customerDeposit,
  customerWithdraw,
};
