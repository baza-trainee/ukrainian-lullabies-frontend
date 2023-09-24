import React from 'react';
import './ErrorPage.css';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import { GeneralTitle } from '../GeneralTitle/GeneralTitle';

export const ErrorPage = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const scrollToTarget = (target) => {
    const scrollTo = document.querySelector(target);
    scrollTo.scrollIntoView({ block: "end" });
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
      className='errorPage'
    >
      <div className="errorPage__border">
        <div className="errorPage__element container">
          <GeneralTitle />
        </div>
      </div>
      <motion.div custom={ 3 }
        variants={ animationElement }
        className="errorPage__block container">
        <div className="element-right">
          <OrnamentsLeftIcon />
        </div>
        <p className="element-center text-base">
          Наразі ми працюємо над поліпшенням функціоналу сайту. Просимо вибачення за тимчасові незручності.
        </p>
        <div className="element-left">
          <OrnamentsRightIcon />
        </div>
      </motion.div>
      <motion.div custom={ 4 }
        variants={ animationElement } className="container">
        <NavLink
          to="/"
          className={ classNames('button', 'errorPage-button', { 'button-dark': !isLightTheme, }) }
          onClick={ () => {
            scrollToTarget("#header");
          } }> На головну </NavLink>
      </motion.div>
    </motion.div >)
};
