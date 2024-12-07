import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../constants";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchPartners = createAsyncThunk(
  "contacts/fetchPartners",
  async () => {
    const response = await axios.get(`${baseUrl}partners/`);
    return response.data.results;
  }
);

const partnersSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPartners.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPartners.fulfilled, (state, action) => {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchPartners.rejected, (state, action) => {
      (state.loading = false),
        (state.data = []),
        (state.error = action.error.message);
    });
  },
});

export default partnersSlice.reducer;
