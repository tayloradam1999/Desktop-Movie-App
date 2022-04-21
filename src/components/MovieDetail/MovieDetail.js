import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/movieAndShowSlice";
import "./MovieDetail.css";

const MovieDetail = () => {
  // dereference imdbID from url
  const { imdbID } = useParams();

  // setup dispatch for fetching movie detail
  const dispatch = useDispatch();

  // setup useSelector for selected movie detail
  const data = useSelector(getSelectedMovieOrShow);

  // setup useEffect for fetching movie detail
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      // cleanup selected movie detail
      dispatch(removeSelectedMovieOrShow());
    };
    // dependant on dispatch and change of imdbID
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {/* If length is 0, display a loading message */}
      {/* else, display movie detail */}
      {Object.keys(data).length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
        {/* all details are to be put on left side of screen */}
          <div className="section-left">
            <div className="movie-title">
              {data.Title}
            </div>
            <div className="movie-rating">
              {/* fa for font awesome icons */}
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">
              {data.Plot}
            </div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          {/* movie/show poster goes on right of page on Desktop, below details on mobile */}
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;