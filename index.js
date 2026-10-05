const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

app.get("/api/plans", (req, res) => {
  res.json([
    {name:"FREE", price:0, duration:"24 Hours", note:"1 slot per user"},
    {name:"STARTER", price:49, duration:"7 Days", note:"For small bots"},
    {name:"PRO", price:99, duration:"30 Days", note:"For growing projects"},
    {name:"VPS", price:299, duration:"30 Days", note:"Dedicated resources"}
  ]);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
