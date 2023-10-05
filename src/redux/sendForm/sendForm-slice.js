import { createSlice } from "@reduxjs/toolkit";
import { fetchSendForm } from "./sendForm-operations";

const initialState = {
  name: "",
  email: "",
  theme: "",
  message: "",
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
        store.name = payload.name;
        store.email = payload.email;
        store.theme = payload.theme;
        store.message = payload.message;
      })
      .addCase(fetchSendForm.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      });
  },
});
export default sendFormSlice;
