import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/SelectionSongs/selectionSongsSlice";
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
import { Ornaments } from "../Ornaments/Ornaments";

const songsData = [
  {
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    duration: "3:02",
    lyrics: "колискова для мами слова",
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    watches: 1500,
    duration: "1:27",
    lyrics: "Ходить сон бiля вiкон",
  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    watches: 2000,
    duration: "1:07",
    lyrics: "Котику сіренький текст",
  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    watches: 2000,
    duration: "1:07",
    lyrics: "Котику сіренький текст",
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
  const dispatch = useDispatch();

  // get theme
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  // get songs
  const sliceData = useSelector((state) => state.selectionSongs);
  // console.log(sliceData);

  // player variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isPlaylistLooped, setIsPlaylistLooped] = useState(false);
  const [isPlaylistShuffled, setIsPlaylistShuffled] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [previousVolume, setPreviousVolume] = useState(0);
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

  const handleLoopPlaylist = () => {
    setIsPlaylistLooped(!isPlaylistLooped);
  };

  const handleNextSong = () => {
    // its own function, we have similar in SelectionsPlayer
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

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="selections margin-bottom" id="selections">
      <ReactPlayer
        width="0px"
        height="0px"
        ref={reactPlayerRef}
        url={currentSong}
        playing={isPlaying}
        onEnded={() => (isPlaylistLooped ? handleNextSong() : setIsPlaying(false))}
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
          {playlist && (
            <ul className="selections-playlist-list">
              {playlist.map((item, index) => (
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
                      className={classNames("selections-playlist-item-repeat-button", "selection-playlist-button", {
                        "selections-playlist-item-repeat-button-light": isLightTheme,
                      })}
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
            previousVolume={previousVolume}
            setPreviousVolume={setPreviousVolume}
          />
        </div>
      </div>
      <Ornaments />
    </div>
  );
};
