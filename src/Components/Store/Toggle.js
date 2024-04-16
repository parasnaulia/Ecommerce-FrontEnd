import { createSlice } from "@reduxjs/toolkit";

const Toggle1 = createSlice({
  name: "Toggle",
  initialState: false,
  reducers: {
    Toggle_ham: (state, action) => {
      return !state;
    },
  },
});
export const { Toggle_ham } = Toggle1.actions;
export default Toggle1.reducer;
