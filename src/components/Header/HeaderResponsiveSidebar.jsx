/* eslint-disable react/prop-types */
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import bmcLogo from "../../assets/icons/BMC_logo.svg";
import patreonLogoBlack from "../../assets/icons/patreon_logo_black.svg";
import patreonLogoWhite from "../../assets/icons/patreon_logo_white.svg";
import SIconSidebar from "../../icons/SIconSidebar";
import facebookLogoBlack from "../../icons/Socials/facebook-logo-black.svg";
import facebookLogoWhite from "../../icons/Socials/facebook-logo-white.svg";
import instagramLogoBlack from "../../icons/Socials/instagram-logo-black.svg";
import instagramLogoWhite from "../../icons/Socials/instagram-logo-white.svg";
import tiktokLogoBlack from "../../icons/Socials/tiktok-logo-black.svg";
import tiktokLogoWhite from "../../icons/Socials/tiktok-logo-white.svg";
import youtubeLogoBlack from "../../icons/Socials/youtube-logo-black.svg";
import youtubeLogoWhite from "../../icons/Socials/youtube-logo-white.svg";
import { QrCodeButton } from "../OurAchivements/QRCode/QrCodeButton";
import "./HeaderResponsiveSidebar.css";
import { HeaderThemeToggle } from "./HeaderThemeToggle";
import { HeaderResponsiveUserLink } from "./HeaderUserIcon";

export const HeaderResponsiveSidebar = ({
  isLightTheme,
  changeLanguage,
  currentLanguage,
  scrollToTarget,
}) => {
  const { t } = useTranslation();

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const body = document.body;

  const handleBurgerClick = () => {
    if (!isSideMenuOpen) {
      setIsSideMenuOpen(true);
      body.style.overflow = "hidden";
    } else {
      setIsSideMenuOpen(false);
      setIsResponsiveDropdownMenuOpen(false);
      setIsResponsiveLanguageMenuOpen(false);
      body.style.overflow = "auto";
    }
  };

  // responsive dropdown links menu
  const [isResponsiveDropdownMenuOpen, setIsResponsiveDropdownMenuOpen] =
    useState(false);

  const responsiveDropdownMenuClick = () => {
    if (!isResponsiveDropdownMenuOpen) {
      setIsResponsiveDropdownMenuOpen(true);
      setIsResponsiveLanguageMenuOpen(false);
    } else {
      setIsResponsiveDropdownMenuOpen(false);
    }
  };

  // responsive language menu
  const [isResponsiveLanguageMenuOpen, setIsResponsiveLanguageMenuOpen] =
    useState(false);

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
  const [isSidebarSearchPopupOpen, setIsSidebarSearchPopupOpen] =
    useState(false);
  const hideSidebarSearchBarPopup = () => {
    setIsSidebarSearchPopupOpen(true);
    setTimeout(() => setIsSidebarSearchPopupOpen(false), 2000);
  };

  return (
    <>
      <button
        aria-label="Open menu"
        className="header-burgerIcon"
        onClick={handleBurgerClick}
      >
        <svg
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
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
        className={classNames("text-2xl", {
          "header-responsive-menu": isSideMenuOpen,
          hidden: !isSideMenuOpen,
          "header-responsive-menu-light": isLightTheme,
        })}
      >
        <div className="header-responsive-theme-and-close">
          <HeaderThemeToggle isLightTheme={isLightTheme} />
          <FiX
            style={{
              width: "48px",
              height: "48px",
              padding: "12px",
              cursor: "pointer",
            }}
            onClick={handleBurgerClick}
          />
        </div>
        <Link to="/" onClick={handleBurgerClick} aria-label="Go to main page">
          <div className="header-responsive-logo text-5xl">
            <span>KOLY</span>
            <SIconSidebar style={{ alignSelf: "center" }} />
            <span>
              KOVA <br />
              OUND
            </span>
          </div>
        </Link>
        <ul className="header-responsive-options">
          <li>
            <Link
              aria-label="Go to page About us"
              to="/about"
              onClick={handleBurgerClick}
              className="header-responsive-about"
            >
              {t("aboutUs")}
            </Link>
          </li>
          <li>
            <div
              className={classNames("header-responsive-dropdown-icon", {
                "header-responsive-dropdown-icon-menuOpened":
                  isResponsiveDropdownMenuOpen,
              })}
              onClick={responsiveDropdownMenuClick}
            >
              <span>{t("lullabiesMuseum")}</span>
              <IoIosArrowDown style={{ width: "24px", height: "24px" }} />
            </div>
            <div
              className={classNames({
                "header-responsive-dropdown-menu": isResponsiveDropdownMenuOpen,
                hidden: !isResponsiveDropdownMenuOpen,
              })}
            >
              <Link
                aria-label="Go to section map"
                to="/map"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                {t("traditionalLullabies")}
              </Link>
              <Link
                aria-label="Go to section sings together"
                to="/songs"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                {t("singingTogether")}
              </Link>
              <Link
                aria-label="Go to section animation lullabies"
                to="/anima"
                onClick={() => {
                  scrollToTarget("#mapTabsId");
                  handleBurgerClick();
                }}
              >
                {t("animatedLullabies")}
              </Link>
            </div>
          </li>
          <li>
            <div
              className={classNames("header-responsive-language-icon", {
                "header-responsive-language-icon-menuOpened":
                  isResponsiveLanguageMenuOpen,
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
                aria-label="Change language"
                onClick={() => {
                  changeLanguage("ua");
                  responsiveLanguageMenuClick();
                }}
              >
                UA
              </button>
              <button
                aria-label="Change language"
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
            <HeaderResponsiveUserLink isLightTheme={isLightTheme} />
          </li>
          <li>
            {/* responsive search bar */}
            <Popup
              trigger={
                <div
                  className={classNames("header-responsive-search-bar", {
                    "header-responsive-search-bar-light": isLightTheme,
                  })}
                  ref={responsiveSearchBarRef}
                >
                  <input
                    type="text"
                    placeholder={t("search")}
                    className="header-responsive-search-input text-2xl"
                    id="headerSearchInput"
                  />
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
              }
              position="top center"
              arrowStyle={
                isLightTheme ? { color: "#e7e7e7" } : { color: "#454545" }
              }
              open={isSidebarSearchPopupOpen}
              onOpen={hideSidebarSearchBarPopup}
            >
              <div
                className={classNames(
                  "header-responsive-search-popup-unavailable",
                  {
                    "header-responsive-search-popup-unavailable-light":
                      isLightTheme,
                  }
                )}
              >
                {t("searchUnavailable")}
              </div>
            </Popup>
          </li>
        </ul>
        <div className="header-responsive-support">
          <span>{t("helpWith")}</span>
          <div className="header-responsive-support-icons">
            <a
              aria-label="Soppurt us at Patreon"
              href="https://www.patreon.com/KolyskovaMuseum"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                src={!isLightTheme ? patreonLogoWhite : patreonLogoBlack}
                alt="patreon"
              />
            </a>
            <a
              aria-label="Soppurt us at buymeacoffee"
              href="https://www.buymeacoffee.com/kolyskova"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img src={bmcLogo} alt="buy me a coffee" />
            </a>
            <div className="header-responsive-support-qr">
              <QrCodeButton mobile={true} />
            </div>
          </div>
        </div>
        <div className="header-responsive-follow">
          <p>{t("followUsHere")}:</p>
          <div className="header-responsive-follow-icons">
            <a
              aria-label="Go to youtube"
              href="https://www.youtube.com/@Kolyskovamuseum"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                src={!isLightTheme ? youtubeLogoWhite : youtubeLogoBlack}
                alt="youtube"
                width="24"
                height="24"
                className="sidebar-socials-icon-normal"
              />
            </a>
            <a
              aria-label="Go to instagram"
              href="https://www.instagram.com/kolyskova.museum/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                src={!isLightTheme ? instagramLogoWhite : instagramLogoBlack}
                alt="instagram"
                width="24"
                height="24"
                className="sidebar-socials-icon-normal"
              />
            </a>
            <a
              aria-label="Go to facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                src={!isLightTheme ? facebookLogoWhite : facebookLogoBlack}
                alt="facebook"
                width="24"
                height="24"
                className="sidebar-socials-icon-normal"
              />
            </a>
            <a
              aria-label="Go to tiktok"
              href="https://www.tiktok.com/@kolyskovamuseum"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              <img
                src={!isLightTheme ? tiktokLogoWhite : tiktokLogoBlack}
                alt="tiktok"
                width="24"
                height="24"
                className="sidebar-socials-icon-normal"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
