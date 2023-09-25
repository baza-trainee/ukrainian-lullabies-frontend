import React from "react";
import { Route, Routes, HashRouter as Router, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { MapCatalogue } from "./components/MapCatalogue/MapCatalogue";
import { MapPlayer } from "./components/MapPlayer/MapPlayer";
import { LullabiesInAnimation } from "./components/LullabiesInAnimation/LullabiesInAnimation";
import { SingTogether } from "./components/SingTogether/SingTogether";
import { AboutUs } from "./pages/AboutUsPage";
import { TechnicalWorks } from "./components/TechnicalWorks/TechnicalWorks";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import RootLayout from "./Layouts/RootLayout";
import '../node_modules/swiper/swiper-bundle.min.mjs';

export const App = () => (
  <Router>
    <Routes>

      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<MainPage />} >
          <Route index element={<Navigate to="map" replace />} />
          <Route path="map" element={<MapCatalogue />} />
          <Route path="player" element={<MapPlayer />} />
          <Route path="anima" element={<LullabiesInAnimation />} />
          <Route path="songs" element={<SingTogether />} />
        </Route>
        <Route path="/about" element={<AboutUs />} />
        <Route path="tech" element={<TechnicalWorks />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);