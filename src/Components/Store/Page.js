import { createSlice } from "@reduxjs/toolkit";

const Paging = createSlice({
  name: "Page",
  initialState: 0,
  reducers: {
    PageAdd: (state, action) => {
      return action.payload;
    },
  },
});
export const { PageAdd } = Paging.actions;
export default Paging.reducer;
