import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>WugHugs</h1>


        <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>

        </nav>

    </header>
  );
}

export default Header;
