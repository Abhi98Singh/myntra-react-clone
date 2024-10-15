import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload); //action.payload me item ki id aayegi
      //yaha state ko return karne ki need nahi thi, bcz state ko modify kiya or last cheez automatically return ho jati hai
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
      //yaha state ko return kiya kyuki filter() naya array return karega
    },
  },
});

export const { addToBag, removeFromBag } = bagSlice.actions;

export default bagSlice;
// export default bagSlice.reducer;
