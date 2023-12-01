import React from "react";
import { useDispatch } from "react-redux";
import Chatbot from "../components/Chatbot/Chatbot";
import Hero from "../components/Hero/Hero";
import { MapTabs } from "../components/MapTabs/MapTabs";
import { Donat } from "../components/OurAchivements/Donat/donat";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { PopularSongs } from "../components/PopularSongs/PopularSongs";
import { Selections } from "../components/Selections/Selections";
import { getPopularSongs } from "../redux/PopularSongs/PopularSongsSlice";

export const MainPage = () => {
  const dispatch = useDispatch();

  dispatch(getPopularSongs());
  return (
    <>
      <Hero />
      <PopularSongs />
      <Selections />
      <OurAchivements />
      <Donat />
      <MapTabs />
      <Chatbot />
    </>
  );
};
