import React, { useState, useEffect } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);
  // const getPlacesData = async () => {
  //   const response = await fetch(
  //     "https://my.api.mockaroo.com/locations.json?key=a45f1200"
  //   );
  //   const data = await response.json();
  //   setPlaces(data);
  //   // console.log(data)
  // };

  // useEffect(() => {
  //   getPlacesData();
  // }, []);
  return (
    <>
      <Header />
      <List places={places} />
    </>
  );
};

export default App;
