import React from 'react';
import './ornaments.css'

import tabsSvgMob from "../../assets/images/OrnamentsMapTabs.svg";
import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg";

export const Ornaments = () => {

    return (
        <div className="info-tech-div">
            <img width="328px" height="27px" className="mobile-icon" src={tabsSvgMob} alt="tabsSvg" />
            <img width="1064px" height="42px" className="mobile-desktop" src={tabsSvg} alt="tabsSvg" />
        </div>
    )
}