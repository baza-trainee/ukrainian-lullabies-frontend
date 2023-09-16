import React from "react";
import { SupportTheProject } from "./SupportTheProject/SupportTheProject";
import './OurAchivements.css'

export const OurAchivements = () => {
  return <section className="ourAchivements">
    <h2 className="ourAchivementsTitle">Наші напрацювання</h2>
    <div className="achivements">
      <div className="achivement">
        <div className="data">123</div>
        <div className="dataName">Колискових</div>
      </div>
      <div className="achivement">
        <div className="data">21</div>
        <div className="dataName">Локацій</div>
      </div>
      <div className="achivement">
        <div className="data">48</div>
        <div className="dataName">Виконавців</div>
      </div>
    </div>
    <SupportTheProject />
    </section>;
};

