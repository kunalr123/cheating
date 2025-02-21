import React, { useEffect, useState } from "react";
import axios from "axios";

const ViolationRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axios.get("http://localhost:5012/api/violations/records");
        setRecords(response.data);
      } catch (err) {
        alert("Error fetching records.");
      }
    };
    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Violation Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student ID</th>
            <th>Reason</th>
            <th>Date</th>
            <th>Proof</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record._id}>
              <td>{record.studentName}</td>
              <td>{record.studentId}</td>
              <td>{record.reason}</td>
              <td>{new Date(record.date).toLocaleString()}</td>
              <td>
                {record.proof ? (
                  <a href={`http://localhost:5000/${record.proof}`} target="_blank" rel="noopener noreferrer">
                    View Proof
                  </a>
                ) : (
                  "No Proof"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViolationRecords;
