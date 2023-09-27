import React from "react";

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
          <div className="circle-photo">photo</div>
        </div>
      </div>
      <div className="tags-ratings">
        <div className="tags">
          <div className="tag">Cozy</div>
          <div className="tag">Canal</div>
          <div className="tag">Paris 10</div>
        </div>
        <div className="ratings">
          <p>☆☆☆☆☆</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
