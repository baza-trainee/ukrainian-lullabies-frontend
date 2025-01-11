import classNames from "classnames";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import MapSvg from "../../images/map-playlist.png";
import {
  fetchData,
  selectDataByRegion,
  selectLoading,
} from "../../redux/Lullabies/fetchLullabies";
import { setCurrentRegion } from "../../redux/currentRegion";
import {
  setCurrentIndex,
  setCurrentUrl,
} from "../../redux/currentSong/currentSongSlice";
import { Loader } from "../Loader/Loader";
import "./MapPlaylist.css";

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const currentRegion = useSelector(
    (state) => state.currentRegion.currentRegion
  );

  const data = useSelector((state) => selectDataByRegion(state, currentRegion));

  const loading = useSelector(selectLoading);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    if (currentLanguage === "en") {
      dispatch(fetchData("en"));
    } else {
      dispatch(fetchData("uk"));
    }
  }, [dispatch, currentLanguage]);

  const [searchParams, setSerchParams] = useSearchParams();

  const handleAudioChange = (url, index, id) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentIndex(index));
    setSerchParams(`?region=${currentRegion}&id=${id}`);
  };
  useEffect(() => {
    const regionId = searchParams.get("region");

    if (regionId) {
      dispatch(setCurrentRegion(regionId));
    }
  }, []);
  useEffect(() => {
    const buttonMap = document.getElementById("map-tab");
    if (buttonMap) {
      buttonMap.classList.add("active-btn");

      return () => {
        buttonMap.classList.remove("active-btn");
      };
    }
  }, []);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  if (loading) {
    return <Loader />;
  }

  return (
    !loading &&
    data && (
      <section id="anima" className="map-playlist-wrapper  margin-bottom">
        <div className="playlist-map">
          <div>
            <img className="map-playlist-png" src={MapSvg} alt="map" />
          </div>
        </div>
        <div className="playlist-wrap">
          <p className="text-l text-margin">{t("collection")}</p>
          <div className="map-playlist playlist-scroll">
            <ul>
              {data.map(({ name, url, duration, index, id }) => (
                <li key={index}>
                  <Link
                    aria-label="Open player and play first song"
                    to={`/player?region=${currentRegion}&id=${id}`}
                    className={classNames("map-playlist_card", {
                      "map-player_card-dark": !isLightTheme,
                      "map-player_card-light": isLightTheme,
                    })}
                    onClick={() => handleAudioChange(url, index, id)}
                  >
                    <div className="card-buttons">
                      <span className="item-number">{index + 1}</span>
                      <div className="playlist-item ">
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
                        >
                          <PlayCircleIconDark />
                        </button>
                      </div>

                      <span className="map-playlist-item-name">
                        {name.toUpperCase().slice(0, 50)}
                      </span>
                    </div>
                    <div className="card-buttons">
                      <span className="item-duration text-xs-bold">
                        {duration}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  );
};
