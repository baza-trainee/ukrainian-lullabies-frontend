import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightTheme: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changedToLight: (state) => {
      state.isLightTheme = true;
    },
    changedToDark: (state) => {
      state.isLightTheme = false;
    },
  },
});

export default themeSlice.reducer;
export const { changedToLight, changedToDark } = themeSlice.actions;
