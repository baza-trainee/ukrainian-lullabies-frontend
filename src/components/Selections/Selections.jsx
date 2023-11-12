import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/SelectionSongs/selectionSongsSlice";
import { playerChanged } from "../../redux/CurrentPlayer/currentPlayerSlice";
import classNames from "classnames";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Selections.css";
import { SelectionsPlayer } from "./SelectionsPlayer";

import selectionsImage from "../../assets/images/selections_image.jpg";

// icons import
import { BsRepeat} from "react-icons/bs";

import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";
import { Ornaments } from "../Ornaments/Ornaments";

export const Selections = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  // get theme and language
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const currentLanguage = useSelector((state) => state.currentLanguage.currentLanguage);

  // get songs
  const playlist = useSelector((state) => state.selectionSongs.data);
  const playlistError = useSelector((state) => state.selectionSongs.error);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isPlaylistLooped, setIsPlaylistLooped] = useState(false);
  const [isPlaylistShuffled, setIsPlaylistShuffled] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSong, setCurrentSong] = useState(playlist[0].url);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [previousSongs, setPreviousSongs] = useState([currentSong]);

  const reactPlayerRef = useRef(null);

  // preventing players from playing alltogether
  const currentPlayer = useSelector((state) => state.currentPlayer.currentPlayer);
  useEffect(() => {
    if (isPlaying) {
      dispatch(playerChanged("selections"));
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentPlayer !== "selections") {
      setIsPlaying(false);
    }
  }, [currentPlayer]);

  useEffect(() => {
    const currentSongId = playlist[currentSongIndex].songId;
    const currentTime = reactPlayerRef.current.getCurrentTime();

    if (isPlaying && currentSong !== "#" && currentTime < 0.3) {
      axios.get(`https://api.kolyskova.com/lullabies/${currentSongId}/increment_views/`);
    }
  }, [isPlaying, currentSong]);

  const playPauseSong = (url) => {
    if (!isPlaying && currentSong === url) {
      setIsPlaying(true);
    } else if (!isPlaying) {
      setCurrentSong(url);
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && currentSong == url) {
      setIsPlaying(false);
    } else {
      setCurrentSong(url);
      setIsLooped(false);
    }

    setCurrentSongIndex(playlist.findIndex((song) => song.url === url));
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleLoopPlaylist = () => {
    setIsPlaylistLooped(!isPlaylistLooped);
  };

  const handleNextSong = () => {
    if (isPlaylistShuffled) {
      playRandomSong();
    } else {
      const nextSongIndex = (currentSongIndex + 1) % playlist.length;
      setCurrentSong(playlist[nextSongIndex].url);
      setCurrentSongIndex(nextSongIndex);
    }
  };

  const playRandomSong = () => {
    const min = 0;
    const max = playlist.length - 1;

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newIndex === currentSongIndex);

    setCurrentSong(playlist[newIndex].url);
    setCurrentSongIndex(newIndex);
  };

  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchData("eng"));
    } else {
      dispatch(fetchData("uk"));
    }
  }, [dispatch, currentLanguage]);

  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  };
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationElement}
      ref={ref}
      className="selections margin-bottom"
      id="selections"
    >
      <motion.div custom={1} variants={animationElement}>
        <ReactPlayer
          width="0px"
          height="0px"
          ref={reactPlayerRef}
          url={currentSong}
          playing={isPlaying}
          onEnded={() => (isPlaylistLooped ? handleNextSong() : setIsPlaying(false))}
          loop={isLooped}
          volume={volume}
          muted={isMuted}
        />
      </motion.div>

      <h2 className="selections-title text-4xl">{t("selection")}</h2>
      <motion.div custom={1} variants={animationElement} className="selections-wrapper container margin-bottom">
        <div className="selections-image">
          <img src={selectionsImage} alt="song covering" />
        </div>
        <div className="selections-info">
          <div className="selections-info-about">
            <h4 className="selections-info-title text-2xl">{t("ukrainianLullabies")}</h4>
            <p className="selections-info-text text-base">{t("lullabySong")}</p>
          </div>
          {!playlistError ? (
            <ul className="selections-playlist-list">
              {playlist &&
                playlist.map((item, index) => (
                  <li
                    className={classNames("selections-playlist-list-item", {
                      "selections-playlist-list-item-light": isLightTheme,
                      "selections-playlist-list-item-active": item.url === currentSong,
                      "selections-playlist-list-item-active-light": isLightTheme && item.url === currentSong,
                    })}
                    key={index}
                    onClick={() => playPauseSong(item.url)}
                  >
                    <span className="selections-playlist-item-number">
                      {isPlaying && item.url === currentSong ? <SoundWaveIcon /> : index + 1}
                    </span>
                    <div className="selection-playlist-playBtn-name-group">
                      <div className="selections-playlist-playBtn-wrapper">
                        <button
                          className={classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                            "selections-playlist-item-play-pause-button-light": isLightTheme,
                            "selections-playlist-pause-button-light": isPlaying && isLightTheme && item.url === currentSong,
                          })}
                          onClick={() => playPauseSong(item.url)}
                        >
                          {isPlaying && item.url === currentSong ? <PauseCircleIconDark /> : <PlayCircleIconDark />}
                        </button>
                      </div>

                      <span className="selections-playlist-item-name">{item.name.toUpperCase().slice(0, 50)}</span>
                    </div>
                    {/* selections with dropdown for mobile */}
                    <div className="selections-playlist-item-group">
                      <span className="selections-playlist-item-duration text-xs-bold">{item.duration}</span>
                      <button
                        className={classNames("selections-playlist-item-repeat-button", "selection-playlist-button", {
                          "selections-playlist-item-repeat-button-light": isLightTheme,
                        })}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLoop();
                        }}
                        disabled={currentSong !== item.url}
                      >
                        <BsRepeat
                          style={
                            isLooped &&
                            currentSong === item.url && {
                              fill: "var(--red-700)",
                            }
                          }
                        />
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <div className="selections-playlist-error text-l">Error: {playlistError}</div>
          )}
          <SelectionsPlayer
            isLightTheme={isLightTheme}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setCurrentSong={setCurrentSong}
            playlist={playlist}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            isPlaylistLooped={isPlaylistLooped}
            handleLoopPlaylist={handleLoopPlaylist}
            isPlaylistShuffled={isPlaylistShuffled}
            setIsPlaylistShuffled={setIsPlaylistShuffled}
            playRandomSong={playRandomSong}
            volume={volume}
            setVolume={setVolume}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            previousSongs={previousSongs}
            setPreviousSongs={setPreviousSongs}
          />
        </div>
      </motion.div>
      <Ornaments />
    </motion.div>
  );
};
