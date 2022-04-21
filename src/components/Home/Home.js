import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieAndShowSlice';

const Home = () => {
  // setup dispatch for fetching movies
  const dispatch = useDispatch();

  // setup inital search terms
  const movieText = "Lord";
  const showText = "Family";

  // setup useEffect for fetching movies and shows
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    // dependant on dispatch
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;