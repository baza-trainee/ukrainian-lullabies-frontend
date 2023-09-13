import React from "react";
import { Outlet } from "react-router-dom";
import "./index.scss";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

export const App = () => {
  return (
    <section className="background-dark ">
      <div className="container">
        <Header />
      <Hero/>
      <Outlet />
      </div>
      
      
    </section>
  );
};
