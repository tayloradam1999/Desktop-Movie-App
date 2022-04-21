import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/movies/movieAndShowSlice";
import user from "../../images/user.png";
import "./Header.scss";

const Header = () => {
  // setup terms for search
  const [term, setTerm] = useState("");

  // setup dispatch for fetching movies via search
  const dispatch = useDispatch();

  // setup submitHandler for search
  const submitHandler = (e) => {
    // prevent default form submission
    e.preventDefault();
    // alert user if no search term is entered
    if (term === "") return alert("Please enter search term!");
    // fetch movies via search
    dispatch(fetchAsyncMovies(term));
    // fetch shows via search
    dispatch(fetchAsyncShows(term));
    // reset search term
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          Desktop Movie App
        </Link>
      </div>
      <div className="search-bar">
        {/* on form submit, runs useEffect */}
        <form onSubmit={submitHandler}>
          {/* on input change, set term to value of input */}
          {/* also, term is value of input */}
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          {/* fa for font awesome icons */}
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;