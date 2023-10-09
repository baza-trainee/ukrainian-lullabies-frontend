import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlayer: "",
};

const currentPlayerSlice = createSlice({
  name: "currentPlayer",
  initialState,
  reducers: {
    playerChanged: (state, action) => {
      state.currentPlayer = action.payload;
    },
  },
});

export default currentPlayerSlice.reducer;
export const { playerChanged } = currentPlayerSlice.actions;
