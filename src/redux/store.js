import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "./tweetSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    tweet: tweetReducer,
    user: userReducer,
  },
});
