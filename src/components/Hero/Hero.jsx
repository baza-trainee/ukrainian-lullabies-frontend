import React from 'react';
import { motion } from 'framer-motion';
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
  const animationElement = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 2, delay: custom * 0.3 },
    }),
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className=" container heroWrapper margin-bottom">
      <motion.div custom={ 1 } variants={ animationElement } className="kolyskovaWrap">
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
      </motion.div>
      <motion.div
        custom={ 2 }
        variants={ animationElement }
        className="ornamentWrap">
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
        </ p>
        <OrnamentsRightIcon />
      </motion.div>
      <motion.div custom={ 3 } variants={ animationElement } className="hero-btn animation">
        <Button variant="listen" disabled>
          Слухати
        </Button>
        <Button variant="share" disabled>
          Поділитися
          <Share className="shareIcon" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
