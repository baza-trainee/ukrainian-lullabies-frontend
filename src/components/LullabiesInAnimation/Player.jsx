/* eslint-disable react/prop-types */
import React from "react";
import "../Selections/SelectionsPlayer.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw, FiCheck } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { useState } from "react";

export const Player = ({
  isLightTheme,
  setCurrentVideoUrl,
  playlist,
  currentSongIndex,
  setCurrentVideoIndex,
  isLoopedPlaylist,
  handleLoopPlaylist,
  isPlaylistShuffled,
  setIsPlaylistShuffled,
  playRandomSong,
  name,
}) => {
  const isEnglishLanguage = localStorage.getItem("selectedLanguage") === "en";
  const nextSongIndex = (currentSongIndex + 1) % playlist.length;
  const previousSongIndex = currentSongIndex > 0 ? (currentSongIndex - 1) % playlist.length : playlist.length - 1;


  const handleNextSong = () => {
    if (isPlaylistShuffled)
    {
      playRandomSong();
    } else
    {
      setCurrentVideoIndex(nextSongIndex);
    }
  };

  const handlePreviousSong = () => {
    if (isPlaylistShuffled)
    {
      playRandomSong();
    } else
    {
      setCurrentVideoIndex(previousSongIndex);
    }
  };

  const handleShuffle = () => {
    setIsPlaylistShuffled(!isPlaylistShuffled);
  };

  return (
    <div className="selections-player">
      <div
        className={ classNames("selections-player-navigation-wrapper", {
          "selections-player-navigation-wrapper-light": isLightTheme,
        }) }
      >
        <div className="selections-player-secondary-buttons-left">

          <button
            className={ classNames("selections-player-shuffle-button", {
              "selections-player-shuffle-button-light": isLightTheme,
              "selections-player-shuffle-button-en": isEnglishLanguage,
            }) }
            onClick={ handleShuffle }
          >
            <FiShuffle style={ isPlaylistShuffled && { color: "var(--red-700)" } } />
          </button>
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
          <div>
            { `${name}` }
          </div>
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
          <button
            className={ classNames("selections-player-refresh-button", {
              "selections-player-refresh-button-light": isLightTheme,
              "selections-player-refresh-button-en": isEnglishLanguage,
            }) }
            onClick={ handleLoopPlaylist }
          >
            <FiRefreshCw style={ isLoopedPlaylist && { color: "var(--red-700)" } } />
          </button>

        </div>
      </div>
    </div>
  );
};
