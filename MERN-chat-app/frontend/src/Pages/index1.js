// index1.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App"; // Import your App component
import HomePage from "./Pages/HomePage"; // Import your HomePage component

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      {/* Add other routes as needed */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
