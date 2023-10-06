import { createSlice } from "@reduxjs/toolkit";
import { fetchSendForm } from "./sendForm-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const sendFormSlice = createSlice({
  name: "email",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSendForm.pending, (store) => {
        store.isLoading = true;
      })
      .addCase(fetchSendForm.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.items.push(payload);
      })
      .addCase(fetchSendForm.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});
export default sendFormSlice;
