import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const [places, setPlaces] = useState([]);

  const getPlacesData = async () => {
    const response = await fetch(
      "https://my.api.mockaroo.com/locations.json?key=a45f1200"
    );
    const data = await response.json();
    setPlaces(data);
    // console.log(data)
  };

  useEffect(() => {
    getPlacesData();
  }, []);
  return (
    <>
      <Header />
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={4}>
          <List places={places} />
        </Col>
        <Col xs={12} md={8}>
          <Map />
        </Col>
      </Row>
    </>
  );
};

export default App;
