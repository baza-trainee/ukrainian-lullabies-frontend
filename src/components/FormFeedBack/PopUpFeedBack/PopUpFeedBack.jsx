import React from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { getLightTheme } from "../../../redux/theme/themeSelectors";

import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";

import "./pop-up-feedback.css";

const PopUpFeedBack = () => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);

  return (
    <div
      className={classNames("popup-message", {
        "popup-message-dark": !isLightTheme,
        "popup-message-white": isLightTheme,
      })}
      // className="popup-message"
    >
      <OrnamentsLeftIcon />
      <p className="text-2xl pop-up-text-form">
        Дякуємо, <br /> Ваше повідомлення відправлене!
      </p>
      <OrnamentsRightIcon />
    </div>
  );
};
export default PopUpFeedBack;
