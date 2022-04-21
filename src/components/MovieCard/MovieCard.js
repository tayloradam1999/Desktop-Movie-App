import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
  // destructure data prop passed from MovieListing
  const { data } = props;

  return (
    <div className="card-item">
      {/* Link to movie details page with imdbID as param, taken from URL */}
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;