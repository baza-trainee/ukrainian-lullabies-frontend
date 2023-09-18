import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import { BsFacebook, BsArrowUpShort } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

// partners logo
import logoPartnerRed from "../../assets/icons/logo_partner_red.svg";
import logoBazaTraineeWhite from "../../assets/icons/logo_baza_trainee_white.png";
import logoBazaTraineeBlack from "../../assets/icons/logo_baza_trainee_black.png";
import logoEtnoPhotosWhite from "../../assets/icons/logo_etno_photos_white.png";
import classNames from "classnames";
// import logoEtnoPhotosBlack from "../../assets/icons/logo_etno_photos_black.png";

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
    logoLightTheme: logoEtnoPhotosWhite,
    alt: "Ento Photos logo",
    url: "https://www.facebook.com/etnofotka/photos/",
  },
];

export const Footer = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <button
        className={classNames("footer-scroll-up-button", { "footer-scroll-up-button-light": isLightTheme })}
        onClick={scrollToTop}
      >
        <BsArrowUpShort style={{ width: "32px", height: "32px" }} />
      </button>
      <div className="footer-wrapper container">
        <div className="separation-line"></div>
        <div className="footer-logo">
          <Link to="/">{isLightTheme ? <LogoLight width="92" height="88" /> : <LogoDark width="92" height="88" />}</Link>
        </div>
        <ul className="footer-docs-wrapper">
          <li>
            <Link to="/">Правила та умови</Link>
          </li>
          <li>
            <Link to="/">Конфіденційність</Link>
          </li>
          <li>
            <Link to="/">Статут ГО</Link>
          </li>
        </ul>
        <ul className="footer-contacts-wrapper">
          <li>
            <p>Адреса:</p>
            <p>Україна, Київ</p>
          </li>
          <li>
            <p>Телефон:</p>
            <a href="tel:+380979373496">+ 380 979373496</a>
          </li>
          <li>
            <p>E-mail:</p>
            <a href="mailto:museum.kolyskova@gmail.com">museum.kolyskova@gmail.com</a>
          </li>
        </ul>
        <div className="footer-socials-wrapper">
          <div className="footer-socials-socials">
            <p>Слідкуй за нами тут:</p>
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
            <p>Наші партнери:</p>
            <div className="footer-partners-icons">
              {partners.map((partner, index) => (
                <a href={partner.url} target="_blank" rel="noopener nofollow noreferrer" key={index}>
                  <img src={isLightTheme ? partner.logoLightTheme : partner.logoDarkTheme} alt={partner.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="footer-author-rights">Розробка Baza Trainee Ukraine 2023 © Всі права захищені </p>
    </div>
  );
};
