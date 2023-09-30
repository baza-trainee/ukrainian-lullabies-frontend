import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { OrnamentDouble, OrnamentTriple } from '../../icons/OrnamentTripple';
import './OurPartners.css';
import BazaDark from '../../images/Card_partners_black_baza.png';
import BazaLight from '../../images/Card_partners_white_baza.png';
import EtnoDark from '../../images/Card_partners_black_etno.png';
import EtnoLight from '../../images/Card_partners_white-etno.png';
import Red from '../../images/Card_partners_red.png';

export const OurPartners = () => {
  const isLightTheme = useSelector((state) => state.theme.isLightTheme);
  const bazaSvg = isLightTheme ? BazaLight : BazaDark;
  const etnoSvg = isLightTheme ? EtnoLight : EtnoDark;

  const { t } = useTranslation();
  return (
    <section className='margin-bottom'>
      <h2 className='text-4xl ourPartners'>{t('aboutUs')}</h2>
      <div className='partners-container margin-bottom'>
        <Link to="https://baza-trainee.tech"><img src={bazaSvg} alt='Baza' /></Link>
        <Link to="https://www.facebook.com/etnofotka/photos/"><img src={etnoSvg} alt='Etno' /></Link>
        <Link to="#"><img src={Red} alt='Partners' /></Link>
      </div>
      <div className='ornament-triple margin-bottom'>
        <OrnamentTriple />
      </div>
      <div className='ornament-double margin-bottom'>
        <OrnamentDouble />
      </div>
    </section>
  );
};
