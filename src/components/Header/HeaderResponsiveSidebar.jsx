import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import "./HeaderResponsiveSidebar.css";

// import components
import { HeaderThemeToggle } from "./HeaderThemeToggle";

// import logos
import patreonLogoWhite from "../../assets/icons/patreon_logo_white.svg";
import patreonLogoBlack from "../../assets/icons/patreon_logo_black.svg";
import bmcLogo from "../../assets/icons/BMC_logo.svg";

// import icons
import SIconSidebar from "../../icons/SIconSidebar";
import { IoIosArrowDown } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export const HeaderResponsiveSidebar = ({ isLightTheme, changeLanguage, currentLanguage, scrollToTarget }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const body = document.body;

  const handleBurgerClick = () => {
    if (!isSideMenuOpen) {
      setIsSideMenuOpen(true);
      body.classList.add("no-scroll");
    } else {
      setIsSideMenuOpen(false);
      setIsResponsiveDropdownMenuOpen(false);
      setIsResponsiveLanguageMenuOpen(false);
      body.classList.remove("no-scroll");
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
    <>
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
              <span>{currentLanguage.toUpperCase()}</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div
              className={classNames({
                "header-responsive-language-menu": isResponsiveLanguageMenuOpen,
                hidden: !isResponsiveLanguageMenuOpen,
              })}
            >
              <button
                onClick={() => {
                  changeLanguage("ua");
                  responsiveLanguageMenuClick();
                }}
              >
                UA
              </button>
              <button
                onClick={() => {
                  changeLanguage("en");
                  responsiveLanguageMenuClick();
                }}
              >
                EN
              </button>
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
              <input type="text" placeholder="Пошук тимчасово недоступний" className="text-2xl-mobile" id="headerSearchInput" />
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
            <a href="#" target="_blank" rel="noopener nofollow noreferrer">
              <img src={!isLightTheme ? patreonLogoWhite : patreonLogoBlack} alt="patreon" />
            </a>
            <a href="#" target="_blank" rel="noopener nofollow noreferrer">
              <img src={bmcLogo} alt="buy me a coffee" />
            </a>
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
    </>
  );
};
