import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieAndShowSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
