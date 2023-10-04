import React from "react";
import { CoffeeLogo } from "../CoffeeLogo/CoffeeLogo";
import { PatreonLogo } from "../PatreonLogo/PatreonLogo";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./donat.css";

export const Donat = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="achievements-support-container">
        <p className="text-2xl">{ t("helpWith") }</p>
        <div className="donats">
          <Link href="#">
            <CoffeeLogo />
          </Link>
          <Link href="#">
            <PatreonLogo />
          </Link>
        </div>
      </div>
    </>
  )
}