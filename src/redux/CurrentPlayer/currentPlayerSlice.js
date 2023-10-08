import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPlayer: "",
};

const CurrentPlayerSlice = createSlice({
  name: "currentPlayer",
  initialState,
  reducers: {
    playerChanged: (state, action) => {
      state.currentPlayer = action.payload;
      console.log("currentPlayer: ", state.currentPlayer);
    },
  },
});

export default CurrentPlayerSlice.reducer;
export const { playerChanged } = CurrentPlayerSlice.actions;
