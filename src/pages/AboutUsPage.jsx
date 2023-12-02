import React from "react";
import AboutUsInfo from "../components/AboutUsInfo/AboutUsInfo";
import FormFeedBack from "../components/FormFeedBack/FormFeedBack";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { OurPartners } from "../components/OurPartners/OurPartners";

export const AboutUs = () => (
  <>
    <AboutUsInfo />
    <OurAchivements />
    <div className="slider">
      <OurPartners />
      <FormFeedBack />
    </div>
  </>
);
