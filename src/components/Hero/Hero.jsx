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

import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.heroWrapper}>
        <div className={styles.kolyskovaWrap}>
          <KolyIcon />
          <SIcon className={styles.letterS} />
          <KovaIcon />
          <div className={styles.oundIconWrap}>
            <OundIcon />
          </div>
        </div>
        <div className={styles.ornamentWrap}>
          <OrnamentsLeftIcon />
          <p className={styles.text}>
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
        <div className={styles.btn}>
          <Button variant="listen">
            Слухати <ShevronDown className={styles.shevronDownIcon} />
          </Button>
          <Button variant="share">
            Поділитися
            <Share className={styles.shareIcon} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default Hero;
