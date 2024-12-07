import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { baseUrl } from "../../constants";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const fetchDocs = createAsyncThunk("docs/fetchDocs", async (lang) => {
  try {
    const response = await axios.get(`${baseUrl}/documents/`, {
      headers: {
        "Accept-Language": lang,
      },
    });
    const data = response.data;
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

const docsSlice = createSlice({
  name: "docs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDocs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDocs.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchDocs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default docsSlice.reducer;
