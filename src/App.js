import React, { useState, useEffect } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Mapapi from "./components/Map/Mapapi";
import { Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <Header />

      <Row style={{ width: "100%" }}>
        <Col xs={12} md={4}>
          <List places={places} setShow={setShow} />
        </Col>
        <Col xs={12} md={8}>
          <Mapapi places={places} show={show} />
        </Col>
      </Row>
    </>
  );
};

export default App;
