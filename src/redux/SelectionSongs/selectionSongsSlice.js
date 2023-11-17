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
  console.log("selectionsSongs: starting request...");
  try {
    // const response = await axios.get("http://lullabies.eu-north-1.elasticbeanstalk.com/api/lullabies/?source-format=audio", {
    const response = await axios.get("https://api.kolyskova.com/lullabies/?source-format=audio", {
      headers: {
        "Accept-Language": lang,
      },
    });
    console.log("response: ", response);
    const formatedData = await response.data.results.map((item, index) => ({
      id: index,
      songId: item.id,
      name: item.name,
      url: item.source.audio,
      duration: item.source.duration.slice(3, 8),
    }));
    console.log("formated data: ", formatedData);
    
    if (formatedData.length === 0) {
      throw new Error("SelectionsSlice: formattedData length is 0");
    }

    return formatedData;
  } catch (err) {
    console.log("selectionsSongs: request failed :(");
    throw err;
  }
});

const selecionSongsSlice = createSlice({
  name: "selectionSongs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload), (state.error = "");
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      (state.loading = false), (state.error = action.error.message);
    });
  },
});

export default selecionSongsSlice.reducer;
