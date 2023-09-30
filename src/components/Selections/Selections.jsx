import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";

import "./Selections.css";
import { SelectionsPlayer } from "./SelectionsPlayer";
import favoriteSongFirst from "../../assets/images/favorite-song-1.png";
import favoriteSongSecond from "../../assets/images/favorite-song-2.png";
import favoriteSongThird from "../../assets/images/favorite-song-3.png";

import endSectionOrnamentDesktop from "../../assets/images/ornamentsMapTabsSection.svg";
import endSectionOrnamentMobile from "../../assets/images/OrnamentsMapTabs.svg";

// icons import
import { BsRepeat, BsHeart } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";

const songsData = [
  {
    id: 0,
    url: "https://cdn3.sefon.pro/prev/R6kCQzcbe4tYlxfomso_jA/1696114956/1/Coolio%20-%20Gangsta%27s%20Paradise%20%28192kbps%29.mp3",
    name: "Gangstar's paradise - Coolio",
    watches: 100,
    duration: "1:20",
  },
  {
    id: 1,
    url: "https://cdn7.sefon.pro/prev/EbuET5lUQA2UISPBfsFHWw/1696114990/78/Imagine%20Dragons%20-%20Natural%20%28192kbps%29.mp3",
    name: "Natural - Imagine Dragons",
    watches: 1500,
    duration: "12:00",
  },
  {
    id: 2,
    url: "https://cdn2.sefon.pro/prev/XVL4Yx5AgajWR2uCxQ-uFw/1696114806/70/Aerosmith%20-%20Dream%20On%20%28192kbps%29.mp3",
    name: "Dream on",
    watches: 2000,
    duration: "3:20",
  },
  {
    id: 3,
    url: "https://cdn3.sefon.pro/prev/rDB5ixBLUmWsyejun2O6Vw/1696115130/1/Snap%21%20-%20The%20Power%20%28192kbps%29.mp3",
    name: "The Power - Snap!",
    watches: 2000,
    duration: "0:05",
  },
  {
    id: 4,
    url: "https://soundbible.com/mp3/Radio%20Tune-SoundBible.com-1525681700.mp3",
    name: "Radio tune",
    watches: 2000,
    duration: "0:05",
  },
];

export const Selections = () => {
  const { t } = useTranslation();

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playlist, setPlaylist] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(playlist[0].url);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const reactPlayerRef = useRef(null);
  // ------------+----+-----+----
  // ----+++---+---

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

  // dropdown menu item group for mobile
  // const [isItemGroupOpen, setIsItemGroupOpen] = useState([]);
  // const [activeButtonMoreIndex, setActiveButtonMoreIndex] = useState(null); // for buttom more to change colour

  // const itemGroupMenuClick = (index, e) => {
  //   setIsItemGroupOpen(new Array(playlist.length).fill(false));

  //   setIsItemGroupOpen((prev) => {
  //     const updatedState = [...prev];
  //     updatedState[index] = !updatedState[index];
  //     return updatedState;
  //   });

  //   setActiveButtonMoreIndex(isItemGroupOpen[index] ? null : index);
  // };

  // const menuRefs = playlist.map(() => useRef(null)); // Create an array of refs

  // useEffect(() => {
  //   const closeMenusOnBodyClick = (e) => {
  //     if (!menuRefs.some((ref) => ref.current && ref.current.contains(e.target))) {
  //       setIsItemGroupOpen(new Array(playlist.length).fill(false));
  //       setActiveButtonMoreIndex(null);
  //     }
  //   };

  //   document.body.addEventListener("click", closeMenusOnBodyClick);

  //   return () => document.body.removeEventListener("click", closeMenusOnBodyClick);
  // }, [menuRefs, playlist]);

  // //  handle click on buttons
  // const handleRepeatClick = (id) => {
  //   console.log(`Repeating ${playlist[id].name}`);
  // };

  // const handleLikeClick = (id) => {
  //   console.log(`Liked ${playlist[id].name}`);
  // };

  // const handleSaveClick = (id) => {
  //   console.log(`Saved ${playlist[id].name}`);
  // };

  return (
    <div className="selections margin-bottom">
      <ReactPlayer
        width="0px"
        height="0px"
        ref={reactPlayerRef}
        url={currentSong}
        playing={isPlaying}
        onEnded={() => setIsPlaying(false)}
        loop={isLooped}
        volume={volume}
      />
      <h2 className="selections-title text-4xl">{t("selection")}</h2>
      <div className="selections-wrapper container margin-bottom">
        <div className="selections-image">
          <img src={favoriteSongFirst} alt="song covering" />
        </div>
        <div className="selections-info">
          <div className="selections-info-about">
            <h4 className="selections-info-title text-2xl">{t("ukrainianLullabies")}</h4>
            <p className="selections-info-text text-base">{t("lullabySong")}</p>
          </div>
          <ul className="selections-playlist-list">
            {playlist.map((item, index) => (
              <li
                className={classNames("selections-playlist-list-item", { "selections-playlist-list-item-light": isLightTheme })}
                key={index}
              >
                <span className="selections-playlist-item-number">
                  {isPlaying && item.url === currentSong ? <SoundWaveIcon /> : index + 1}
                </span>
                <div className="selection-playlist-playBtn-name-group">
                  <button
                    className={classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                      "selections-playlist-item-play-pause-button-light": isLightTheme,
                    })}
                    onClick={() => playPauseSong(item.url)}
                  >
                    {isPlaying && item.url === currentSong ? <PauseCircleIconDark /> : <PlayCircleIconDark />}
                  </button>

                  <span className="selections-playlist-item-name">{item.name.toUpperCase().slice(0, 50)}</span>
                </div>
                {/* selections with dropdown for mobile */}
                <div className="selections-playlist-item-group">
                  <span className="selections-playlist-item-duration text-xs-bold">{item.duration}</span>
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={handleLoop}
                    disabled={currentSong !== item.url}
                  >
                    <BsRepeat style={isLooped && currentSong === item.url && { fill: "var(--red-700)" }} />
                  </button>
                  {/* <button
                    className="selections-playlist-item-like-button selection-playlist-button"
                    onClick={() => handleLikeClick(item.id)}
                  >
                    <AiOutlineLike />
                  </button>
                  <button
                    className="selections-playlist-item-save-button selection-playlist-button"
                    onClick={() => handleSaveClick(item.id)}
                  >
                    <BsHeart />
                  </button> */}
                </div>
                {/* <button
                  className={classNames("selections-playlist-item-group-menuIcon-mobile", {
                    "selections-playlist-item-group-menuIcon-mobile-active": activeButtonMoreIndex === index,
                  })}
                  onClick={(e) => {
                    itemGroupMenuClick(index, e);
                  }}
                  ref={menuRefs[index]}
                >
                  <FiMoreHorizontal />
                </button>
                <div
                  className={classNames("text-sm", {
                    "selections-playlist-item-group-mobile": isItemGroupOpen[index],
                    hidden: !isItemGroupOpen[index],
                    "selections-playlist-item-group-mobile-light": isLightTheme,
                  })}
                >
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={() => handleRepeatClick(item.id)}
                  >
                    <BsRepeat /> Зациклити пісню
                  </button>
                  <button
                    className="selections-playlist-item-like-button selection-playlist-button"
                    onClick={() => handleLikeClick(item.id)}
                  >
                    <AiOutlineLike /> Поставити вподобання
                  </button>
                  <button
                    className="selections-playlist-item-save-button selection-playlist-button"
                    onClick={() => handleSaveClick(item.id)}
                  >
                    <BsHeart /> Додати до улюлених
                  </button>
                </div> */}
              </li>
            ))}
          </ul>
          <SelectionsPlayer
            isLightTheme={isLightTheme}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setCurrentSong={setCurrentSong}
            playlist={playlist}
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            handleLoop={handleLoop}
            isLooped={isLooped}
            volume={volume}
            setVolume={setVolume}
          />
        </div>
      </div>
      <img src={endSectionOrnamentDesktop} alt="ornament" className="selections-ornament-desktop" />
      <img src={endSectionOrnamentMobile} alt="ornament" className="selections-ornament-mobile" />
    </div>
  );
};
