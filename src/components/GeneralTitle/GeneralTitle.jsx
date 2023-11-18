import React from "react";
import "../../components/GeneralTitle/general-title.css";
import SIcon from "../../icons/SIcon";

export const GeneralTitle = () => {
  return (
    <div className="kolyskova-container">
      <div className="kolyIcon text-5xl">Koly</div>
      <div className="letterS">
        <SIcon />
      </div>
      <div className="kovaIcon text-5xl">Kova</div>
      <div className="oundIconWrap text-5xl">ound</div>
    </div>
  );
};
