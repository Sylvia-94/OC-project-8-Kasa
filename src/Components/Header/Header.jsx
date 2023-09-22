import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="LOGO.png" className="logo" alt="Logo de Kasa" />
      </Link>

      <nav className="navigation">
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/" className="link-mobile">
          ACCUEIL
        </Link>
        <Link to="/about" className="link">
          À Propos
        </Link>
        <Link to="/about" className="link-mobile">
          À PROPOS
        </Link>
      </nav>
    </div>
  );
};

export default Header;
