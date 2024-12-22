import React, { Component } from "react";
import "./LinkButton.css";
import scrollDown from "./scroll-down.svg";

class LinkButton extends Component {
  render() {
    return (
      <div className="LinkButton-Wrapper">
        <a
          className="LinkButton"
          href="https://github.com/firstcontributions/first-contributions/blob/main/README.md"
        >
          <span> Get started </span>
        </a>
        <div className="Scroll-Down-Wrapper">
          <img className="Scroll-Down" onClick={() => { window.scrollBy({ top: window.innerHeight - 80, left: 0, behavior: "smooth" }); }} src={scrollDown} alt="Scroll Down!" width="64" height="64" />
        </div>
      </div>
    );
  }
}

export default LinkButton;
