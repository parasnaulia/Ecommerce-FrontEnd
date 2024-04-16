import { createSlice } from "@reduxjs/toolkit";

const Count = createSlice({
  name: "Price",
  initialState: 0,
  reducers: {
    AddPrice: (state, action) => {
      return action.payload;
    },
  },
});
export default Count.reducer;
export const { AddPrice } = Count.actions;
