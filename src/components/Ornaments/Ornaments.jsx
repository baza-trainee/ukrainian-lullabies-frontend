import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
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

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <motion.div animate={inView ? "visible" : "hidden"}
            variants={animationElement}
            ref={ref} custom={4} className="info-tech-div">
            <motion.img min-width="328px" height="27px" className="mobile-icon" custom={4} src={tabsSvgMob} alt="tabsSvg" />
            <motion.img max-width="1160px" height="42px" className="mobile-desktop" custom={4} src={tabsSvg} alt="tabsSvg" />
        </motion.div>
    )
}