import React from "react";

import PropTypes from "prop-types";
import classNames from "classnames";

import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";
import OrnamentMobileHero from "../../../icons/OrnamentMobileHero";

import "./pop-up-feedback.css";

const PopUpFeedBack = ({ popUpThank, popupText, isLightTheme }) => {
  const overlayClasses = classNames("overlay", {
    "overlay-light": isLightTheme,
  });

  const popupClasses = classNames("popup-message", {
    "popup-message-dark": !isLightTheme,
    "popup-message-white": isLightTheme,
  });

  return (
    <div style={{ position: "relative" }}>
      <div className={overlayClasses}> </div>
      <div className={popupClasses}>
        <OrnamentsLeftIcon className="ornaments-pop-up" />
        <div className="text-2xl pop-up-text-form">
          <p>{popUpThank}</p>
          <p>{popupText}</p>
        </div>
        <OrnamentsRightIcon className="ornaments-pop-up" />
        <div className="ornament-mobile-pop-up">
          <OrnamentMobileHero className="ornament-mobile-hero-icon " />
        </div>
      </div>
    </div>
  );
};
export default PopUpFeedBack;

PopUpFeedBack.propTypes = {
  popUpThank: PropTypes.string.isRequired,
  popupText: PropTypes.string.isRequired,
  isLightTheme: PropTypes.bool,
};
