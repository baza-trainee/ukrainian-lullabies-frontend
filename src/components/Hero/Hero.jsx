import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState, useRef } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import { getLightTheme } from "../../redux/theme/themeSelectors";
import Notification from "./Notification/Notification";
import { Ornaments } from "../Ornaments/Ornaments";
import { GeneralTitle } from "../GeneralTitle/GeneralTitle";

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";

import ButtonShare from "./Button/ButtonShare";

import "./hero.css";

const Hero = () => {
  const { t } = useTranslation();
  const isLightTheme = useSelector(getLightTheme);
  // notofication
  const [isNotification, setIsNotification] = useState(false);
  // for scroll
  const selectionsRef = useRef(null);

  const notification = () => {
    setIsNotification(true);
    setTimeout(() => setIsNotification(false), 2000);
  };

  const copyLinkToClipboard = async () => {
    try {
      const urlToCopy =
        "https://kolyskova-sound-git-dev-baza-trainee-ukraine.vercel.app/#/map";
      await navigator.clipboard.writeText(urlToCopy);
      notification();
    } catch (error) {
      console.error("Не вдалося скопіювати посилання: ", error);
    }
  };

  const scrollToSelections = () => {
    if (selectionsRef.current) {
      selectionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
      custom={1}
      ref={ref}
      className="container heroWrapper margin-bottom"
    >
      <div className="kolyskovaWrap hero-margin">
        <motion.div
          custom={1}
          variants={animationElement}
          className="kolyskovaWrap"
        >
          <GeneralTitle />
        </motion.div>
        <motion.div
          custom={2}
          variants={animationElement}
          className="ornamentWrap"
        >
          <div className="element-left">
            <OrnamentsLeftIcon />
          </div>
          <p className="text-base text-tablet-hero">{t("heroText")}</p>
          <div className="element-right">
            <OrnamentsRightIcon />
          </div>
        </motion.div>
        <motion.div
          custom={3}
          variants={animationElement}
          className="animation"
        >
          <div
            className={classNames("hero-btn", {
              "bg-dark": !isLightTheme,
            })}
          >
            <Link
              to="selections"
              className={classNames("button", "listen-button", {
                "button-dark": !isLightTheme,
              })}
              onClick={scrollToSelections}
            >
              {t("listen")}
            </Link>
            <ButtonShare text={t("share")} onClick={copyLinkToClipboard} />
          </div>
        </motion.div>
        {isNotification && <Notification textNotification={t("shareLink")} />}
      </div>
      <div className="ornamets-hero">
        <Ornaments />
      </div>
    </motion.section>
  );
};

export default Hero;
