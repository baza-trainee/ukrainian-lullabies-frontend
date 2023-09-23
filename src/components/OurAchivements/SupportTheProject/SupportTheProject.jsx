import React from "react";
import { CoffeeLogo } from "./CoffeeLogo/CoffeeLogo";
import { DonatLogo } from "./DonatLogo/DonatLogo";
import "./SupportTheProject.css";

export function SupportTheProject() {
  return (
    <div className="SupportTheProject margin-bottom">
      <div className="text-2xl">Допоможи розвитку проєкту:</div>
      <div className="donats">
        <CoffeeLogo />
        <DonatLogo />
      </div>
    </div>
  );
}
