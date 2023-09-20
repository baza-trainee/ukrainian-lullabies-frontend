import React from "react";
import "./Selections.css";
import favoriteSongFirst from "../../assets/images/favorite-song-1.png";
import favoriteSongSecond from "../../assets/images/favorite-song-2.png";
import favoriteSongThird from "../../assets/images/favorite-song-3.png";

// icons import
import { BsRepeat, BsHeart } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";
import { SelectionsPlayer } from "./SelectionsPlayer";
import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

const playlist = [
  {
    id: 0,
    name: "люлі люлі люлечки",
    watches: "42,822",
    duration: "3:21",
  },
  {
    id: 2,
    name: "ХОДЕ СОН КОЛО ВІКОН",
    watches: "67,420",
    duration: "3:30",
  },
  {
    id: 3,
    name: "ОЙ, НИ-НИ-НИ",
    watches: "38,556",
    duration: "2:40",
  },
  {
    id: 4,
    name: "ЛЮЛІ ЛЮЛЄЧКИ",
    watches: "35,820",
    duration: "3:30",
  },
  {
    id: 5,
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
    id: 5,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
  {
    id: 5,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
  {
    id: 5,
    name: "МАЛЬОВАНА КОЛИСОЧКА",
    watches: "51,432",
    duration: "4:01",
  },
];

export const Selections = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="selections">
      <h2 className="selections-title text-4xl">Підбірка колискових</h2>
      <div className="selections-wrapper container">
        <div className="selections-image">
          <img src={favoriteSongFirst} alt="song covering" />
        </div>
        <div className="selections-info">
          <div className="selections-info-about">
            <h4 className="selections-info-title text-2xl">Українські колискові</h4>
            <p className="selections-info-text text-base">
              Колискова пісня – це перший поетичний зв’язок матері з дитиною, той міцний генетичний ланцюжок, який єднає між собою
              багато поколінь. З колискової зароджується національна свідомість дитини, її мова та світогляд.
            </p>
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
                  <span className="selections-playlist-item-name text-sm-semibold">{item.name.toUpperCase().slice(0, 25)}</span>
                </div>
                <div className="selections-playlist-item-group">
                  <span className="selections-playlist-item-duration text-xs-bold">{item.duration}</span>
                  <button className="selections-playlist-item-repeat-button selection-playlist-button">
                    <BsRepeat />
                  </button>
                  <button className="selections-playlist-item-like-button selection-playlist-button">
                    <AiOutlineLike />
                  </button>
                  <button className="selections-playlist-item-save-button selection-playlist-button">
                    <BsHeart />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <SelectionsPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
      </div>
    </div>
  );
};
