const express = require("express");
const {
  customerRegister,
  customerLogin,
  customerDeposit,
  customerWithdraw,
} = require("../controller/customerController");

const router = express.Router();

router.post("/signup", customerRegister);
router.post("/login", customerLogin);
router.post("/deposit", customerDeposit);
router.post("/withdraw", customerWithdraw);

module.exports = router;
