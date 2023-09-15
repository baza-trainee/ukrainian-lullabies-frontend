import React from "react";
import "./map-catalogue.css"
import map from "../../assets/images/Map.png"

export const MapCatalogue = () => {
  return <div className="map-catalogue">
    <img style={{ width: "800px" }} src={map} alt="Map" />
  </div>;
};
