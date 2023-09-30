import { configureStore } from "@reduxjs/toolkit";
import PopularSongsSlice from "./PopularSongs/PopularSongsSlice";
import themeReducer from "./theme/themeSlice";
import dataReducer from "./DataSlice";
import currentSongReducer from "./currentSong/currentSongSlice";


const store = configureStore({
  reducer: {
    theme: themeReducer,
    popularSongs: PopularSongsSlice,
    data: dataReducer,
    currentSong: currentSongReducer,
  },
});

export default store;
