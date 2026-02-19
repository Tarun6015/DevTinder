const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./Middleware/auth");
app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/userdata", (req, res, next) => {
  res.send("All user data");
});

app.get("/admin/deleteuserdata", (req, res, next) => {
  res.send("All data Deleted");
});

app.get("/user/login", (req, res, next) => {
  res.send("this is a user");
});

app.listen(3000, () => {
  console.log("The server is running");
});
