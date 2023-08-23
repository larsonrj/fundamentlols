// Require express from package.json and require the db connection and routes
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Create express app and listening port
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for fundamentlols running on port ${PORT}!`);
  });
});
