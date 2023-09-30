/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentLyrics, setCurrentName, setCurrentUrl } from "../../redux/currentSong/currentSongSlice";
import "./Player.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

export const Player = ({
  isLightTheme,
  isPlaying,
  setIsPlaying,
  playlist,
  currentSongIndex,
  setCurrentSongIndex,
  handleLoop,
  isLooped,
  volume,
  setVolume,
}) => {
  const playStopToggle = () => {
    setIsPlaying(!isPlaying);
  };
  const dispatch = useDispatch();
  const nextSongIndex = (currentSongIndex + 1) % playlist.length;
  const previousSongIndex = (currentSongIndex - 1) % playlist.length;

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

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleMute = () => {
    setVolume(0);
  };

  return (
    <div className="map-player">
      <div
        className={ classNames("map-player-navigation-wrapper", {
          "map-player-navigation-wrapper-light": isLightTheme,
        }) }
      >
        <div className="map-player-secondary-buttons-left">
          <FiShare2 className="map-player-share-button" />
          <FiShuffle className="map-player-shuffle-button" />
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
          <FiRefreshCw
            className="map-player-refresh-button"
            onClick={ handleLoop }
            style={ isLooped && { color: "var(--red-700)" } }
          />
          <div className="map-player-volume-wrapper">
            { volume > 0 ? (
              <HiVolumeUp className="map-player-volume-button" onClick={ handleMute } />
            ) : (
              <HiVolumeOff className="map-player-volume-button" onClick={ handleMute } />
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
