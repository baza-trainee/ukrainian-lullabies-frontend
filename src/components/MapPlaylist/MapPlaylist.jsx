import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData } from "../../redux/DataSlice";
import './MapPlaylist.css';
import classNames from "classnames";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import MapSvg from '../../images/map-playlist.png'

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAudioChange = (url, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    dispatch(setCurrentName(name));
  };

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  useEffect(() => {
    const buttonMap = document.getElementById("map-tab");
    if (buttonMap)
    {
      buttonMap.classList.add("active-btn");

      return () => {
        buttonMap.classList.remove("active-btn");
      };
    }
  }, [])

  return (
    <section id="anima" className="playlist margin-bottom">
      <div className="playlist-map">
        <div >
          <img className="map-playlist-png" src={ MapSvg } alt="map" />
        </div>
        <p className="text-2xl alert"> Ми працюємо над поліпшенням сайту і невдовзі Ви зможете за допомогою карти прослухати колискові з обраного регіону. </p>
      </div>

      <div className="playlist-wrap">
        <div className={ classNames('map-player_playlist scroll') }>
          <p className="text-l text-margin">{ t('collection') }</p>
          <ul>
            { data.map(({ name, url, lyrics, duration }, index) => (
              <li
                key={ index }
              >
                <Link
                  to={ `/player` }
                  className={ classNames("map-player_card", { "map-player_card-light": isLightTheme }) }
                  onClick={ () => handleAudioChange(url, lyrics, name) }
                >
                  <div className="card-buttons">
                    <span className="item-number">
                      { index + 1 }
                    </span>
                    <div className="playlist-item ">
                      <button
                        className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                          "selections-playlist-item-play-pause-button-light": isLightTheme,
                        }) }
                      >
                        <PlayCircleIconDark />
                      </button>
                    </div>

                    <span className="selections-playlist-item-name">{ name.toUpperCase().slice(0, 50) }</span>
                  </div>
                  <div className="card-buttons">
                    <span className="item-duration text-xs-bold">{ duration }</span>
                  </div>
                </Link>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>

  );
};
