import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { AboutUs } from "./pages/AboutUsPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import RootLayout from "./Layouts/RootLayout";


export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <RootLayout /> }>
        <Route index element={<MainPage />} />      
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);