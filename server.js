const express = require("express");
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/data", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.json("CORS success!!!");
});

app.listen(PORT, () => {
  console.log("server is running:9000");
});
