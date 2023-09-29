import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUrl: '',
  currentName: '',
  currentLyrics: '',
  currentId: 0,
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
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
});

export const { setCurrentUrl, setCurrentLyrics, setCurrentId, setCurrentName } = currentSongSlice.actions;
export default currentSongSlice.reducer;
