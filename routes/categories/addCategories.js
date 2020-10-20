const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/categories", (req, res) => {
  const body = req.body;
  const result = db.add("categories", body);
  res.send(result);
});

module.exports = app;
