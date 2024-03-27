const express = require("express");
const { customerRegister } = require("../controller/registerController");

const router = express.Router();

router.post("/signup", customerRegister);

module.exports = router;
