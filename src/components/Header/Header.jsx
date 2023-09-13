import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../SVGComponents/Logo";

export const Header = () => {
  return (
    <div className="header container">
      <Logo width="56" height="53" />
      <h1>Header</h1>
      <Link to="/about"> About</Link>
    </div>
  );
};
