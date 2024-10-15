import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT_ITEMS } from "../utils/constants";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // console.log("reducer", state, action);
      return action.payload;
    },
  },
});

export const { addInitialItems } = itemsSlice.actions;

export default itemsSlice.reducer;
