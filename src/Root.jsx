import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { App } from "./App.jsx";
import { AboutUs } from "./pages/AboutUs";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
