const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/data", (req, res) => {
  res.json({ name: "kani", office: "roppongi" });
});

app.listen(PORT, () => {
  console.log("server is running:8000");
});
