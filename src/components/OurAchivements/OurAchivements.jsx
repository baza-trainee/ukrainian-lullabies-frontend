import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAchievements } from "../../redux/achievements/achievementsSlice";
import "./OurAchivements.css";

export const OurAchivements = () => {
  const dispatch = useDispatch();
  const achievements = useSelector((state) => state.achievements.data);
  const achievementsLoading = useSelector(
    (state) => state.achievements.loading
  );

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

  useEffect(() => {
    dispatch(fetchAchievements());
  }, []);

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
      {
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
            <div className=" text-5xl">
              {achievementsLoading && "Loading..."}
              {!achievementsLoading && achievements.lullabies
                ? achievements.lullabies
                : "?"}
            </div>
            <div className="text-3xl achivement-text">{t("lullabies")}</div>
          </motion.div>
          <motion.div
            custom={4}
            variants={animationElement}
            className="achivement"
          >
            <div className="text-5xl">
              {achievementsLoading && "Loading..."}
              {!achievementsLoading && achievements.regions
                ? achievements.regions
                : "?"}
            </div>
            <div className="text-3xl achivement-text">{t("locations")}</div>
          </motion.div>
          <motion.div
            custom={5}
            variants={animationElement}
            className="achivement"
          >
            <div className="text-5xl">
              {achievementsLoading && "Loading..."}
              {!achievementsLoading && achievements.artists
                ? achievements.artists
                : "?"}

            </div>
            <div className="text-3xl achivement-text">{t("performers")}</div>
          </motion.div>
        </motion.div>
      }
    </motion.section>
  );
};
