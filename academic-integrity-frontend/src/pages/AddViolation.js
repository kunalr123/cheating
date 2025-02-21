import React, { useState } from "react";
import axios from "axios";

const AddViolation = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    reason: "",
    proof: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, proof: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    formDataObj.append("studentName", formData.studentName);
    formDataObj.append("studentId", formData.studentId);
    formDataObj.append("reason", formData.reason);
    formDataObj.append("proof", formData.proof);

    try {
      const response = await axios.post(
        "http://localhost:5012/api/violations/add",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      );
      alert("Violation record added successfully!");
    } catch (err) {
      alert("Error adding violation record.");
    }
  };

  return (
    <div>
      <h2>Add Violation Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Student ID:
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Proof (Image):
          <input type="file" name="proof" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddViolation;
