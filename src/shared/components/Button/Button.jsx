import React from "react";
import PropTypes from "prop-types";

import "./button.css";

const Button = ({ children, type = "submit", variant }) => {
  const buttonClass =
    variant === "listen"
      ? "button-hero  button__listen"
      : "button-hero  button__share";

  return (
    <button className={buttonClass} type={type}>
      <span className="button__text">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string, // Додайте пропс variant
};

export default Button;
