const express = require("express");
const {
  customerRegister,
  customerLogin,
} = require("../controller/registerController");

const router = express.Router();

router.post("/signup", customerRegister);
router.post("/login", customerLogin);

module.exports = router;
