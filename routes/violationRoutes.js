const express = require("express");
const router = express.Router();
const Violation = require("../models/Violation");
const authenticateToken = require("../middleware/auth");
const upload = require("../middleware/upload");
console.log(upload);
// Add a new violation
router.post("/add", authenticateToken,upload.single("proof"), async (req, res) => {
  const { studentName, applicationID, reason } = req.body;
  const proof = req.file ? req.file.path : null;

  try {
    const newViolation = new Violation({
      studentName,
      applicationID,
      reason,
      proof
    });

    await newViolation.save();
    res.status(201).json({ message: "Violation record added successfully." });
  } catch (err) {
    res.status(500).json({ error: "Error adding violation record." });
  }
});


// Get all violations
router.get("/records", async (req, res) => {
    try {
      const records = await Violation.find();
      res.status(200).json(records);
    } catch (err) {
      res.status(500).json({ error: "Error fetching violation records." });
    }
});
  

module.exports = router;


