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

  return (
    <>
      <Header />
      <List places={places} />
    </>
  );
};

export default App;
