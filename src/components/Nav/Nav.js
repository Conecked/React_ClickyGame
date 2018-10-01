import React from "react";
import "./Nav.css"

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <ul>
      <li>
      <a className="navbar-brand" href="/React_ClickyGame">Vampirina Clicky Game</a>
      </li>
      <li>
        <h1>Score  {props.score}  |  Top Score  {props.topScore}</h1>
      </li>
    </ul>
  </nav>
);

export default Nav;
