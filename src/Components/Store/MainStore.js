import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "MainStore",
  initialState: [],
  reducers: {
    AddMainStore: (state, action) => {
      return action.payload;
    },
    DeleteMain: (state, action) => {
      return action.payload;
    },
    AddCartItem1: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});
export default data.reducer;
export const { AddMainStore, DeleteMain, AddCartItem1 } = data.actions;
