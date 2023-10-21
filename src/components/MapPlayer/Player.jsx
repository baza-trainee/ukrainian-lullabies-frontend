/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { t } from "i18next";
import { setCurrentLyrics, setCurrentName, setCurrentUrl, setCurrentIndex } from "../../redux/currentSong/currentSongSlice";
import "./Player.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw, FiCheck } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

export const Player = ({
  isLightTheme,
  isPlaying,
  setIsPlaying,
  playlist,
  isLoopedPlaylist,
  setIsLoopedPlaylist,
  isRandom,
  setIsRandom,
  volume,
  setVolume,
  setSearchParams,
}) => {
  const [playHistory, setPlayHistory] = useState([]);

  const isEnglishLanguage = localStorage.getItem("selectedLanguage") === "en";
  const playStopToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const currentIndex = useSelector((state) => state.currentSong.currentIndex);

  const dispatch = useDispatch();
  const nextSongIndex = (currentIndex + 1) % playlist.length;
  const previousSongIndex = currentIndex > 0 ? (currentIndex - 1) % playlist.length : playlist.length - 1;

  const handleNextSong = () => {
    if (isRandom)
    {
      setPlayHistory([...playHistory, playlist[currentIndex].index])
      handleRandomPlay();
    } else
    {
      dispatch(setCurrentIndex(nextSongIndex));
      setSearchParams(`?id=${playlist[nextSongIndex].id}`)
    }
  };

  const handlePreviousSong = () => {
    if (isRandom && playHistory.length > 0)
    {
      dispatch(setCurrentIndex(playHistory[playHistory.length - 1]));
      setSearchParams(`?id=${playHistory[playHistory.length - 1]}`)
      handlePop();
    } else
    {
      dispatch(setCurrentIndex(previousSongIndex));
      setSearchParams(`?id=${playlist[previousSongIndex].id}`);
    }
  };

  const handlePop = () => {
    const newArray = [...playHistory];
    newArray.pop();
    setPlayHistory(newArray);
  };

  const handleRandomPlay = () => {
    const min = 0;
    const max = playlist.length - 1;

    let newIndex;
    do
    {
      newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newIndex === currentIndex);

    dispatch(setCurrentUrl(playlist[newIndex].url));
    dispatch(setCurrentIndex(newIndex));
    setSearchParams(`?id=${playlist[newIndex].id}`);
  };

  // const handleVolumeChange = (event) => {
  //   const newVolume = parseFloat(event.target.value);
  //   setVolume(newVolume);
  // };
  const [shareClicked, setShareClicked] = useState(false);

  const handleShare = async () => {
    const location = window.location.href;
    if (!shareClicked)
    {
      await navigator.clipboard.writeText(location);
      setShareClicked(true);
    }

    setTimeout(() => setShareClicked(false), 2000);
  };

  const handleMute = () => {
    setVolume(0);
  };
  const handleUnMute = () => {
    setVolume(1);
  };
  const hendleRandom = () => {
    setIsRandom(!isRandom);
  };

  return (
    <div className="map-player">
      <div
        className={ classNames("map-player-navigation-wrapper", {
          "map-player-navigation-wrapper-light": isLightTheme,
        }) }
      >
        <div className="map-player-secondary-buttons-left">
          <Popup
            trigger={
              <button
                className={ classNames("selections-player-share-button", {
                  "selections-player-share-button-light": isLightTheme,
                  "selections-player-share-button-en": isEnglishLanguage,
                  "selections-player-share-clicked": shareClicked,
                  "selections-player-share-clicked-en": shareClicked && isEnglishLanguage,
                }) }
              >
                { shareClicked ? <FiCheck /> : <FiShare2 /> }
              </button>
            }
            position="top left"
            arrow={ false }
            open={ shareClicked }
            onOpen={ handleShare }
          >
            <div className={ classNames("selections-player-share-popup", { "selections-player-share-popup-light": isLightTheme }) }>
              { t("shareLink") }
            </div>
          </Popup>
          <button
            className={ classNames("selections-player-shuffle-button", {
              "selections-player-shuffle-button-light": isLightTheme,
              "selections-player-shuffle-button-en": isEnglishLanguage,
            }) }
            onClick={ hendleRandom }
          >
            <FiShuffle className="map-player-shuffle-button" style={ isRandom && { color: "var(--red-700)" } } />
          </button>
        </div>
        <div className="map-player-primary-buttons-group">
          <button
            className={ classNames("map-player-previous-button", {
              "map-player-previous-button-light": isLightTheme,
            }) }
            onClick={ handlePreviousSong }
          >
            <BsFillSkipStartFill />
          </button>
          <button
            className={ classNames("map-player-play-pause-button", {
              "map-player-play-pause-button-light": isLightTheme,
            }) }
            onClick={ playStopToggle }
          >
            { !isPlaying ? <BsPlayFill /> : <BsPauseFill style={ { fill: "var(--red-700)" } } /> }
          </button>
          <button
            className={ classNames("map-player-next-button", {
              "map-player-next-button-light": isLightTheme,
            }) }
            onClick={ handleNextSong }
          >
            <BsFillSkipEndFill />
          </button>
        </div>
        <div className="map-player-secondary-buttons-right">
          <button
            className={ classNames("selections-player-refresh-button", {
              "selections-player-refresh-button-light": isLightTheme,
              "selections-player-refresh-button-en": isEnglishLanguage,
            }) }
            onClick={ () => setIsLoopedPlaylist(!isLoopedPlaylist) }
          >
            <FiRefreshCw style={ isLoopedPlaylist && { color: "var(--red-700)" } } />
          </button>
          <div className="map-player-volume-wrapper">
            { volume > 0 ? (
              <HiVolumeUp className="map-player-volume-button" onClick={ handleMute } />
            ) : (
              <HiVolumeOff className="map-player-volume-button" onClick={ handleUnMute } />
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};
