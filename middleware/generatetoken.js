require("dotenv").config({ path: "../.env" }); // Relative path to the root directory
 // Ensure dotenv is loaded
console.log(require('dotenv').config());

const jwt = require("jsonwebtoken");

console.log("Loaded JWT Secret:", process.env.JWT_SECRET); // Add this line

const payload = { userId: "12345", username: "kunal" };
const secretKey = process.env.JWT_SECRET; // Use environment variable here
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("Generated Token:", token);
