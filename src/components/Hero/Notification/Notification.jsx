import React from "react";
import PropTypes from "prop-types";


import "./notification.css";

const Notification = ({ textNotification }) => {
  return (
    <div className="notification">
      <p className="text-xs">{textNotification}</p>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  textNotification: PropTypes.string.isRequired,
};
