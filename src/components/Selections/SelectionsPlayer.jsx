/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import "./SelectionsPlayer.css";
import classNames from "classnames";
import { FiShare2, FiShuffle, FiRefreshCw, FiCheck } from "react-icons/fi";
import { BsFillSkipEndFill, BsFillSkipStartFill, BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { useState } from "react";
import { t } from "i18next";
import Popup from "reactjs-popup";

export const SelectionsPlayer = ({
  isLightTheme,
  isPlaying,
  setIsPlaying,
  setCurrentSong,
  playlist,
  currentSongIndex,
  setCurrentSongIndex,
  isPlaylistLooped,
  handleLoopPlaylist,
  isPlaylistShuffled,
  setIsPlaylistShuffled,
  playRandomSong,
  volume,
  setVolume,
  isMuted,
  setIsMuted,
  previousVolume,
  setPreviousVolume,
  previousSongs,
  setPreviousSongs,
}) => {
  const isEnglishLanguage = localStorage.getItem("selectedLanguage") === "en";
  const [shareClicked, setShareClicked] = useState(false);
  const nextSongIndex = (currentSongIndex + 1) % playlist.length;
  const previousSongIndex = currentSongIndex > 0 ? (currentSongIndex - 1) % playlist.length : playlist.length - 1;

  const playStopToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    if (isPlaylistShuffled) {
      setPreviousSongs([...previousSongs, playlist[currentSongIndex].url]);
      playRandomSong();
    } else {
      setCurrentSong(playlist[nextSongIndex].url);
      setCurrentSongIndex(nextSongIndex);
    }
  };

  const handlePreviousSong = () => {
    if (isPlaylistShuffled && previousSongs.length > 0) {
      setCurrentSong(previousSongs[previousSongs.length - 1]);
      setCurrentSongIndex(playlist.findIndex((song) => song.url === previousSongs[previousSongs.length - 1]));
      handlePop();
    } else {
      setCurrentSong(playlist[previousSongIndex].url);
      setCurrentSongIndex(previousSongIndex);
    }
  };

  // handlePop() solely for shuffled songs
  const handlePop = () => {
    const newArray = [...previousSongs];
    newArray.pop();
    setPreviousSongs(newArray);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    setIsMuted(false);
  };

  // const handleMute = () => {
  //   if (volume > 0) {
  //     setPreviousVolume(volume);
  //     setVolume(0);
  //   } else {
  //     setVolume(previousVolume);
  //     setPreviousVolume(0);
  //   }
  // };

  const handleMute = () => {
    if (!isMuted) {
      setIsMuted(true);
      setVolume(0);
    } else {
      setIsMuted(false);
      setVolume(0.5);
    }
  };

  const handleShare = async () => {
    const location = window.location.href;
    if (!shareClicked) {
      await navigator.clipboard.writeText(location);
      setShareClicked(true);
    }

    setTimeout(() => setShareClicked(false), 2000);
  };

  const handleShuffle = () => {
    setIsPlaylistShuffled(!isPlaylistShuffled);
  };

  return (
    <div className="selections-player">
      <div
        className={classNames("selections-player-navigation-wrapper", {
          "selections-player-navigation-wrapper-light": isLightTheme,
        })}
      >
        <div className="selections-player-secondary-buttons-left">
          <Popup
            trigger={
              <button
                type="button"
                className={classNames("selections-player-share-button", {
                  "selections-player-share-button-light": isLightTheme,
                  "selections-player-share-button-en": isEnglishLanguage,
                  "selections-player-share-clicked": shareClicked,
                  "selections-player-share-clicked-en": shareClicked && isEnglishLanguage,
                })}
              >
                {shareClicked ? <FiCheck /> : <FiShare2 />}
              </button>
            }
            position="top left"
            arrow={false}
            open={shareClicked}
            onOpen={handleShare}
          >
            <div className={classNames("selections-player-share-popup", { "selections-player-share-popup-light": isLightTheme })}>
              {t("shareLink")}
            </div>
          </Popup>

          <button
            type="button"
            className={classNames("selections-player-shuffle-button", {
              "selections-player-shuffle-button-light": isLightTheme,
              "selections-player-shuffle-button-en": isEnglishLanguage,
            })}
            onClick={handleShuffle}
          >
            <FiShuffle style={isPlaylistShuffled && { color: "var(--red-700)" }} />
          </button>
        </div>
        <div className="selections-player-primary-buttons-group">
          <button
            type="button"
            className={classNames("selections-player-previous-button", {
              "selections-player-previous-button-light": isLightTheme,
            })}
            onClick={handlePreviousSong}
          >
            <BsFillSkipStartFill />
          </button>
          <button
            type="button"
            className={classNames("selections-player-play-pause-button", {
              "selections-player-play-pause-button-light": isLightTheme,
            })}
            onClick={playStopToggle}
          >
            {!isPlaying ? <BsPlayFill /> : <BsPauseFill style={{ fill: "var(--red-700)" }} />}
          </button>
          <button
            type="button"
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
            type="button"
            className={classNames("selections-player-refresh-button", {
              "selections-player-refresh-button-light": isLightTheme,
              "selections-player-refresh-button-en": isEnglishLanguage,
            })}
            onClick={handleLoopPlaylist}
          >
            <FiRefreshCw style={isPlaylistLooped && { color: "var(--red-700)" }} />
          </button>
          <div className="selections-player-volume-wrapper">
            <button type="button" className="selections-player-volume-button">
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
