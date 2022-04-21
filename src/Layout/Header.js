import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                React Movie
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movie
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
