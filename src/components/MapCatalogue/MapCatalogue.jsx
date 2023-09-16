import React from "react";
import "./map-catalogue.css"
import map from "../../assets/images/Map.png"
import mapLight from "../../assets/images/map-light.png"

export const MapCatalogue = () => {
  const theme = false;
  return <div className="map-catalogue">
    <img style={{ width: "800px" }} src={theme ? mapLight : map} alt="Map" />
  </div>;
};
