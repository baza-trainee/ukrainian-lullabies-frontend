import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from 'react-player'
import "./lullabies-animation.css";
import { useTranslation } from 'react-i18next';
import classNames from "classnames";
import { Player } from "./Player";
import { selectData } from "../../redux/Lullabies/traditionalSongsSlice";
import { fetchData } from "../../redux/Lullabies/animationLullabiesSlice";

export const LullabiesInAnimation = () => {
  const dispatch = useDispatch();
  // const playlist = useSelector(selectData);
  // const loading = useSelector(selectLoading);

  const [playlist] = useState([
    {
      url: 'https://www.youtube.com/watch?v=SGjK-uN7jnI',
      name: 'Сонько-дрімко',
      cover: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '152',
      vievs: '295',
    },
    {
      url: 'https://www.youtube.com/watch?v=tHAIfNSJM4U',
      name: 'Котику сіренький',
      cover: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '5112',
      vievs: '25',
    },

    {
      url: 'https://www.youtube.com/watch?v=lzbQgwjy8wc',
      name: 'Назва   відео',
      cover: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '1112',
      vievs: '325',
    },
    {
      url: 'https://www.youtube.com/watch?v=pBTCycLsX7k&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=2',
      name: 'Мій солодкий ангел',
      cover: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '133',
      vievs: '225',
    },
    {
      url: 'https://www.youtube.com/watch?v=t2o03R5BsFA',
      name: 'ОЙ ЛЮЛІ ЛЮЛІ налетіли гулі',
      cover: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '12',
      vievs: '35',
    },
    {
      url: 'https://www.youtube.com/watch?v=DPLXJTyDppQ&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=4',
      name: 'Назва   відео',
      cover: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '108',
      vievs: '45',
    },
    {
      url: 'https://www.youtube.com/watch?v=qzdeqdmcBfY&list=RDEMFOFXNl9_ct3pVQzNXus1DQ&start_radio=1&rv=XjB_0W_w90o',
      name: 'Ой, люлі люлі',
      cover: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '190',
      vievs: '25',
    },
  ]);

  const [currentVideoUrl, setCuerrentVideoUrl] = useState(playlist[0].url)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const [isPlaylistLooped, setIsPlaylistLooped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isLooped, setIsLooped] = useState(false);
  const [isPlaylistShuffled, setIsPlaylistShuffled] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleVideoChange = (index, url) => {
    setCuerrentVideoUrl(url);
    setCurrentVideoIndex(index);
  };

  const [playerSize, setPlayerSize] = useState({ width: 672, height: 404 });


  const handleNextSong = () => {
    // its own function, we have similar in SelectionsPlayer
    if (isPlaylistShuffled)
    {
      playRandomSong();
    } else
    {
      const nextSongIndex = (currentVideoIndex + 1) % playlist.length;
      setCuerrentVideoUrl(playlist[nextSongIndex].url);
      setCurrentVideoIndex(nextSongIndex);
    }
  };

  const playRandomSong = () => {
    const min = 0;
    const max = playlist.length - 1;

    let newIndex;
    do
    {
      newIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newIndex === currentVideoIndex);

    setCuerrentVideoUrl(playlist[newIndex].url);
    setCurrentVideoIndex(newIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768)
      {
        setPlayerSize({ width: '296px', height: '304px' });
      } else if (screenWidth >= 768 && screenWidth < 1440)
      {
        setPlayerSize({ width: '672px', height: '404px' });
      } else
      {
        setPlayerSize({ width: '700px', height: '468px' });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  console.log(window.innerWidth);
  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section id="anima" className="lullabies-animation text-sm margin-bottom">
      <div className="player-container">
        <div className="video-player-container">
          <ReactPlayer
            className="video-player"
            url={ playlist[currentVideoIndex].url }
            width={ playerSize.width }
            height={ playerSize.height }
            playing={ isPlaying }
            onPlay={ handlePlay }
            onPause={ handlePause }

            controls={ true }
            isLooped={ isPlaylistLooped }
            onEnded={ () => {
              if (isPlaylistLooped)
              {
                handleNextSong();
              }
              else
              {
                if (currentVideoIndex < playlist.length - 1)
                {
                  setCurrentVideoIndex(currentVideoIndex + 1);
                }
              }
            } }
          />
          <div className="lullabies-player">
            <Player
              isLightTheme={ isLightTheme }
              setCurrentVideoUrl={ currentVideoUrl }
              playlist={ playlist }
              currentSongIndex={ currentVideoIndex }
              setCurrentVideoIndex={ setCurrentVideoIndex }
              isPlaylistLooped={ isPlaylistLooped }
              setIsPlaylistLooped={ setIsPlaylistLooped }
              isPlaylistShuffled={ isPlaylistShuffled }
              setIsPlaylistShuffled={ setIsPlaylistShuffled }
              playRandomSong={ playRandomSong }
              name={ playlist[currentVideoIndex].name }
              setIsPlaying={ setIsPlaying }
              isPlaying={ isPlaying }

            />
          </div>

        </div>
      </div>

      <ul className="playlist-anima playlist-scroll">

        { playlist.map(({ cover, name, duration, url }, index) => (
          <li
            key={ index }
            className={ classNames('playlist-card', { 'current-card': index === currentVideoIndex, 'playlist-card-light': isLightTheme, 'playlist-card-dark': !isLightTheme }) }
            onClick={ () => handleVideoChange(index, url) }
          >
            <img src={ cover } alt={ `Мініатюра відео ${index + 1}` } className="card-img" />
            <div className="card-text">
              <p className="text-sm">{ name }</p>
            </div>
          </li>
        )) }
      </ul>
    </section >
  );
};