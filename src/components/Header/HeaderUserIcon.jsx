import classNames from "classnames";
import Popup from "reactjs-popup";
import { useTranslation } from "react-i18next";

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import "../TechnicalWorks/TechnicalWorks.css";

import TechMobSvg from "../../images/mobile-loader-black.png";
import TechMobSvgLight from "../../images/mobile-loader-white.png";
import TechDeskSvg from "../../images/loader-dark1.png";
import TechDeskSvgLight from "../../images/loader-light.png";

export const HeaderUserIcon = ({ isLightTheme }) => {
  return (
    <div className={classNames("header-user-icon", { "header-user-icon-light": isLightTheme })}>
      <Popup
        trigger={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        modal
        lockScroll
        overlayStyle={isLightTheme ? { background: "rgba(0, 0, 0, 0.6)" } : { background: "rgba(231, 231, 231, 0.6)" }}
      >
        {(close) => (
          <div className={classNames("header-user-modal", { "header-user-modal-light": isLightTheme })}>
            <button className="header-user-modal-closeBtn" onClick={close}>
              &times;
            </button>
            <HeaderTechnicalWorksElement isLightTheme={isLightTheme} />
          </div>
        )}
      </Popup>
    </div>
  );
};

export const HeaderResponsiveUserLink = ({ isLightTheme }) => {
  return (
    <>
      <Popup
        trigger={
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
        }
        modal
        lockScroll
      >
        {(close) => (
          <div className={classNames("header-user-modal", { "header-user-modal-light": isLightTheme })}>
            <button className="header-user-modal-closeBtn" onClick={close}>
              &times;
            </button>
            <HeaderTechnicalWorksElement isLightTheme={isLightTheme} />
          </div>
        )}
      </Popup>
    </>
  );
};

// helper
const HeaderTechnicalWorksElement = ({ isLightTheme }) => {
  const SvgMob = isLightTheme ? TechMobSvg : TechMobSvgLight;
  const SvgDesk = isLightTheme ? TechDeskSvg : TechDeskSvgLight;
  const { t } = useTranslation();
  return (
    <div style={{ flexDirection: "column" }} className="tech-wrap">
      <div className="loader">
        <img className="svg-tech-mob" width="88px" height="80px" src={SvgMob} alt="loader" />
        <img className="svg-tech-desk" width="216px" height="100px" src={SvgDesk} alt="loader" />
      </div>

      <div className="tech-container">
        <div className="right">
          <OrnamentsLeftIcon />
        </div>
        <div>
          <p style={{ marginBottom: "20px" }} className="center text-base">
            {t("technikalWorsk")}

            {t("technikalWorsk2")}
          </p>
        </div>

        <div className="left">
          <OrnamentsRightIcon />
        </div>
      </div>
    </div>
  );
};
