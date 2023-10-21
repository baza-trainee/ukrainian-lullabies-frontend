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
import { setCurrentUrl, setCurrentLyrics, setCurrentName } from "../../redux/currentSong/currentSongSlice";
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
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    lyrics: 'колискова для мами слова',
    duration: '00:59',
    region: 'Полісся',
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    lyrics: "Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати. Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати.",
    duration: '00:59',
    region: 'Карпати',
  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    lyrics: 'Котику Сіренький \n Котику Біленький \n Котку Волохатий \nне ходи по Хаті \n Не ходи по Хаті \n не буди Дитяти \n Дитя буде спати \n Котик воркотати \nОй на Кота на Воркота \nНа Дитинку Дрімота \n(А-а а-а а-а а)',
    duration: '00:59',
    region: 'Полісся',
  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    lyrics: 'Котику сіренький текст',
    duration: '00:59',
    region: 'Карпати',
  },
  {
    id: 4,
    url: "https://soundbible.com/mp3/Radio%20Tune-SoundBible.com-1525681700.mp3",
    name: "Radio tune",
    watches: 2000,
    duration: "00:05",
    region: 'Полісся',
  },
];

export const MapPlayer = () => {
  const [serchParams, setSerchParams] = useSearchParams()
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.traditionalSongs.data);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // const data = songsData;
  const currentUrl = useSelector((state) => state.currentSong.currentUrl);

  const currentName = useSelector((state) => state.currentSong.currentName);
  const currentLyrics = useSelector((state) => state.currentSong.currentLyrics);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);

  const [isPlaying, setIsPlaying] = useState(currentUrl ? true : false);
  const [isRandom, setIsRandom] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [isLoopedPlaylist, setIsLoopedPlaylist] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentSongState, setCurrentSongState] = useState(data[currentSongIndex]);
  const [currentTime, setCurrentTime] = useState(0);
  const onPlaying = () => {
    const durationMs = reactPlayerRef.current.getDuration();
    const ct = reactPlayerRef.current.getCurrentTime();
    setCurrentTime(ct);
    setCurrentSongState({ ...currentSongState, progress: (ct / durationMs) * 100, length: durationMs });
  };
  const progressRef = useRef();

  const checkWidth = (e) => {
    let width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;
    reactPlayerRef.current.seekTo((divProgress / 100) * currentSongState.length);
  };

   const playPauseSong = (url) => {
    if (!isPlaying && currentUrl === url)
    {
      setIsPlaying(true);
    } else if (!isPlaying)
    {
      dispatch(setCurrentUrl(url));
      setIsPlaying(true);
      setIsLooped(false);
    } else if (isPlaying && currentUrl === url)
    {
      setIsPlaying(false);
    } else
    {
      dispatch(setCurrentUrl(url));
      setIsLooped(false);
    }

    const newIndex = data.findIndex((song) => song.url === url);
    setCurrentSongIndex(newIndex);
  };

  const handleAutoPlayNext = () => {
    const index = data.findIndex((song) => song.url === currentUrl);
    const min = 0;
    const max = data.length - 1;

    const newIndex = !isRandom ? (index + 1) : Math.floor(Math.random() * (max - min + 1)) + min;

    if (newIndex < data.length)
    {
      setCurrentSongIndex(newIndex);
      dispatch(setCurrentName(data[newIndex].name));
      dispatch(setCurrentLyrics(data[newIndex].lyrics));
      dispatch(setCurrentUrl(data[newIndex].url));
    } else if (isLoopedPlaylist)
    {
      setCurrentSongIndex(0);
      dispatch(setCurrentName(data[0].name));
      dispatch(setCurrentLyrics(data[0].lyrics));
      dispatch(setCurrentUrl(data[0].url));
    } else
    {
      setIsPlaying(false);
    }
  };

  const handleLoop = () => {
    setIsLooped(!isLooped);
  };

  const handleVideoChange = (name) => {
    const { url, index, lyrics, id } = data.find((song) => song.name === name);
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    setCurrentSongIndex(index);
    dispatch(setCurrentName(name));
    setSerchParams(`?id=${id}`)
  };

  const currentLanguage = i18n.language;
  useEffect(() => {
    if (currentLanguage === "en")
    {
      dispatch(fetchData("eng"));
    } else
    {
      dispatch(fetchData("uk"));
    }
  }, [dispatch, currentLanguage]);

  useEffect(() => {
    dispatch(setCurrentUrl(data[currentSongIndex].url));
    dispatch(setCurrentLyrics(data[currentSongIndex].lyrics));
    setCurrentSongIndex(data[currentSongIndex].index);
    dispatch(setCurrentName(data[currentSongIndex].name));
  }, [i18n])
console.log(currentName);
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

  const reactPlayerRef = useRef(null);

  // autoscroll to #mapTabsId ONLY when the song turned
  const location = useLocation();
  useEffect(() => {
    if (location.search.slice(0, 5) === "?id")
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

  useEffect(() => {
    const currentSongId = data[currentSongIndex].id;
    const currentTime = reactPlayerRef.current.getCurrentTime();

    if (isPlaying && currentUrl !== "#" && currentTime < 0.3)
    {
      axios.get(`http://lullabies.eu-north-1.elasticbeanstalk.com/api/lullabies/${currentSongId}/increment_views/`);
    }
  }, [isPlaying, currentUrl]);

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

  let time = Math.floor(currentTime);
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  let formattedMinutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  let formattedSeconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

  let formattedCurrentTime = `${formattedMinutes}:${formattedSeconds}`;


  return (
    !loading && data && <div className="map-player-wrapper container margin-bottom">
      <div className="player-wrapper">
        <div className="map-player_container">
          <div className="player-photo"></div>
          <ReactPlayer
            width="0px"
            height="0px"
            ref={ reactPlayerRef }
            url={ currentUrl }
            playing={ isPlaying }
            onEnded={ handleAutoPlayNext }
            loop={ isLooped }
            volume={ volume }
            onProgress={ onPlaying }
          />
          <h3 className="current-name text-l">
            { currentName }
          </h3>
          <p className="region text-base">{ data[currentSongIndex].region }</p>
          <div className={ classNames('progress-bar', {
            'progress-bar-light': isLightTheme,
            'progress-bar-dark': !isLightTheme,
          }) } onClick={ checkWidth } ref={ progressRef }>
            <div className="progress-line" style={ { width: `${currentSongState.progress}%` } }></div>
          </div>
          <div className="duration text-sm">
            <p className="current-duration">{ formattedCurrentTime }</p>
            <p className="item-duration">{ data[currentSongIndex].duration }</p>
          </div>
          <Player
            isLightTheme={ isLightTheme }
            isPlaying={ isPlaying }
            setIsPlaying={ setIsPlaying }
            setCurrentSong={ currentUrl }
            playlist={ data }
            currentSongIndex={ currentSongIndex }
            setCurrentSongIndex={ setCurrentSongIndex }
            isLoopedPlaylist={ isLoopedPlaylist }
            setIsLoopedPlaylist={ setIsLoopedPlaylist }
            isRandom={ isRandom }
            setIsRandom={ setIsRandom }
            volume={ volume }
            setVolume={ setVolume }
          />
        </div>
        <div className="map-player_info">
          <p className="text-l text-margin ">
            { t('lyrics') }
          </p>
          <div className="lyrics playlist-scroll">
            <p className="text-base">
              { currentLyrics }
            </p>
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
              data.map(({ name, url, duration }, index) => (
                <li
                  key={ index }
                  className={ classNames("map-player_card", {
                    'map-player_card-dark': !isLightTheme,
                    'map-player_card-light': isLightTheme, 'active-map-card': (url === currentUrl && !isLightTheme), 'active-map-card-light': (isLightTheme && url === currentUrl)
                  }) }
                  onClick={ () => { handleVideoChange(name); playPauseSong(url) } }
                >
                  <div className="card-buttons">
                    <span className="item-number">
                      { isPlaying && url === currentUrl ? <SoundWaveIcon /> : index + 1 }
                    </span>
                    <div className="playlist-item ">
                      <button
                        className={ classNames("selections-playlist-item-play-pause-button", "selection-playlist-button", {
                          "selections-playlist-item-play-pause-button-light": isLightTheme,
                        }) }
                        onClick={ () => playPauseSong(url) }
                      >
                        { isPlaying && url === currentUrl ? <PauseCircleIconDark /> : <PlayCircleIconDark /> }
                      </button>
                    </div>

                    <span className="selections-playlist-item-name">
                      { name.toUpperCase() }
                    </span>
                  </div>
                  <div className="card-buttons">
                    <span className="item-duration text-xs-bold">
                      { duration }
                    </span>
                    <button
                      className="selections-playlist-item-repeat-button selection-playlist-button"
                      onClick={ (e) => {
                        e.stopPropagation();
                        handleLoop();
                      } }
                      disabled={ currentUrl !== url }
                    >
                      <BsRepeat style={ isLooped && currentUrl === url && { fill: "var(--red-700)" } } />
                    </button>
                  </div>
                </li>
              ))
            } </ul>
        </div>

      </div>
    </div>

  );
};
