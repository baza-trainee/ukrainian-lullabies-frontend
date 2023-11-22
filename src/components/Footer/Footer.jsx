import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchContacts } from "../../redux/Contacts/contactsSlice";
import { fetchPartners } from "../../redux/Partners/partnersSlice";
import { fetchDocs } from "../../redux/docs/docsSlice";
import "./Footer.css";

import { BsArrowUpShort } from "react-icons/bs";
import { LogoDark, LogoLight } from "../SVGComponents/Logo";

// social icons logos
import youtubeLogoBlack from "../../icons/Socials/youtube-logo-black.svg";
import youtubeLogoHover from "../../icons/Socials/youtube-logo-hover.svg";
import youtubeLogoPressed from "../../icons/Socials/youtube-logo-pressed.svg";
import youtubeLogoWhite from "../../icons/Socials/youtube-logo-white.svg";

import instagramLogoBlack from "../../icons/Socials/instagram-logo-black.svg";
import instagramLogoHover from "../../icons/Socials/instagram-logo-hover.svg";
import instagramLogoPressed from "../../icons/Socials/instagram-logo-pressed.svg";
import instagramLogoWhite from "../../icons/Socials/instagram-logo-white.svg";

import facebookLogoBlack from "../../icons/Socials/facebook-logo-black.svg";
import facebookLogoHover from "../../icons/Socials/facebook-logo-hover.svg";
import facebookLogoPressed from "../../icons/Socials/facebook-logo-pressed.svg";
import facebookLogoWhite from "../../icons/Socials/facebook-logo-white.svg";

import tiktokLogoBlack from "../../icons/Socials/tiktok-logo-black.svg";
import tiktokLogoHover from "../../icons/Socials/tiktok-logo-hover.svg";
import tiktokLogoPressed from "../../icons/Socials/tiktok-logo-pressed.svg";
import tiktokLogoWhite from "../../icons/Socials/tiktok-logo-white.svg";

export const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetch data from store
  const contacts = useSelector((state) => state.contacts.data);
  const contactsError = useSelector((state) => state.contacts.error);
  const partners = useSelector((state) => state.partners.data);
  const partnersError = useSelector((state) => state.partners.error);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const currentLanguage = useSelector((state) => state.currentLanguage.currentLanguage);
  const docs = useSelector((state) => state.docs.data);

  // scroll to top button
  const [isScrollUpButtonVisible, setIsScrollUpButtonVisible] = useState(false);

  const scrollToTarget = (target) => {
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({ block: "end" });
  };

  useEffect(() => {
    const checkVisibility = () => {
      setIsScrollUpButtonVisible(window.scrollY > 1400);
    };

    window.addEventListener("scroll", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  // footer logo scroll to top
  const [isScrolling, setIsScrolling] = useState(false);

  const handleLogoClick = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setIsScrolling(false);
        navigate("/");
      }, 100);
    }
  };

  // initial loading data
  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchContacts("eng"));
    } else {
      dispatch(fetchContacts("uk"));
    }
    dispatch(fetchPartners());
  }, [dispatch]);

  // loading data on language change
  useEffect(() => {
    // if (currentLanguage === "en") {
    //   dispatch(fetchContacts("eng"));
    // } else {
    //   dispatch(fetchContacts("uk"));
    // }
    dispatch(fetchContacts(currentLanguage));
    dispatch(fetchDocs());
  }, [dispatch, currentLanguage]);

  return (
    <div className="footer">
      <button
        className={classNames("footer-scroll-up-button", {
          "footer-scroll-up-button-invisible": !isScrollUpButtonVisible,
          "footer-scroll-up-button-light": isLightTheme,
        })}
        onClick={() => scrollToTarget("#header")}
      >
        <BsArrowUpShort style={{ width: "32px", height: "32px" }} />
      </button>

      <div className="footer-wrapper container text-sm">
        <div className="footer-rights text-base">
          <p>{t("footerText1")}</p>
          <p>{t("footerText2")}</p>
          <p> {t("footerText3")}</p>
        </div>

        <div className="footer-logo">
          <button
            onClick={() => {
              handleLogoClick();
            }}
          >
            {isLightTheme ? <LogoLight width="92" height="88" /> : <LogoDark width="92" height="88" />}
          </button>
        </div>
        {/* docs section */}
        <ul className="footer-docs-wrapper">
          <li>
            <a
              href={docs["term-conditions"] ? docs["term-conditions"] : "/#/404"}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="text-sm-semibold"
            >
              {t("termsAndConditions")}
            </a>
          </li>
          <li>
            <a
              href={docs.privacy ? docs.privacy : "/#/404"}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="text-sm-semibold"
            >
              {t("privacy")}
            </a>
          </li>
          <li>
            <a
              href={docs.report ? docs.report : "/#/404"}
              target="_blank"
              rel="noopener nofollow noreferrer"
              className="text-sm-semibold"
            >
              {t("poRegulations")}
            </a>
          </li>
        </ul>
        {/* contacts section */}
        <ul className="footer-contacts-wrapper">
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">{t("address")}</p>
            <p>{contacts.address ? contacts.address : `Error: ${contactsError}`}</p>
          </li>
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">{t("telephone")}</p>

            <a href={`tel:${contacts.phone ? contacts.phone : "#"}`}>
              {contacts.phone ? contacts.phone : `Error: ${contactsError}`}
            </a>
          </li>
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">E-mail:</p>

            <a href={`mailto:${contacts.email ? contacts.email : "#"}`}>
              {contacts.email ? contacts.email : `Error: ${contactsError}`}
            </a>
          </li>
        </ul>
        {/* socials section */}
        <div className="footer-socials-wrapper">
          <div className="footer-socials-socials">
            <p className="text-sm-semibold">{t("followUsHere")}:</p>
            <div className="footer-socials-icons">
              <a href="https://www.youtube.com/@Kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
                <img
                  src={!isLightTheme ? youtubeLogoWhite : youtubeLogoBlack}
                  alt="youtube"
                  width="24"
                  height="24"
                  className="footer-socials-icon-normal"
                />
                <img src={youtubeLogoHover} alt="youtube" width="24" height="24" className="footer-socials-icon-hover" />
                <img src={youtubeLogoPressed} alt="youtube" width="24" height="24" className="footer-socials-icon-pressed" />
              </a>
              <a href="https://www.instagram.com/kolyskova.museum/" target="_blank" rel="noopener nofollow noreferrer">
                {/* <FaInstagram /> */}
                <img
                  src={!isLightTheme ? instagramLogoWhite : instagramLogoBlack}
                  alt="instagram"
                  width="24"
                  height="24"
                  className="footer-socials-icon-normal"
                />
                <img src={instagramLogoHover} alt="instagram" width="24" height="24" className="footer-socials-icon-hover" />
                <img src={instagramLogoPressed} alt="instagram" width="24" height="24" className="footer-socials-icon-pressed" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener nofollow noreferrer">
                {/* <BsFacebook /> */}
                <img
                  src={!isLightTheme ? facebookLogoWhite : facebookLogoBlack}
                  alt="facebook"
                  width="24"
                  height="24"
                  className="footer-socials-icon-normal"
                />
                <img src={facebookLogoHover} alt="facebook" width="24" height="24" className="footer-socials-icon-hover" />
                <img src={facebookLogoPressed} alt="facebook" width="24" height="24" className="footer-socials-icon-pressed" />
              </a>
              <a href="https://www.tiktok.com/@kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
                {/* <FaTiktok /> */}
                <img
                  src={!isLightTheme ? tiktokLogoWhite : tiktokLogoBlack}
                  alt="tiktok"
                  width="24"
                  height="24"
                  className="footer-socials-icon-normal"
                />
                <img src={tiktokLogoHover} alt="tiktok" width="24" height="24" className="footer-socials-icon-hover" />
                <img src={tiktokLogoPressed} alt="tiktok" width="24" height="24" className="footer-socials-icon-pressed" />
              </a>
            </div>
          </div>
          {/* partners section */}
          <div className="footer-socials-partners">
            <p className="text-sm-semibold">{t("ourPartners")}:</p>
            <div className="footer-partners-icons">
              {!partnersError ? (
                partners.slice(0, 3).map((partner, index) => (
                  <a href={partner.website} target="_blank" rel="noopener nofollow noreferrer" title={partner.name} key={index}>
                    <img src={isLightTheme ? partner.classic_logo : partner.dark_logo} alt={partner.name} height="40" />
                  </a>
                ))
              ) : (
                <div>Error: {partnersError}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <p className="footer-author-rights text-xs-bold">{t("developedBy")} </p>
    </div>
  );
};
