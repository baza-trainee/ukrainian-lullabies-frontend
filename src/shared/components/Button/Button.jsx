import React from "react";
import PropTypes from "prop-types";

import css from "./button.module.css";

const Button = ({ children, type = "submit", variant }) => {
  const buttonClass = variant === "listen" ? css.btnListen : css.btnShare;

  return (
    <button className={`${css.btn} ${buttonClass}`} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string, // Додайте пропс variant
};

export default Button;

// <button className={styles.btn} type={type}>
//   {children}
// </button>;
