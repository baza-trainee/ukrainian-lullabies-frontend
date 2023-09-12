import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { MainPage } from "./pages/MainPage";
import { AboutUs } from "./pages/AboutUs";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
