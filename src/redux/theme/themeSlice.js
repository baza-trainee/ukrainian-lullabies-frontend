import { createSlice } from "@reduxjs/toolkit";

const isPreferredLight = localStorage.getItem("isPreferredLight");

const initialState = {
  isLightTheme: isPreferredLight ? true : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changedToLight: (state) => {
      state.isLightTheme = true;
      localStorage.setItem("isPreferredLight", true);
    },
    changedToDark: (state) => {
      state.isLightTheme = false;
      localStorage.removeItem("isPreferredLight");
    },
  },
});

export default themeSlice.reducer;
export const { changedToLight, changedToDark } = themeSlice.actions;
