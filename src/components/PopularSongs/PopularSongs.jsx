import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import playButton from "../../assets/images/play-popular.png";

import favoriteSongFirst from '../../assets/images/favorite-song-1.png';
import favoriteSongSecond from '../../assets/images/favorite-song-2.png';
import favoriteSongThird from '../../assets/images/favorite-song-3.png';
import './PopularSongs.css';
import { Ornaments } from '../Ornaments/Ornaments';

export function PopularSongs() {
  const { t } = useTranslation();

  const [images, setImages] = useState([
    favoriteSongFirst,
    favoriteSongSecond,
    favoriteSongThird
  ]);

  const [title, setTitle] = useState([
    `“Сонце сідає”`,
    `“Ой, ходить сон коло вікон”`,
    `“Повішу я колисочку”`
  ])

  const handleLeftClick = () => {
    const [left, center, right] = images;
    const [leftTitle, centerTitle, rightTitle] = title;
    setImages([center, left, right]);
    setTitle([centerTitle, leftTitle, rightTitle]);
  };

  const nandleCenterClick = () => {
    console.log("centerrrr");
  }

  const handleRightClick = () => {
    const [left, center, right] = images;
    const [leftTitle, centerTitle, rightTitle] = title;
    setImages([left, right, center]);
    setTitle([leftTitle, rightTitle, centerTitle]);
  };


  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.section
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="popular-songs-section margin-bottom">
      <motion.h2
        custom={1}
        variants={animationElement}
        className="text-4xl title-h">
        {t('popularLullabies')}
      </motion.h2>
      <motion.div
        custom={2}
        variants={animationElement}
      >
        <div className="carousel-container desktop">
          <div className='small-div'>
            <div className='title-container small-div'>
              <h3 className='title-popular'>{title[0]}</h3>
            </div>
            <div className="small-image-container">
              <img onClick={() => handleLeftClick()} className='play-icon' src={playButton} alt="Play" />
              <img className='img-popular' src={images[0]} alt="Left" />
            </div>
          </div>
          <div className='large-div'>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img onClick={nandleCenterClick} className='play-icon' src={playButton} alt="Play" />
              <img className='img-popular' src={images[1]} alt="Center" />
            </div>
          </div>
          <div className='small-div'>
            <div className='title-container small-div'>
              <h3 className='title-popular'>{title[2]}</h3>
            </div>
            <div className="small-image-container">
              <img onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
              <img className='img-popular' src={images[2]} alt="Right" />
            </div>
          </div>
        </div>
        <div className="carousel-container mobile">
          <div>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img onClick={nandleCenterClick} className='play-icon' src={playButton} alt="Play" />
              <img className='img-popular' src={images[1]} alt="Center" />
            </div>
          </div>
          <div className='mobile-div'>
            <div className='margin-right-popular'>
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[0]}</h3>
              </div>
              <div className="small-image-container">
                <img onClick={() => handleLeftClick()} className='play-icon' src={playButton} alt="Play" />
                <img className='img-popular' src={images[0]} alt="Left" />
              </div>
            </div>
            <div >
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[2]}</h3>
              </div>
              <div className="small-image-container">
                <img onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
                <img className='img-popular' src={images[2]} alt="Right" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Ornaments />
    </motion.section>
  );
}
