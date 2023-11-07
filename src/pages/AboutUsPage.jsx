import React from "react";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { OurPartners } from "../components/OurPartners/OurPartners";
import AboutUsInfo from "../components/AboutUsInfo/AboutUsInfo";
import FormFeedBack from "../components/FormFeedBack/FormFeedBack";
export const AboutUs = () => {
  return (
    <>
      <AboutUsInfo />
      <OurAchivements />
      <div className="slider">
        <OurPartners />
        <FormFeedBack />
      </div>
    </>
  );
};
