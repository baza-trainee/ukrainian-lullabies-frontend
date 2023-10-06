import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
import "./lullabies-animation.css";
import { useTranslation } from 'react-i18next';
import classNames from "classnames";
import { useSelector } from "react-redux";

export const LullabiesInAnimation = () => {

  const [playlist] = useState([
    {
      url: 'https://www.youtube.com/watch?v=SGjK-uN7jnI',
      title: 'Сонько-дрімко',
      thumbnail: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '152',
      vievs: '295',
    },
    {
      url: 'https://www.youtube.com/watch?v=tHAIfNSJM4U',
      title: 'Котику сіренький',
      thumbnail: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '5112',
      vievs: '25',
    },

    {
      url: 'https://www.youtube.com/watch?v=lzbQgwjy8wc',
      title: 'Назва   відео',
      thumbnail: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '1112',
      vievs: '325',
    },
    {
      url: 'https://www.youtube.com/watch?v=pBTCycLsX7k&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=2',
      title: 'Мій солодкий ангел',
      thumbnail: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '133',
      vievs: '225',
    },
    {
      url: 'https://www.youtube.com/watch?v=t2o03R5BsFA',
      title: 'ОЙ ЛЮЛІ ЛЮЛІ налетіли гулі',
      thumbnail: 'https://psychblog.odb.poltava.ua/wp-content/uploads/2017/01/7896.jpg',
      likes: '12',
      vievs: '35',
    },
    {
      url: 'https://www.youtube.com/watch?v=DPLXJTyDppQ&list=OLAK5uy_lXxkzm7tF0RjPEPM0oepTF8T7H9it5Vs4&index=4',
      title: 'Назва   відео',
      thumbnail: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '108',
      vievs: '45',
    },
    {
      url: 'https://www.youtube.com/watch?v=qzdeqdmcBfY&list=RDEMFOFXNl9_ct3pVQzNXus1DQ&start_radio=1&rv=XjB_0W_w90o',
      title: 'Ой, люлі люлі',
      thumbnail: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642303842_1-papik-pro-p-son-klipart-1.png',
      likes: '190',
      vievs: '25',
    },
  ]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const handleVideoChange = (index) => {

    setCurrentVideoIndex(index);
  };
  const [playerSize, setPlayerSize] = useState({ width: 672, height: 404 });

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

  return (
    <section id="anima" className="lullabies-animation text-sm margin-bottom">
      <div className="player-container">
        <div className="video-player-container">
          <ReactPlayer
            className="video-player"
            url={ playlist[currentVideoIndex].url }
            width={ playerSize.width }
            height={ playerSize.height }
            controls={ true }
            onEnded={ () => {
              if (currentVideoIndex < playlist.length - 1)
              {
                setCurrentVideoIndex(currentVideoIndex + 1);
              }
            } }
          /></div>

        <div className="info">
          <p className="text-base">{ playlist[currentVideoIndex].title }</p>
        </div>

      </div>
 
      <ul className="playlist-anima playlist-scroll">
 
        { playlist.map((video, index) => (
          <li
            key={ index }
            className={ classNames('playlist-card', { 'current-card': index === currentVideoIndex, 'playlist-card-light': isLightTheme, 'playlist-card-dark': !isLightTheme }) }
            onClick={ () => handleVideoChange(index) }
          >
            <img src={ video.thumbnail } alt={ `Мініатюра відео ${index + 1}` } className="card-img" />
            <div className="card-text">
              <p className="card-title">{ video.title }</p>
              <p className="card-info heart">{ video.likes } лайків </p>
              <p className="card-info vievs">{ video.vievs } переглядів </p></div>
          </li>
        )) }
      </ul>
    </section >
  );
};