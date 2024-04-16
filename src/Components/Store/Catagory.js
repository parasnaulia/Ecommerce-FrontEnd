import { createSlice } from "@reduxjs/toolkit";

const Catagory = createSlice({
  name: "Cat",
  initialState: "",
  reducers: {
    AddCat: (state, action) => {
      return action.payload;
    },
  },
});
export const { AddCat } = Catagory.actions;
export default Catagory.reducer;
