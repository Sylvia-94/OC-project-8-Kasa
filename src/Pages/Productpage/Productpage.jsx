import React from "react";
import Slider from "../../Components/Slider/Slider";
import Product from "../../Components/Product/Product";
import Collapsible from "../../Components/Collapsible/Collapsible";
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

const Productpage = () => {
  const { data } = useFetch("/data.json");
  const id = useParams("/product/");

  // Passage de la data d'un objet à un tableau pour utiliser le mapping
  const arrayOfData = [];

  // Boucle forEach pour remplir le nouveau tableau avec chaque key de la data
  Object.keys(data).forEach((key) => {
    arrayOfData.push(data[key]);
  });

  const selectedProduct = arrayOfData.find((d) => d.id === id.id);

  if (selectedProduct) {
    return (
      <div className="product-page">
        <Slider props={selectedProduct.pictures} />
        <Product props={selectedProduct} />

        <Collapsible list={true} />
      </div>
    );
  } else {
    <ErrorPage />;
  }
};

export default Productpage;
