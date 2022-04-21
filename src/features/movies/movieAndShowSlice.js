import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
    .get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    )
    .catch(err => console.log('Error: ', err));
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi
    .get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    )
    .catch(err => console.log('Error: ', err));
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    .catch(err => console.log('Error: ', err));
    return response.data;
  }
);

// implement loading state for search results?
const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("fetchAsyncMovies pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncMovies fulfilled Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("fetchAsyncMovies Rejected!");
    },
    [fetchAsyncShows.pending]: (state) => {
      console.log("fetchAsyncShows pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("fetchAsyncShows Rejected!");
    },
    [fetchAsyncMovieOrShowDetail.pending]: (state) => {
      console.log("fetchAsyncMovieOrShowDetail pending");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
    [fetchAsyncMovieOrShowDetail.rejected]: () => {
      console.log("fetchAsyncMovieOrShowDetail Rejected!");
    }
  },
});

// export actions from inside reducers
export const { removeSelectedMovieOrShow } = movieSlice.actions;
// export useSelector functionality
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
// export the reducer itself
export default movieSlice.reducer;