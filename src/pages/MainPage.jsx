import React from "react";
import { Outlet } from "react-router-dom";
import { MapTabs } from "../components/MapTabs/MapTabs";


import Hero from "../components/Hero/Hero";

export const MainPage = () => {
  return (
    < >
      <p>Main Page</p>
      <Hero />
      <MapTabs />
      <Outlet />
    </>
  );
};
