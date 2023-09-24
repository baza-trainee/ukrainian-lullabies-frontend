import React from "react";
import "./lullabies-animation.css";
import { useTranslation } from 'react-i18next';

export const LullabiesInAnimation = () => {
  const { t } = useTranslation();
  return <section id="anima" className="lullabies-animation" ><h2>{ t('animatedLullabies') }</h2></section>;
};