import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import classNames from "classnames";
import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg"
import "./map.css"

export const MapTabs = () => {
    const isLightTheme = useSelector((state) => state.theme.isLightTheme);

    return (<section className="tabs">
        <h2 className={classNames({
            "map-tabs__text map-tabs__light": isLightTheme,
            "map-tabs__text map-tabs__dark": !isLightTheme,
        })}>Музей колискової</h2>
        <div className="map-tabs">
            <NavLink className={classNames("map-tabs__button", "tabs1", {
                "map-tabs__light": isLightTheme,
                "map-tabs__dark": !isLightTheme,
            })} to={"/map"}>Традиційні колискові</NavLink>
            <NavLink className={classNames("map-tabs__button", "tabs2", {
                "map-tabs__light": isLightTheme,
                "map-tabs__dark": !isLightTheme,
            })} to={"/songs"}>Співаємо разом</NavLink>
            <NavLink className={classNames("map-tabs__button", "tabs3", {
                "map-tabs__light": isLightTheme,
                "map-tabs__dark": !isLightTheme,
            })} to={"/anima"}>Колискові в анімаціях</NavLink>
        </div>
        <Outlet />
        <img src={tabsSvg} alt="tabsSvg" />
    </section>)
};