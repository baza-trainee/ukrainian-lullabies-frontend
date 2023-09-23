import React from "react";
import { motion } from "framer-motion";
import SIcon from "../../icons/SIcon";

export const GeneralTitle = () => {
  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="kolyskovaWrap margin-bottom">
      <motion.div
        custom={ 1 }
        variants={ animationElement }
        className="kolyskovaWrap"
      >
        <div className="kolyIcon text-5xl">
          Koly
        </div>
        <div className="letterS">
          <SIcon />
        </div>
        <div className="kovaIcon text-5xl">
          Kova
        </div>
        <div className="oundIconWrap text-5xl">
          ound
        </div>
      </motion.div>
    </motion.div>)
}