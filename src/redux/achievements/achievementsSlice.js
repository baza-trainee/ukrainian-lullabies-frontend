import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchAchievements = createAsyncThunk(
  "achievements/fetchAchievements",
  async () => {
    try {
      const response = await axios.get("https://api.kolyskova.com/statistic/");
      const data = response.data;
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

const achievementsSlice = createSlice({
  name: "achievements",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAchievements.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAchievements.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAchievements.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default achievementsSlice.reducer;
