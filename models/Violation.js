const mongoose = require('mongoose');

// Define the Violation schema
const ViolationSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  applicationID: {
        type: String,
        required: true
  },
  reason: {
    type: String,
    required: true
  },
  proof: {
    type: String,  // Could be a URL or file path
    required: false
  },
  dateReported: {
    type: Date,
    default: Date.now
  }
});

// Create and export the model
const Violation = mongoose.model('Violation', ViolationSchema);
module.exports = Violation;
