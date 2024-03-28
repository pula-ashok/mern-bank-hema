const Customer = require("../model/Customer");

const customerRegister = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { customerRegister, customerLogin };
