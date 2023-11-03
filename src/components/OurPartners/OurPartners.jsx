import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';

import { OrnamentDouble, OrnamentTriple } from '../../icons/OrnamentTripple';
import './OurPartners.css';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { fetchPartners } from '../../redux/Partners/partnersSlice';

export const OurPartners = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
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
  const partners = useSelector((state) => state.partners.data);
  const partnersError = useSelector((state) => state.partners.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  return (
    <motion.section
      initial="hidden"
      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      ref={ ref }
      className='partners margin-bottom'>
      <h2 className='text-4xl ourPartners'>{ t('ourPartners') }</h2>
      <motion.div
        custom={ 1 }
        variants={ animationElement }
        className='partners-container margin-bottom'>
        { !partnersError ? (
          partners.map((partner) => {
            return (
              <Link
                to={ partner.website }
                target="_blank"
                rel="noopener nofollow noreferrer"
                title={ partner.name }
                key={ partner.name }

              >
                <img
                  src={ isLightTheme ? partner.classic_logo : partner.dark_logo }
                  alt={ partner.name } className='partners-icons' />
              </Link>
            )
          })) : <div>Error: { partnersError }</div> }
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
