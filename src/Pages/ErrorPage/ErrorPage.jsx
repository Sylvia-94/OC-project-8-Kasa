import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="errorpg">
        <h1 className="four-o-four">404</h1>
        <h2 className="errormsg">
          Oups! La page que vous demandez n'existe pas.
        </h2>

        <Link to="/" className="homelink">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
