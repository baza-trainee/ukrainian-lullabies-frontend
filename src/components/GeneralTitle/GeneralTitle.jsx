import React from "react";
import SIcon from "../../icons/SIcon";
import "../../components/GeneralTitle/general-title.css";

export const GeneralTitle = () => {


  return (

    <div
      className="kolyskova-container"
    >
      <div className="kolyIcon text-5xl">
        Koly
      </div>
      <div className="letterS">
        <SIcon />
      </div>
      <div className="kovaIcon text-5xl">
        Kova
      </div>
      <div className="oundIconWrap text-5xl">
        ound
      </div>
    </div>
  )
}