/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentLyrics, setCurrentName, setCurrentUrl } from "../../redux/currentSong/currentSongSlice";
import "./Player.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw, FiCheck } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

export const Player = ({
  isLightTheme,
  isPlaying,
  setIsPlaying,
  playlist,
  currentSongIndex,
  setCurrentSongIndex,
  isLoopedPlaylist,
  setIsLoopedPlaylist,
  isRandom,
  setIsRandom,
  volume,
  setVolume,
}) => {

  const playStopToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const dispatch = useDispatch();
  const nextSongIndex = (currentSongIndex + 1) % playlist.length;
  const previousSongIndex = (currentSongIndex - 1) % playlist.length;

  const [serchParams] = useSearchParams()
  const name = serchParams.get('name');

  const handleNextSong = () => {
    dispatch(setCurrentUrl(playlist[nextSongIndex].url));
    dispatch(setCurrentLyrics(playlist[nextSongIndex].lyrics));
    dispatch(setCurrentName(playlist[nextSongIndex].name));
    setCurrentSongIndex(nextSongIndex);
  };

  const handlePreviousSong = () => {
    dispatch(setCurrentUrl(playlist[previousSongIndex].url));
    setCurrentSongIndex(previousSongIndex);
    dispatch(setCurrentLyrics(playlist[previousSongIndex].lyrics));
    dispatch(setCurrentName(playlist[previousSongIndex].name));
  };

  const handleRandomPlay = () => {
    const min = 0;
    const max = playlist.length - 1;

    let newIndex;
    do
    {
      newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newIndex === currentSongIndex);

    dispatch(setCurrentUrl(playlist[newIndex].url));
    dispatch(setCurrentLyrics(playlist[newIndex].lyrics));
    dispatch(setCurrentName(playlist[newIndex].name));
    setCurrentSongIndex(newIndex);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };
  const [shareClicked, setShareClicked] = useState(false);

  const handleShare = async () => {
    if (!shareClicked)
    {
      const urlToCopy = `https://kolyskova-sound-git-dev-baza-trainee-ukraine.vercel.app/#/player/?name=${name}`;
      await navigator.clipboard.writeText(urlToCopy);
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
    setIsRandom(!isRandom)
  };

  return (
    <div className="map-player">
      <div
        className={ classNames("map-player-navigation-wrapper", {
          "map-player-navigation-wrapper-light": isLightTheme,
        }) }
      >
        <div className="map-player-secondary-buttons-left">
          <button
            className={ classNames("selections-player-share-button", {
              "selections-player-share-button-light": isLightTheme,
              "selections-player-share-clicked": shareClicked,
            }) }
            onClick={ handleShare }
          >
            { shareClicked ? <FiCheck /> : <FiShare2 /> }
          </button>
          <button
            className={ classNames("selections-player-shuffle-button", { "selections-player-shuffle-button-light": isLightTheme }) }
            onClick={ hendleRandom }
          >
            <FiShuffle
              className="map-player-shuffle-button"
              style={ isRandom && { color: "var(--red-700)" } } />
          </button>
        </div>
        <div className="map-player-primary-buttons-group">
          <button
            className={ classNames("map-player-previous-button", {
              "map-player-previous-button-light": isLightTheme,
            }) }
            onClick={ () => { isRandom ? handleRandomPlay() : handlePreviousSong() } }
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
            onClick={ () => { isRandom ? handleRandomPlay() : handleNextSong() } }
          >
            <BsFillSkipEndFill />
          </button>
        </div>
        <div className="map-player-secondary-buttons-right">
          <FiRefreshCw
            className="map-player-refresh-button"
            onClick={ () => setIsLoopedPlaylist(!isLoopedPlaylist) }
            style={ isLoopedPlaylist && { color: "var(--red-700)" } }
          />
          <div className="map-player-volume-wrapper">
            { volume > 0 ? (
              <HiVolumeUp className="map-player-volume-button" onClick={ handleMute } />
            ) : (
              <HiVolumeOff className="map-player-volume-button" onClick={ handleUnMute } />
            ) }
            <input
              type="range"
              id="mapVolumeInputId"
              min={ 0 }
              max={ 1 }
              step={ 0.01 }
              value={ volume }
              onChange={ handleVolumeChange }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
