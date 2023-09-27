import React from "react";

const Ratings = ({ rating }) => {
  //   Création tableau vide qui acueillera les étoiles de rating
  let notation = [];

  for (let index = 0; index < rating; index++) {
    notation.push(
      <img className="grey-star" src="/Red-star.jpg" alt="red star" />
    );
  }
  while (notation.length < 5) {
    notation.push(
      <img className="grey-star" src="/Grey-star.png" alt="grey star" />
    );
  }

  return <div>{notation}</div>;
};

export default Ratings;
