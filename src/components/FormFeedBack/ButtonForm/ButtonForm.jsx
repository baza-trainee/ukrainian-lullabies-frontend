import React from "react";
import PropTypes from "prop-types";

import "./button-form.css";
const ButtonForm = ({ text, onClick }) => {
  return (
    <div className="text-base-semibold">
      <button className=" button-submit" type="submit" onClick={onClick}>
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
};
