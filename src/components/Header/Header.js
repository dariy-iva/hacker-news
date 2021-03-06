import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <nav className="header__menu">
        <Link to="/" className="header__logo link-hover">
          <img src={logo} alt="логотип" className="header__img" />
          <h1 className="header__title">Hacker News</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
