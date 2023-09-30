import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData, selectLoading } from "../../redux/DataSlice";
import './MapPlaylist.css';
import classNames from "classnames";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
  const { t } = useTranslation();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAudioChange = (url, id, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    dispatch(setCurrentId(id));
    dispatch(setCurrentName(name));
    localStorage.setItem('currentSong', JSON.stringify({ url, id, lyrics, name }));
  };

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
    !loading && data && (
      <section id="anima" className="playlist margin-bottom">
        <div className="map-playlist_container"></div>

        <div className="map-player_wrap">
          <div className={ classNames('map-player_playlist scroll') }>
            <p className="text-l text-margin">{ t('collection') }</p>
            <ul>
              { data.map(({ name, id, url, lyrics }) => (
                <li
                  key={ id }
                  className={ classNames('map-player_card') }
                >
                  <Link
                    to={ `/player` }
                    className="map-player_card-link"
                    onClick={ () => handleAudioChange(url, id, lyrics, name) }
                  >
                    <div className="map-player_card-text">
                      <div className={ classNames('play') }></div>
                      <p className="map-player_card-title text-sm">{ name }</p>
                    </div>
                  </Link>
                </li>
              )) }
            </ul>
          </div>
        </div>
      </section>
    )
  );
};
