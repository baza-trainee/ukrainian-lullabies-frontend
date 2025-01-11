import classNames from "classnames";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import mapDark from "../../assets/images/mapDark.png";
import mapDarkEn from "../../assets/images/mapDarkEn.png";
import mapLight from "../../assets/images/mapLight.png";
import mapLightEn from "../../assets/images/mapLightEn.png";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import {
  fetchData,
  selectDataByRegion,
  selectLoading,
} from "../../redux/Lullabies/fetchLullabies";
import {
  setCurrentRegion,
  setCurrentRegionName,
} from "../../redux/currentRegion";
import {
  setCurrentIndex,
  setCurrentUrl,
} from "../../redux/currentSong/currentSongSlice";
import { Loader } from "../Loader/Loader";
import { catalogue } from "../MapCatalogue/MapCatalogue";
import "./MapPlaylist.css";

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const currentRegion = useSelector(
    (state) => state.currentRegion.currentRegion
  );
  const currentRegionName = useSelector((state) => state.currentRegion.name);

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
  const handleRegionHover = (pattern) => {
    const hoverPattern = document.getElementById(pattern);
    if (hoverPattern) {
      const imageElement = hoverPattern.querySelector("image");
      if (imageElement) {
        imageElement.classList.add("map-opacity_visible");
      }
    }
  };

  const handleRegionOut = (pattern) => {
    const hoverPattern = document.getElementById(pattern);
    if (hoverPattern) {
      const imageElement = hoverPattern.querySelector("image");
      if (imageElement) {
        imageElement.classList.remove("map-opacity_visible");
      }
    }
  };

  const mapRegion = catalogue.map((item) => (
    <React.Fragment key={item.id}>
      <defs>
        <pattern id={item.pattern} x="0" y="0" width="100%" height="100%">
          <image
            href={item.photo}
            className={classNames({
              "map-opacity_visible": item.id === currentRegion,
              "map-opacity_hide": item.id !== currentRegion,
            })}
          />
        </pattern>
      </defs>
      <NavLink
        aria-label="Open playlist"
        onClick={() => {
          dispatch(setCurrentRegion(item.id));
          dispatch(
            setCurrentRegionName(
              item.name[currentLanguage === "en" ? "en" : "uk"]
            )
          );
          localStorage.setItem("currentRegion", item.id);
        }}
        className="nav"
        to={`/playlist?region=${item.id}`}
      >
        <path
          className="path-map"
          id={item.id}
          onMouseOver={() => handleRegionHover(item.pattern)}
          onMouseOut={() => handleRegionOut(item.pattern)}
          d={item.region}
          style={{ fill: `url(#${item.pattern})`, objectFit: "cover" }}
        />
      </NavLink>
    </React.Fragment>
  ));
  const map = isLightTheme ? mapLight : mapDark;
  const mapEng = isLightTheme ? mapLightEn : mapDarkEn;

  const mapPng = currentLanguage === "en" ? mapEng : map;
  return (
    !loading &&
    data && (
      <section id="anima" className="map-playlist-wrapper margin-bottom">
        <div>
          {currentRegionName && (
            <h2 className="text-l text-margin">{currentRegionName}</h2>
          )}
          <div className="playlist-map">
            <svg className="svg-map" viewBox="0 0 990 655">
              {mapRegion}
            </svg>
            <img className="img-map" src={mapPng} alt="Map" />
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
