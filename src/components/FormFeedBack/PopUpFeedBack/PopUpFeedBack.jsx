import React from "react";
import OrnamentsLeftIcon from "../../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../../icons/OrnamentsRightIcon";

import "./pop-up-feedback.css";

const PopUpFeedBack = () => {
  return (
    <div className="popup-message">
      <OrnamentsLeftIcon />
      <p className="text-2xl pop-up-text-form">
        Дякуємо, Ваше повідомлення відправлене!
      </p>
      <OrnamentsRightIcon />
    </div>
  );
};
export default PopUpFeedBack;
