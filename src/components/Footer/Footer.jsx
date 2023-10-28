import React, { useState, useEffect } from "react";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/Contacts/contactsSlice";
import { fetchPartners } from "../../redux/Partners/partnersSlice";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import { LogoDark, LogoLight } from "../SVGComponents/Logo";
import { BsFacebook, BsArrowUpShort } from "react-icons/bs";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

// social icons logos
import youtubeLogoHover from "../../icons/Socials/youtube-logo-hover.svg";
import youtubeLogoWhite from "../../icons/Socials/youtube-logo-white.svg";
import youtubeLogoBlack from "../../icons/Socials/youtube-logo-black.svg";
import youtubeLogoPressed from "../../icons/Socials/youtube-logo-pressed.svg";

import instagramLogoHover from "../../icons/Socials/instagram-logo-hover.svg";
import instagramLogoWhite from "../../icons/Socials/instagram-logo-white.svg";
import instagramLogoBlack from "../../icons/Socials/instagram-logo-black.svg";
import instagramLogoPressed from "../../icons/Socials/instagram-logo-pressed.svg";

import facebookLogoHover from "../../icons/Socials/facebook-logo-hover.svg";
import facebookLogoWhite from "../../icons/Socials/facebook-logo-white.svg";
import facebookLogoBlack from "../../icons/Socials/facebook-logo-black.svg";
import facebookLogoPressed from "../../icons/Socials/facebook-logo-pressed.svg";

import tiktokLogoHover from "../../icons/Socials/tiktok-logo-hover.svg";
import tiktokLogoWhite from "../../icons/Socials/tiktok-logo-white.svg";
import tiktokLogoBlack from "../../icons/Socials/tiktok-logo-black.svg";
import tiktokLogoPressed from "../../icons/Socials/tiktok-logo-pressed.svg";

// partners logo
import logoPartnerRed from "../../assets/icons/logo_partner_red.svg";
import logoBazaTraineeWhite from "../../assets/icons/logo_baza_trainee_white.svg";
import logoBazaTraineeBlack from "../../assets/icons/logo_baza_trainee_black.svg";
import logoEtnoPhotosWhite from "../../assets/icons/logo_etno_photos_white.svg";
import logoEtnoPhotosBlack from "../../assets/icons/logo_etno_photos_black.svg";

const partners = [
  {
    name: "Partner Red",
    dark_logo: logoPartnerRed,
    classic_logo: logoPartnerRed,
    alt: "Partner Red logo",
    website: "#",
  },
  {
    name: "Baza Trainee",
    dark_logo: logoBazaTraineeWhite,
    classic_logo: logoBazaTraineeBlack,
    alt: "Baza Trainee logo",
    website: "https://baza-trainee.tech",
  },
  {
    name: "Etno Photos",
    dark_logo: logoEtnoPhotosWhite,
    classic_logo: logoEtnoPhotosBlack,
    alt: "Ento Photos logo",
    website: "https://www.facebook.com/etnofotka/photos/",
  },
];
const partnersError = false;

const contacts = [
  { value: "nothing" },
  { value: "nothing" },
  { value: "museum.kolyskova@gmail.com" },
  { value: "Україна, Київ" },
  { value: "+38097732542" },
];
const contactsError = false;

export const Footer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetch data from store

  // const contacts = useSelector((state) => state.contacts.data);
  // const contactsError = useSelector((state) => state.contacts.error);
  // const partners = useSelector((state) => state.partners.data);
  // const partnersError = useSelector((state) => state.partners.error);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const currentLanguage = useSelector((state) => state.currentLanguage.currentLanguage);

  // scroll to top button
  const [isScrollUpButtonVisible, setIsScrollUpButtonVisible] = useState(false);
  // const navigate = useNavigate();

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

  // logo scroll
  const [isScrolling, setIsScrolling] = useState(false);

  const handleLogoClick = () => {
    if (!isScrolling) {
      setIsScrolling(true);
      scrollToTop();
      setTimeout(() => {
        setIsScrolling(false);
        navigate("/");
      }, 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchContacts("eng"));
    } else {
      dispatch(fetchContacts("uk"));
    }
    dispatch(fetchPartners());
  }, [dispatch]);

  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchContacts("eng"));
    } else {
      dispatch(fetchContacts("uk"));
    }
  }, [dispatch, currentLanguage]);

  return (
    <div className="footer">
      <button
        className={classNames("footer-scroll-up-button", {
          "footer-scroll-up-button-invisible": !isScrollUpButtonVisible,
          "footer-scroll-up-button-light": isLightTheme,
        })}
        onClick={() => handleLogoClick()}
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
              scrollToTarget("#header");
              // navigate("/")
            }}
          >
            {isLightTheme ? <LogoLight width="92" height="88" /> : <LogoDark width="92" height="88" />}
          </button>
        </div>
        <ul className="footer-docs-wrapper">
          <li>
            <Link to="/" className="text-sm-semibold">
              {t("termsAndConditions")}
            </Link>
          </li>
          <li>
            <Link to="/" className="text-sm-semibold">
              {t("privacy")}
            </Link>
          </li>
          <li>
            <Link to="/" className="text-sm-semibold">
              {t("poRegulations")}
            </Link>
          </li>
        </ul>
        <ul className="footer-contacts-wrapper">
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">{t("address")}</p>
            <p>{contacts.length > 1 ? contacts[3].value : `Error: ${contactsError}`}</p>
          </li>
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">{t("telephone")}</p>
            <a href={contacts.length > 1 ? contacts[4].value : "#"}>
              {contacts.length > 1 ? contacts[4].value : `Error: ${contactsError}`}
            </a>
          </li>
          <li>
            <p className="footer-contacts-list-title text-sm-semibold">E-mail:</p>
            <a href={`mailto:${contacts.length > 1 ? contacts[2].value : "#"}`}>
              {contacts.length > 1 ? contacts[2].value : `Error: ${contactsError}`}
            </a>
          </li>
        </ul>
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
