import React from 'react';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import './TechnicalWorks.css'


export const TechnicalWorksElement = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

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
      custom={1}
      ref={ref}
      className='technikal-container'
    >
      <motion.div custom={3}
        variants={animationElement}
        className="technikal__block container">
        <div className='loader' />

        <div className="right">
          <OrnamentsLeftIcon />
        </div>
        <p className="center text-base center-tech">

          {t('technikalWorsk')}

          {t('technikalWorsk2')}

        </p>

        <div className="left">
          <OrnamentsRightIcon />
        </div>
      </motion.div>
      <motion.div custom={4}
        variants={animationElement} className="container">
        <NavLink style={{ marginBottom: "50px" }}
          to="/"
          className={classNames('button', 'technikal-button', { 'button-dark': !isLightTheme, })}
        > {t('toTheMain')} </NavLink>
      </motion.div>

    </motion.section>


  )
};