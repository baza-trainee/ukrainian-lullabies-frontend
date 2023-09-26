import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { OrnamentDouble, OrnamentTriple } from '../../icons/OrnamentTripple';
import 'swiper/css';
import './OurPartners.css';

export const OurPartners = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 16
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 24
    },
  };
  const { t } = useTranslation();
  return (
    <>
      <h2 className='text-4xl ourPartners'>{ t('aboutUs') }</h2>
      <Swiper
        spaceBetween={ 24 }
        slidesPerView={ 4 }
        modules={ [Autoplay] }
        loop={ true }
        autoplay={ { delay: 0, disableOnInteraction: false } }
        onSlideChange={ () => { } }
        noSwiping={ true }
        speed={ 2000 }
        effect="slide"
        freeMode={ true }
        allowSlidePrev={ true }
        allowSlideNext={ true }
        allowTouchMove={ false }
        className="swiper-container"
        breakpoints={ breakpoints } // Встановлення breakpoints
      >
        <SwiperSlide
          className={ classNames('margin-bottom', {
            'baza-dark': !isLightTheme,
            'baza-light': isLightTheme,
          }) }
        >
          <Link to="https://baza-trainee.tech"></Link>
        </SwiperSlide>
        <SwiperSlide
          className={ classNames({
            'etno-dark': !isLightTheme,
            'etno-light': isLightTheme,
          }) }
        >
          <Link to="https://www.facebook.com/etnofotka/photos/"></Link>
        </SwiperSlide>
        <SwiperSlide className="red-dark">
          <Link to="#"></Link>
        </SwiperSlide>

        <SwiperSlide
          className={ classNames({
            'baza-dark': !isLightTheme,
            'baza-light': isLightTheme,
          }) }
        >
          <Link to="https://baza-trainee.tech"></Link>
        </SwiperSlide>
        <SwiperSlide
          className={ classNames({
            'etno-dark': !isLightTheme,
            'etno-light': isLightTheme,
          }) }
        >
          <Link to="https://www.facebook.com/etnofotka/photos/"></Link>
        </SwiperSlide>
        <SwiperSlide className="red-dark">
          <Link to="#"></Link>
        </SwiperSlide>

        <SwiperSlide
          className={ classNames({
            'baza-dark': !isLightTheme,
            'baza-light': isLightTheme,
          }) }
        >
          <Link to="https://baza-trainee.tech"></Link>
        </SwiperSlide>
        <SwiperSlide
          className={ classNames({
            'etno-dark': !isLightTheme,
            'etno-light': isLightTheme,
          }) }
        >
          <Link to="https://www.facebook.com/etnofotka/photos/"></Link>
        </SwiperSlide>
        <SwiperSlide className="red-dark">
          <Link to="#"></Link>
        </SwiperSlide>
      </Swiper>
      <div className='ornament-triple margin-bottom'>
        <OrnamentTriple />
      </div>
      <div className='ornament-double margin-bottom'>
        <OrnamentDouble />
      </div>
    </>
  );
};
