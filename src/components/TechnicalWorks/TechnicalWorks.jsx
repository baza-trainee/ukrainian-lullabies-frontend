import React from 'react';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import { GeneralTitle } from '../GeneralTitle/GeneralTitle';
import { Loader } from '../Loader/Loader';
import './TechnicalWorks.css'

export const TechnicalWorks = () => {
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
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      custom={1}
      ref={ref}
      className='technikal'
    >
      <div className="technical_content">
        <div className="technikal__border ">
          <div className="technikal__element container">
            <GeneralTitle />
          </div>
        </div>

        <motion.div custom={3}
          variants={animationElement}
          className="technikal__block container">
          <div className='tech-wrap'>
            <div className='loader'>
              <Loader />
            </div>

            <div className="tech-container">
              <div className="right">
                <OrnamentsLeftIcon />
              </div>
              <div>
                <p className="center text-base">

                  {t('technikalWorsk')}

                  {t('technikalWorsk2')}

                </p>
              </div>

              <div className="left">
                <OrnamentsRightIcon />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div custom={4}
          variants={animationElement} className="container">
          <NavLink
            to="/"
            className={classNames('button', 'technikal-button', { 'button-dark': !isLightTheme, })}
            onClick={() => {
              scrollToTarget("#header");
            }}> {t('toTheMain')} </NavLink>
        </motion.div>
      </div>

    </motion.section>


  )
};
