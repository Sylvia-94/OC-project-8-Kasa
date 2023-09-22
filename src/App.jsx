import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Productpage from "./Pages/Productpage/Productpage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import "./main.scss";
import { Routes, Route } from "react-router-dom";

function App() {
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

  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
