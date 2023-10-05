import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData } from "../../redux/DataSlice";
import './MapPlaylist.css';
import classNames from "classnames";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PlayCircleIconDark } from "../../icons/SelectionsIcons/PlayCircleIcon";
import MapSvg from '../../images/map-playlist.png'

const songsData = [
  {
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    lyrics: 'колискова для мами слова',
    duration: '00:59',
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    lyrics: "Ой ходить сон коло вікон, \n А дрімота — коло плота.\nПитається сон дрімоти:\n — А де будем ночувати? \n \n\n \nДе хатонька теплесенька,\nДе дитина малесенька,—Там ми будем ночувати,Дитиночку колихати.\nОй на кота та воркота,На дитину та й дрімота,Котик буде воркотати,\n\n  Дитинонька буде спати.",
    duration: '00:59',
  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    lyrics: 'Котику Сіренький \n Котику Біленький \n Котку Волохатий \nне ходи по Хаті \n Не ходи по Хаті \n не буди Дитяти \n Дитя буде спати \n Котик воркотати \nОй на Кота на Воркота \nНа Дитинку Дрімота \n(А-а а-а а-а а)',
    duration: '00:59',
  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    lyrics: 'Котику сіренький текст',
    duration: '00:59',
  },
  {
    id: 4,
    url: "https://soundbible.com/mp3/Radio%20Tune-SoundBible.com-1525681700.mp3",
    name: "Radio tune",
    watches: 2000,
    duration: "0:05",
  },
];

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  // const data = useSelector(selectData);
  const data = songsData;

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const [serchParams, setSerchParams] = useSearchParams();
  const name = serchParams.get('name');

  const handleAudioChange = (url, lyrics, name) => {
    dispatch(setCurrentUrl(url));
    dispatch(setCurrentLyrics(lyrics));
    dispatch(setCurrentName(name));
    setSerchParams(`?name=${name}`)
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
                  to={ `/player/?name=${name}` }
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
