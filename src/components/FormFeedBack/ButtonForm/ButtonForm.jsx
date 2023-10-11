import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useRef } from "react";

import "./button-form.css";

const ButtonForm = ({
  text,
  onClick,
  checkFormState,
  isFormValid,
  areFieldsFilled,
}) => {
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    // Викликаємо checkFormState при наведенні мишкою
    checkFormState();
    if (isFormValid && areFieldsFilled) {
      // Застосовуємо стилі при наведенні мишкою на кнопку
      buttonRef.current.classList.add("btn-form-hover");
    }
  };

  const handleMouseLeave = () => {
    // Скидаємо стилі при знятті мишки
    buttonRef.current.classList.remove("btn-form-hover");
  };

  const buttonClass = classNames("button-submit", {
    "btn-form-hover": isFormValid && areFieldsFilled,
  });

  return (
    <div className="text-base-semibold">
      <button
        className={buttonClass}
        ref={buttonRef}
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
