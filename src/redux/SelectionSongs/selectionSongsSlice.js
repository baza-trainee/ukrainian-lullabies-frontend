/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

export const fetchData = createAsyncThunk(
  "selectionSongs/fetchData",
  async (lang) => {
    try {
      const response = await axios.get(
        "https://api.kolyskova.com/lullabies/?source-format=audio&type=new",
        {
          headers: {
            "Accept-Language": lang,
          },
        }
      );
      // console.log("selections response: ", response);
      const formatedData = await response.data.results.map((item, index) => ({
        id: index,
        songId: item.source.id,
        name: item.name,
        url: item.source.audio,
        duration: item.source.duration.slice(3, 8),
      }));

      // console.log("selections formated data: ", formatedData);

      if (formatedData.length === 0) {
        console.log("SelectionsSlice: formattedData is empty; No songs data");
        throw new Error("No songs data");
      }

      return formatedData;
    } catch (err) {
      console.log("selectionsSongs: request failed :(");
      throw err;
    }
  }
);

const selecionSongsSlice = createSlice({
  name: "selectionSongs",
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

export default selecionSongsSlice.reducer;
