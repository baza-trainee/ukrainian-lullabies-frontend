import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg"
import "./map.css"

export const MapTabs = () => {
    const theme = false;
    return (<section className="tabs">
        <h2 className={theme ? "map-tabs__text map-tabs__light" : "map-tabs__text map-tabs__dark"}>Музей колискової</h2>
        <div className="map-tabs">
            <NavLink className={theme ? "map-tabs__button map-tabs__light tabs1" : "map-tabs__button map-tabs__dark tabs1"} to={"/map"}>Традиційні колискові</NavLink>
            <NavLink className={theme ? "map-tabs__button map-tabs__light tabs2" : "map-tabs__button map-tabs__dark tabs2"} to={"/songs"}>Співаємо разом</NavLink>
            <NavLink className={theme ? "map-tabs__button map-tabs__light tabs3" : "map-tabs__button map-tabs__dark tabs3"} to={"/anima"}>Колискові в анімаціях</NavLink>
        </div>
        <Outlet />
        <img src={tabsSvg} alt="tabsSvg" />
    </section>)
};