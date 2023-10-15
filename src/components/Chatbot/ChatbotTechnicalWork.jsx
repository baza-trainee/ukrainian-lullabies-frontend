import React from "react";
import classNames from "classnames";
import Popup from "reactjs-popup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Loader } from "../Loader/Loader";

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";

import "../TechnicalWorks/TechnicalWorks.css";
import "./Chatbot.css";

/* import TechMobSvg from "../../images/mobile-loader-black.png";
import TechMobSvgLight from "../../images/mobile-loader-white.png";
import TechDeskSvg from "../../images/loader-dark1.png";
import TechDeskSvgLight from "../../images/loader-light.png"; */

export const ChatbotTechnicalWork  = ({ isLightTheme }) => {
  const { t } = useTranslation();
  return (
    <div className="chat_button">
      <Popup
        trigger ={<div className="button ">
            <Link href="#" className="text-base-semibold">
              {t("play")}
            </Link>
          </div>}
        modal
        lockScroll
        overlayStyle={isLightTheme ? { background: "rgba(0, 0, 0, 0.6)" } : { background: "rgba(231, 231, 231, 0.6)" }}
        >
        {(close) => (
          <div className={classNames("header-user-modal", { "header-user-modal-light": isLightTheme })}>
            <button className="header-user-modal-closeBtn" onClick={close}>
              &times;
            </button>
            <TechnicalWorksElement isLightTheme={isLightTheme} />
          </div>
        )}
      </Popup>
    </div>
  );
};

const TechnicalWorksElement = ({ isLightTheme }) => {
    /* const SvgMob = isLightTheme ? TechMobSvg : TechMobSvgLight;
    const SvgDesk = isLightTheme ? TechDeskSvg : TechDeskSvgLight; */
    const { t } = useTranslation();
    return (
      <div style={{ flexDirection: "column" }} className="tech-wrap">      
        <Loader />
        <div className="tech-container">
          <div className="right">
            <OrnamentsLeftIcon />
          </div>
          <div>
            <p style={{ marginBottom: "20px" }} className="center text-base">
              {t("technikalWorsk")}
  
              {t("technikalWorsk2")}
            </p>
          </div>
  
          <div className="left">
            <OrnamentsRightIcon />
          </div>
        </div>
      </div>
    );
  };