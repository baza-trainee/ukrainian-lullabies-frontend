import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async () => {
  const response = await axios.get("http://lullabies.eu-north-1.elasticbeanstalk.com/api/contacts/");
  return response.data.results;
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      (state.loading = false), (state.data = action.payload), (state.error = "");
    });
    builder.addCase(fetchContacts.rejected, (state, action) => {
      (state.loading = false), (state.data = []), (state.error = action.error.message);
    });
  },
});

export default contactsSlice.reducer;
