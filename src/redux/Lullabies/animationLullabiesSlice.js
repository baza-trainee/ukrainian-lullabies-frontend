/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [
    {
      id: 0,
      songId: null,
      name: "---- ----",
      url: "#",
      duration: "00.00",
    },
  ],
  error: "",
};

export const fetchData = createAsyncThunk("selectionSongs/fetchData", async (lang) => {
  try {
    const response = await axios.get("http://lullabies.eu-north-1.elasticbeanstalk.com/api/lullabies/?source-format=audio", {
      headers: {
        "Accept-Language": lang,
      },
    });
    const formatedData = await response.data.results.map((item, ) => ({
        id: item.id,
          name: item.name,
          url: item.source.video,
          duration: item.source.duration,
          cover: item.source.cover,

    }));
    return formatedData;
  } catch (err) {
    throw err;
  }
});

const animationsSlice = createSlice({
  name: "animationSongs",
  initialState,
 reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default animationsSlice.reducer;
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = animationsSlice.actions;

export const selectData = (state) => state.animationSongs.data;
export const selectLoading = (state) => state.loading;
export const selectError = (state) => state.error;
