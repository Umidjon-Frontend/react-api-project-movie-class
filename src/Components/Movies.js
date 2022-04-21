import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    const { movies = [] } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <h1>Nothing found</h1>
        )}
      </div>
    );
  }
}

export default Movies;
