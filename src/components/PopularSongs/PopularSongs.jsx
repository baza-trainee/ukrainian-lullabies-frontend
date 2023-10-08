import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { playerChanged } from '../../redux/CurrentPlayer/CurrentPlayerSlice';

import playButton from "../../assets/images/play-popular.png";
import pauseButton from "../../assets/images/pause-popular.png"

import favoriteSongFirst from '../../assets/images/favorite-song-1.png';
import favoriteSongSecond from '../../assets/images/favorite-song-2.png';
import favoriteSongThird from '../../assets/images/favorite-song-3.png';
import './PopularSongs.css';
import { Ornaments } from '../Ornaments/Ornaments';

export function PopularSongs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [leftClick, setLeftClick] = useState(false);
  const [centerClick, setCenterClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);

  const buttonPopular = isPlaying ? pauseButton : playButton;

  const { t } = useTranslation();
  const dispatch = useDispatch();



  const [songs, setSongs] = useState([
    "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
  ]);

  const [images, setImages] = useState([
    favoriteSongFirst,
    favoriteSongSecond,
    favoriteSongThird
  ]);

  const [title, setTitle] = useState([
    `“Сонце сідає”`,
    `“Ой, ходить сон коло вікон”`,
    `“Повішу я колисочку”`
  ]);

  useEffect(() => {
    setCurrentSong(songs[1]);
  }, []);

  useEffect(() => {
    setCurrentSong(songs[1]);
    setLeftClick(false);
    setCenterClick(false);
    setRightClick(false);
  }, [songs[1]]);

  const handleLeftClick = () => {
    const [left, center, right] = images;
    const [leftTitle, centerTitle, rightTitle] = title;
    const [leftSong, centerSong, rightSong] = songs;
    setIsPlaying(true);
    setLeftClick(true);
    setCenterClick(true);
    setImages([center, left, right]);
    setTitle([centerTitle, leftTitle, rightTitle]);
    setSongs([centerSong, leftSong, rightSong]);
  };

  const handleCenterClick = () => {
    setIsPlaying(!isPlaying);
  }

  const handleRightClick = () => {
    const [left, center, right] = images;
    const [leftTitle, centerTitle, rightTitle] = title;
    const [leftSong, centerSong, rightSong] = songs;
    setIsPlaying(true);
    setRightClick(true);
    setCenterClick(true);
    setImages([left, right, center]);
    setTitle([leftTitle, rightTitle, centerTitle]);
    setSongs([leftSong, rightSong, centerSong]);
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

  // preventing players from playing alltogether
  const currentPlayer = useSelector((state) => state.currentPlayer.currentPlayer);
  useEffect(() => {
    if (isPlaying) {
      dispatch(playerChanged("popular"));
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentPlayer !== "popular") {
      setIsPlaying(false);
    }
  }, [currentPlayer]);


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
              {leftClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[0]} alt="Left" />)}
              {!leftClick && (<motion.img initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular' src={images[0]} alt="Left" />)}
            </div>
          </div>
          <div className='large-div'>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img onClick={handleCenterClick} className='play-icon' src={buttonPopular} alt="Play" />
              {centerClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[1]} alt="Center" />)}
              {!centerClick && (<motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular' src={images[1]} alt="Center" />)}
              <ReactPlayer
                url={currentSong}
                playing={isPlaying}
                controls
                volume={0.5}
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </div>
          <div className='small-div'>
            <div className='title-container small-div'>
              <h3 className='title-popular'>{title[2]}</h3>
            </div>
            <div className="small-image-container">
              <img onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
              {rightClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[0]} alt="Left" />)}
              {!rightClick && (<motion.img initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular' src={images[2]} alt="Right" />)}
            </div>
          </div>
        </div>
        <div className="carousel-container mobile">
          <div>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img onClick={handleCenterClick} className='play-icon' src={buttonPopular} alt="Play" />
              {centerClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[1]} alt="Center" />)}
              {!centerClick && (<motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular' src={images[1]} alt="Center" />)}
              <ReactPlayer
                url={currentSong}
                playing={isPlaying}
                controls
                volume={0.5}
                onEnded={() => setIsPlaying(false)}
              />
            </div>
          </div>
          <div className='mobile-div'>
            <div className='margin-right-popular'>
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[0]}</h3>
              </div>
              <div className="small-image-container">
                <img onClick={() => handleLeftClick()} className='play-icon' src={playButton} alt="Play" />
                {leftClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[0]} alt="Left" />)}
                {!leftClick && (<motion.img initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }} className='img-popular' src={images[0]} alt="Left" />)}
              </div>
            </div>
            <div >
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[2]}</h3>
              </div>
              <div className="small-image-container">
                <img onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
                {rightClick && (<motion.img style={{ filter: "blur(10px)" }} className='img-popular' src={images[0]} alt="Left" />)}
                {!rightClick && (<motion.img initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }} className='img-popular' src={images[2]} alt="Right" />)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Ornaments />
    </motion.section>
  );
}
