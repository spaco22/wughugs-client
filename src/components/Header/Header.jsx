import React from "react";
import "./Header.scss";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <NavLink className="header__title-link" to="/">
      <h1 className="header__title">Wug Hugs</h1>
      </NavLink>

     {/* <Link className="header__button-dark"></Link> */}

        <nav className="header__nav">
        <NavLink to="/" className="header__link">Home</NavLink>
        <NavLink to="/about" className="header__link">About</NavLink>
        <NavLink to="/login" className="header__link">Login</NavLink>

        </nav>

    </header>
  );
}

export default Header;
