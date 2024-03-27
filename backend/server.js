const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const createDbConnection = require("./db");

const customerRouter = require("./router/customerRouter.js");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/api/customer/", customerRouter);

app.listen(port, () => {
  createDbConnection();
  console.log(`server is running at port ${port}`);
});
