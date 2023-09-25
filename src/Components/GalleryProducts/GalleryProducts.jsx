import React from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const GalleryProducts = ({ data }) => {
  const cards = data?.map((item) => (
    <Link to={`/product=${item.id}`} key={item.id}>
      <Card title={item.title} cover={item.cover} />
    </Link>
  ));

  return <div className="gallery-background">{cards}</div>;
};

export default GalleryProducts;
