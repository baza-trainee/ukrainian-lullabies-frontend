import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const OurPartners = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <Swiper
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="https://baza-trainee.tech" target="_blank" >
            <img src="" alt="Baza Trainee logo" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link target="_blank" to="https://www.facebook.com/etnofotka/photos/">
            <img src="" alt="Ento Photos logo" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="#" target="_blank">
            <img src="" alt="Partner Red logo" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div >
  );
};
