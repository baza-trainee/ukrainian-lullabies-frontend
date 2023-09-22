import React from "react";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { OurPartners } from "../components/OurPartners/OurPartners";

export const AboutUs = () => {
  return <>
    <OurAchivements />
    <div className="slider">
      <OurPartners />
    </div>

  </>
};
