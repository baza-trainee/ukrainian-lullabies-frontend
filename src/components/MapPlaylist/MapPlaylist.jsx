// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../redux/Lullabies/fetchLullabies";
// import { selectData, selectLoading } from "../../redux/DataSlice";
// import './MapPlaylist.css';
// import classNames from "classnames";
// import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
// import { Link } from "react-router-dom";

// export const MapPlaylist = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const data = useSelector(selectData);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   const handleVideoChange = (url, id, lyrics, name) => {
//     dispatch(setCurrentUrl(url));
//     dispatch(setCurrentLyrics(lyrics));
//     dispatch(setCurrentId(id));
//     dispatch(setCurrentName(name));

//     localStorage.setItem('currentSong', JSON.stringify({ url, id, lyrics, name }));
//   };

//   return (
//     !loading && data && (
//       <section id="anima" className="playlist margin-bottom">
//         <div className="map-playlist_container"></div>

//         <div className="map-player_wrap">
//           <div className={ classNames('map-player_playlist scroll') }>
//             <p className="text-l text-margin">Колекція музею</p>
//             <ul>
//               { data.map(({ name, id, url, lyrics }) => (
//                 <li
//                   key={ id }
//                   className={ classNames('map-player_card') }
//                 >
//                   <Link
//                     to={ `/player` }
//                     className="map-player_card-link"
//                     onClick={ () => handleVideoChange(url, id, lyrics, name) }
//                   >
//                     <div className="map-player_card-text">
//                       <div className={ classNames('play') }></div>
//                       <p className="map-player_card-title text-sm">{ name }</p>
//                     </div>
//                   </Link>
//                 </li>
//               )) }
//             </ul>
//           </div>
//         </div>
//       </section>
//     )
//   );
// };
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/Lullabies/fetchLullabies";
import { selectData, selectLoading } from "../../redux/DataSlice";
import './MapPlaylist.css';
import classNames from "classnames";
import { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } from "../../redux/currentSong/currentSongSlice";
import { Link } from "react-router-dom";

const songsData = [
  {
    id: 0,
    url: "https://deti.e-papa.com.ua/mpf/9211814143.mp3",
    name: "Колискова для мами",
    lyrics: 'колискова для мами слова'
  },
  {
    id: 1,
    url: "https://deti.e-papa.com.ua/mpf/17146805.mp3",
    name: "Ходить сон бiля вiкон",
    lyrics: 'Ходить сон бiля вiкон',
  },
  {
    id: 2,
    url: "https://deti.e-papa.com.ua/mpf/9211811816.mp3",
    name: "Котику сіренький",
    lyrics: 'Котику сіренький текст',
  },
  {
    id: 3,
    url: "https://deti.e-papa.com.ua/mpf/921180978.mp3",
    name: "Колискова",
    lyrics: 'Котику сіренький текст',
  },
];

export const MapPlaylist = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

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
            <p className="text-l text-margin">Колекція музею</p>
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
