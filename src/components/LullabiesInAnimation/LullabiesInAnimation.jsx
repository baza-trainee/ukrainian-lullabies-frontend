import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  selectData,
  selectError,
  selectLoading,
} from "../../redux/Lullabies/animationLullabiesSlice";
import { Loader } from "../Loader/Loader";
import { Player } from "./Player";
import "./lullabies-animation.css";

export const LullabiesInAnimation = () => {
  const dispatch = useDispatch();
  const playlist = useSelector(selectData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { i18n } = useTranslation();

  const [currentVideoUrl, setCuerrentVideoUrl] = useState(playlist[0].url);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const [isPlaylistLooped, setIsPlaylistLooped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isPlaylistShuffled, setIsPlaylistShuffled] = useState(false);

  const currentLanguage = i18n.language;
  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchData("en"));
    } else {
      dispatch(fetchData("uk"));
    }
  }, [dispatch, currentLanguage]);

  const handleVideoChange = (index, url) => {
    setCuerrentVideoUrl(url);
    setCurrentVideoIndex(index);
  };

  const [playerSize, setPlayerSize] = useState({ width: 672, height: 404 });

  const handleNextSong = () => {
    if (isPlaylistShuffled) {
      playRandomSong();
    } else {
      const nextSongIndex = (currentVideoIndex + 1) % playlist.length;
      setCuerrentVideoUrl(playlist[nextSongIndex].url);
      setCurrentVideoIndex(nextSongIndex);
    }
  };

  const playRandomSong = () => {
    const min = 0;
    const max = playlist.length - 1;

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newIndex === currentVideoIndex);

    setCuerrentVideoUrl(playlist[newIndex].url);
    setCurrentVideoIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setPlayerSize({ width: "296px", height: "304px" });
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        setPlayerSize({ width: "672px", height: "404px" });
      } else {
        setPlayerSize({ width: "700px", height: "468px" });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-error text-5x">Somesing went wrong</p>;
  }
  if (!loading && playlist.length === 0) {
    return <Loader />;
  }
  console.log("playlist:", playlist);
  return (
    <section id="anima" className="lullabies-animation text-sm margin-bottom">
      <div className="player-container">
        <div className="video-player-container">
          <ReactPlayer
            className="video-player"
            url={playlist[currentVideoIndex].url}
            width={playerSize.width}
            height={playerSize.height}
            playing={isPlaying}
            onPlay={handlePlay}
            onPause={handlePause}
            controls={true}
            isLooped={isPlaylistLooped}
            onEnded={() => {
              if (isPlaylistLooped) {
                handleNextSong();
              } else {
                if (currentVideoIndex < playlist.length - 1) {
                  setCurrentVideoIndex(currentVideoIndex + 1);
                }
              }
            }}
          />
          <div className="lullabies-player">
            <Player
              isLightTheme={isLightTheme}
              setCurrentVideoUrl={currentVideoUrl}
              playlist={playlist}
              currentSongIndex={currentVideoIndex}
              setCurrentVideoIndex={setCurrentVideoIndex}
              isPlaylistLooped={isPlaylistLooped}
              setIsPlaylistLooped={setIsPlaylistLooped}
              isPlaylistShuffled={isPlaylistShuffled}
              setIsPlaylistShuffled={setIsPlaylistShuffled}
              playRandomSong={playRandomSong}
              name={playlist[currentVideoIndex].name}
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying}
            />
          </div>
        </div>
      </div>

      <ul className="playlist-anima playlist-scroll">
        {playlist.map(({ cover, name, url }, index) => (
          <li
            key={index}
            className={classNames("playlist-card", {
              "current-card": index === currentVideoIndex,
              "playlist-card-light": isLightTheme,
              "playlist-card-dark": !isLightTheme,
            })}
            onClick={() => handleVideoChange(index, url)}
          >
            <img
              src={cover}
              alt={`Мініатюра відео ${index + 1}`}
              className="card-img"
            />
            <div className="card-text">
              <p className="text-sm">{name}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
