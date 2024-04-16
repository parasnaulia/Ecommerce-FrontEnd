import { createSlice } from "@reduxjs/toolkit";

const Data = createSlice({
  name: "Data",
  initialState: [],
  reducers: {
    Add: (state, action) => {
      // console.log(action.payload);
      return action.payload;
    },
    
  },
});
export const { Add } = Data.actions;
export default Data.reducer;
