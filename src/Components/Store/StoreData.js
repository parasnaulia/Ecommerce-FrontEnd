import { createSlice } from "@reduxjs/toolkit";
const data = createSlice({
  name: "StoreData",
  initialState: [],
  reducers: {
    AddStoreData: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});
export const { AddStoreData } = data.actions;
export default data.reducer;
