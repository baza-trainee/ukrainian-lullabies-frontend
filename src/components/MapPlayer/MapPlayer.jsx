import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { Player } from "./Player";
import { selectData } from "../../redux/DataSlice";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { BsRepeat } from "react-icons/bs";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import './MapPlayer.css';
import { useRef } from "react";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";

export const MapPlayer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  const currentUrl = useSelector((state) => state.currentSong.currentUrl);
  const currentName = useSelector((state) => state.currentSong.currentName);
  const currentLyrics = useSelector((state) => state.currentSong.currentLyrics);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isLoopedPlaylist, setIsLoopedPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    dispatch(fetchData());

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

    if (!isPlaying && currentUrl === url)
    {
      setIsPlaying(true);
    } else if (!isPlaying)
    {
      dispatch(setCurrentUrl(url));
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && currentUrl === url)
    {
      setIsPlaying(false);
    } else
    {
      dispatch(setCurrentUrl(url));
      setIsLooped(false);
    }

    const newIndex = data.findIndex((song) => song.url === url);
    setCurrentSongIndex(newIndex);
  };
  console.log(isRandom);
  console.log(currentSongIndex);

  const handleAutoPlayNext = () => {
    const index = data.findIndex((song) => song.url === currentUrl);
    const min = 0;
    const max = data.length - 1;

    const newIndex = !isRandom ? (index + 1) : Math.floor(Math.random() * (max - min + 1)) + min;

    if (newIndex < data.length)
    {
      setCurrentSongIndex(newIndex);
      dispatch(setCurrentName(data[newIndex].name));
      dispatch(setCurrentLyrics(data[newIndex].lyrics));
      dispatch(setCurrentUrl(data[newIndex].url));
    } else if (isLoopedPlaylist)
    {
      setCurrentSongIndex(0);
      dispatch(setCurrentName(data[0].name));
      dispatch(setCurrentLyrics(data[0].lyrics));
      dispatch(setCurrentUrl(data[0].url));
    } else
    {
      setIsPlaying(false);
    }
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleVideoChange = (url, index, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    setCurrentSongIndex(index);
    dispatch(setCurrentName(name));


  };

  useEffect(() => {
    const buttonMap = document.getElementById("map-tab");
    if (buttonMap)
    {
      buttonMap.classList.add("active-btn");

      return () => {
        buttonMap.classList.remove("active-btn");
      };
    }
  }, [])

  const reactPlayerRef = useRef(null);
  return (
    <div className="map-player-wrapper container margin-bottom">
      <div className="player-wrapper">
        <div className="map-player_container">
          <div className="player-photo"></div>
          <ReactPlayer
            width="0px"
            height="0px"
            ref={ reactPlayerRef }
            url={ currentUrl }
            playing={ isPlaying }
            onEnded={ handleAutoPlayNext }
            loop={ isLooped }
            volume={ volume }
          />
          <h3 className="current-name text-l">
            { currentName }
          </h3>
          <Player
            isLightTheme={ isLightTheme }
            isPlaying={ isPlaying }
            setIsPlaying={ setIsPlaying }
            setCurrentSong={ currentUrl }
            playlist={ data }
            currentSongIndex={ currentSongIndex }
            setCurrentSongIndex={ setCurrentSongIndex }
            isLoopedPlaylist={ isLoopedPlaylist }
            setIsLoopedPlaylist={ setIsLoopedPlaylist }
            isRandom={ isRandom }
            setIsRandom={ setIsRandom }
            volume={ volume }
            setVolume={ setVolume }
          />
        </div>

        <div className="map-player_info">
          <p className="text-l text-margin">{ t('lyrics') }</p>
          <p className="text-base">{ currentLyrics } </p>
        </div>
      </div>
      <div className="map-player_playlist">
        <p className="text-l text-margin">{ t('lullabiesMuseum') }</p>
        <ul className=" player_playlist">
          {
            data.map(({ name, url, lyrics, duration }, index) => (
              <li
                key={ index }
                className={ classNames("map-player_card", {
                  'map-player_card-dark': !isLightTheme,
                  'map-player_card-light': isLightTheme, 'active-map-card': (url === currentUrl && !isLightTheme), 'active-map-card-light': (isLightTheme && url === currentUrl)
                }) }
                onClick={ () => { handleVideoChange(url, index, lyrics, name); playPauseSong(url) } }
              >
                <div className="card-buttons">
                  <span className="item-number">
                    { isPlaying && url === currentUrl ? <SoundWaveIcon /> : index + 1 }
                  </span>
                  <div className="playlist-item ">
                    <button
                      className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                        "selections-playlist-item-play-pause-button-light": isLightTheme,
                      }) }
                      onClick={ () => playPauseSong(url) }
                    >
                      { isPlaying && url === currentUrl ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
                    </button>
                  </div>

                  <span className="selections-playlist-item-name">{ name }</span>
                </div>
                <div className="card-buttons">
                  <span className="item-duration text-xs-bold">{ duration }</span>
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={ handleLoop }
                    disabled={ currentUrl !== url }
                  >
                    <BsRepeat style={ isLooped && currentUrl === url && { fill: "var(--red-700)" } } />
                  </button>
                </div>
              </li>
            ))
          } </ul>
      </div>
    </div>
  );
};
