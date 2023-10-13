import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload, "payload>>>>>");
      state.value = action.payload;
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectCartTotal = (state) => {
  return state.cart.value.length;
};

export default cartSlice.reducer;
