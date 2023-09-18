import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Song } from './Song/Song';
import favoriteSongFirst from '../../assets/images/favorite-song-1.png';
import favoriteSongSecond from '../../assets/images/favorite-song-2.png';
import favoriteSongThird from '../../assets/images/favorite-song-3.png';
import './PopularSongs.css';

export function PopularSongs() {
  const [isPlayingList, setIsPlayingList] = useState([true, true, true]);

  const handleSongClick = (index) => {
    const updatedPlayingList = Array(3).fill(true);
    updatedPlayingList[index] = !isPlayingList[index];
    setIsPlayingList(updatedPlayingList);
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      className="PopularSongs margin-bottom">
      <motion.h2
        custom={ 1 }
        variants={ animationElement }
        className="PopularSongsTitle">
        Популярні колискові
      </motion.h2>
      <motion.div
        custom={ 2 }
        variants={ animationElement }
        className="PopularSongsList"
      >
        <Song isPlaying={ isPlayingList[0] } onClick={ () => handleSongClick(0) } backgroundUrl={ favoriteSongFirst } songName={ "“Сонце сідає”" } />
        <Song isPlaying={ isPlayingList[1] } onClick={ () => handleSongClick(1) } height={ "304px" } backgroundUrl={ favoriteSongSecond } width={ "264px" } songName={ "“Ой, ходить сон коло вікон”" } />
        <Song isPlaying={ isPlayingList[2] } onClick={ () => handleSongClick(2) } backgroundUrl={ favoriteSongThird } songName={ "“Повішу я колисочку”" } />
      </motion.div>
      <div className="currentSong"></div>
    </motion.section>
  );
}
