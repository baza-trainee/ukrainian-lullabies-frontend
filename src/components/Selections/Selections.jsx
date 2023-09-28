import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

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

  return (
    <div className="selections margin-bottom">
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
                <span className="selections-playlist-item-number">{index + 1}</span>
                <div className="selection-playlist-playBtn-name-group">
                  <button
                    className={classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                      "selections-playlist-item-play-pause-button-light": isLightTheme,
                    })}
                  >
                    <PlayCircleIconDark />
                  </button>

                  <span className="selections-playlist-item-name">{item.name.toUpperCase().slice(0, 25)}</span>
                </div>
                {/* selections with dropdown for mobile */}
                <div className="selections-playlist-item-group">
                  <span className="selections-playlist-item-duration text-xs-bold">{item.duration}</span>
                  <button
                    className="selections-playlist-item-repeat-button selection-playlist-button"
                    onClick={() => handleRepeatClick(item.id)}
                  >
                    <BsRepeat />
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
          <SelectionsPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
      <img src={endSectionOrnamentDesktop} alt="ornament" className="selections-ornament-desktop" />
      <img src={endSectionOrnamentMobile} alt="ornament" className="selections-ornament-mobile" />
    </div>
  );
};
