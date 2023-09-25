import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { getLightTheme } from "../../../redux/theme/themeSelectors";

import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";

import "./pop-up-feedback.css";

const PopUpFeedBack = ({ popupText }) => {
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
      <p className="text-2xl pop-up-text-form">{popupText}</p>
      <OrnamentsRightIcon />
    </div>
  );
};
export default PopUpFeedBack;

PopUpFeedBack.propTypes = {
  popupText: PropTypes.string.isRequired,
};
