import React from "react";
import { OurAchivements } from "../components/OurAchivements/OurAchivements";
import { MapTabs } from "../components/MapTabs/MapTabs";
import Hero from "../components/Hero/Hero";
import Chatbot from "../components/Chatbot/Chatbot";
import { PopularSongs } from "../components/PopularSongs/PopularSongs";
import { useDispatch } from "react-redux";
import { getPopularSongs } from "../redux/PopularSongs/PopularSongsSlice";
import { Selections } from "../components/Selections/Selections";

export const MainPage = () => {
  const dispatch = useDispatch();

  dispatch(getPopularSongs());
  return (
    <>
      <Hero />
      <PopularSongs />
      <Selections />
      <MapTabs />
      <OurAchivements />
      <Chatbot />
    </>
  );
};
