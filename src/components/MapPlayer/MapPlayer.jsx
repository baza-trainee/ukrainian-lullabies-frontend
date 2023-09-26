import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData, selectLoading } from "../../redux/DataSlice";
import ReactPlayer from 'react-player';
import classNames from "classnames";

import './MapPlayer.css'
export const MapPlayer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(loading ? (data[0].url) : '');
  const [currentVideoLyrics, setCurrentVideoLyrics] = useState(loading ? data[0].lyrics : '');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleVideoChange = (url, id, lyrics) => {
    setCurrentVideoUrl(url);
    setCurrentVideoIndex(id);
    setCurrentVideoLyrics(lyrics);
  };

  return (
    !loading && data && <section id="anima" className="container map-player margin-bottom">
      <div className="map-player_container">
        <ReactPlayer
          className="map-player_video-player"
          url={ currentVideoUrl }
          controls={ true }
          width={ 339 }
          height={ 270 }
          onEnded={ () => {
            if (currentVideoIndex < data.length - 1)
            {
              setCurrentVideoIndex(currentVideoIndex + 1);
            }
          } }
        />

      </div>
      <div className="map-player_info ">
        <p className="text-l text-margin">Текст</p>
        <p className="text-base scroll">{ currentVideoLyrics } </p>
      </div>
      <div className="map-player_wrap">
        <div className={ classNames('map-player_playlist scroll') }>
          <p className="text-l text-margin">Колекція музею</p>
          <ul>
            { data.map(({ name, id, url, lyrics }) => (
              <li
                key={ id }
                className={ classNames('map-player_card', { 'active-card': id === currentVideoIndex }) }
                onClick={ () => handleVideoChange(url, id, lyrics) }
              >
                <div className="map-player_card-text">
                  <div className={ classNames({ 'play': id === currentVideoIndex }) }>

                  </div>
                  <p className="map-player_card-title text-sm">{ name }</p>
                </div>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  );
};
