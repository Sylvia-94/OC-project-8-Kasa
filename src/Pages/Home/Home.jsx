import React from "react";
import Coverimg from "../../Components/Coverimg/Coverimg";
import GalleryProducts from "../../Components/GalleryProducts/GalleryProducts";

const Home = ({ data }) => {
  return (
    <div className="home">
      <div>
        <Coverimg
          src="cover.jpg"
          showText={true}
          text="Chez vous, partout et ailleurs"
        />
      </div>
      <GalleryProducts data={data} />
    </div>
  );
};

export default Home;
