import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { getLightTheme } from "../../redux/theme/themeSelectors";

import KolyIcon from "../../icons/KolyIcon";
import SIcon from "../../icons/SIcon";
import KovaIcon from "../../icons/KovaIcon";
import OundIcon from "../../icons/OundIcon";
import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import ButtonShare from "./Button/ButtonShare";

import "./hero.css";

const Hero = () => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);

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

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="container heroWrapper margin-bottom"
    >
      <div className="kolyskovaWrap">
        <motion.div
          custom={1}
          variants={animationElement}
          className="kolyskovaWrap"
        >
          <div className="kolyIcon">
            <KolyIcon />
          </div>
          <div className="letterS">
            <SIcon />
          </div>
          <div className="kovaIcon">
            <KovaIcon />
          </div>
          <div className="oundIconWrap">
            <OundIcon />
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationElement}
          className="ornamentWrap"
        >
          <OrnamentsLeftIcon />
          <p className="text-base">
            Поринь у чарівний світ української колискової. Тут у <br />
            кожній ноті оживає душа народу, у кожному слові
            <br /> закарбовано генетичний зв’язок з родом. Відкрий для себе
            <br />
            неповторний колисковий світ, де від покоління до
            <br /> покоління линуть мелодійні слова любові та ніжності,
            <br />
            закодовані на щасливу долю дитини.
          </p>
          <OrnamentsRightIcon />
        </motion.div>
        <motion.div
          custom={3}
          variants={animationElement}
          className="hero-btn animation"
        >
          <div
            className={classNames("hero-btn", {
              "bg-dark": !isLightTheme,
            })}
          >
            <NavLink
              to=""
              className={classNames("button", "listen-button", {
                "button-dark": !isLightTheme,
              })}
            >
              Слухати
            </NavLink>
            <ButtonShare text="Поділитися" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
