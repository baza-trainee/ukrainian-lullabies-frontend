import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Patreon from "./patreon";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { GeneralTitle } from '../GeneralTitle/GeneralTitle';
import "./AboutUsInfo.css";

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
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      ref={ ref }
      className='container about-as-info_wrapper margin-bottom'
    >
      <motion.div custom={ 1 } variants={ animationElement } className='kolyskovaWrap'>
        <GeneralTitle />
      </motion.div>

      <motion.p
        custom={ 1 }
        variants={ animationElement }
        className='text-4xl about-as-info_title'
      >
        { t('aboutUs') }
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        custom={ 1 }
        variants={ animationElement }
        className='about-as-info_target'>
        <div className='about-as-info_img-container'>
          <img src='/img/aboutUs/aboutUs-target.png' alt='mother with baby' />
        </div>
        <div className='about-as-info_target-info'>
          <p className='text-2xl about-as-info_title-small'>
            { t('projectPurpose') }
          </p>
          <p className='text-base'>
            { t('projectDescription') }
          </p>
          <p className='text-base'>
            { t('projectDescription2') }
          </p>
        </div>
      </motion.div>
      <div className='about-as-info_ornament'>
        <img src="/img/aboutUs/Ornaments.svg" alt="ornament" />
      </div>
      <motion.div initial="hidden"
        whileInView="visible"
        custom={ 2 }
        variants={ animationElement }
        className='about-as-info_support'
      >
        <div className='about-as-info_support-info'>
          <p className='text-2xl about-as-info_title-small'>
            { t('supportUs') }
          </p>
          <p className='text-base'>
            { t('supportDescription') }
          </p>
          <p className='text-base'>
            { t('supportDescription2') }
          </p>
          <p className='text-base'>
            { t('supportDescription3') }
          </p>
          <p className='text-base-semibold'>
            { t('donateHere') }
          </p>
          <div className='about-as-info_donat-imgs'>
            <div className='about-as-info_donat-bmc'>
              <Link href='#' className="buy-me-a-caffee"></Link>
            </div>
            <div className='about-as-info_donat-patreon'>
              <Link href='#'><Patreon /></Link>
            </div>
          </div>
        </div>
        <div className='about-as-info_img-container another-hight'>
          <img src='/img/aboutUs/aboutUs-support.png' alt='mother with baby' />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default AboutUsInfo;