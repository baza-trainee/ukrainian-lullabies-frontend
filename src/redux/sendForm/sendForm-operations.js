import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/email";

export const fetchSendForm = createAsyncThunk(
  "form/sendForm",
  async (formData, thunkAPI) => {
    try {
      const data = await api.sendForm(formData);
      console.log(data);
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
