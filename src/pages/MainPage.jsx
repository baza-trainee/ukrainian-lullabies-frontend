import React from "react";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { MapTabs } from "../components/MapTabs/MapTabs";
import Hero from "../components/Hero/Hero";
import Chatbot from "../components/Chatbot/Chatbot";

export const MainPage = () => {
  return (
    < >
      <Hero />
      <MapTabs />
      <Chatbot />
    <OurAchivements />
    </>
  );
};
