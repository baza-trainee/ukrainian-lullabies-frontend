import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsRepeat } from "react-icons/bs";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import axios from "axios";
import { baseUrl } from "../../constants";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";
import { playerChanged } from "../../redux/CurrentPlayer/currentPlayerSlice";
import {
  fetchData,
  selectData,
  selectDataByRegion,
  selectError,
  selectLoading,
} from "../../redux/Lullabies/fetchLullabies";
import { setCurrentRegion } from "../../redux/currentRegion";
import {
  setCurrentIndex,
  setCurrentUrl,
} from "../../redux/currentSong/currentSongSlice";
import { Loader } from "../Loader/Loader";
import "./MapPlayer.css";
import { Player } from "./Player";

export const MapPlayer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const allData = useSelector(selectData);
  const currentRegionId = searchParams.get("region");

  const currentRegion =
    useSelector((state) => state.currentRegion.currentRegion) ||
    +currentRegionId;

  const loading = useSelector(selectLoading);

  const data =
    allData &&
    currentRegion &&
    useSelector((state) => selectDataByRegion(state, currentRegion));

  const error = useSelector(selectError);
  const currentUrl = useSelector((state) => state.currentSong.currentUrl);

  const currentIndex = useSelector((state) => state.currentSong.currentIndex);

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(currentUrl ? true : false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoopedPlaylist, setIsLoopedPlaylist] = useState(false);
  const [currentSongState, setCurrentSongState] = useState({
    ...data[currentIndex],
    progress: 0,
  });
  const [currentTime, setCurrentTime] = useState(0);
  const progressRef = useRef();
  const playerRef = useRef();

  const checkWidth = (e) => {
    const width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const divProgress = (offset / width) * 100;
    playerRef.current.seekTo((divProgress / 100) * currentSongState.duration);
  };
  const onPlaying = () => {
    if (playerRef.current && !loading && data) {
      const durationMs = playerRef.current.getDuration();
      const ct = playerRef.current.getCurrentTime();
      setCurrentTime(ct);
      setCurrentSongState({
        ...currentSongState,
        progress: (ct / durationMs) * 100,
        duration: durationMs,
      });
    }
  };

  const playPauseSong = (url, id, index) => {
    if (!isPlaying && index === currentIndex) {
      setIsPlaying(true);
    } else if (!isPlaying) {
      dispatch(setCurrentIndex(index));
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && index === currentIndex) {
      setIsPlaying(false);
    } else {
      dispatch(setCurrentIndex(index));
      setIsLooped(false);
    }

    const newIndex = data.findIndex((song) => song.url === url);
    dispatch(setCurrentIndex(newIndex));
    localStorage.setItem("currentSongId", id);
  };

  const handleAutoPlayNext = () => {
    const index = data.findIndex((song) => song.index === currentIndex);
    const min = 0;
    const max = data.length - 1;
    const newIndex = !isRandom
      ? index + 1
      : Math.floor(Math.random() * (max - min + 1)) + min;

    if (newIndex < data.length) {
      dispatch(setCurrentIndex(newIndex));
      dispatch(setCurrentUrl(data[newIndex].url));
    } else if (isLoopedPlaylist) {
      dispatch(setCurrentIndex(0));
      dispatch(setCurrentUrl(data[0].url));
    } else {
      setIsPlaying(false);
    }
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleSongChange = (index, id) => {
    dispatch(setCurrentIndex(index));
    setSearchParams(`?region=${currentRegion}&id=${id}`);
    localStorage.setItem("currentSongId", id);
  };

  const currentLanguage = i18n.language;

  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchData("en"));
    } else {
      dispatch(fetchData("uk"));
    }
  }, [dispatch, currentLanguage]);

  useEffect(() => {
    if (!allData.length || loading) {
      return;
    }
    const regionId = searchParams.get("region");
    const songId = searchParams.get("id");
    if (regionId) {
      dispatch(setCurrentRegion(regionId));
    }
    if (songId) {
      const song = data.find((song) => song.id === +songId) || data[0];

      dispatch(setCurrentIndex(song ? song.index : 0));
      dispatch(setCurrentUrl(song ? song.url : allData[0].url));
    }
  }, [data, loading, dispatch, searchParams, currentLanguage]);

  useEffect(() => {
    const buttonMap = document.getElementById("map-tab");
    if (buttonMap) {
      buttonMap.classList.add("active-btn");
      return () => {
        buttonMap.classList.remove("active-btn");
      };
    }
  }, []);

  // Autoscroll to #mapTabsId ONLY when the song turned
  const location = useLocation();
  useEffect(() => {
    if (location.toString().includes("?id")) {
      const target = document.querySelector("#mapTabsId");
      if (target) {
        target.scrollIntoView({ block: "start" });
      }
    }
  }, [location]);

  const currentPlayer = useSelector(
    (state) => state.currentPlayer.currentPlayer
  );

  useEffect(() => {
    if (isPlaying) {
      dispatch(playerChanged("map"));
    }
  }, [isPlaying, dispatch]);

  useEffect(() => {
    if (currentPlayer !== "map") {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  }, [currentPlayer]);

  useEffect(() => {
    if (isPlaying && data[currentIndex]) {
      const debounceIncrement = setTimeout(() => {
        axios.post(
          `${baseUrl}/lullabies/${data[currentIndex].id}/increment_views/`
        );
      }, 300);
      return () => clearTimeout(debounceIncrement);
    }
  }, [isPlaying, currentIndex, data]);

  let time = Math.floor(currentTime);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  let formattedCurrentTime = `${formattedMinutes}:${formattedSeconds}`;
  const selectedSongs = data[currentIndex];

  if (loading || !allData.length) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-error text-5x">Something went wrong</p>;
  }
  if (error || !data.length || !selectedSongs) {
    return (
      <p className="text-error text-5x">
        No data available or something went wrong.
      </p>
    );
  }
  return (
    !loading &&
    data && (
      <div className="map-player-wrapper margin-bottom">
        <div className="player-wrapper">
          <div className="map-player_container">
            <div className="player-photo"></div>
            <ReactPlayer
              width="0px"
              height="0px"
              ref={playerRef}
              url={data[currentIndex].url}
              playing={isPlaying}
              onEnded={handleAutoPlayNext}
              loop={isLooped}
              volume={1}
              muted={isMuted}
              onProgress={onPlaying}
            />
            <h3 className="current-name text-l">{data[currentIndex].name}</h3>
            <p className="region text-base">{data[currentIndex].region}</p>
            <div
              className={classNames("progress-bar", {
                "progress-bar-light": isLightTheme,
                "progress-bar-dark": !isLightTheme,
              })}
              onClick={checkWidth}
              ref={progressRef}
            >
              <div
                className="progress-line"
                style={{ width: `${currentSongState?.progress}%` }}
              ></div>
            </div>
            <div className="duration text-sm">
              <p className="current-duration">{formattedCurrentTime}</p>
              <p className="item-duration">{data[currentIndex].duration}</p>
            </div>
            <Player
              isLightTheme={isLightTheme}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              setCurrentSong={data[currentIndex].url}
              playlist={data}
              isLoopedPlaylist={isLoopedPlaylist}
              setIsLoopedPlaylist={setIsLoopedPlaylist}
              isRandom={isRandom}
              setIsRandom={setIsRandom}
              isMuted={isMuted}
              setIsMuted={setIsMuted}
              setSearchParams={setSearchParams}
              currentRegion={currentRegion}
            />
          </div>
          <div className="map-player_info">
            <p className="text-l text-margin">{t("lyrics")}</p>
            <div className="lyrics playlist-scroll">
              <p className="text-base">{data[currentIndex].lyrics}</p>
            </div>
          </div>
        </div>
        <div className="map-player_playlist">
          <p className="text-l text-margin">{t("collection")}</p>
          <div className="player_playlist playlist-scroll">
            <ul>
              {data.map(({ name, url, duration, index, id }) => (
                <li
                  key={index}
                  className={classNames("map-player_card", {
                    "map-player_card-dark": !isLightTheme,
                    "map-player_card-light": isLightTheme,
                    "active-map-card": index === currentIndex && !isLightTheme,
                    "active-map-card-light":
                      isLightTheme && index === currentIndex,
                  })}
                  onClick={() => {
                    handleSongChange(index, id);
                    playPauseSong(url, id, index);
                  }}
                >
                  <div className="card-buttons">
                    <span className="item-number">
                      {isPlaying && index === currentIndex ? (
                        <SoundWaveIcon />
                      ) : (
                        index + 1
                      )}
                    </span>
                    <div className="playlist-item">
                      <button
                        aria-label="play/pause button"
                        className={classNames(
                          "selections-playlist-item-play-pause-button",
                          "selection-playlist-button",
                          {
                            "selections-playlist-item-play-pause-button-light":
                              isLightTheme,
                          }
                        )}
                        onClick={() => playPauseSong(url, id, index)}
                      >
                        {isPlaying && index === currentIndex ? (
                          <PauseCircleIconDark />
                        ) : (
                          <PlayCircleIconDark />
                        )}
                      </button>
                    </div>
                    <span className="map-player-list-item-name">
                      {name.toUpperCase()}
                    </span>
                  </div>
                  <div className="card-buttons">
                    <span className="item-duration text-xs-bold">
                      {duration}
                    </span>
                    <button
                      aria-label="on/off loop"
                      className="selections-playlist-item-repeat-button selection-playlist-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLoop();
                      }}
                      disabled={currentIndex !== index}
                    >
                      <BsRepeat
                        style={
                          isLooped &&
                          index === currentIndex && { fill: "var(--red-700)" }
                        }
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};
