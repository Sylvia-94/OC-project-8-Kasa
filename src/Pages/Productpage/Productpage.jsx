import React, { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import Collapsible from "../../Components/Collapsible/Collapsible";
import { useParams } from "react-router-dom";

const Productpage = () => {
  const [data, setData] = useState();

  const getData = () => {
    fetch(
      "data/data.json",

      {
        headers: {
          "Content-Type": "application/json",

          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const { id } = useParams();

  // useEffect pour fetch les données jusque ici, soit fichier service.js à importer, soit directement dans le composant, avec une fonction pour fetch la data

  const selectedProduct = data?.find((item) => item.id === id);

  console.log("selectedProduct", selectedProduct);

  console.log(data);

  return (
    <div className="product-page">
      <Product product={selectedProduct} />
      <Collapsible />
    </div>
  );
};

export default Productpage;
