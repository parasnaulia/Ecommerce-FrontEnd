import { createSlice } from "@reduxjs/toolkit";

const CardData = createSlice({
  name: "CardItems",
  initialState: [],
  reducers: {
    AddCardItems: (state, action) => {
      return [...state, ...action.payload];
    },
    DeleteData: (state, action) => {
      return action.payload;
    },
  },
});
export default CardData.reducer;
export const { AddCardItems, DeleteData } = CardData.actions;
