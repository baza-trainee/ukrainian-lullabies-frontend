import React from 'react';
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import './TechnicalWorks.css'

import TechMobSvg from '../../images/mobile-loader-black.png'
import TechMobSvgLight from '../../images/mobile-loader-white.png'
import TechDeskSvg from '../../images/loader-dark1.png';
import TechDeskSvgLight from '../../images/loader-light.png';


export const TechnicalWorksElement = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const SvgMob = isLightTheme ? TechMobSvg : TechMobSvgLight;
  const SvgDesk = isLightTheme ? TechDeskSvg : TechDeskSvgLight;

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
        <div style={{ flexDirection: "column" }} className='tech-wrap'>
          <div className='loader'>
            <img className='svg-tech-mob' width="88px" height="80px" src={SvgMob} alt='loader' />
            <img className='svg-tech-desk' width="216px" height="100px" src={SvgDesk} alt='loader' />
          </div>

          <div className="tech-container">
            <div>
              <p style={{ marginBottom: "20px" }} className="center text-base">

                {t('technikalWorsk')}

                {t('technikalWorsk2')}

              </p>
            </div>

          </div>
        </div>
      </motion.div>

    </motion.section>


  )
};