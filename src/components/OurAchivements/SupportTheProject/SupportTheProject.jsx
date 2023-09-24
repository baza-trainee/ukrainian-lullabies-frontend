import React from "react";
import { useTranslation } from 'react-i18next';

import { CoffeeLogo } from "./CoffeeLogo/CoffeeLogo";
import { DonatLogo } from "./DonatLogo/DonatLogo";
import "./SupportTheProject.css";

export function SupportTheProject() {
  const { t } = useTranslation();
  return (
    <div className="SupportTheProject margin-bottom">
      <div className="text-2xl">{ t('helpWith') }</div>
      <div className="donats">
        <CoffeeLogo />
        <DonatLogo />
      </div>
    </div>
  );
}
