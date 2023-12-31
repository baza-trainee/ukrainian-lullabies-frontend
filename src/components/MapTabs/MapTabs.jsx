import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { NavLink, Outlet } from "react-router-dom";
import "./map.css";

import { Ornaments } from "../Ornaments/Ornaments";

export const MapTabs = () => {
  const animationElement = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.4 },
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      custom={1}
      ref={ref}
      className="tabs margin-bottom"
      id="mapTabsId"
    >
      <motion.h2 custom={2} className="map-tabs__text text-4xl">
        {t("lullabiesMuseum")}
      </motion.h2>
      <motion.div custom={3} className="map-tabs">
        <NavLink
          aria-label="Go to section map"
          id="map-tab"
          className="map-tabs__button text-2xl tabs1"
          to="/map"
        >
          {t("traditionalLullabies")}
        </NavLink>
        <NavLink
          aria-label="Go to section sing together"
          className="map-tabs__button text-2xl tabs2"
          to="/songs"
        >
          {t("singingTogether")}
        </NavLink>
        <NavLink
          aria-label="Go to section animation lullabies"
          className="map-tabs__button text-2xl tabs3"
          to="/anima"
        >
          {t("animatedLullabies")}
        </NavLink>
      </motion.div>
      <Outlet />
      <Ornaments />
    </motion.section>
  );
};
