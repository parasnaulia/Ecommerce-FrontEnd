import { createSlice } from "@reduxjs/toolkit";

const Count = createSlice({
  name: "Count",
  initialState: 0,
  reducers: {
    AddCount: (state, action) => {
      return state + action.payload;
    },
    DeletePrice: (state, action) => {
      return state - action.payload;
    },
  },
});
export default Count.reducer;
export const { AddCount, DeletePrice } = Count.actions;
