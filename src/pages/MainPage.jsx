import React from "react";
import { Outlet } from "react-router-dom";
import { MapTabs } from "../components/MapTabs/MapTabs";


import Hero from "../components/Hero/Hero";

export const MainPage = () => {
  return (
    <main>
      <p>Main Page</p>
      <MapTabs />
      <Outlet />
      <Hero />
    </main>
  );
};
