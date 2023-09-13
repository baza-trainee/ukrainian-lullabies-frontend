import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutUs } from "./pages/AboutUsPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import RootLayout from "./RootLoyayt.jsx";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <RootLayout /> }>
        <Route index element={<MainPage />} />
        </Route>
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);