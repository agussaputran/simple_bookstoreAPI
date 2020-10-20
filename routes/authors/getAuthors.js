const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/authors", (req, res) => {
  const id = req.query.id;
  let result;

  if (id) {
    const isValidId = parseInt(id);
    if (!isValidId) {
      res.status(400).send("wrong id format");
      return;
    }

    const dbResult = db.get("authors", id);
    if (!dbResult) {
      res.status(404).send("not found");
      return;
    } else {
      result = dbResult;
    }
  } else {
    result = db.get("authors");
  }

  res.send(result);
});

module.exports = app;
