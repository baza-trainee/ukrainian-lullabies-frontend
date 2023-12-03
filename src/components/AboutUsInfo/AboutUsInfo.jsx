import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { GeneralTitle } from "../GeneralTitle/GeneralTitle";
import { Ornaments } from "../Ornaments/Ornaments";
import { QrCodeButton } from "../OurAchivements/QRCode/QrCodeButton";
import "./AboutUsInfo.css";
import Patreon from "./patreon";

const AboutUsInfo = () => {
  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="container wrapper margin-bottom"
    >
      <motion.div
        custom={1}
        variants={animationElement}
        className="technikal__container container"
      >
        <GeneralTitle />
      </motion.div>

      <motion.p
        custom={1}
        variants={animationElement}
        className="text-4xl title title_margin-bottom"
      >
        {t("aboutUs")}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={1}
        variants={animationElement}
        className="target-container"
      >
        <div className="img-container target-img">
          <picture>
            <source
              srcSet="/img/aboutUs/aboutUs-target-desk-w.webp"
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-target-desk-1x.jpg 1x, /img/aboutUs/aboutUs-target-desk-2x.jpg 2x"
              media="(min-width: 1440px)"
              type="image/jpg"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-target-tab-w.webp"
              media="(min-width: 768px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-target-tab-1x.jpg 1x, /img/aboutUs/aboutUs-target-tab-2x.jpg 2x"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-target-mob-w.webp"
              media="(min-width: 360px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-target-mob-1x.jpg 1x, /img/aboutUs/aboutUs-target-mob-2x.jpg 2x"
              media="(min-width: 360px)"
              type="image/jpg"
            />
            <img
              src="/img/aboutUs/aboutUs-target.png"
              alt="mother with baby"
              loading="lazy"
            />
          </picture>
        </div>
        <div className="target-info">
          <p className="text-2xl title-small">{t("projectPurpose")}</p>
          <p className="text-base">{t("projectDescription")}</p>
          <p className="text-base">{t("projectDescription2")}</p>
        </div>
      </motion.div>
      <div className="ornaments-about">
        <Ornaments />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={2}
        variants={animationElement}
        className="support-container"
      >
        <div className="support-info">
          <p className="text-2xl title-small">{t("supportUs")}</p>
          <p className="text-base">{t("supportDescription")}</p>
          <p className="text-base">{t("supportDescription2")}</p>
          <p className="text-base">{t("supportDescription3")}</p>
          <p className="text-base-semibold">{t("donateHere")}</p>
        </div>
        <div className="donat-imgs">
          <div className="donat-bmc ">
            <Link
              aria-label="go to https://www.buymeacoffee.com/kolyskova"
              to="https://www.buymeacoffee.com/kolyskova"
              className="buy-me-a-caffee"
              target="_blank"
            ></Link>
          </div>
          <div className="donat-patreon ">
            <Link
              aria-label="go to https://www.patreon.com/KolyskovaMuseum"
              to="https://www.patreon.com/KolyskovaMuseum"
              target="_blank"
            >
              <Patreon />
            </Link>
          </div>
          <div className="about-us-donat-qr">
            <QrCodeButton />
          </div>
        </div>
        <div className="img-container support-img">
          <picture>
            <source
              srcSet="/img/aboutUs/aboutUs-support-desk-w.webp"
              media="(min-width: 1440px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-support-desk-1x.jpg 1x, /img/aboutUs/aboutUs-support-desk-2x.jpg 2x"
              media="(min-width: 1440px)"
              type="image/jpg"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-support-tab-w.webp"
              media="(min-width: 768px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-support-tab-1x.jpg 1x, /img/aboutUs/aboutUs-support-tab-2x.jpg 2x"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-support-mob-w.webp"
              media="(min-width: 360px)"
              type="image/webp"
            />
            <source
              srcSet="/img/aboutUs/aboutUs-support-mob-1x.jpg 1x, /img/aboutUs/aboutUs-support-mob-2x.jpg 2x"
              media="(min-width: 360px)"
              type="image/jpg"
            />
            <img
              src="/img/aboutUs/aboutUs-support.png"
              alt="mother with baby"
              loading="lazy"
            />
          </picture>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUsInfo;
