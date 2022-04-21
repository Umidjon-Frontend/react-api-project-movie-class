import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="footer-text">
          © {new Date().getFullYear()} Copyright: Create by Umidjon Yusufov
        </p>
      </div>
    );
  }
}

export default Footer;
