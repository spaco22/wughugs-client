import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";
import Home from "../../assets/icons/home-w.svg";
import About from "../../assets/icons/about-w.svg";
import Login from "../../assets/icons/login-w.svg";

function Footer() {
  return (
    <footer className="footer">
      <NavLink className="footer__title-link" to="/">
        <h2 className="footer__title">Wug Hug's</h2>
      </NavLink>

      <nav className="footer__nav">
        <NavLink to="/" className="footer__link">
          <img src={Home} alt="home icon" className="footer__link-img" />
        </NavLink>
        <NavLink to="/about" className="footer__link">
          <img src={About} alt="about icon" className="footer__link-img" />
        </NavLink>
        <NavLink to="/login" className="footer__link">
          <img src={Login} alt="login icon" className="footer__link-img" />
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
