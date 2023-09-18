import React from 'react';
import './ErrorPage.css';
import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import { NumberFour, NumberNull } from '../../icons/Numbers';
import { useSpring, animated } from 'react-spring';

export const ErrorPage = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });
  return (
    <animated.div style={ animationProps } className={ classNames('errorPage', {
      'bg-dark': !isLightTheme,
      'bg-light': isLightTheme,
    }) }>
      <div className="errorPage__border">
        <div className="errorPage__element container">
          <h2 className="errorPage__title">
            Page not found
          </h2>
          <div className="errorPage__svg404">
            <NumberFour />
            <NumberNull />
            <NumberFour />
          </div>
        </div>
      </div>
      <div className="errorPage__block container">
        <div className="element-right">
          <OrnamentsLeftIcon />
        </div>
        <p className="element-center">
          It may have been moved or deleted.
        </p>
        <div className="element-left">
          <OrnamentsRightIcon />
        </div>
      </div>
      <div className="container">
        <NavLink to="/" className={ classNames('button', 'errorPage-button', { 'button-dark': !isLightTheme, }) }> На головну </NavLink>
      </div>
    </animated.div>)
};
