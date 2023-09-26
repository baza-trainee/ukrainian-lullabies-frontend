import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

import { Song } from './Song/Song';
import favoriteSongFirst from '../../assets/images/favorite-song-1.png';
import favoriteSongSecond from '../../assets/images/favorite-song-2.png';
import favoriteSongThird from '../../assets/images/favorite-song-3.png';
import './PopularSongs.css';

export function PopularSongs() {
  const { t } = useTranslation();
  const popularSongs = useSelector((state) => state.popularSongs.popularSongs);
  const swiperRef = useRef(null);
 const [isPlayingList, setIsPlayingList] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleSongClick = (index) => {
    const updatedPlayingList = [...isPlayingList];
    updatedPlayingList[index] = !updatedPlayingList[index];
    setIsPlayingList(updatedPlayingList);

    // Устанавливаем активный слайд при клике и центрируем его
    swiperRef.current.slideTo(index);
  };

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

  return (
    <motion.section
      initial="hidden"

      animate={ inView ? "visible" : "hidden" }
      variants={ animationElement }
      ref={ ref }
      className="PopularSongs margin-bottom">
      <motion.h2
        custom={ 1 }
        variants={ animationElement }
        className="PopularSongsTitle">
        { t('popularLullabies') }

      </motion.h2>
      <motion.div
        custom={2}
        variants={animationElement}
        className="PopularSongsList"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          ref={swiperRef}
        >
          {[favoriteSongFirst, favoriteSongSecond, favoriteSongThird].map(
            (song, index) => (
              <SwiperSlide key={index}>
                <CustomSong
                  isPlaying={isPlayingList[index]}
                  onClick={() => handleSongClick(index)}
                  backgroundUrl={song}
                  songName={popularSongs[index]?.title || ""}
                />
              </SwiperSlide>
            )
          )}
          {[favoriteSongFirst, favoriteSongSecond, favoriteSongThird].map(
            (song, index) => (
              <SwiperSlide key={index}>
                <CustomSong
                  isPlaying={isPlayingList[index]}
                  onClick={() => handleSongClick(index)}
                  backgroundUrl={song}
                  songName={popularSongs[index]?.title || ""}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </motion.div>
      <div className="currentSong"></div>
    </motion.section>
  );
}

function CustomSong({ isPlaying, onClick, backgroundUrl, songName }) {
  const swiperSlide = useSwiperSlide();

  return (
    <Song
      isPlaying={isPlaying}
      onClick={onClick}
      backgroundUrl={backgroundUrl}
      songName={songName}
      height={swiperSlide.isActive ? "304px" : "204px"}
      width={swiperSlide.isActive ? "264px" : "230px"}
    />
  );
}
