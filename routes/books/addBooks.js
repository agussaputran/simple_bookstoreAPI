const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/books", (req, res) => {
  const body = req.body;
  const result = db.add("books", body);
  res.send(result);
});

module.exports = app;
