const express = require("express");
const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("This is about!");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page!");
});

app.get("/blog", (req, res) => {
  res.send("This is blog page!");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
