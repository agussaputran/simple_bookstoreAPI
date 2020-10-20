const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/publishers", (req, res) => {
  const id = req.query.id;
  let result;

  if (id) {
    const isValidId = parseInt(id);
    if (!isValidId) {
      res.status(400).send("wrong id format");
      return;
    }

    const dbResult = db.get("publishers", id);
    if (!dbResult) {
      res.status(404).send("not found");
      return;
    } else {
      result = dbResult;
    }
  } else {
    result = db.get("publishers");
  }

  res.send(result);
});

module.exports = app;
