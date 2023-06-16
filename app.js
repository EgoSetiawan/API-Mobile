const express = require("express");
const app = express();
const cors = require("cors");
const errorHandling = require("./helper/error.handling");
const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(routes);

app.use(errorHandling);

module.exports = app;
