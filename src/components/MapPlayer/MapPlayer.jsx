import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import axios from "axios";
import { Player } from "./Player";
import { selectData, selectError, selectLoading } from "../../redux/Lullabies/fetchLullabies";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { BsRepeat } from "react-icons/bs";
import { setCurrentUrl, setCurrentName, setCurrentIndex } from "../../redux/currentSong/currentSongSlice";
import { playerChanged } from "../../redux/CurrentPlayer/currentPlayerSlice";
import { PauseCircleIconDark } from "../../icons/SelectionsIcons/PauseCircleIcon";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import { Loader } from '../Loader/Loader'
import './MapPlayer.css';
import { useRef } from "react";
import { SoundWaveIcon } from "../../icons/SelectionsIcons/SoundWaveIcon";
import { useLocation, useSearchParams } from 'react-router-dom';
const songsData = [
  {
    index: 0,
    index: 0,
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    lyrics: 'колискова для мами слова',
    duration: '00:59',
    region: 'Полісся',
  },
  {
    index: 1,
    index: 1,
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    lyrics: "Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати. Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати.",
    duration: '00:59',
    region: 'Карпати',
  },
  {
    index: 2,
    index: 2,
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    lyrics: 'Котику Сіренький \n Котику Біленький \n Котку Волохатий \nне ходи по Хаті \n Не ходи по Хаті \n не буди Дитяти \n Дитя буде спати \n Котик воркотати \nОй на Кота на Воркота \nНа Дитинку Дрімота \n(А-а а-а а-а а)',
    duration: '00:59',
    region: 'Полісся',
  },
  {
    index: 3,
    index: 3,
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    lyrics: 'Котику сіренький текст',
    duration: '00:59',
    region: 'Карпати',
  },
  {
    index: 4,
    index: 4,
    id: 4,
    url: "https://soundbible.com/mp3/Radio%20Tune-SoundBible.com-1525681700.mp3",
    name: "Radio tune",
    watches: 2000,
    duration: "00:05",
    region: 'Полісся',
  },
];

export const MapPlayer = () => {
 
  const [searchParams, setSearchParams] = useSearchParams()
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  // const data = useSelector((state) => state.traditionalSongs.data);
  const loading = false;
  const error = false;
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  const data = songsData;
  const currentUrl = useSelector((state) => state.currentSong.currentUrl);

  const currentIndex = useSelector((state) => state.currentSong.currentIndex);

  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(currentUrl ? true : false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isLoopedPlaylist, setIsLoopedPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSongState, setCurrentSongState] = useState(data[currentIndex]);
  const [currentTime, setCurrentTime] = useState(0);


  const progressRef = useRef();

  const checkWidth = (e) => {
    let width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;
    reactPlayerRef.current.seekTo((divProgress / 100) * currentSongState.length);
  };

 
  const onPlaying = () => {
    if (reactPlayerRef.current && !loading && data)
    {
      const durationMs = reactPlayerRef.current.getDuration();
      const ct = reactPlayerRef.current.getCurrentTime();
      setCurrentTime(ct);
      setCurrentSongState({ ...currentSongState, progress: (ct / durationMs) * 100, length: durationMs });
    }
  };

  const playPauseSong = (url, id, index) => {
    if ((!isPlaying && index === currentIndex))
    {
      setIsPlaying(true);
    } else if (!isPlaying)
    {
      dispatch(setCurrentIndex(index));
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && index === currentIndex)
    {
      setIsPlaying(false);
    } else
    {
      dispatch(setCurrentIndex(index));
      setIsLooped(false);
    }

    const newIndex = data.findIndex((song) => song.url === url);
    dispatch(setCurrentIndex(newIndex));

    localStorage.setItem('currentSongId', id);
    dispatch(setCurrentIndex(newIndex));

    localStorage.setItem('currentSongId', id);
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleSongChange = (index, id) => {
    dispatch(setCurrentIndex(index));
    setSearchParams(`?id=${id}`)
    localStorage.setItem('currentSongId', id);
  };
 
    const handleAutoPlayNext = () => {
      const index = data.findIndex((song) => song.index === currentIndex);
      const min = 0;
      const max = data.length - 1;

  useEffect(() => {
    const savedId = localStorage.getItem('currentSongId');
    if (savedId)
    {
      const song = data.find((song) => song.id === parseInt(savedId));
      if (song)
      {
        dispatch(setCurrentUrl(song.url));
        dispatch(setCurrentIndex(song.index));
      }
    }

    const songId = searchParams.get('id');

    if (songId)
    {
      const song = data.find((song) => song.id === songId);
      if (song)
      {
        dispatch(setCurrentUrl(song.url));
        dispatch(setCurrentIndex(song.index));
 
      }
      const params = new URLSearchParams(window.location.search);
      const songId = params.get('id');

      if (songId)
      {
        const song = data.find((song) => song.id === songId);
        {
          console.log(song);

          if (song)
            dispatch(setCurrentUrl(song.url));
          dispatch(setCurrentIndex(song.index));
        }
      }
    }, [data]);

    useEffect(() => {
      const buttonMap = document.getElementById("map-tab");
      if (buttonMap)
      {
        buttonMap.classList.add("active-btn");

  // autoscroll to #mapTabsId ONLY when the song turned
  const location = useLocation();
  useEffect(() => {
    if (location.search.slice(0, 3) === "?id")
      if (location.search.slice(0, 3) === "?id")
      {
        const target = document.querySelector("#mapTabsId");
        target.scrollIntoView({ block: "start" });
      }
  }, []);
 

    // autoscroll to #mapTabsId ONLY when the song turned
    const location = useLocation();
    useEffect(() => {
      if (location.search.slice(0, 3) === "?id")
        if (location.search.slice(0, 3) === "?id")
        {
          const target = document.querySelector("#mapTabsId");
          target.scrollIntoView({ block: "start" });
        }
    }, []);

    // preventing players from playing alltogether
    const currentPlayer = useSelector((state) => state.currentPlayer.currentPlayer);

    useEffect(() => {
      if (isPlaying)
      {
        dispatch(playerChanged("map"));
      }
    }, [isPlaying]);

    useEffect(() => {
      if (currentPlayer !== "map")
      {
        setIsPlaying(false);
      } else
      {
        setIsPlaying(true);
      }

    }, [currentPlayer]);

    if (isPlaying && currentTime < 0.3)
    {
      axios.get(`http://lullabies.eu-north-1.elasticbeanstalk.com/api/lullabies/${currentSongId}/increment_views/`);
    }
  }, [isPlaying, currentIndex]);


    let time = Math.floor(currentTime);
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    let formattedSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    let formattedCurrentTime = `${formattedMinutes}:${formattedSeconds}`;

  if (loading)
  {
    return <Loader />
  }
  if (error)
  {
    return <p className="text-error text-5x">
      Somesing went wrong
    </p>
  }

  return (
    !loading && data && <div className="map-player-wrapper container margin-bottom">
      <div className="player-wrapper">
        <div className="map-player_container">
          <div className="player-photo"></div>
          <ReactPlayer
            width="0px"
            height="0px"
            ref={ reactPlayerRef }
            url={ data[currentIndex].url }
            playing={ isPlaying }
            onEnded={ handleAutoPlayNext }
            loop={ isLooped }
            volume={ volume }
            onProgress={ onPlaying }
          />
          <h3 className="current-name text-l">
            { data[currentIndex].name }
          </h3>
          <p className="region text-base">{ data[currentIndex].region }</p>
          <div className={ classNames('progress-bar', {
            'progress-bar-light': isLightTheme,
            'progress-bar-dark': !isLightTheme,
          }) } onClick={ checkWidth } ref={ progressRef }>
            <div className="progress-line" style={ { width: `${currentSongState.progress}%` } }></div>
          </div>
          <div className="duration text-sm">
            <p className="current-duration">{ formattedCurrentTime }</p>
            <p className="item-duration">{ data[currentIndex].duration }</p>
          </div>
          <Player
            isLightTheme={ isLightTheme }
            isPlaying={ isPlaying }
            setIsPlaying={ setIsPlaying }
            setCurrentSong={ currentUrl }
            playlist={ data }
            isLoopedPlaylist={ isLoopedPlaylist }
            setIsLoopedPlaylist={ setIsLoopedPlaylist }
            isRandom={ isRandom }
            setIsRandom={ setIsRandom }
            volume={ volume }
            setVolume={ setVolume }
            setSearchParams={ setSearchParams }
          />
        </div>
        <div className="map-player_info">
          <p className="text-l text-margin ">
            { t('lyrics') }
          </p>
          <div className="lyrics playlist-scroll">
            <p className="text-base">
              { data[currentIndex].lyrics }
 
            </p>
            <div className="lyrics playlist-scroll">
              <p className="text-base">
                { data[currentIndex].lyrics }
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="map-player_playlist">
        <p className="text-l text-margin">
          { t('collection') }
        </p>
        <div className="player_playlist playlist-scroll">
          <ul >
            {
              data.map(({ name, url, duration, index, id }) => (
                <li
                  key={ index }
                  className={ classNames("map-player_card", {
                    'map-player_card-dark': !isLightTheme,
                    'map-player_card-light': isLightTheme, 'active-map-card': (index === currentIndex && !isLightTheme), 'active-map-card-light': (isLightTheme && index === currentIndex)
                  }) }
                  onClick={ () => {
                    handleSongChange(index, id);
                    playPauseSong(url, id, index);
                  } }
                >
                  <div className="card-buttons">
                    <span className="item-number">
                      { isPlaying && index === currentIndex ? <SoundWaveIcon /> : index + 1 }
                    </span>
                    <div className="playlist-item ">
 
                      <button
                        className="selections-playlist-item-repeat-button selection-playlist-button"
                        onClick={ (e) => {
                          e.stopPropagation();
                          handleLoop();
                        } }
                        disabled={ currentIndex !== index }
                      >
                        { isPlaying && index === currentIndex ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
 
                      </button>
                    </div>
                  </li>
                ))
              } </ul>
          </div>

        </div>
      </div>
    </div>
  );
};
 
