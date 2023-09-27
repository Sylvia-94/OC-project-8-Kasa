import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img src="LOGO.png" className="logo" alt="Logo de Kasa" />
      </NavLink>

      <nav className="navigation">
        <NavLink to="/">Accueil</NavLink>

        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </div>
  );
};

export default Header;
