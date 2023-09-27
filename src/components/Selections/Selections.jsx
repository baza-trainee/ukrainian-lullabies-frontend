import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import "./Selections.css";
import { SelectionsPlayer } from "./SelectionsPlayer";
import favoriteSongFirst from "../../assets/images/favorite-song-1.png";
import favoriteSongSecond from "../../assets/images/favorite-song-2.png";
import favoriteSongThird from "../../assets/images/favorite-song-3.png";

import endSectionOrnament from "../../assets/images/ornamentsMapTabsSection.svg";

// icons import
import { BsRepeat, BsHeart } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";
import YouTube from "react-youtube";

const playlist = [
  {
    id: 0,
    name: "люлі люлі люлечки",
    watches: "42,822",
    duration: "3:21",
  },
  {
    id: 1,
    name: "ХОДЕ СОН КОЛО ВІКОН",
    watches: "67,420",
    duration: "3:30",
  },
  {
    id: 2,
    name: "ОЙ, НИ-НИ-НИ",
    watches: "38,556",
    duration: "2:40",
  },
  {
    id: 3,
    name: "ЛЮЛІ ЛЮЛЄЧКИ",
    watches: "35,820",
    duration: "3:30",
  },
  {
    id: 4,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
  {
    id: 5,
    name: "abcd",
    watches: "51,432",
    duration: "1:01",
  },
  {
    id: 6,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
  {
    id: 7,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
  {
    id: 8,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
];

const playlist2 = [
  {
    url: "https://www.youtube.com/watch?v=SGjK-uN7jnI",
    title: "Сонько-дрімко",
    thumbnail: "https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png",
    likes: "152",
    vievs: "295",
  },
  {
    url: "https://www.youtube.com/watch?v=tHAIfNSJM4U",
    title: "Котику сіренький",
    thumbnail: "https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg",
    likes: "5112",
    vievs: "25",
  },

  {
    url: "https://www.youtube.com/watch?v=lzbQgwjy8wc",
    title: "Назва   відео",
    thumbnail: "https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg",
    likes: "1112",
    vievs: "325",
  },
  {
    url: "https://www.youtube.com/watch?v=pBTCycLsX7k&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=2",
    title: "Мій солодкий ангел",
    thumbnail: "https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png",
    likes: "133",
    vievs: "225",
  },
  {
    url: "https://www.youtube.com/watch?v=t2o03R5BsFA",
    title: "ОЙ ЛЮЛІ ЛЮЛІ налетіли гулі",
    thumbnail: "https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg",
    likes: "12",
    vievs: "35",
  },
  {
    url: "https://www.youtube.com/watch?v=DPLXJTyDppQ&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=4",
    title: "Назва   відео",
    thumbnail: "https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png",
    likes: "108",
    vievs: "45",
  },
  {
    url: "https://www.youtube.com/watch?v=qzdeqdmcBfY&list=RDEMFOFXNl9_ct3pVQzNXus1DQ&start_radio=1&rv=XjB_0W_w90o",
    title: "Ой, люлі люлі",
    thumbnail: "https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png",
    likes: "190",
    vievs: "25",
  },
];

export const Selections = () => {
  const { t } = useTranslation();

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(false);

  // dropdown menu item group for mobile
  const [isItemGroupOpen, setIsItemGroupOpen] = useState([]);
  const [activeButtonMoreIndex, setActiveButtonMoreIndex] = useState(null); // for buttom more to change colour

  const itemGroupMenuClick = (index, e) => {
    setIsItemGroupOpen(new Array(playlist.length).fill(false));

    setIsItemGroupOpen((prev) => {
      const updatedState = [...prev];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });

    setActiveButtonMoreIndex(isItemGroupOpen[index] ? null : index);
  };

  const menuRefs = playlist.map(() => useRef(null)); // Create an array of refs

  useEffect(() => {
    const closeMenusOnBodyClick = (e) => {
      if (!menuRefs.some((ref) => ref.current && ref.current.contains(e.target))) {
        setIsItemGroupOpen(new Array(playlist.length).fill(false));
        setActiveButtonMoreIndex(null);
      }
    };

    document.body.addEventListener("click", closeMenusOnBodyClick);

    return () => document.body.removeEventListener("click", closeMenusOnBodyClick);
  }, [menuRefs, playlist]);

  //  handle click on buttons
  const handleRepeatClick = (id) => {
    console.log(`Repeating ${playlist[id].name}`);
  };

  const handleLikeClick = (id) => {
    console.log(`Liked ${playlist[id].name}`);
  };

  const handleSaveClick = (id) => {
    console.log(`Saved ${playlist[id].name}`);
  };

  // youtube player

  const opts = {
    width: "400",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  const onReady = (event) => {
    event.target.seekTo(1);
    setTimeout(() => {
      event.target.pauseVideo();
      setIsPlaying(false);
    }, 1000);
  };

  const playerRef = useRef(null);

  const handlePlayClick = () => {
    if (!isPlaying) {
      playerRef.current.internalPlayer.playVideo();
    } else {
      playerRef.current.internalPlayer.pauseVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="selections margin-bottom">
      <h2 className="selections-title text-4xl">{t("selection")}</h2>
      <div className="selections-wrapper container margin-bottom">
        <div className="selections-image">
          {/* <img src={favoriteSongFirst} alt="song covering" /> */}
          <YouTube videoId="SGjK-uN7jnI" ref={playerRef} className="selections-youtube-player" opts={opts} onReady={onReady} />
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
                <span className="selections-playlist-item-number">{index + 1}</span>
                <div className="selection-playlist-playBtn-name-group">
                  <button
                    className={classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                      "selections-playlist-item-play-pause-button-light": isLightTheme,
                    })}
                    onClick={handlePlayClick}
                  >
                    {!isPlaying ? <PlayCircleIconDark /> : <PauseCircleIconDark />}
                  </button>

                  <span className="selections-playlist-item-name">{item.name.toUpperCase().slice(0, 25)}</span>
                  <span className="selections-playlist-item-duration text-xs-bold">{item.duration}</span>
                </div>
                {/* selections with dropdown for mobile */}
                <div className="selections-playlist-item-group">
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={() => handleRepeatClick(item.id)}
                  >
                    <BsRepeat />
                  </button>
                  <button
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
                  </button>
                </div>
                <button
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
                </div>
              </li>
            ))}
          </ul>
          <SelectionsPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
      <img src={endSectionOrnament} alt="ornament" />
    </div>
  );
};
