import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useSelector } from "react-redux";

import { getLightTheme } from "../../../redux/theme/themeSelectors";

import "./notification.css";

const Notification = ({ textNotification }) => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);
  return (
    <div
      className={classNames("notification", {
        "notification-dark": !isLightTheme,
        "notification-white": isLightTheme,
      })}
    >
      <p className="text-xs">{textNotification}</p>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  textNotification: PropTypes.string.isRequired,
};
