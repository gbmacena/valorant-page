import React from "react";
import "../style/Header.css";
import logo from "../assets/valorant-logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header-logo" />
      <nav>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="/">Agentes</a>
          </li>
          <li>
            <a href="#weapons-container">Armas</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
