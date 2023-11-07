import React from 'react';
import './ErrorPage.css';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import { NumberFour, NumberNull } from '../../icons/Numbers';

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
  const { t } = useTranslation();

  return (
    <motion.section
      initial="hidden"
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      custom={ 1 }
      ref={ ref }
      className='technikal'
    >
      <div className="technical_content">
        <div className="technikal__border ">
          <div className=" tech-margin">
            <motion.h2 custom={ 1 }
              variants={ animationElement } className="errorPage__title text-4xl">
              Page not found
            </motion.h2>
            <motion.div
              custom={ 2 }
              variants={ animationElement } className="errorPage__svg404">
              <NumberFour />
              <NumberNull />
              <NumberFour />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div custom={ 3 }
        variants={ animationElement }
        className="errorPage__block container">
        <div className="element-right-error">
          <OrnamentsLeftIcon />
        </div>
        <p className="element-center-error text-base">
          It may have been moved or deleted.
        </p>
        <div className="element-left-error">
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
          } }> { t('toTheMain') }</NavLink>
      </motion.div>
    </motion.section >
  )
};
