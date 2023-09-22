import React from "react";
import { NavLink } from "react-router-dom";

export const MapPlayer = () => {
  return <div style={{ height: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
    <h2>Map player</h2>
    <NavLink className="button" style={{ marginTop: "150px" }} to={"/"}>На головну</NavLink>
  </div>;
};
