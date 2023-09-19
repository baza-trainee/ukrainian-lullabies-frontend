import React from "react";
import PropTypes from "prop-types";
import Share from "../../../icons/Share";
import "./button-share.css";

const ButtonShare = ({ text, isLightTheme }) => {
  const buttonClass = isLightTheme ? "shared-button-light" : "shared-button";
  return (
    <button className={buttonClass}>
      {text} <Share className="share-icon" />
    </button>
  );
};
export default ButtonShare;

ButtonShare.propTypes = {
  text: PropTypes.string.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
};
