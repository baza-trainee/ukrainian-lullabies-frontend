import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { ChatbotTechnicalWork } from "./ChatbotTechnicalWork";

import "./Chatbot.css";
import "../TechnicalWorks/TechnicalWorks.css";

const Chatbot = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const isEnglishLanguage = localStorage.getItem("selectedLanguage") === "en";
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
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="container chat_wrapper"
    >
      <div className="chat_info">
        <motion.p custom={1} variants={animationElement} className="text-3xl">
          {t("chatBot")}
        </motion.p>
        <motion.ul
          custom={2}
          variants={animationElement}
          className="chat_rule_list"
        >
          <li className="text-base chat_text">
            {t("playEducationalGameWithChatbot")}
          </li>
          <li className="text-base chat_text">{t("youCanGuessWhichRegion")}</li>
          <li className="text-base chat_text">
            {t("youCanLearnAboutThePlots")}
          </li>
          <li className="text-base chat_text">{t("letsPlay")}</li>
        </motion.ul>
      </div>
      <ChatbotTechnicalWork isLightTheme={isLightTheme} />
      {/* <motion.div custom={ 3 } variants={ animationElement } className="button chat_button">
        <Link href="#" className="text-base-semibold">
          { t("play") }
        </Link>
      </motion.div> */}
      <motion.div
        custom={3}
        variants={animationElement}
        className="chat_picture"
      >
        <Link
          href="#"
          className={classNames("chat_image_dark_ua", {
            chat_image_white_ua: isLightTheme,
            ua: !isEnglishLanguage,
          })}
        ></Link>
        <Link
          to="#"
          className={classNames("chat_image_dark_en", {
            chat_image_white_en: isLightTheme,
            en: isEnglishLanguage,
          })}
        ></Link>
      </motion.div>
    </motion.div>
  );
};

export default Chatbot;
