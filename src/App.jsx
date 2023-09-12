import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";

export const App = () => {
  return (
    <section className="background-dark">
      <h1 className="h1">Kolyskova Sound</h1>
      <Outlet />
    </section>
  );
};
