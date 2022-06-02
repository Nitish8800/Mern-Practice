const express = require("express");
const app = express();
const port = 8080;
const connectDB = require("./config/db");
const userRoute = require("./routes/users");

connectDB();

app.use("/", userRoute);

app.listen(port, () => {
  console.log("server started at port: " + port);
});
