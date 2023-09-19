import React from "react";
import { motion } from 'framer-motion';

import { SupportTheProject } from "./SupportTheProject/SupportTheProject";
import './OurAchivements.css'

export const OurAchivements = () => {
  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }
  return <motion.section
    initial="hidden"
    whileInView="visible"
    className="ourAchivements margin-bottom">
    <motion.h2 custom={ 1 } variants={ animationElement } className="ourAchivementsTitle">Наші напрацювання</motion.h2>
    <motion.div custom={ 2 } variants={ animationElement } className="achivements">
      <motion.div custom={ 3 } variants={ animationElement } className="achivement">
        <div className="data">123</div>
        <div className="dataName">Колискових</div>
      </motion.div>
      <motion.div custom={ 4 } variants={ animationElement } className="achivement">
        <div className="data">21</div>
        <div className="dataName">Локацій</div>
      </motion.div>
      <motion.div custom={ 5 } variants={ animationElement } className="achivement">
        <div className="data">48</div>
        <div className="dataName">Виконавців</div>
      </motion.div>
    </motion.div>
    <SupportTheProject />
  </motion.section>;
};

