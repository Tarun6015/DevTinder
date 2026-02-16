const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Tarun", lastName: "Bowrothu" });
});
app.use("/down", (req, res) => {
  res.send("The Server is down");
});
app.post("/user", (req, res) => {
  res.send("Data successfully saved");
});
app.delete("/user", (req, res) => {
  res.send("Data successfully deleted");
});
app.listen(3000, () => {
  console.log("The server is running");
});
