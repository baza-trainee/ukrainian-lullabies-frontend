import React from 'react';
import KolyIcon from '../../icons/KolyIcon';
import SIcon from '../../icons/SIcon';
import KovaIcon from '../../icons/KovaIcon';
import OundIcon from '../../icons/OundIcon';
import OrnamentsLeftIcon from '../../icons/OrnamentsLeftIcon';
import OrnamentsRightIcon from '../../icons/OrnamentsRightIcon';
import Button from '../../shared/components/Button/Button';
import Share from '../../icons/Share';
import './hero.css';

const Hero = () => {


  return (
    <div className=" container heroWrapper margin-bottom">
      <div className="kolyskovaWrap">
        <div className="kolyIcon">
          <KolyIcon />
        </div>
        <div className="letterS">
          <SIcon />
        </div>
        <div className="kovaIcon">
          <KovaIcon />
        </div>
        <div className="oundIconWrap">
          <OundIcon />
        </div>
      </div>
      <div className="ornamentWrap animation">
        <OrnamentsLeftIcon />
        <p className="ornamentWrap__text">
          Поринь у чарівний світ української колискової. Тут у <br />
          кожній ноті оживає душа народу, у кожному слові
          <br /> закарбовано генетичний зв’язок з родом. Відкрий для себе
          <br />
          неповторний колисковий світ, де від покоління до
          <br /> покоління линуть мелодійні слова любові та ніжності,
          <br />
          закодовані на щасливу долю дитини.
        </p>
        <OrnamentsRightIcon />
      </div>
      <div className="hero-btn animation">
        <Button variant="listen" disabled>
          Слухати
        </Button>
        <Button variant="share" disabled>
          Поділитися
          <Share className="shareIcon" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
