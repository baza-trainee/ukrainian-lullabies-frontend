import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";

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
    <div className={overlayClasses}>
      <div className={popupClasses}>
        <OrnamentsLeftIcon />
        <div className="text-2xl pop-up-text-form">
          <p>{popUpThank}</p>
          <p>{popupText}</p>
        </div>
        <OrnamentsRightIcon />
      </div>
    </div>
  );
};
export default PopUpFeedBack;

PopUpFeedBack.propTypes = {
  popUpThank: PropTypes.string.isRequired,
  popupText: PropTypes.string.isRequired,
  isLightTheme: PropTypes.func,
};
