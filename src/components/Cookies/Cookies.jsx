import React from "react";
import "./Cookies.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from 'react-i18next';

import { CookiesModal } from "./CookiesModal";

export const Cookies = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const acceptAllClick = () => {
    const cookies = document.getElementById("cookies");
    cookies.style.display = "none";
  };

  const closeCookiesBar = () => {
    const cookies = document.getElementById("cookies");
    cookies.style.display = "none";
  };
  const { t } = useTranslation();
  return (
    <div className={ classNames("cookies", { "cookies-light": isLightTheme }) } id="cookies">
      <button className="cookies-close-button" onClick={ closeCookiesBar }>
        &times;
      </button>
      {/* <p className="cookies-text text-base-regular">  */}
      <p className="cookies-text text-base"> 
        { t('cookies') }
      </p>
      <CookiesModal isLightTheme={ isLightTheme } closeCookiesBar={ closeCookiesBar } />
      <button
        // className={ classNames("cookies-accept-button", "text-base-semibold", { "cookies-accept-button-light": isLightTheme }) }
        className={ classNames("cookies-accept-button", "text-sm-semibold", { "cookies-accept-button-light": isLightTheme }) }
        onClick={ acceptAllClick }
      >
        { t('acceptAllCookies') }
      </button>
    </div>
  );
};
