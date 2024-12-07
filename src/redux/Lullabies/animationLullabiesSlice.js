/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../constants";

const initialState = {
  loading: false,
  data: [
    {
      id: 0,
      name: "",
      url: "#",
      cover: "#",
    },
  ],
  error: "",
};

export const fetchData = createAsyncThunk(
  "animationSongs/fetchData",
  async (lang) => {
    try {
      const response = await axios.get(
        `${baseUrl}lullabies/?source-format=video`,
        {
          headers: {
            "Accept-Language": lang,
          },
        }
      );
      const formatedData = await response.data.results.map((item) => ({
        id: item.pk,
        name: item.name,
        url: item.source.video,
        cover: item.source.preview,
      }));

      return formatedData;
    } catch (err) {
      throw err;
    }
  }
);

const animationsSlice = createSlice({
  name: "animationSongs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default animationsSlice.reducer;
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  animationsSlice.actions;
export const selectData = (state) => state.lullabiesinAnimations.data;
export const selectLoading = (state) => state.lullabiesinAnimations.loading;
export const selectError = (state) => state.lullabiesinAnimations.error;
