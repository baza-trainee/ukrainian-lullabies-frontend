import { createSlice } from "@reduxjs/toolkit";

const animationSlice = createSlice({
  name: 'animation',
  initialState: { isVisible: false },
  reducers: {
    setVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setVisibility } = animationSlice.actions;

export default animationSlice.reducer;