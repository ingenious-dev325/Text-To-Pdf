import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";

import FormPost from "./components/FormPost"
import PdfViewer from "./components/PdfViewer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          exact
          path="/"
          element={<FormPost/>}
        />
      </Routes>
      <Routes>
        <Route 
          exact
          path="/pdf"
          element={<PdfViewer/>}
        />
      </Routes>
    </div>
  );
}

export default App;
