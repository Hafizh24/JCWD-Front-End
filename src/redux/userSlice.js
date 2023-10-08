import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      // console.log(action.payload);
      state.value = action.payload;
    },
    setUser: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const { setUser, setData } = userSlice.actions;

export default userSlice.reducer;
