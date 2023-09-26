import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import "./Header.css";

// import components
import { HeaderSearch } from "./HeaderSearch";
import { HeaderThemeToggle } from "./HeaderThemeToggle";

// import logos
import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import patreonLogoWhite from "../../assets/icons/patreon_logo_white.svg";
import patreonLogoBlack from "../../assets/icons/patreon_logo_black.svg";
import bmcLogo from "../../assets/icons/BMC_logo.svg";

// import icons
import SIconSidebar from "../../icons/SIconSidebar";
import { IoIosArrowDown } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { HeaderResponsiveSidebar } from "./HeaderResponsiveSidebar";

export const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  // dropdown menu
  const dropdownWrapperRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownMenuClick = () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      dropdownWrapperRef.current.style.borderColor = "transparent";
    } else {
      setIsDropdownOpen(true);
      dropdownWrapperRef.current.style.borderColor = "var(--red-700)";
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.parentElement.classList.contains("header-dropdown-button")) {
        setIsDropdownOpen(false);
        dropdownWrapperRef.current.style.borderColor = "transparent";
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  // scroll to target
  const scrollToTarget = (target) => {
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView();
  };

  // language menu
  const languageMenuRef = useRef();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ua");

  const languageMenuClick = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(i18n.language);
  };

  // const currentLanguage = i18n.language;

  useEffect(() => {
    const closeLanguageMenu = (e) => {
      if (!e.target.parentElement.classList.contains("header-languages-button")) {
        setIsLanguageMenuOpen(false);
      }
    };
    document.body.addEventListener("click", closeLanguageMenu);

    return () => document.body.removeEventListener("click", closeLanguageMenu);
  }, []);

  // search bar
  const searchBarRef = useRef();
  const headerOptionsWrapperRef = useRef();

  // const searchIconClick = () => {
  //   const parent = headerOptionsWrapperRef.current.parentNode;
  //   const input = document.getElementById("headerSearchInput");
  //   parent.childNodes.forEach((el) => {
  //     if (el.classList.contains("header-about-link") || el.classList.contains("header-dropdown-wrapper")) {
  //       el.classList.add("hidden");
  //     }
  //   });
  //   headerOptionsWrapperRef.current.style.display = "none";
  //   parent.classList.remove("container");
  //   parent.classList.add("header-with-search-bar-open");
  //   searchBarRef.current.classList.remove("hidden");
  //   searchBarRef.current.classList.add("header-search-bar-open");
  //   input.focus();
  // };

  const closeSearchBar = () => {
    const parent = headerOptionsWrapperRef.current.parentNode;
    const headerAboutLink = document.querySelector(".header-about-link");
    const headerDropdownWrapper = document.querySelector(".header-dropdown-wrapper");

    headerAboutLink.style.display = "block";
    headerDropdownWrapper.style.display = "block";

    headerOptionsWrapperRef.current.style.display = "grid";
    parent.classList.remove("header-with-search-bar-open");
    parent.classList.add("container");
    searchBarRef.current.classList.remove("header-search-bar-open");
    searchBarRef.current.classList.add("hidden");
  };

  // theme toggle
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  // responsive menu

  return (
    <div className="header container" id="header">
      <div className="header-logo">
        <Link to="/">{isLightTheme ? <LogoLight width="56" height="53" /> : <LogoDark width="56" height="53" />}</Link>
      </div>
      <NavLink to="/about" className="header-about-link text-2xl">
        {t("aboutUs")}
      </NavLink>
      <div className="header-dropdown-wrapper" ref={dropdownWrapperRef}>
        <div
          className={classNames("header-dropdown-button", { "header-dropdown-button-light": isLightTheme })}
          onClick={dropdownMenuClick}
        >
          <span className="text-2xl">{t("lullabiesMuseum")}</span>
          <IoIosArrowDown style={{ width: "31px", height: "21px" }} />
        </div>
        <div
          className={classNames({
            "header-dropdown-menu": isDropdownOpen,
            hidden: !isDropdownOpen,
            "header-dropdown-menu-light": isLightTheme,
          })}
        >
          <Link to="/map" className="text-base" onClick={() => scrollToTarget("#mapTabsId")}>
            {t("traditionalLullabies")}
          </Link>
          <Link to="/songs" className="text-base" onClick={() => scrollToTarget("#mapTabsId")}>
            {t("singingTogether")}
          </Link>
          <Link to="/anima" className="text-base" onClick={() => scrollToTarget("#mapTabsId")}>
            {t("animatedLullabies")}
          </Link>
        </div>
      </div>

      {/* HEADER OPTION BUTTONS */}
      <div className="header-options-wrapper" ref={headerOptionsWrapperRef}>
        <div className="header-languages-wrapper" onClick={languageMenuClick}>
          <div className={classNames("header-languages-button", { "header-languages-button-light": isLightTheme })}>
            <span className="text-2xl">{currentLanguage.toUpperCase()}</span>
            <IoIosArrowDown style={{ width: "31px", height: "21px" }} />
          </div>
          <div
            className={classNames({
              "header-languages-menu": isLanguageMenuOpen,
              hidden: !isLanguageMenuOpen,
              "header-language-menu-light": isLightTheme,
            })}
            ref={languageMenuRef}
          >
            <button className="text-2xl" onClick={() => changeLanguage("ua")}>
              UA
            </button>
            <button className="text-2xl" onClick={() => changeLanguage("en")}>
              EN
            </button>
          </div>
        </div>
        <div className={classNames("header-user-icon", { "header-user-icon-light": isLightTheme })}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="header-search-wrapper">
          <HeaderSearch
            isLightTheme={isLightTheme}
            searchBarRef={searchBarRef}
            headerOptionsWrapperRef={headerOptionsWrapperRef}
          />
        </div>
        <HeaderThemeToggle isLightTheme={isLightTheme} />
      </div>

      {/* opened search bar */}
      <div className={classNames("header-search-bar", "hidden", { "header-search-bar-light": isLightTheme })} ref={searchBarRef}>
        <input
          type="text"
          placeholder={t("searchUnavailable")}
          className="text-xl"
          onBlur={closeSearchBar}
          id="headerSearchInput"
        />
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 22L8.35 17.65M6 12C6 16.4183 9.58172 20 14 20C18.4183 20 22 16.4183 22 12C22 7.58172 18.4183 4 14 4C9.58172 4 6 7.58172 6 12Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pointerEvents="none"
          />
        </svg>
      </div>

      {/* responsive menu */}
      <HeaderResponsiveSidebar
        isLightTheme={isLightTheme}
        dispatch={dispatch}
        currentLanguage={currentLanguage}
        changeLanguage={changeLanguage}
        scrollToTarget={scrollToTarget}
      />
    </div>
  );
};
