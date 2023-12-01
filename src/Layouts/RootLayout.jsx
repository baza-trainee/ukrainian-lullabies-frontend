import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import "./Layouts.css";

export default function RootLayout() {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  return (
    <>
      <div
        className={classNames("body", {
          "bg-dark": !isLightTheme,
          "bg-light": isLightTheme,
        })}
      >
        <div
          className={classNames("bg-img-left", {
            "bg-image-dark": !isLightTheme,
            "bg-image-light": isLightTheme,
          })}
        ></div>
        <div
          className={classNames("content", {
            "bg-dark": !isLightTheme,
            "bg-light": isLightTheme,
          })}
        >
          <Header />
          <main className="container">
            <Outlet />
          </main>
          <Footer />
        </div>
        {/* <Cookies /> */}
        <div
          className={classNames("bg-img-right", {
            "bg-image-dark": !isLightTheme,
            "bg-image-light": isLightTheme,
          })}
        ></div>
      </div>
    </>
  );
}
