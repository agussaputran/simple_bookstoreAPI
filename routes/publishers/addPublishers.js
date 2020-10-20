const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/publishers", (req, res) => {
  const body = req.body;
  const result = db.add("publishers", body);
  res.send(result);
});

module.exports = app;
