import React from "react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import { useInView } from 'react-intersection-observer';

import { getLightTheme } from "../../redux/theme/themeSelectors";
import Notification from "./Notification/Notification";

import SIcon from "../../icons/SIcon";
import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import ButtonShare from "./Button/ButtonShare";

import "./hero.css";

const Hero = () => {
  // theme toggle
  const isLightTheme = useSelector(getLightTheme);
  // notofication
  const [isNotification, setIsNotification] = useState(false);

  const notification = () => {
    setIsNotification(true);
    setTimeout(() => setIsNotification(false), 2000);
  };

  const copyLinkToClipboard = async () => {
    try
    {
      // Визначаємо URL-адресу, яку ми хочемо скопіювати
      const urlToCopy =
        "https://ukrainian-lullabies-frontend-git-dev-baza-trainee.vercel.app/#/map";
      await navigator.clipboard.writeText(urlToCopy);
      notification();
    } catch (error)
    {
      console.error("Не вдалося скопіювати посилання: ", error);
    }
  };

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
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      custom={ 1 }
      ref={ ref }
      className="container heroWrapper margin-bottom"
    >
      <div className="kolyskovaWrap">
        <motion.div
          custom={ 1 }
          variants={ animationElement }
          className="kolyskovaWrap"
        >
          <div className="kolyIcon text-5xl">
            Koly
          </div>
          <div className="letterS">
            <SIcon />
          </div>
          <div className="kovaIcon text-5xl">
            Kova
          </div>
          <div className="oundIconWrap text-5xl">
            ound
          </div>
        </motion.div>
        <motion.div
          custom={ 2 }
          variants={ animationElement }
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
          custom={ 3 }
          variants={ animationElement }
          className="hero-btn animation"
        >
          <div
            className={ classNames("hero-btn", {
              "bg-dark": !isLightTheme,
            }) }
          >
            <Link
              to="player"
              id="player"
              className={ classNames("button", "listen-button", {
                "button-dark": !isLightTheme,
              }) }
              spy={ true }
              smooth={ true }
              duration={ 500 }
            >
              Слухати
            </Link>
            <ButtonShare text="Поділитися" onClick={ copyLinkToClipboard } />
          </div>
        </motion.div>
        { isNotification && (
          <Notification textNotification="Поділитися посиланням на сайт" />
        ) }
      </div>
    </motion.section>
  );
};

export default Hero;
