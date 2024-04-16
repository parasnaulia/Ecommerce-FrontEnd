import { createSlice } from "@reduxjs/toolkit";

const Authen = createSlice({
  name: "Auth",
  initialState: false,
  reducers: {
    AddAuth: (state, action) => {
      return action.payload;
    },
  },
});
export const { AddAuth } = Authen.actions;
export default Authen.reducer;
