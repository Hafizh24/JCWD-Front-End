import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    data: [],
  },
  reducers: {
    setTweet: (state, action) => {
      // console.log(action.payload);
      state.data = action.payload;
    },
  },
});

export const { setTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
