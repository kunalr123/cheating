import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddViolation from "./pages/AddViolation";
import ViolationRecords from "./pages/ViolationRecords";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-violation" element={<AddViolation />} />
        <Route path="/violation-records" element={<ViolationRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
