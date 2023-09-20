import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./AboutUsInfo.css";

const AboutUsInfo = () => {
    const isLightTheme = useSelector((state) => state.theme.isLightTheme);

    return (
        <section className='about-as-info_wrapper container'>
            <p className='about-as-info_title'>Про нас</p>
            <div className='about-as-info_target'>
                <div className='about-as-info_target-img'>
                    <img src='/img/aboutUs/aboutUs-target.png' alt='mother with baby' />
                </div>
                <div className='about-as-info_target-info'>
                    <p className='about-as-info_title-small'>
                        Мета нашого проекту
                    </p>
                    <p className='about-as-info_text'>
                        Мета нашого проєкту - створення медіаплатформи, на якій Ви зможете ознайомитися з колисковими піснями з усіх регіонів України (українців та національних меншин), вивчити пісні, щоб співати своїй дитині або створити власний play-лист з колисковими, щоб програвати його.
                    </p>
                    <p className='about-as-info_text'>
                        Для реалізації проєкту &quot;Українські колискові&quot; науковці з Науково-дослідної лабораторії етномузикології Національної музичної академії України та IT-волонтери з платформи &quot;Baza Trainee Ukraine&quot; об&apos;єднались в команду і представили проєкт на Hatathon 4.0: Ukraine Heritage Edition, де він став одним з найкращих в галузі збереження нематеріальної культурної спадщини, створили громадську організацію &quot;Музей колискової&quot; та разом працюють над створенням медіаресурсу з колисковими піснями для мам і дітей, для родин в Україні і за кордоном.
                    </p>
                </div>
            </div>
            <div className='about-as-info_ornament'>
                <img src="/img/aboutUs/Ornaments.svg" alt="" />
               {/*  <img src="/img/aboutUs/Ornaments-left.svg" alt="" />
                <img src="/img/aboutUs/Ornaments-right.svg" alt="ornament" /> */}
            </div>

            <div className='about-as-info_support'>
                <div className='about-as-info_support__text'>
                    <p className='about-as-info_title-small'>
                        Ви можете підтримати нас
                    </p>
                    <p className='about-as-info_text'>
                        Ви можете підтримати розвиток проєкту &quot;Українські колискові&quot; і бути в курсі перших новин, отримати приємні бонуси, оформивши підписку на проєкт на Patreon або Buy me a Coffee.
                    </p>
                    <p className='about-as-info_text'>
                        Донати підуть на поповнення колекції колискових та забезпечення діяльності платформи: на оплату сервера на AWS для збереження унікальних записів української автентики, на оплату хостингу для платформи, на забезпечення наукового та технічного супроводу, юридичної підтримки проєкту і – на нові експедиції та записи!
                    </p>
                    <p className='about-as-info_text'>
                        З повагою, команда проєкту &quot;Українські колискові&quot;
                    </p>
                    <div className='about-as-info_donat'>
                        <p className='about-as-info_text about-as-info_donat-title'>
                            Задонатити можна тут:
                        </p>
                        <div className='about-as-info_donat-img'>
                            <img src='#' alt='' />
                            <img src='#' alt='' />
                        </div>
                    </div>
                </div>
                <div className='about-as-info_support__img'>
                    <img src='#' alt='' />
                </div>
            </div>
            
        </section>
    )
}

export default AboutUsInfo;