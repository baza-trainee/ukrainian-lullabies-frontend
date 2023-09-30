/* eslint-disable react/prop-types */
import React from "react";
import "./SelectionsPlayer.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

export const SelectionsPlayer = ({
  isLightTheme,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
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

  const nextSongIndex = (currentSongIndex + 1) % playlist.length;
  const previousSongIndex = (currentSongIndex - 1) % playlist.length;

  const handleNextSong = () => {
    setCurrentSong(playlist[nextSongIndex].url);
    setCurrentSongIndex(nextSongIndex);
  };

  const handlePreviousSong = () => {
    setCurrentSong(playlist[previousSongIndex].url);
    setCurrentSongIndex(previousSongIndex);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleMute = () => {
    setVolume(0);
  };

  return (
    <div className="selections-player">
      <div
        className={ classNames("selections-player-navigation-wrapper", {
          "selections-player-navigation-wrapper-light": isLightTheme,
        }) }
      >
        <div className="selections-player-secondary-buttons-left">
          <FiShare2 className="selections-player-share-button" />
          <FiShuffle className="selections-player-shuffle-button" />
        </div>
        <div className="selections-player-primary-buttons-group">
          <button
            className={ classNames("selections-player-previous-button", {
              "selections-player-previous-button-light": isLightTheme,
            }) }
            onClick={ handlePreviousSong }
          >
            <BsFillSkipStartFill />
          </button>
          <button
            className={ classNames("selections-player-play-pause-button", {
              "selections-player-play-pause-button-light": isLightTheme,
            }) }
            onClick={ playStopToggle }
          >
            { !isPlaying ? <BsPlayFill /> : <BsPauseFill style={ { fill: "var(--red-700)" } } /> }
          </button>
          <button
            className={ classNames("selections-player-next-button", {
              "selections-player-next-button-light": isLightTheme,
            }) }
            onClick={ handleNextSong }
          >
            <BsFillSkipEndFill />
          </button>
        </div>
        <div className="selections-player-secondary-buttons-right">
          <FiRefreshCw
            className="selections-player-refresh-button"
            onClick={ handleLoop }
            style={ isLooped && { color: "var(--red-700)" } }
          />
          <div className="selections-player-volume-wrapper">
            { volume > 0 ? (
              <HiVolumeUp className="selections-player-volume-button" onClick={ handleMute } />
            ) : (
              <HiVolumeOff className="selections-player-volume-button" onClick={ handleMute } />
            ) }
            <input
              type="range"
              id="selectionsVolumeInputId"
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
