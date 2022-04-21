import React, { Component } from "react";

class Search extends Component {
  state = {
    searchText: "spider",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.searchText, this.state.type);
    }
  };
  handleSearchBtn = () => {
    this.props.searchMovie(this.state.searchText, this.state.type);
  };
  handleFilter = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchMovie(this.state.searchText, this.state.type);
      }
    );
  };
  render() {
    const { search, searchMovie } = this.props;
    const { type, searchText } = this.state;
    return (
      <div>
        <div className="input-search-box">
          <input
            type="text"
            placeholder="Searching Movies..."
            className="search"
            value={searchText}
            onChange={(e) => this.setState({ searchText: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button className="btn-search" onClick={this.handleSearchBtn}>
            Search
          </button>
        </div>
        <div className="tabs">
          <button
            className={"tabs-btn " + (type === "all" ? "active" : "")}
            data-type="all"
            onClick={this.handleFilter}
          >
            All
          </button>
          <button
            className={"tabs-btn " + (type === "movie" ? "active" : "")}
            data-type="movie"
            onClick={this.handleFilter}
          >
            Movie
          </button>
          <button
            className={"tabs-btn " + (type === "series" ? "active" : "")}
            data-type="series"
            onClick={this.handleFilter}
          >
            Series
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
