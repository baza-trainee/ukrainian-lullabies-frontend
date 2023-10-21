/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [
    {
      index: 0,
      id: 4,
      name: "---- ----",
      url: "#",
      duration: "00:00",
    },
  ],
  error: "",
};

export const fetchData = createAsyncThunk("traditionSongs/fetchData", async (lang, { dispatch }) => {
  try {
    dispatch(fetchDataStart()); // Викликати fetchDataStart перед запитом з параметром `lang`
    const response = await axios.get("http://lullabies.eu-north-1.elasticbeanstalk.com/api/lullabies/?source-format=audio", {
      headers: {
        "Accept-Language": lang,
      },
    });
    const formatedData = response.data.results.map((item, index) => ({
      params: item.name.replace(/\s/g, ''),
      index: index,
      id: item.source.id,
      name: item.name,
      url: item.source.audio,
      lyrics: item.lyrics,
      duration: item.source.duration.slice(3, 8),
      region: item.region.name,
    }));
    dispatch(fetchDataSuccess(formatedData));
    return formatedData;
  } catch (err) {
    dispatch(fetchDataFailure(err));
    throw err;
  }
});

const traditionSongsSlice = createSlice({
  name: "traditionSongs",
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

export default traditionSongsSlice.reducer;
export const selectData = (state) => state.traditionalSongs.data;
export const selectLoading = (state) => state.traditionalSongs.loading; // Оновлено селектор
export const selectError = (state) => state.traditionalSongs.error; // Оновлено селектор
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = traditionSongsSlice.actions;
