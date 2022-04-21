import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieAndShowSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  // setup useSelector for movies
  const movies = useSelector(getAllMovies);

  // setup useSelector for shows
  const shows = useSelector(getAllShows);

  // instantiate variables to hold ternary based returns
  let renderMovies, renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  // console.log for testing
  console.log('Movies after useSelector: ', movies);
  // console.log for testing
  console.log('renderMovies after mapping: ', renderMovies);

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );
  // console.log for testing
  console.log('Shows after useSelector: ', shows);
  // console.log for testing
  console.log('renderShows after mapping: ', renderShows);
  
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;