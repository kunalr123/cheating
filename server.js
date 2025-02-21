// Import required dependencies
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const violationRoutes = require("./routes/violationRoutes"); // Correct path to violationRoutes

// Load environment variables
require('dotenv').config();


// Initialize express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Define routes
app.use("/api/violations", violationRoutes); // Correct route path

// Start server
const PORT = process.env.PORT || 5012;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
