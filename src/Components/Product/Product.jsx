import React from "react";

const Product = ({ props }) => {
  return (
    <div>
      <div className="product-imgs">
        <div className="arrows">
          <div>
            <img src="arrow-left.png" alt="flèche gauche" />
          </div>
          <div>
            <img src="arrow-right.png" alt="flèche droite" />
          </div>
        </div>
        <div className="slider">
          <p>1/4</p>
        </div>
      </div>
      <div className="product-titles">
        <div className="name-location">
          <h1 className="name">{props.title}</h1>
          <h2 className="location">texte</h2>
        </div>
        <div className="host">
          <h2 className="host-name">Name</h2>
          <div className="circle-photo">○</div>
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
