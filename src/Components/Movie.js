import React, { Component } from "react";
class Movie extends Component {
  render() {
    const { Title, Year, imdbID, Type, Poster } = this.props;
    return (
      <div className="movie">
        <img src={Poster} />
        <div className="title">{Title}</div>
      </div>
    );
  }
}

export default Movie;
