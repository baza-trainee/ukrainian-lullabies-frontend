import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial="hidden"
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      custom={ 1 }
      ref={ ref }
      className="tabs margin-bottom" id="mapTabsId"
    >
      <motion.h2 custom={ 2 } className="map-tabs__text text-4xl">Музей колискової</motion.h2>
      <motion.div custom={ 3 } className="map-tabs">
        <NavLink className="map-tabs__button text-2xl tabs1" to="/map">Традиційні колискові</NavLink>
        <NavLink className="map-tabs__button text-2xl tabs2" to="/songs">Співаємо разом</NavLink>
        <NavLink className="map-tabs__button text-2xl tabs3" to="/anima">Колискові в анімаціях</NavLink>
      </motion.div>
      <Outlet />
      <motion.img custom={ 4 } src={ tabsSvg } alt="tabsSvg" />
    </motion.section>
  );
};
