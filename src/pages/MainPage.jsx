import React from "react";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { MapTabs } from "../components/MapTabs/MapTabs";
import Hero from "../components/Hero/Hero";
import Chatbot from "../components/Chatbot/Chatbot";
import AnimatedElement from "../components/Animation/animation";
export const MainPage = () => {
  return (

    <>
      <Hero />
      <OurAchivements />
      <AnimatedElement>
        <MapTabs />
      </AnimatedElement>
      <Chatbot /></>
  );
};
