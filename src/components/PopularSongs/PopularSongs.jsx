import React, { useState } from 'react';
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

  return (
    <section className="PopularSongs">
      <h2 className="PopularSongsTitle">Популярні колискові</h2>
      <div className="PopularSongsList">
        <Song isPlaying={isPlayingList[0]} onClick={() => handleSongClick(0)} backgroundUrl={favoriteSongFirst} songName={"“Сонце сідає”"} />
        <Song isPlaying={isPlayingList[1]} onClick={() => handleSongClick(1)} height={"304px"} backgroundUrl={favoriteSongSecond} width={"264px"} songName={"“Ой, ходить сон коло вікон”"} />
        <Song isPlaying={isPlayingList[2]} onClick={() => handleSongClick(2)} backgroundUrl={favoriteSongThird} songName={"“Повішу я колисочку”"} />
      </div>
      <div className="currentSong"></div>
    </section>
  );
}
