import React from "react";
import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { LullabiesInAnimation } from "./components/LullabiesInAnimation/LullabiesInAnimation";
import { MapCatalogue } from "./components/MapCatalogue/MapCatalogue";
import { MapPlayer } from "./components/MapPlayer/MapPlayer";
import { MapPlaylist } from "./components/MapPlaylist/MapPlaylist";
import { SingTogether } from "./components/SingTogether/SingTogether";
import { TechnicalWorks } from "./components/TechnicalWorks/TechnicalWorks";
import { AboutUs } from "./pages/AboutUsPage";
import { MainPage } from "./pages/MainPage";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Navigate to="map" replace />} />
          <Route path="map" element={<MapCatalogue />} />
          <Route path="player" element={<MapPlayer />} />
          <Route path="playlist" element={<MapPlaylist />} />
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
