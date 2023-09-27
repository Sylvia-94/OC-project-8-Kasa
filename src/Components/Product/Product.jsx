import React from "react";
import Ratings from "../Ratings/Ratings";

const Product = ({ props }) => {
  return (
    <div>
      <div className="product-titles">
        <div className="name-location">
          <h1 className="name">{props.title}</h1>
          <h2 className="location">{props.location}</h2>
        </div>
        <div className="host">
          <h2 className="host-name">{props.host.name}</h2>
          <img
            src={props.host.picture}
            className="circle-photo"
            alt="host portrait"
          ></img>
        </div>
      </div>
      <div className="tags-ratings">
        <div className="tags">
          {props.tags.map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
        <Ratings rating={props.rating} />
      </div>
    </div>
  );
};

export default Product;
