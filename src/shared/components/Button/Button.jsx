import React from "react";
import PropTypes from "prop-types";

import styles from "./button.module.scss";

const Button = ({ children, type = "submit", variant }) => {
  const buttonClass = variant === "listen" ? styles.btnListen : styles.btnShare;

  return (
    <button className={`${styles.btn} ${buttonClass}`} type={type}>
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
