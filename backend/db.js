const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mern-hema";
const url1 =
  "mongodb+srv://ashokpula0307:123@cluster0.4ipfh.mongodb.net/mern-hema";
const createDbConnection = () => {
  mongoose.connect(url);
  //   mongoose.connect(url1);
  console.log("connected to mongodb");
};
module.exports = createDbConnection;
