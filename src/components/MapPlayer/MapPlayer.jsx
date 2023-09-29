import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player/youtube";
import { Player } from "./Player";
import { selectData, selectLoading } from "../../redux/DataSlice";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { useParams } from "react-router-dom";
import { BsRepeat } from "react-icons/bs";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import './MapPlayer.css';

const songsData = [
  {
    id: 0,
    url: "https://youtu.be/J1l9fbPeEic",
    name: "Ой ну коту волохатий | Наспів з Полтавщини",
    watches: 100,
    duration: "0:32",
  },
  {
    id: 1,
    url: "https://youtu.be/UcqNIuiP-SM",
    name: "Ой люля, люля, мій малесенький синульку | Наспів з Західного Полісся",
    watches: 1500,
    duration: "1:27",
  },
  {
    id: 2,
    url: "https://youtu.be/_ecx-2oPvAc",
    name: "Ой ходить сон коло вікон | Наспів з Поділля",
    watches: 2000,
    duration: "1:07",
  },
];

export const MapPlayer = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  const currentUrl = useSelector((state) => state.currentSong.currentUrl);
  const currentName = useSelector((state) => state.currentSong.currentName);
  const currentId = useSelector((state) => state.currentSong.currentId);
  const currentLyrics = useSelector((state) => state.currentSong.currentLyrics);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(currentId);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(currentUrl);

  const { url } = useParams();

  useEffect(() => {
    dispatch(fetchData());
    if (url)
    {
      setCurrentVideoUrl(decodeURIComponent(url));
    }
  }, [dispatch, url]);

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playlist] = useState(data);


  const playPauseSong = (url) => {
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

    setCurrentVideoIndex(playlist.findIndex((song) => song.url === url));
  };

  console.log(currentLyrics);
  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  return (
    <div className=" margin-bottom">
      <h2 className="selections-title text-4xl">{ t("selection") }
      </h2>
      <div className="map-player-wrapper container margin-bottom">
        <div className="map-player_container">
          <ReactPlayer
            url={ currentVideoUrl }
            width="100%"
            height="60%"
            playing={ isPlaying }
            onEnded={ () => setIsPlaying(false) }
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
            setcurrentVideoUrl={ setCurrentVideoUrl }
            playlist={ playlist }
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
          <ul className=" ">
            { playlist.map(({ name, id, url, }, duration = 2) => (
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
            )) }
            { playlist.map(({ name, id, url, }, duration = 2) => (
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
            )) }
          </ul>
        </div>
      </div>
    </div>
  );
};
