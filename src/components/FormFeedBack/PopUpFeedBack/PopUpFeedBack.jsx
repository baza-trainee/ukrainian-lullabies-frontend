import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { getLightTheme } from "../../../redux/theme/themeSelectors";

import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";

import "./pop-up-feedback.css";

const PopUpFeedBack = ({ popUpThank, popupText }) => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);

  return (
    <div
      className={classNames("popup-message", {
        "popup-message-dark": !isLightTheme,
        "popup-message-white": isLightTheme,
      })}
    >
      <OrnamentsLeftIcon />
      <div className="text-2xl pop-up-text-form">
        <p>{popUpThank}</p>
        <p>{popupText}</p>
      </div>
      <OrnamentsRightIcon />
    </div>
  );
};
export default PopUpFeedBack;

PopUpFeedBack.propTypes = {
  popUpThank: PropTypes.string.isRequired,
  popupText: PropTypes.string.isRequired,
};
