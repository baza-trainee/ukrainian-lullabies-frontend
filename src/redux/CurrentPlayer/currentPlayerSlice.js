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
      console.log("currentPlayer: ", state.currentPlayer);
    },
  },
});

export default currentPlayerSlice.reducer;
export const { playerChanged } = currentPlayerSlice.actions;
