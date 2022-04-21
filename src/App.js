import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            {/* a wide range of paths to Home because deploment was landing on 404 */}
            <Route path="/Desktop-Movie-App" exact component={Home} />
            <Route path="/" exact component={Home} />
            {/* Route below hits the MovieDetail component with the imdbID */}
            {/* Check MovieCard.js line 12 */}
            <Route path="/movie/:imdbID" component={MovieDetail} />
            {/* removed 404 page because there is no instance where user would land here */}
            {/* <Route exact component={PageNotFound} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;