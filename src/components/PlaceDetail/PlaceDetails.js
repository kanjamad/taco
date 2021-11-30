import React, { useState, useEffect } from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
// import Map from "../Map/Map";
import Mapapi from "../Map/Mapapi";
import { Row, Col, Button, Card } from "react-bootstrap";
import haversine from "haversine-distance";

const PlaceDetails = ({ place }) => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const userPosition = currentPosition;
  console.log(userPosition);
  const placePosition = { lat: place.latitude, lng: place.longitude };
  console.log(placePosition);
  const haversine_m = haversine(userPosition, placePosition);
  // console.log(haversine_m);
  var haversine_miles = haversine_m * 0.000621; //Results in kilometers
  console.log(haversine_miles);

  // Get Map show with Marker
  const handleButtonPress = () => setShow((prevShow) => !prevShow);

  // Get close Day
  const closeDay = () => {
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = place.sunday_close;
        break;
      case 1:
        day = place.monday_close;
        break;
      case 2:
        day = place.tuesday_close;
        break;
      case 3:
        day = place.wednesday_close;
        break;
      case 4:
        day = place.wednesday_close;
        break;
      case 5:
        day = place.friday_close;
        break;
      case 6:
        day = place.Saturday_close;
        break;
      default:
        day = " 24 hrs";
    }
    console.log(day);
    return day;
  };

  return (
    <div>
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{place.name}</Card.Title>
                </Col>
                <Col>
                  <Card.Text>{haversine_miles} miles</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>
                    <p>
                      {place.address} <br />
                      {place.city}, {place.state} {}
                      {place.postal_code}
                    </p>
                    <p className="text-success">
                      {" "}
                      Open today until {closeDay()}{" "}
                    </p>
                  </Card.Text>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      handleButtonPress();
                      // Marker lat and lang to map
                    }}
                  >
                    DIRECTIONS
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => setModalShow(true)}
                  >
                    MORE INFO
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <MoreInfo
            place={place}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Col>
        <Col xs={12} md={8}>
          <Mapapi place={place} show={show} />
        </Col>
      </Row>
    </div>
  );
};

export default PlaceDetails;
