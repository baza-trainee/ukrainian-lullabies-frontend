import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { playerChanged } from '../../redux/CurrentPlayer/currentPlayerSlice';
import { getPopularSongs } from '../../redux/PopularSongs/PopularSongsSlice';

import playButton from "../../assets/images/popular/play-popular.png";
import pauseButton from "../../assets/images/popular/pause-popular.png"

import favoriteSongFirstW from '../../assets/images/popular/popular-left-desk-w.webp';
import favoriteSongSecondW from '../../assets/images/popular/popular-center-desk-w.webp';
import favoriteSongThirdMobW from '../../assets/images/popular/popular-right-mob-w.webp';
import favoriteSongFirstMobW from '../../assets/images/popular/popular-left-mob-w.webp';
import favoriteSongSecondMobW from '../../assets/images/popular/popular-center-mob-w.webp';
import favoriteSongThirdW from '../../assets/images/popular/popular-right-desk-w.webp';
import favoriteSongFirstMob1x from '../../assets/images/popular/popular-left-mob-1x.jpg';
import favoriteSongSecondMob1x from '../../assets/images/popular/popular-center-mob-1x.jpg';
import favoriteSongThirdMob1x from '../../assets/images/popular/popular-right-mob-1x.jpg';
import favoriteSongFirstMob2x from '../../assets/images/popular/popular-left-mob-2x.jpg';
import favoriteSongSecondMob2x from '../../assets/images/popular/popular-center-mob-2x.jpg';
import favoriteSongThirdMob2x from '../../assets/images/popular/popular-right-mob-2x.jpg';
import favoriteSongFirst1x from '../../assets/images/popular/popular-left-desk-1x.jpg';
import favoriteSongSecond1x from '../../assets/images/popular/popular-center-desk-1x.jpg';
import favoriteSongThird1x from '../../assets/images/popular/popular-right-desk-1x.jpg';
import favoriteSongFirst2x from '../../assets/images/popular/popular-left-desk-2x.jpg';
import favoriteSongSecond2x from '../../assets/images/popular/popular-center-desk-2x.jpg';
import favoriteSongThird2x from '../../assets/images/popular/popular-right-desk-2x.jpg';
import './PopularSongs.css';
import { Ornaments } from '../Ornaments/Ornaments';

export function PopularSongs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [leftClick, setLeftClick] = useState(false);
  const [centerClick, setCenterClick] = useState(false);
  const [rightClick, setRightClick] = useState(false);

  const languagePopular = useSelector((state) => state.currentLanguage.currentLanguage);
  // const songsPopularPlayer = useSelector((state) => state.popularSongs.popularSongs.results);

  const language = languagePopular === "ua" ? "uk" : "eng";

  const buttonPopular = isPlaying ? pauseButton : playButton;

  const { t } = useTranslation();
  const dispatch = useDispatch();

  // const [title, setTitle] = useState([]);
  // const [songs, setSongs] = useState([]);

  // useEffect(() => {
  //   if (songsPopularPlayer) {
  //     const audioList = songsPopularPlayer?.map(item => item.source.audio);
  //     const titleList = songsPopularPlayer?.map(item => item.name);

  //     setTitle([
  //       `“${titleList[0]}”`,
  //       `“${titleList[1]}”`,
  //       `“${titleList[1]}”`
  //     ]);

  //     setSongs([
  //       audioList[0],
  //       audioList[1],
  //       audioList[1],
  //     ])
  //   }
  // }, [songsPopularPlayer]);


  const [songs, setSongs] = useState([
    "https://deti.e-papa.com.ua/mpf/17146860.mp3",
    "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    "https://deti.e-papa.com.ua/mpf/17146898.mp3",
  ]);


  const [title, setTitle] = useState([
    `“Сонце сідає”`,
    `“Ой, ходить сон коло вікон”`,
    `“Повішу я колисочку”`
  ]);

  const [images, setImages] = useState([
    {
      srcMob: favoriteSongFirstMob1x,
      srcDesk: favoriteSongFirst1x,
      srcWebp: favoriteSongFirstW,
      srcWebpMob: favoriteSongFirstMobW,
      srcSetDesk: `${favoriteSongFirst1x} 1x, ${favoriteSongFirst2x} 2x`,
      srcSetMob: `${favoriteSongFirstMob1x} 1x, ${favoriteSongFirstMob2x} 2x`
    },
    {
      srcMob: favoriteSongSecondMob1x,
      srcDesk: favoriteSongSecond1x,
      srcWebp: favoriteSongSecondW,
      srcWebpMob: favoriteSongSecondMobW,
      srcSetDesk: `${favoriteSongSecond1x} 1x, ${favoriteSongSecond2x} 2x`,
      srcSetMob: `${favoriteSongSecondMob1x} 1x, ${favoriteSongSecondMob2x} 2x`
    },
    {
      srcMob: favoriteSongThirdMob1x,
      srcDesk: favoriteSongThird1x,
      srcWebp: favoriteSongThirdW,
      srcWebpMob: favoriteSongThirdMobW,
      srcSetDesk: `${favoriteSongThird1x} 1x, ${favoriteSongThird2x} 2x`,
      srcSetMob: `${favoriteSongThirdMob1x} 1x, ${favoriteSongThirdMob2x} 2x`
    }
  ]);

  useEffect(() => {
    dispatch(getPopularSongs(language));
  }, [dispatch, languagePopular]);

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

  const sourceDesk = (index) => {
    return (
      <>
        <source
          srcSet={images[index].srcWebp}
          media="(min-width: 1440px)"
          type="image/webp"
        />
        <source
          srcSet={images[index].srcSetDesk}
          media="(min-width: 1440px)"
          type="image/jpg"
          />
        <img loading="lazy" src={images[index].srcDesk} alt="Popular Picture" />
      </>
    )
  
}

    const sourceMob = (index) => {
    return (
      <>
        <source
          srcSet={images[index].srcWebpMob}
          media="(min-width: 360px)"
          type="image/webp"
        />
        <source
          srcSet={images[index].srcSetMob}
          media="(min-width: 360px)"
        />
        <img loading="lazy" src={images[index].srcMob} alt="Popular Picture" />
      </>
    )
  
  }
  
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
        <ReactPlayer
          style={{ display: "none" }}
          width={0}
          height={0}
          url={currentSong}
          playing={isPlaying}
          controls
          volume={0.5}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="carousel-container desktop">
          <div className='small-div'>
            <div className='title-container small-div'>
              <h3 className='title-popular'>{title[0]}</h3>
            </div>
            <div className="small-image-container">
              <img loading="lazy" onClick={() => handleLeftClick()} className='play-icon' src={playButton} alt="Play" />
              {leftClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceDesk(0)}
              </motion.picture>)}
              {!leftClick && (<motion.picture initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceDesk(0)}
                </motion.picture>)}
            </div>
          </div>
          <div className='large-div'>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img loading="lazy" onClick={handleCenterClick} className='play-icon' src={buttonPopular} alt="Play" />
              {centerClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceDesk(1)}
              </motion.picture>)}
              {!centerClick && (<motion.picture
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceDesk(1)}
                </motion.picture>)}
            </div>
          </div>
          <div className='small-div'>
            <div className='title-container small-div'>
              <h3 className='title-popular'>{title[2]}</h3>
            </div>
            <div className="small-image-container">
              <img loading="lazy" onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
              {rightClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceDesk(2)}
              </motion.picture>)}
              {!rightClick && (<motion.picture initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceDesk(2)}
                </motion.picture>)}
            </div>
          </div>
        </div>
        <div className="carousel-container mobile">
          <div>
            <div className='title-container large-div'>
              <h3 className='title-popular'>{title[1]}</h3>
            </div>
            <div className="large-image-container">
              <img loading="lazy" onClick={handleCenterClick} className='play-icon' src={buttonPopular} alt="Play" />
                {centerClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceMob(1)}
              </motion.picture>)}
              {!centerClick && (<motion.picture
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceMob(1)}
                </motion.picture>)}
            </div>
          </div>
          <div className='mobile-div'>
            <div className='margin-right-popular'>
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[0]}</h3>
              </div>
              <div className="small-image-container">
                <img loading="lazy" onClick={() => handleLeftClick()} className='play-icon' src={playButton} alt="Play" />
                {leftClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceMob(0)}
              </motion.picture>)}
              {!leftClick && (<motion.picture initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceMob(0)}
                </motion.picture>)}
              </div>
            </div>
            <div >
              <div className='title-container small-div'>
                <h3 className='title-popular'>{title[2]}</h3>
              </div>
              <div className="small-image-container">
                <img loading="lazy" onClick={() => handleRightClick()} className='play-icon' src={playButton} alt="Play" />
                {rightClick && (<motion.picture style={{ filter: "blur(10px)" }} className='img-popular'>
                {sourceMob(2)}
              </motion.picture>)}
              {!rightClick && (<motion.picture initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }} className='img-popular'>
                {sourceMob(2)}
                </motion.picture>)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Ornaments />
    </motion.section>
  );
}
