import { changedToLight, changedToDark } from "../../redux/theme/themeSlice";
import { useDispatch } from "react-redux";
import classNames from "classnames";

export const HeaderThemeToggle = ({ isLightTheme }) => {
  const dispatch = useDispatch();

  const themeToggle = () => {
    if (!isLightTheme) {
      dispatch(changedToLight());
    } else {
      dispatch(changedToDark());
    }
  };
  return (
    <div className={classNames("header-theme-toggle", { "header-theme-toggle-light": isLightTheme })} onClick={themeToggle}>
      <div className="header-theme-toggle-moon-icon" style={isLightTheme ? { visibility: "hidden" } : { visibility: "visible" }}>
        <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.04207 17.6333C2.59964 25.3563 9.36799 31.6397 17.4683 31.9846C23.1835 32.2245 28.2946 29.6452 31.3613 25.5812C32.6313 23.9166 31.9498 22.8069 29.8279 23.1818C28.7902 23.3618 27.7215 23.4368 26.6064 23.3918C19.0326 23.0919 12.8374 16.9584 12.8064 9.71529C12.7909 7.76579 13.2091 5.92126 13.968 4.24169C14.8044 2.38217 13.7976 1.49739 11.8616 2.29219C5.72826 4.79655 1.53095 10.78 2.04207 17.6333Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="header-theme-toggle-sun-icon" style={!isLightTheme ? { visibility: "hidden" } : { visibility: "visible" }}>
        <svg width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 26.75C22.3848 26.75 26.75 22.3848 26.75 17C26.75 11.6152 22.3848 7.25002 17 7.25002C11.6152 7.25002 7.25002 11.6152 7.25002 17C7.25002 22.3848 11.6152 26.75 17 26.75Z"
            fill="black"
          />
          <path d="M27.71 27.71L27.515 27.515L27.71 27.71Z" fill="black" />
          <path
            d="M27.515 6.485L27.71 6.29M6.29 27.71L6.485 27.515M17 2.12V2M17 32V31.88M2.12 17H2M32 17H31.88M6.485 6.485L6.29 6.29M27.71 27.71L27.515 27.515M26.75 17C26.75 22.3848 22.3848 26.75 17 26.75C11.6152 26.75 7.25002 22.3848 7.25002 17C7.25002 11.6152 11.6152 7.25002 17 7.25002C22.3848 7.25002 26.75 11.6152 26.75 17Z"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={classNames("header-theme-toggle-circle-icon", { "header-theme-toggle-circle-icon-light": isLightTheme })}
        style={isLightTheme ? { left: "5px" } : { right: "5px" }}
        id="themeToggleCirlce"
      >
        <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38ZM30.2034 7.16454C29.6477 6.59166 28.73 6.65943 28.2063 7.26167C27.6827 7.8639 27.7527 8.77192 28.2983 9.35439C29.3559 10.4836 30.2229 11.7815 30.8618 13.1977C31.6992 15.054 32.1249 17.0696 32.1096 19.1061C32.0943 21.1425 31.6384 23.1515 30.7731 24.995C30.113 26.4015 29.2266 27.6862 28.1521 28.7993C27.5978 29.3735 27.5142 30.2804 28.0287 30.8904C28.5432 31.5005 29.4599 31.582 30.024 31.0176C31.4122 29.6287 32.5519 28.0071 33.3893 26.2229C34.4318 24.0018 34.9811 21.5813 34.9995 19.1278C35.018 16.6743 34.5051 14.2458 33.4961 12.0093C32.6856 10.2127 31.5705 8.57415 30.2034 7.16454Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
