const express = require("express");
const bodyParser = require("body-parser");
const rootRoute = require("./routes/rootRoute");
const addStores = require("./routes/stores/addStores");
const getStores = require("./routes/stores/getStores");
const addCategories = require("./routes/categories/addCategories");
const getCategories = require("./routes/categories/getCategories");
const addAuhtors = require("./routes/authors/addAuthors");
const getAuthors = require("./routes/authors/getAuthors");
const addPublishers = require("./routes/publishers/addPublishers");
const getPublishers = require("./routes/publishers/getPublishers");
const addBooks = require("./routes/books/addBooks");
const getBooks = require("./routes/books/getBooks");

const app = express();
app.use(bodyParser.json());

app.use(rootRoute);
app.use(addStores);
app.use(getStores);
app.use(addPublishers);
app.use(getPublishers);
app.use(addCategories);
app.use(getCategories);
app.use(addAuhtors);
app.use(getAuthors);
app.use(addBooks);
app.use(getBooks);

const port = 3000;
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
});
