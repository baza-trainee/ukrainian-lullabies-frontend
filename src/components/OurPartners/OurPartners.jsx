import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './OurPartners.css';

const OurPartners = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          //        rows: 2,
        },
      },
    ],
  };

  return (
    <Slider { ...sliderSettings } className='ourPartners'>

      <Link className='ourPartners-link baza-dark' to="#"> 1</Link>

      <Link className='ourPartners-link etno-dark' to="#"> 2</Link>

      <Link className='ourPartners-link red-dark' to="#">   3</Link>

    </Slider>
  );
};

export default OurPartners;
