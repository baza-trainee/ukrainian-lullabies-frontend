import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../SVGComponents/Logo";

export const Header = () => {
  return (
    <div className="header container">
      <div className="header-logo">
        <Logo width="56" height="53" />
      </div>
      <Link to="/about" className="header-about-link">
        Про нас
      </Link>
      <div className="header-dropdown-wrapper">
        <span>Музей колискової</span>
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7 7L13 1" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div className="header-options-wrapper">
        <div className="header-languages-wrapper">
          <span>UA</span>
          <div className="header-languages-button">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
        <div className="header-user-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="header-search-icon">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 22L8.35 17.65M6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C9.58172 4 6 7.58172 6 12Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="header-theme-toggle">
          <div className="header-theme-toggle-moon-icon">
            <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.04207 17.6333C2.59964 25.3563 9.36799 31.6397 17.4683 31.9846C23.1835 32.2245 28.2946 29.6452 31.3613 25.5812C32.6313 23.9166 31.9498 22.8069 29.8279 23.1818C28.7902 23.3618 27.7215 23.4368 26.6064 23.3918C19.0326 23.0919 12.8374 16.9584 12.8064 9.71529C12.7909 7.76579 13.2091 5.92126 13.968 4.24169C14.8044 2.38217 13.7976 1.49739 11.8616 2.29219C5.72826 4.79655 1.53095 10.78 2.04207 17.6333Z"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="header-theme-toggle-sun-icon">
            <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38ZM30.2034 7.16454C29.6477 6.59166 28.73 6.65943 28.2063 7.26167C27.6827 7.8639 27.7527 8.77192 28.2983 9.35439C29.3559 10.4836 30.2229 11.7815 30.8618 13.1977C31.6992 15.054 32.1249 17.0696 32.1096 19.1061C32.0943 21.1425 31.6384 23.1515 30.7731 24.995C30.113 26.4015 29.2266 27.6862 28.1521 28.7993C27.5978 29.3735 27.5142 30.2804 28.0287 30.8904C28.5432 31.5005 29.4599 31.582 30.024 31.0176C31.4122 29.6287 32.5519 28.0071 33.3893 26.2229C34.4318 24.0018 34.9811 21.5813 34.9995 19.1278C35.018 16.6743 34.5051 14.2458 33.4961 12.0093C32.6856 10.2127 31.5705 8.57415 30.2034 7.16454Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
