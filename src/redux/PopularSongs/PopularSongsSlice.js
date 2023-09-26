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

      const playlistItemsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${playlistId}&maxResults=${maxResults}&part=snippet`
      );

      const videoIds = playlistItemsResponse.data.items
        .map((item) => item.snippet.resourceId.videoId)
        .join(",");

      const videosResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,statistics`
      );
      console.log(videosResponse);
      const list = videosResponse.data.items.map((item) => ({
        id: item.id,
        title: item.snippet.title,
        viewCount: item.statistics.viewCount,
      }));

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
