import { createSlice } from "@reduxjs/toolkit";

const PP = createSlice({
  name: "ProfileInfo",
  initialState: [],
  reducers: {
    AddProfile: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});
export const { AddProfile } = PP.actions;
export default PP.reducer;
