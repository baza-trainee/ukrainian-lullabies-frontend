import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { getLightTheme } from "../../../redux/theme/themeSelectors";
import Share from "../../../icons/Share";

import "./button-share.css";

const ButtonShare = ({ text }) => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);

  return (
    <button
      className={classNames("", {
        "shared-button-light": isLightTheme,
        "shared-button": !isLightTheme,
      })}
    >
      {text} <Share className="share-icon" />
    </button>
  );
};
export default ButtonShare;

ButtonShare.propTypes = {
  text: PropTypes.string.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};
