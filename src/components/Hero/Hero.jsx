import React from "react";

import KolyIcon from "../../icons/KolyIcon";
import SIcon from "../../icons/SIcon";
import KovaIcon from "../../icons/KovaIcon";
import OundIcon from "../../icons/OundIcon";
import OrnamentsLeftIcon from "../../icons/OrnamentsLeftIcon";
import OrnamentsRightIcon from "../../icons/OrnamentsRightIcon";
import Button from "../../shared/components/Button/Button";
import Share from "../../icons/Share";
import ShevronDown from "../../icons/ShevronDown";

import css from "./hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={css.heroWrapper}>
        <div className={css.kolyskovaWrap}>
          <KolyIcon />
          <SIcon className={css.letterS} />
          <KovaIcon />
          <div className={css.oundIconWrap}>
            <OundIcon />
          </div>
        </div>
        <div className={css.ornamentWrap}>
          <OrnamentsLeftIcon />
          <p className={css.text}>
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
        <div className={css.btn}>
          <Button variant="listen" disabled>
            Слухати <ShevronDown className={css.shevronDownIcon} />
          </Button>
          <Button variant="share" disabled>
            Поділитися
            <Share className={css.shareIcon} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Hero;
