import React from "react";
import { useSelector } from "react-redux";
import "./map-catalogue.css"
import map from "../../assets/images/Map.png"
import mapLight from "../../assets/images/map-light.png"

export const MapCatalogue = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  return <div className="map-catalogue">
    <img style={{ width: "800px" }} src={isLightTheme ? mapLight : map} alt="Map" />
  </div>;
};
