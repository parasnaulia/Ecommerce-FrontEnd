import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "Index",
  initialState: null,
  reducers: {
    setIndex: (state, action) => {
      return action.payload;
    },
  },
});
export default data.reducer;
export const { setIndex } = data.actions;
