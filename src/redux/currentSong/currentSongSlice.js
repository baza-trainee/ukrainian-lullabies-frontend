import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUrl: '',
  currentName: '',
  currentLyrics: '',
  currentIndex: 0,
};

const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
    setCurrentName: (state, action) => {
      state.currentName = action.payload;
    },
    setCurrentLyrics: (state, action) => {
      state.currentLyrics = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
  },
});

export const { setCurrentUrl, setCurrentLyrics, setCurrentIndex, setCurrentName } = currentSongSlice.actions;
export default currentSongSlice.reducer;
