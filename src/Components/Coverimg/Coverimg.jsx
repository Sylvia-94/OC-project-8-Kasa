import React from "react";

const Coverimg = ({ src, showText = true, text }) => {
  return (
    <div className="cover">
      <img src={src} className="cover-img" alt="Couverture" />
      {showText && <h1 className="cover-txt">{text}</h1>}
    </div>
  );
};

export default Coverimg;
