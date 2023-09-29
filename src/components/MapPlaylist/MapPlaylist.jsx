// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../../redux/Lullabies/fetchLullabies";
// import { selectData, selectLoading } from "../../redux/DataSlice";
// import './MapPlaylist.css';
// import classNames from "classnames";
// import { setCurrentUrl, setCurrentLyrics, setCurrentId } from "../../redux/currentSong/currentSongSlice";

// export const MapPlaylist = () => {
//   const dispatch = useDispatch();
//   const loading = useSelector(selectLoading);
//   const data = useSelector(selectData);


//   const handleVideoChange = (url, id, lyrics) => {
//     dispatch(setCurrentUrl(url));
//     dispatch(setCurrentLyrics(lyrics));
//     dispatch(setCurrentId(id));
//   };

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   return (
//     !loading && data && <section id="anima" className="container map-player margin-bottom">
//       <div className="map-playlist_container">


//       </div>

//       <div className="map-player_wrap">
//         <div className={ classNames('map-player_playlist scroll') }>
//           <p className="text-l text-margin">Колекція музею</p>
//           <ul>
//             { data.map(({ name, id, url, lyrics }) => (
//               <li
//                 key={ id }
//                 className={ classNames('map-player_card') }
//                 onClick={ () => handleVideoChange(url, id, lyrics) }
//               >
//                 <div className="map-player_card-text">
//                   <div className={ classNames('play') }>

//                   </div>
//                   <p className="map-player_card-title text-sm">{ name }</p>
//                 </div>
//               </li>
//             )) }
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };