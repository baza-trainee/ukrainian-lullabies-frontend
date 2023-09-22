import React from 'react';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import "./AboutUsInfo.css";
import Patreon from "./patreon";

const AboutUsInfo = () => {
    const isLightTheme = useSelector((state) => state.theme.isLightTheme);

    return (
        <section className='container about-as-info_wrapper'>
            <p className='text-4xl about-as-info_title'>Про нас</p>
            <div className='about-as-info_target'>
                <div className='about-as-info_img-container'>
                    <img src='/img/aboutUs/aboutUs-target.png' alt='mother with baby' />
                </div>
                <div className='about-as-info_target-info'>
                    <p className='text-2xl about-as-info_title-small'>
                        Мета нашого проекту
                    </p>
                    <p className='text-base'>
                        Мета нашого проєкту - створення медіаплатформи, на якій Ви зможете ознайомитися з колисковими піснями з усіх регіонів України (українців та національних меншин), вивчити пісні, щоб співати своїй дитині або створити власний play-лист з колисковими, щоб програвати його.
                    </p>
                    <p className='text-base'>
                        Для реалізації проєкту &quot;Українські колискові&quot; науковці з Науково-дослідної лабораторії етномузикології Національної музичної академії України та IT-волонтери з платформи &quot;Baza Trainee Ukraine&quot; об&apos;єднались в команду і представили проєкт на Hatathon 4.0: Ukraine Heritage Edition, де він став одним з найкращих в галузі збереження нематеріальної культурної спадщини, створили громадську організацію &quot;Музей колискової&quot; та разом працюють над створенням медіаресурсу з колисковими піснями для мам і дітей, для родин в Україні і за кордоном.
                    </p>
                </div>
            </div>
            <div className='about-as-info_ornament'>
                <img src="/img/aboutUs/Ornaments.svg" alt="ornament" />
            </div>
            <div className='about-as-info_support'>
                <div className='about-as-info_support-info'>
                    <p className='text-2xl about-as-info_title-small'>
                        Ви можете підтримати нас
                    </p>
                    <p className='text-base'>
                        Ви можете підтримати розвиток проєкту &quot;Українські колискові&quot; і бути в курсі перших новин, отримати приємні бонуси, оформивши підписку на проєкт на Patreon або Buy me a Coffee.
                    </p>
                    <p className='text-base'>
                        Донати підуть на поповнення колекції колискових та забезпечення діяльності платформи: на оплату сервера на AWS для збереження унікальних записів української автентики, на оплату хостингу для платформи, на забезпечення наукового та технічного супроводу, юридичної підтримки проєкту і – на нові експедиції та записи!
                    </p>
                    <p className='text-base'>
                        З повагою, команда проєкту &quot;Українські колискові&quot;
                    </p>
                    <p className='text-base-semibold'>
                        Задонатити можна тут:
                    </p>
                    <div className='about-as-info_donat-imgs'>
                        <div className='about-as-info_donat-bmc'>
                            <Link href='#' className="buy-me-a-caffee"></Link>
                        </div>
                        <div className='about-as-info_donat-patreon'>
                            <Link href='#' className={ classNames("patreon_dark", {"patreon_white":isLightTheme}) }><Patreon /></Link>
                        </div>
                    </div>
                </div>
                <div className='about-as-info_img-container another-hight'>
                    <img src='/img/aboutUs/aboutUs-support.png' alt='mother with baby' />
                </div>
            </div>
        </section>
    )
}

export default AboutUsInfo;