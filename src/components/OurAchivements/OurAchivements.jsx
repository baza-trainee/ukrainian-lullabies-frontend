import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "./OurAchivements.css";

export const OurAchivements = () => {
  const { t } = useTranslation();

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

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="ourAchivements"
    >
      <motion.p
        custom={1}
        variants={animationElement}
        className="achievements-title text-4xl"
      >
        {t("achievements")}
      </motion.p>
      <motion.div
        custom={2}
        variants={animationElement}
        className="achivements"
      >
        <motion.div
          custom={3}
          variants={animationElement}
          className="achivement"
        >
          <div className=" text-5xl">123</div>
          <div className="text-3xl">{t("lullabies")}</div>
        </motion.div>
        <motion.div
          custom={4}
          variants={animationElement}
          className="achivement"
        >
          <div className="text-5xl">21</div>
          <div className="text-3xl">{t("locations")}</div>
        </motion.div>
        <motion.div
          custom={5}
          variants={animationElement}
          className="achivement"
        >
          <div className="text-5xl">48</div>
          <div className="text-3xl">{t("performers")}</div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
