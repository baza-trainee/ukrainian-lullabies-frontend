import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { getLightTheme } from "../../../redux/theme/themeSelectors";
import "./notification.css";

const Notification = ({ textNotification }) => {
  const isLightTheme = useSelector(getLightTheme);

  return (
    <div
      className={classNames("notification", {
        "notification-dark": !isLightTheme,
        "notification-white": isLightTheme,
      })}
    >
      <p className="notification-text text-xs">{textNotification}</p>
    </div>
  );
};
export default Notification;

Notification.propTypes = {
  textNotification: PropTypes.string.isRequired,
};
