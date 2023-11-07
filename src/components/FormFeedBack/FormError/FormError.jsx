import React from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";

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
