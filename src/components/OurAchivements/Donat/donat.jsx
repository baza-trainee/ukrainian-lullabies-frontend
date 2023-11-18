import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Ornaments } from "../../Ornaments/Ornaments";
import { CoffeeLogo } from "../CoffeeLogo/CoffeeLogo";
import { PatreonLogo } from "../PatreonLogo/PatreonLogo";
import { QrCodeButton } from "../QRCode/QrCodeButton";
import "./donat.css";

export const Donat = () => {
  const { t } = useTranslation();

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

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="achievements-support-div"
    >
      <div className="achievements-support-container">
        <motion.p custom={2} variants={animationElement} className="text-2xl">
          {t("helpWith")}
        </motion.p>
        <motion.div custom={3} variants={animationElement} className="donats">
          <Link to="https://www.buymeacoffee.com/kolyskova" target="_blank">
            <CoffeeLogo />
          </Link>
          <Link to="https://www.patreon.com/KolyskovaMuseum" target="_blank">
            <PatreonLogo />
          </Link>
          <div className="donat-qr">
            <QrCodeButton />
          </div>
        </motion.div>
      </div>
      <motion.div
        custom={3}
        variants={animationElement}
        className="donats-ornament"
      >

        <Ornaments />
      </motion.div>
    </motion.section>
  );
};

