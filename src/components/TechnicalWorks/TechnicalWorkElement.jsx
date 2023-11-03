import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { Loader } from "../Loader/Loader";
import "./TechnicalWorks.css";

export const TechnicalWorksElement = () => {
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
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      custom={1}
      ref={ref}
      className="technikal-container tech-div"
    >
      <motion.div
        custom={3}
        variants={animationElement}
        className="technikal__block container"
      >
        <div style={{ flexDirection: "column" }} className="tech-wrap">
          <div className="loader">
            <Loader />
          </div>
          <div className="tech-container">
            <div>
              <p style={{ marginBottom: "20px" }} className="center text-base">
                {t("technikalWorsk")}
                {t("technikalWorsk2")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
