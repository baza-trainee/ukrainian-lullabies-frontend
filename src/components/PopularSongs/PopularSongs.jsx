import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Song } from "./Song/Song";
import favoriteSongFirst from "../../assets/images/favorite-song-1.png";
import favoriteSongSecond from "../../assets/images/favorite-song-2.png";
import favoriteSongThird from "../../assets/images/favorite-song-3.png";
import "./PopularSongs.css";
import { useSelector } from "react-redux";


const songs = [favoriteSongFirst, favoriteSongSecond, favoriteSongThird];
const clonedSongs = [...songs, ...songs];

export function PopularSongs() {
  const { t } = useTranslation();

  const [isPlayingIndex, setIsPlayingIndex] = useState(-1);
  const popularSongs = useSelector((state) => state.popularSongs.popularSongs);
  const swiperRef = useRef(null);

  const handleSongClick = (index) => {
    if (isPlayingIndex === index) {
      setIsPlayingIndex(-1);
      swiperRef.current.slideTo(index);
    } else {
      setIsPlayingIndex(index);
    }
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
      whileInView="visible"
      className="PopularSongs margin-bottom"
    >
      <motion.h2
        custom={1}
        variants={animationElement}
        className="PopularSongsTitle"
      >
        {t("popularLullabies")}
      </motion.h2>
      <motion.div
        custom={2}
        variants={animationElement}
        className="PopularSongsList"
      >
        <Swiper
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          className="mySwiper"
          ref={swiperRef}
        >
          {clonedSongs.map((song, index) => (
            <SwiperSlide key={index}>
              <CustomSong
                onClick={() => handleSongClick(index)}
                backgroundUrl={song}
                songName={popularSongs[index % 3]?.title || ""}
                isActive={index === isPlayingIndex}
                videoID={popularSongs[index % 3]?.id || ""}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

function CustomSong({ onClick, backgroundUrl, songName, isActive, videoID }) {
  const swiperSlide = useSwiperSlide();

  const isCenterSlide = swiperSlide.isActive;
  const height = isCenterSlide ? "304px" : "226px";
  const width = isCenterSlide ? "264px" : "200px";

  return (
    <Song
      isPlaying={isActive}
      onClick={onClick}
      backgroundUrl={backgroundUrl}
      songName={songName}
      height={height}
      width={width}
      videoID={videoID}
      isCenterSlide={isCenterSlide}
    />
  );
}
