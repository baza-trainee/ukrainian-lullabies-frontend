import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import animationReducer from './animation/animationSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    animation: animationReducer,
  },
});

export default store;
