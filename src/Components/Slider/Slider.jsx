import React, { useState } from "react";

const Slider = ({ props }) => {
  const [current, setCurrent] = useState(0);
  const length = props.length;
  console.log(props);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log("clic droit");
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log("clic gauche");
  };
  return (
    <div>
      <div className="product-imgs">
        {/* {props.map(())} */}
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
        <div className="slider"></div>
      </div>
    </div>
  );
};

export default Slider;
