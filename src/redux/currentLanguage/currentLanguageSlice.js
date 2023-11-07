import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: localStorage.getItem("selectedLanguage"),
};

const currentLanguageSlice = createSlice({
  name: "currentLanguage",
  initialState,
  reducers: {
    languageChanged: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
});

export default currentLanguageSlice.reducer;
export const { languageChanged } = currentLanguageSlice.actions;
