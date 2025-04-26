import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AwsQuiz from "./pages/AwsQuiz";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<AwsQuiz />} />
          <Route path="*" element={<AwsQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 