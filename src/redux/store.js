import { configureStore } from "@reduxjs/toolkit";
import PopularSongsSlice from "./PopularSongs/PopularSongsSlice";
import themeReducer from "./theme/themeSlice";
import animationReducer from "./animation/animationSlice";
import animationReducer from './animation/animationSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    animation: animationReducer,
    popularSongs: PopularSongsSlice,
    animation: animationReducer,
  },
});

export default store;
