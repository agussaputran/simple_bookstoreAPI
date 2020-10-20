const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/authors", (req, res) => {
  const body = req.body;
  const result = db.add("authors", body);
  res.send(result);
});

module.exports = app;
