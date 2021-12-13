import React, { useState, useEffect } from "react";
import { getPlacesData } from "./api";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Mapapi from "./components/Map/Mapapi.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [markerPosition, setMarkerPosition] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});

  // Get geolocation api
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCurrentPosition({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // Get
  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={4}>
          <List
            places={places}
            setMarkerPosition={setMarkerPosition}
            currentPosition={currentPosition}
          />
        </Col>
        <Col xs={12} md={8}>
          <Mapapi markerPosition={markerPosition} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
