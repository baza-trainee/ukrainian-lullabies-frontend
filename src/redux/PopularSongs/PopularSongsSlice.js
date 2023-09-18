import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  popularSongs: [],
};

export const getPopularSongs = createAsyncThunk(
  "popularSongs/getPopularSongs",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const apiKey = "AIzaSyDQAPHCSSZBfNmiqsHR_HvxxX5DL_PAjQo";
      const playlistId = "PL7E436F1EC114B001";
      const maxResults = 3;

      const result = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&maxResults=${maxResults}`
      );

      console.log(result);
      const list = result.data.items.map((item) => item.id);

      dispatch(setPopularSongs(list));
      return list;
    } catch (error) {
      console.error("Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const popularSongsSlice = createSlice({
  name: "popularSongs",
  initialState,
  reducers: {
    setPopularSongs: (state, action) => {
      state.popularSongs = action.payload;
      console.log(state.popularSongs);
    },
  },
});

export const { setPopularSongs } = popularSongsSlice.actions;

export default popularSongsSlice.reducer;
