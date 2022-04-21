import React, { Component } from "react";
import Movies from "../Components/Movies";
import Search from "../Components/Search";

class Main extends Component {
  state = {
    movies: [],
    search: "spider",
  };
  componentDidMount() {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a7ec4202&s=${this.state.search}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovie = (str, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=a7ec4202&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    const { movies, search } = this.state;
    return (
      <div className="main">
        <div className="container">
          <Search searchMovie={this.searchMovie} />
          <Movies movies={movies} />
        </div>
      </div>
    );
  }
}

export default Main;
