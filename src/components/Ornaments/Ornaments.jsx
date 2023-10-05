import React from 'react';
import { motion } from 'framer-motion';
import './ornaments.css'

import tabsSvgMob from "../../assets/images/OrnamentsMapTabs.svg";
import tabsSvg from "../../assets/images/ornamentsMapTabsSection.svg";


export const Ornaments = () => {
    const animationElement = {
        hidden: {
            opacity: 0,
        },
        visible: custom => ({
            opacity: 1,
            transition: { delay: custom * 0.4 },
        }),
    }

    return (
        <motion.div custom={4} variants={animationElement} className="info-tech-div">
            <motion.img className="mobile-icon" custom={4} src={tabsSvgMob} alt="tabsSvg" />
            <motion.img className="mobile-desktop" custom={4} src={tabsSvg} alt="tabsSvg" />
        </motion.div>
    )
}