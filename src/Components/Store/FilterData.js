import { createSlice } from "@reduxjs/toolkit";

const Filtered = createSlice({
  name: "Filter",
  initialState: [],
  reducers: {
    AddFilter: (state, action) => {
      return action.payload;
    },
    EmptyData: () => {
      return [];
    },
    Sorting: (state) => {
      return state.sort(function (a, b) {
        return b.rating.rate - a.rating.rate;
      });
    },
    Count: function (state) {
      return state.sort(function (a, b) {
        return b.rating.count - a.rating.count;
      });
    },
    Price: function (state) {
      return state.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    Search1: (state, action) => {
      // console.log("this is my state data" + state);

      console.log(action.payload);
      let arr = state.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      console.log(arr);
      return arr;
    },
  },
});
export default Filtered.reducer;
export const { AddFilter, EmptyData, Sorting, Count, Price, Search1 } =
  Filtered.actions;
