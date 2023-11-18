import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => (
        <div className="error-message text-base">{message}</div>
      )}
    />
  );
};
export default FormError;
FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
