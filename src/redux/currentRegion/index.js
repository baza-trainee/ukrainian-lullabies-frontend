import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRegion: "0",
};

const currentRegionSlice = createSlice({
  name: "currentRegion",
  initialState,
  reducers: {
    setCurrentRegion: (state, action) => {
      state.currentRegion = action.payload;
    },
  },
});

export const { setCurrentRegion } = currentRegionSlice.actions;
export default currentRegionSlice.reducer;
