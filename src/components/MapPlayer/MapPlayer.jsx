import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ReactAudioPlayer from 'react-audio-player';
import { Player } from "./Player";
import { selectData, selectLoading } from "../../redux/DataSlice";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { useParams } from "react-router-dom";
import { BsRepeat } from "react-icons/bs";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import './MapPlayer.css';


const songsData = [
  {
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    duration: "3:02",
    lyrics: 'колискова для мами слова'
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    watches: 1500,
    duration: "1:27",
    lyrics: 'Ходить сон бiля вiкон',

  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    watches: 2000,
    duration: "1:07",
    lyrics: 'Котику сіренький текст',

  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    watches: 2000,
    duration: "1:07",
    lyrics: 'Котику сіренький текст',
  },
];


export const MapPlayer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = songsData;

  const currentUrl = useSelector((state) => state.currentSong.currentUrl);
  const currentName = useSelector((state) => state.currentSong.currentName);
  const currentId = useSelector((state) => state.currentSong.currentId);
  const currentLyrics = useSelector((state) => state.currentSong.currentLyrics);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(currentId);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(currentUrl);

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    // dispatch(fetchData(songsData));

    const savedSong = JSON.parse(localStorage.getItem('currentSong'));
    if (savedSong)
    {
      dispatch(setCurrentUrl(savedSong.url));
      dispatch(setCurrentLyrics(savedSong.lyrics));
      dispatch(setCurrentId(savedSong.id));
      dispatch(setCurrentName(savedSong.name));
    }
  }, [dispatch]);

  const playPauseSong = (url) => {
    const newIndex = data.findIndex((song) => song.url === url);
    setCurrentVideoIndex(newIndex);

    if (!isPlaying && currentVideoUrl === url)
    {
      setIsPlaying(true);
    } else if (!isPlaying)
    {
      setCurrentVideoUrl(url);
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && currentVideoUrl === url)
    {
      setIsPlaying(false);
    } else
    {
      setCurrentVideoUrl(url);
      setIsLooped(false);
    }
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleVideoChange = (url, id, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    dispatch(setCurrentId(id));
    dispatch(setCurrentName(name));

    localStorage.setItem('currentSong', JSON.stringify({ url, id, lyrics, name }));
  };

  return (
    <div className=" margin-bottom">
      <h2 className="selections-title text-4xl">{ t("selection") }
      </h2>
      <div className="map-player-wrapper container margin-bottom">
        <div className="map-player_container">
          <ReactAudioPlayer
            src={ currentUrl }
            autoPlay={ isPlaying }
            onEnded={ () => setIsPlaying(false) }
            volume={ volume }
            loop={ isLooped }
          />
          <h3 className="current-name text-l">
            { currentName }
          </h3>
          <Player
            isLightTheme={ isLightTheme }
            isPlaying={ isPlaying }
            setIsPlaying={ setIsPlaying }
            setcurrentVideoUrl={ setCurrentVideoUrl }
            playlist={ data }
            currentVideoIndex={ currentVideoIndex }
            setcurrentVideoIndex={ setCurrentVideoIndex }
            handleLoop={ handleLoop }
            isLooped={ isLooped }
            volume={ volume }
            setVolume={ setVolume }
          />
        </div>

        <div className="map-player_info">
          <p className="text-l text-margin">Текст</p>
          <p className="text-base scroll">{ currentLyrics } </p>
        </div>
        <div className="map-player_playlist">
          <p className="text-l text-margin">Колекція музею</p>
          <ul className=" map-player_playlist">
            {
              data.map(({ name, id, url, lyrics, duration }) => (
                <li
                  key={ id }
                  className={ classNames("map-player_card", { "map-player_card-light": isLightTheme }) }
                  onClick={ () => handleVideoChange(url, id, lyrics, name) }
                >

                  <div className="playlist-item ">
                    <button
                      className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                        "selections-playlist-item-play-pause-button-light": isLightTheme,
                      }) }
                      onClick={ () => playPauseSong(url) }
                    >
                      { isPlaying && url === currentVideoUrl ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
                    </button>

                    <span className="selections-playlist-item-name">{ name.toUpperCase().slice(0, 50) }</span>
                  </div>
                  <div className="playlist-item">
                    <span className="selections-playlist-item-duration text-xs-bold">{ duration }</span>
                    <button
                      className="selections-playlist-item-repeat-button selection-playlist-button"
                      onClick={ handleLoop }
                      disabled={ currentVideoUrl !== url }
                    >
                      <BsRepeat style={ isLooped && currentUrl === url && { fill: "var(--red-700)" } } />
                    </button>
                  </div>
                </li>
              ))
            }ata.map(({ name, id, url, lyrics }
              // , duration = 2
            ) => (
            <li
              key={ id }
              className={ classNames("map-player_card", { "map-player_card-light": isLightTheme }) }
              onClick={ () => handleVideoChange(url, id, lyrics, name) }
            >

              <div className="playlist-item ">
                <button
                  className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                    "selections-playlist-item-play-pause-button-light": isLightTheme,
                  }) }
                  onClick={ () => playPauseSong(url) }
                >
                  { isPlaying && url === currentVideoUrl ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
                </button>

                <span className="selections-playlist-item-name">{ name.toUpperCase().slice(0, 50) }</span>
              </div>
              <div className="playlist-item">
                <span className="selections-playlist-item-duration text-xs-bold">01:12</span>
                <button
                  className="selections-playlist-item-repeat-button selection-playlist-button"
                  onClick={ handleLoop }
                  disabled={ currentVideoUrl !== url }
                >
                  <BsRepeat style={ isLooped && currentUrl === url && { fill: "var(--red-700)" } } />
                </button>
              </div>
            </li>
            )) }
            { data.map(({ name, id, url, }
              // duration = '00:37'
            ) => (
              <li
                key={ id }
                className={ classNames("map-player_card", { "map-player_card-light": isLightTheme }) }
              >

                <div className="playlist-item ">
                  <button
                    className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                      "selections-playlist-item-play-pause-button-light": isLightTheme,
                    }) }
                    onClick={ () => playPauseSong(url) }
                  >
                    { isPlaying && url === currentVideoUrl ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
                  </button>

                  <span className="selections-playlist-item-name">{ name.toUpperCase().slice(0, 50) }</span>
                </div>
                <div className="playlist-item">
                  <span className="selections-playlist-item-duration text-xs-bold">00:37</span>
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={ handleLoop }
                    disabled={ currentVideoUrl !== url }
                  >
                    <BsRepeat style={ isLooped && currentUrl === url && { fill: "var(--red-700)" } } />
                  </button>
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
};
