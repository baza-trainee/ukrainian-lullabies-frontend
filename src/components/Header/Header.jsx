import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import SIconSidebar from "../../icons/SIconSidebar";
import { IoIosArrowDown } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { HeaderThemeToggle } from "./HeaderThemeToggle";
import { HeaderSearch } from "./HeaderSearch";
import patreonLogoWhite from "../../assets/icons/patreon_logo_white.svg";
import patreonLogoBlack from "../../assets/icons/patreon_logo_Black.svg";
import bmcLogo from "../../assets/icons/BMC_logo.svg";

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
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const handleBurgerClick = () => {
    if (!isSideMenuOpen) {
      setIsSideMenuOpen(true);
    } else {
      setIsSideMenuOpen(false);
      setIsResponsiveDropdownMenuOpen(false);
      setIsResponsiveLanguageMenuOpen(false);
    }
  };

  // responsive dropdown links menu
  const [isResponsiveDropdownMenuOpen, setIsResponsiveDropdownMenuOpen] = useState(false);

  const responsiveDropdownMenuClick = () => {
    if (!isResponsiveDropdownMenuOpen) {
      setIsResponsiveDropdownMenuOpen(true);
      setIsResponsiveLanguageMenuOpen(false);
    } else {
      setIsResponsiveDropdownMenuOpen(false);
    }
  };

  // responsive language menu
  const [isResponsiveLanguageMenuOpen, setIsResponsiveLanguageMenuOpen] = useState(false);

  const responsiveLanguageMenuClick = () => {
    if (!isResponsiveLanguageMenuOpen) {
      setIsResponsiveLanguageMenuOpen(true);
      setIsResponsiveDropdownMenuOpen(false);
    } else {
      setIsResponsiveLanguageMenuOpen(false);
    }
  };

  // responsive search bar
  const responsiveSearchBarRef = useRef();

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
          <path
            d="M21 10H3"
            stroke={!isLightTheme ? "#FFFFFF" : "#000000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
          <path
            d="M21 6H3"
            stroke={!isLightTheme ? "#FFFFFF" : "#000000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
          <path
            d="M21 14H3"
            stroke={!isLightTheme ? "#FFFFFF" : "#000000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
          <path
            d="M21 18H3"
            stroke={!isLightTheme ? "#FFFFFF" : "#000000"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1px"
          />
        </svg>
      </button>
      {/* <div className={isSideMenuOpen ? "responsive-covering" : "hidden"} onClick={handleBurgerClick}></div> */}
      <div
        className={classNames({
          "responsive-covering": isSideMenuOpen,
          hidden: !isSideMenuOpen,
          "responsive-covering-light": isLightTheme,
        })}
        onClick={handleBurgerClick}
      ></div>
      <div
        className={classNames("text-2xl-mobile", {
          "header-responsive-menu": isSideMenuOpen,
          hidden: !isSideMenuOpen,
          "header-responsive-menu-light": isLightTheme,
        })}
      >
        <div className="header-responsive-theme-and-close">
          <HeaderThemeToggle isLightTheme={isLightTheme} />
          <FiX style={{ width: "24px", height: "24px", cursor: "pointer" }} onClick={handleBurgerClick} />
        </div>
        <Link to="/" onClick={handleBurgerClick}>
          <div className="header-responsive-logo text-5xl">
            <span>Koly</span>
            <SIconSidebar style={{ alignSelf: "center" }} />
            <span>
              Kova <br />
              Sound
            </span>
          </div>
        </Link>
        <ul className="header-responsive-options">
          <li>
            <Link to="/about" onClick={handleBurgerClick} className="header-responsive-about">
              Про нас
            </Link>
          </li>
          <li>
            <div
              className={classNames("header-responsive-dropdown-icon", {
                "header-responsive-dropdown-icon-menuOpened": isResponsiveDropdownMenuOpen,
              })}
              onClick={responsiveDropdownMenuClick}
            >
              <span>Музей колискової</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div
              className={classNames({
                "header-responsive-dropdown-menu": isResponsiveDropdownMenuOpen,
                hidden: !isResponsiveDropdownMenuOpen,
              })}
            >
              <Link
                to="/map"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                Традиційні колискові
              </Link>
              <Link
                to="/songs"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                Співаємо разом
              </Link>
              <Link
                to="/anima"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                Колискові в анімаціях
              </Link>
            </div>
          </li>
          <li>
            <div
              className={classNames("header-responsive-language-icon", {
                "header-responsive-language-icon-menuOpened": isResponsiveLanguageMenuOpen,
              })}
              onClick={responsiveLanguageMenuClick}
            >
              <span>UA</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div
              className={classNames({
                "header-responsive-language-menu": isResponsiveLanguageMenuOpen,
                hidden: !isResponsiveLanguageMenuOpen,
              })}
            >
              <button>UA</button>
              <button>EN</button>
            </div>
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
          <li>
            {/* responsive search bar */}
            <div
              className={classNames("header-responsive-search-bar", { "header-responsive-search-bar-light": isLightTheme })}
              ref={responsiveSearchBarRef}
            >
              <input
                type="text"
                placeholder="Пошук тимчасово недоступний"
                className="text-2xl-mobile"
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
          </li>
        </ul>
        <div className="header-responsive-support">
          <span>Допомогти розвитку проєкту:</span>
          <div className="header-responsive-support-icons">
            <img src={patreonLogoWhite} alt="patreon" />
            <img src={bmcLogo} alt="buy me a coffee" />
          </div>
        </div>
        <div className="header-responsive-follow">
          <p>Слідкуй за нами тут:</p>
          <div className="header-responsive-follow-icons">
            <a href="https://www.youtube.com/@Kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
              <FaYoutube style={{ width: "34px", height: "24px" }} />
            </a>
            <a href="https://www.instagram.com/kolyskova.museum/" target="_blank" rel="noopener nofollow noreferrer">
              <FaInstagram style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener nofollow noreferrer">
              <BsFacebook style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.tiktok.com/@kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
              <FaTiktok style={{ width: "24px", height: "24px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
