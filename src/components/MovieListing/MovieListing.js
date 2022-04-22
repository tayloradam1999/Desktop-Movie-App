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
  // if response from api is 'True', map and put each movie in a card
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
      // if response from api is 'False', return error message
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
  // if response from api is 'True', map and put each show in a card
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
      // if response from api is 'False', return error message
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
          {/* Give Slider Settings from common/settings and render all movie cards in Slider */}
          <>
            <Slider {...Settings}>{renderMovies}</Slider>
          </>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {/* Reuse movie-container className, redunant css is bad css */}
        <div className="movie-container">
          {/* Give Slider Settings from common/settings and render all show cards in Slider */}
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;