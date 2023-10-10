import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    incrementBy5: (state) => {
      state.value += 5;
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementBy5 } = counterSlice.actions;

export default counterSlice.reducer;
