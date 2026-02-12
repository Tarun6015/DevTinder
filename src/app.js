const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("The Server is up`");
});

app.use("/down", (req, res) => {
  res.send("The Server is down");
});

app.use("/home", (req, res) => {
  res.send("This is home page");
});

app.listen(3000, () => {
  console.log("The server is running");
});
