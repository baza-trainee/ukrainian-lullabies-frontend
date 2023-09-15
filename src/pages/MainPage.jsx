import React from "react";
import { Outlet } from "react-router-dom";
import { MapTabs } from "../components/MapTabs/MapTabs";

export const MainPage = () => {
  return (
    <main>
      <p>Main Page</p>
      <MapTabs />
      <Outlet />
    </main>
  )
};
