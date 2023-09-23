import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial="hidden"
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      ref={ ref }
      className="ourAchivements">
      <motion.h2 custom={ 1 } variants={ animationElement } className="ourAchivementsTitle text-4xl">Наші напрацювання</motion.h2>
      <motion.div custom={ 2 } variants={ animationElement } className="achivements text-5xl">
        <motion.div custom={ 3 } variants={ animationElement } className="achivement">
          <div className="data">123</div>
          <div className="text-3xl">Колискових</div>
        </motion.div>
        <motion.div custom={ 4 } variants={ animationElement } className="achivement text-5xl">
          <div className="data">21</div>
          <div className="text-3xl">Локацій</div>
        </motion.div>
        <motion.div custom={ 5 } variants={ animationElement } className="achivement text-5xl">
          <div className="data">48</div>
          <div className="text-3xl">Виконавців</div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
};

