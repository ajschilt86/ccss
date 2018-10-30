const express = require("express");
const mongoose = require("mongoose");

// Port connection
const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();

// Require Routes
const routes = require("./routes");

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Use deployed database, otherwise use CCSSUser database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/CCSSUser";

// Connect to Mongo DB
mongoose.connect(MONGODB_URI);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
