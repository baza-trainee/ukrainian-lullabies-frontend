import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from 'react-i18next';

import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import { BsFacebook, BsArrowUpShort } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

// partners logo
import logoPartnerRed from "../../assets/icons/logo_partner_red.svg";
import logoBazaTraineeWhite from "../../assets/icons/logo_baza_trainee_white.svg";
import logoBazaTraineeBlack from "../../assets/icons/logo_baza_trainee_black.svg";
import logoEtnoPhotosWhite from "../../assets/icons/logo_etno_photos_white.svg";
import logoEtnoPhotosBlack from "../../assets/icons/logo_etno_photos_black.svg";

const partners = [
  {
    name: "Partner Red",
    logoDarkTheme: logoPartnerRed,
    logoLightTheme: logoPartnerRed,
    alt: "Partner Red logo",
    url: "#",
  },
  {
    name: "Baza Trainee",
    logoDarkTheme: logoBazaTraineeWhite,
    logoLightTheme: logoBazaTraineeBlack,
    alt: "Baza Trainee logo",
    url: "https://baza-trainee.tech",
  },
  {
    name: "Etno Photos",
    logoDarkTheme: logoEtnoPhotosWhite,
    logoLightTheme: logoEtnoPhotosBlack,
    alt: "Ento Photos logo",
    url: "https://www.facebook.com/etnofotka/photos/",
  },
];

export const Footer = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const [isScrollUpButtonVisible, setIsScrollUpButtonVisible] = useState(false);
  // const navigate = useNavigate();

  // establish scrollToTop
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // handle logo behaviour
  // const handleLogoClick = () => {
  //   scrollToTop();
  //   navigate.push("/");
  // };

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
  const { t } = useTranslation();
  return (
    <div className="footer">
      <button
        className={ classNames("footer-scroll-up-button", {
          "footer-scroll-up-button-invisible": !isScrollUpButtonVisible,
          "footer-scroll-up-button-light": isLightTheme,
        }) }
        onClick={ scrollToTop }
      >
        <BsArrowUpShort style={ { width: "32px", height: "32px" } } />
      </button>
      <div className="footer-wrapper container text-sm">
        <div className="separation-line"></div>

        <div className="footer-logo">
          <Link
            to="/"
            onClick={ () => {
              scrollToTarget("#header");
            } }
          >
            { isLightTheme ? <LogoLight width="92" height="88" /> : <LogoDark width="92" height="88" /> }
          </Link>
        </div>
        <ul className="footer-docs-wrapper">
          <li>
            <Link to="/" className="text-sm-semibold">
              { t('termsAndConditions') }
            </Link>
          </li>
          <li>
            <Link to="/" className="text-sm-semibold">
              { t('privacy') }
            </Link>
          </li>
          <li>
            <Link to="/" className="text-sm-semibold">
              { t('poRegulations') }
            </Link>
          </li>
        </ul>
        <ul className="footer-contacts-wrapper">
          <li>
            <p className="text-sm-semibold">
              { t('address') }
            </p>
            <p>{ t('UkraineKyiv') }</p>
          </li>
          <li>
            <p className="text-sm-semibold">{ t('telephone') }</p>
            <a href="tel:+380979373496">+ 380 979373496</a>
          </li>
          <li>
            <p className="text-sm-semibold">E-mail:</p>
            <a href="mailto:museum.kolyskova@gmail.com">museum.kolyskova@gmail.com</a>
          </li>
        </ul>
        <div className="footer-socials-wrapper">
          <div className="footer-socials-socials">
            <p className="text-sm-semibold">{ t('followUsHere') }:</p>
            <div className="footer-socials-icons">
              <a href="https://www.youtube.com/@Kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/kolyskova.museum/" target="_blank" rel="noopener nofollow noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener nofollow noreferrer">
                <BsFacebook />
              </a>
              <a href="https://www.tiktok.com/@kolyskovamuseum" target="_blank" rel="noopener nofollow noreferrer">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="footer-socials-partners">
            <p className="text-sm-semibold">{ t('ourPartners') }:</p>
            <div className="footer-partners-icons">
              { partners.map((partner, index) => (
                <a href={ partner.url } target="_blank" rel="noopener nofollow noreferrer" key={ index }>
                  <img src={ isLightTheme ? partner.logoLightTheme : partner.logoDarkTheme } alt={ partner.alt } height="40" />
                </a>
              )) }
            </div>
          </div>
        </div>
      </div>
      <p className="footer-author-rights text-xs-bold">{ t('developedBy') } </p>
    </div>
  );
};
