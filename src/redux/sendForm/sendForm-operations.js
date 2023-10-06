import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/services/email";

export const fetchSendForm = createAsyncThunk(
  "form/sendForm",
  async (data, thunkAPI) => {
    try {
      const result = await api.sendForm(data);
      return result.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);
