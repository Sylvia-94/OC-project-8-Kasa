import React from "react";

const Card = ({ title, cover }) => {
  return (
    <div className="card">
      <ul>
        <li className="list-item">
          <img className="card-img" src={cover} alt={`Aperçu de ${title}`} />
          <div className="transparent-gradient"></div>
          <h3 className="card-title">{title}</h3>
        </li>
      </ul>
    </div>
  );
};

export default Card;
