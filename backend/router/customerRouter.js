const express = require("express");
const {
  customerRegister,
  customerLogin,
  customerDeposit,
} = require("../controller/customerController");

const router = express.Router();

router.post("/signup", customerRegister);
router.post("/login", customerLogin);
router.post("/deposit", customerDeposit);

module.exports = router;
