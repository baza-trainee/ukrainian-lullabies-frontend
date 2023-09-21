import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from 'framer-motion';

import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg"
import "./map.css"

export const MapTabs = () => {
  const animationElement = {
    hidden: {
      opacity: 0,
    },
    visible: custom => ({
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  }
  return (<motion.section
    initial="hidden"
    whileInView="visible"
    className="tabs margin-bottom">
    <motion.h2 custom={1} variants={animationElement} className="map-tabs__text text-4xl">Музей колискової</motion.h2>
    <motion.div custom={3} variants={animationElement} className="map-tabs">
      <NavLink className="map-tabs__button text-2xl tabs1" to={"/map"}>Традиційні колискові</NavLink>
      <NavLink className="map-tabs__button text-2xl tabs2" to={"/songs"}>Співаємо разом</NavLink>
      <NavLink className="map-tabs__button text-2xl tabs3" to={"/anima"}>Колискові в анімаціях</NavLink>
    </motion.div>
    <motion.div custom={4} variants={animationElement} >
      <Outlet />
    </motion.div>
    <motion.img custom={4} variants={animationElement} src={tabsSvg} alt="tabsSvg" />
  </motion.section>)
};