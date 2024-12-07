import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../constants";

const initialState = {
  popularSongs: [],
};

export const getPopularSongs = createAsyncThunk(
  "popularSongs/getPopularSongs",
  async (language, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        `${baseUrl}lullabies/?ordering=-views&limit=3&source-format=audio`,
        {
          headers: { "Accept-Language": language },
        }
      );
      return result.data;
    } catch (error) {
      console.error("Error fetching popular songs:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const popularSongsSlice = createSlice({
  name: "popularSongs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularSongs.fulfilled, (state, action) => {
      state.popularSongs = action.payload;
    });
  },
});

export default popularSongsSlice.reducer;
