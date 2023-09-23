import React from "react";
import PropTypes from "prop-types";

import "./button-form.css";
const ButtonForm = ({ text }) => {
  return (
    <div className="text-base-semibold">
      <button className=" button-submit" type="submit">
        {text}
      </button>
    </div>
  );
};
export default ButtonForm;

ButtonForm.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};
