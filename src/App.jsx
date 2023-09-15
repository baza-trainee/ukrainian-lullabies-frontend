import React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MapTabs } from "./components/MapTabs/MapTabs";
import { MapCatalogue } from "./components/MapCatalogue/MapCatalogue";
import { LullabiesInAnimation } from "./components/LullabiesInAnimation/LullabiesInAnimation";
import { SingTogether } from "./components/SingTogether/SingTogether";
import { AboutUs } from "./pages/AboutUsPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import RootLayout from "./Layouts/RootLayout";


export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/" element={<MapTabs />}>
          <Route index path="map" element={<MapCatalogue />} />
          <Route path="anima" element={<LullabiesInAnimation />} />
          <Route path="songs" element={<SingTogether />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);