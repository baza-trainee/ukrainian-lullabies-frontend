import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { OrnamentDouble, OrnamentTriple } from '../../icons/OrnamentTripple';
import './OurPartners.css';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import BazaDark from '../../images/Card_partners_black_baza.png';
import BazaLight from '../../images/Card_partners_white_baza.png';
import EtnoDark from '../../images/Card_partners_black_etno.png';
import EtnoLight from '../../images/Card_partners_white-etno.png';
import Red from '../../images/Card_partners_red.png';

export const OurPartners = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const bazaSvg = isLightTheme ? BazaLight : BazaDark;
  const etnoSvg = isLightTheme ? EtnoLight : EtnoDark;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
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
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      ref={ ref }
      className='margin-bottom'>
      <h2 className='text-4xl ourPartners'>{ t('aboutUs') }</h2>
      <motion.div
        custom={ 1 }
        variants={ animationElement }
        className='partners-container margin-bottom'>
        <Link to="https://baza-trainee.tech">
          <img src={ bazaSvg } alt='Baza' />
        </Link>
        <Link to="https://www.facebook.com/etnofotka/photos/">
          <img src={ etnoSvg } alt='Etno' />
        </Link>
        <Link to="#">
          <img src={ Red } alt='Partners' />
        </Link>
      </motion.div>
      <motion.div custom={ 2 }
        variants={ animationElement } className='ornament-triple margin-bottom'>
        <OrnamentTriple />
      </motion.div>
      <motion.div custom={ 2 }
        variants={ animationElement } className='ornament-double margin-bottom'>
        <OrnamentDouble />
      </motion.div>
    </motion.section>
  );
};
