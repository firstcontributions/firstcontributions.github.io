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
      </div>
    );
  }
}

export default LinkButton;
