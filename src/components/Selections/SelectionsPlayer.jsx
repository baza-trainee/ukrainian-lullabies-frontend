/* eslint-disable react/prop-types */
import React from "react";
import "./SelectionsPlayer.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw, FiCheck } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { useState } from "react";

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
  isPlaylistLooped,
  setIsPlaylistLooped,
  handleLoopPlaylist,
  volume,
  setVolume,
  previousVolume,
  setPreviousVolume,
}) => {
  const [shareClicked, setShareClicked] = useState(false);

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
    if (volume > 0) {
      setPreviousVolume(volume);
      setVolume(0);
    } else {
      setVolume(previousVolume);
      setPreviousVolume(0);
    }
  };

  const handleShare = async () => {
    if (!shareClicked) {
      const urlToCopy = "https://ukrainian-lullabies-frontend-git-dev-baza-trainee.vercel.app/#/map";
      await navigator.clipboard.writeText(urlToCopy);
      setShareClicked(true);
    }

    setTimeout(() => setShareClicked(false), 2000);
  };

  return (
    <div className="selections-player">
      <div
        className={classNames("selections-player-navigation-wrapper", {
          "selections-player-navigation-wrapper-light": isLightTheme,
        })}
      >
        <div className="selections-player-secondary-buttons-left">
          <button
            className={classNames("selections-player-share-button", {
              "selections-player-share-button-light": isLightTheme,
              "selections-player-share-clicked": shareClicked,
            })}
            onClick={handleShare}
          >
            {shareClicked ? <FiCheck /> : <FiShare2 />}
          </button>
          <button
            className={classNames("selections-player-shuffle-button", { "selections-player-shuffle-button-light": isLightTheme })}
          >
            <FiShuffle />
          </button>
        </div>
        <div className="selections-player-primary-buttons-group">
          <button
            className={classNames("selections-player-previous-button", {
              "selections-player-previous-button-light": isLightTheme,
            })}
            onClick={handlePreviousSong}
          >
            <BsFillSkipStartFill />
          </button>
          <button
            className={classNames("selections-player-play-pause-button", {
              "selections-player-play-pause-button-light": isLightTheme,
            })}
            onClick={playStopToggle}
          >
            {!isPlaying ? <BsPlayFill /> : <BsPauseFill style={{ fill: "var(--red-700)" }} />}
          </button>
          <button
            className={classNames("selections-player-next-button", {
              "selections-player-next-button-light": isLightTheme,
            })}
            onClick={handleNextSong}
          >
            <BsFillSkipEndFill />
          </button>
        </div>
        <div className="selections-player-secondary-buttons-right">
          <button
            className={classNames("selections-player-refresh-button", { "selections-player-refresh-button-light": isLightTheme })}
            onClick={handleLoopPlaylist}
          >
            <FiRefreshCw style={isPlaylistLooped && { color: "var(--red-700)" }} />
          </button>
          <div className="selections-player-volume-wrapper">
            <button className="selections-player-volume-button">
              {volume > 0 ? <HiVolumeUp onClick={handleMute} /> : <HiVolumeOff onClick={handleMute} />}
            </button>
            <input
              type="range"
              id="selectionsVolumeInputId"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
