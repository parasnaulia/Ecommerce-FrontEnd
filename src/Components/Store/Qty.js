import { createSlice } from "@reduxjs/toolkit";
const quantity = createSlice({
  name: "Qty",
  initialState: [],
  reducers: {
    AddQty: (state, action) => {
      return action.payload;
    },
  },
});
export default quantity.reducer;
export const { AddQty } = quantity.actions;
