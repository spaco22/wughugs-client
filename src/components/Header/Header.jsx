import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="header__title">Wug Hugs</h1>


        <nav className="header__nav">
        <NavLink to="/" className="header__link">Home</NavLink>
        <NavLink to="/about" className="header__link">About</NavLink>

        </nav>

    </header>
  );
}

export default Header;
