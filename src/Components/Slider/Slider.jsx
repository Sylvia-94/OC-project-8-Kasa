import React, { useState } from "react";

const Slider = ({ props }) => {
  const [current, setCurrent] = useState(0);
  const length = props.length;
  // console.log(props);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    // console.log("clic droit");
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    // console.log("clic gauche");
  };
  return (
    <div>
      <div className="img-slider">
        <img className="product-imgs" src={props[current]} alt="" />
        <div className="arrows">
          <div>
            <img
              src="/arrow-left.png"
              alt="flèche gauche"
              onClick={prevSlide}
            />
          </div>
          <div>
            <img
              src="/arrow-right.png"
              alt="flèche droite"
              onClick={nextSlide}
            />
          </div>
        </div>
        <div className="slider-count">
          <p>
            {current + 1}/{length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
