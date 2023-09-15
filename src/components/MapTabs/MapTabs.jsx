import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg"
import "./map.css"

export const MapTabs = () => {

    return (<section className="tabs">
        <h2 className="map-tabs__text">Музей колискової</h2>
        <div className="map-tabs">
            <NavLink className="map-tabs__button tabs1" to={"/map"}>Традиційні колискові</NavLink>
            <NavLink className="map-tabs__button tabs2" to={"/songs"}>Співаємо разом</NavLink>
            <NavLink className="map-tabs__button tabs3" to={"/anima"}>Колискові в анімаціях</NavLink>
        </div>
        <Outlet />
        <img src={tabsSvg} alt="tabsSvg" />
    </section>)
};