import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

import "./button-form.css";

const ButtonForm = ({
  text,
  onClick,
  checkFormState,
  isFormValid,
  areFieldsFilled,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Викликаємо checkFormState при наведенні мишкою
    checkFormState();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonClass = `text-base-semibold button-submit ${
    isHovered && isFormValid && areFieldsFilled ? "btn-form-hover" : ""
  }`;

  return (
    <div className="text-base-semibold">
      <button
        className={buttonClass}
        type="submit"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonForm;

ButtonForm.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  checkFormState: PropTypes.func,
  isFormValid: PropTypes.bool,
  areFieldsFilled: PropTypes.bool,
};
