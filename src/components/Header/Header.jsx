import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import SIconSidebar from "../../icons/SIconSidebar";
import { IoIosArrowDown } from "react-icons/io";
import { FiX } from "react-icons/fi";
import { HeaderThemeToggle } from "./HeaderThemeToggle";

export const Header = () => {
  // dropdown menu
  const dropdownWrapperRef = useRef();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownMenuClick = (e) => {
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
  const [currentLanguage, setCurrentLanguage] = useState("UA");

  const chooseLanguage = (language) => {
    setCurrentLanguage(language);
  };

  const languageMenuClick = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

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

  const searchIconClick = () => {
    const parent = headerOptionsWrapperRef.current.parentNode;
    const input = document.getElementById("headerSearchInput");
    parent.childNodes.forEach((el) => {
      if (el.classList.contains("header-about-link") || el.classList.contains("header-dropdown-wrapper")) {
        el.classList.add("hidden");
      }
    });
    headerOptionsWrapperRef.current.style.display = "none";
    parent.classList.remove("container");
    parent.classList.add("header-with-search-bar-open");
    searchBarRef.current.classList.remove("hidden");
    searchBarRef.current.classList.add("header-search-bar-open");
    input.focus();
  };

  const closeSearchBar = () => {
    const parent = headerOptionsWrapperRef.current.parentNode;
    parent.childNodes.forEach((el) => {
      if (el.classList.contains("header-about-link") || el.classList.contains("header-dropdown-wrapper")) {
        el.classList.remove("hidden");
      }
    });
    headerOptionsWrapperRef.current.style.display = "grid";
    parent.classList.remove("header-with-search-bar-open");
    parent.classList.add("container");
    searchBarRef.current.classList.remove("header-search-bar-open");
    searchBarRef.current.classList.add("hidden");
  };

  // theme toggle
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  // responsive menu
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
  const handleBurgerClick = () => {
    if (!isSideMenuOpen) {
      setIsSideMenuOpen(true);
    } else {
      setIsSideMenuOpen(false);
    }
  };

  return (
    <div className="header container" id="header">
      <div className="header-logo">
        <Link to="/">{isLightTheme ? <LogoLight width="56" height="53" /> : <LogoDark width="56" height="53" />}</Link>
      </div>
      <NavLink to="/about" className="header-about-link text-2xl">
        Про нас
      </NavLink>
      <div className="header-dropdown-wrapper" ref={dropdownWrapperRef}>
        <div
          className={classNames("header-dropdown-button", { "header-dropdown-button-light": isLightTheme })}
          onClick={dropdownMenuClick}
        >
          <span className="text-2xl">Музей колискової</span>
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
            Традиційні колискові
          </Link>
          <Link to="/songs" className="text-base" onClick={() => scrollToTarget("#mapTabsId")}>
            Співаємо разом
          </Link>
          <Link to="/anima" className="text-base" onClick={() => scrollToTarget("#mapTabsId")}>
            Колискові в анімаціях
          </Link>
        </div>
      </div>

      {/* HEADER OPTION BUTTONS */}
      <div className="header-options-wrapper" ref={headerOptionsWrapperRef}>
        <div className="header-languages-wrapper" onClick={languageMenuClick}>
          <div className={classNames("header-languages-button", { "header-languages-button-light": isLightTheme })}>
            <span className="text-2xl">{currentLanguage}</span>
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
            <button className="text-2xl" onClick={() => chooseLanguage("UA")}>
              UA
            </button>
            <button className="text-2xl" onClick={() => chooseLanguage("EN")}>
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
          <div
            className={classNames("header-search-icon", { "header-search-icon-light": isLightTheme })}
            onClick={searchIconClick}
          >
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
        </div>
        <HeaderThemeToggle isLightTheme={isLightTheme} />
      </div>

      {/* opened search bar */}
      <div className={classNames("header-search-bar", "hidden", { "header-search-bar-light": isLightTheme })} ref={searchBarRef}>
        <input
          type="text"
          placeholder="Пошук тимчасово недоступний"
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
      <button className="header-burgerIcon" onClick={handleBurgerClick}>
        <svg width="30" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10H3" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" />
          <path d="M21 6H3" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" />
          <path d="M21 14H3" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" />
          <path d="M21 18H3" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1px" />
        </svg>
      </button>
      <div className={isSideMenuOpen ? "responsive-covering" : "hidden"} onClick={handleBurgerClick}></div>
      <div
        className={classNames({
          "header-responsive-menu": isSideMenuOpen,
          hidden: !isSideMenuOpen,
        })}
      >
        <div className="header-responsive-theme-and-close">
          <HeaderThemeToggle isLightTheme={isLightTheme} />
          <FiX style={{ width: "24px", height: "24px", cursor: "pointer" }} onClick={handleBurgerClick} />
        </div>
        <div className="header-responsive-logo text-5xl">
          <span>Koly</span>
          <SIconSidebar style={{ alignSelf: "center" }} />
          <span>
            Kova <br />
            Sound
          </span>
        </div>
        <ul className="header-responsive-options">
          <li>Про нас</li>
          <li>
            <div className="header-responsive-dropdown-icon">
              <span>Музей колискової</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div className="header-responsive-dropdown-menu">Links</div>
          </li>
          <li>
            <div className="header-responsive-language-icon">
              <span>UA</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div className="header-responsive-language-menu">Links</div>
          </li>
          <li>
            <div className="header-responsive-user-link">
              <span>Особистий кабінет</span>
              <div className={classNames("header-responsive-user-icon", { "header-responsive-user-icon-light": isLightTheme })}>
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
            </div>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
