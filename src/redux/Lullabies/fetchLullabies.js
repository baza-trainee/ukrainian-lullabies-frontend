/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../constants";

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

export const fetchData = createAsyncThunk(
  "traditionSongs/fetchData",
  async (lang, { dispatch }) => {
    try {
      dispatch(fetchDataStart());
      const response = await axios.get(`${baseUrl}lullabies/?type=archive`, {
        headers: {
          "Accept-Language": lang,
        },
      });
      const formatedData = response.data.results.map((item, index) => ({
        params: item.name.replace(/\s/g, ""),
        index: index,
        id: item.source.id,
        name: item.name,
        url: item.source.audio,
        lyrics: item.lyrics,
        duration: item.source.duration.slice(3, 8),
        region: item.region.name,
        regionId: item.region.pk,
      }));
      dispatch(fetchDataSuccess(formatedData));
      return formatedData;
    } catch (err) {
      dispatch(fetchDataFailure(err));
      throw err;
    }
  }
);

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
export const selectLoading = (state) => state.traditionalSongs.loading;
export const selectError = (state) => state.traditionalSongs.error;
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  traditionSongsSlice.actions;
