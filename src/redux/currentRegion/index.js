import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRegion: "0",
  name: "Karpaty",
};

const currentRegionSlice = createSlice({
  name: "currentRegion",
  initialState,
  reducers: {
    setCurrentRegion: (state, action) => {
      state.currentRegion = action.payload;
    },
    setCurrentRegionName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setCurrentRegion, setCurrentRegionName } =
  currentRegionSlice.actions;
export default currentRegionSlice.reducer;
