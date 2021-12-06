import React, { useState } from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
import { Row, Col, Button, Card } from "react-bootstrap";
import haversine from "haversine-distance";

const PlaceDetails = ({ place, setMarkerPosition, currentPosition }) => {
  const [modalShow, setModalShow] = useState(false);

  const userPosition = currentPosition;
  // console.log(userPosition);
  const placePosition = { lat: place.latitude, lng: place.longitude };
  // console.log(placePosition);
  const haversine_m = haversine(userPosition, placePosition);
  // console.log(haversine_m);
  var haversine_miles = (haversine_m * 0.000621).toFixed(2); //Results in kilometers
  // console.log(haversine_miles);

  // Get Map show with Marker
  const onMouseOverEvent = () => {
    setMarkerPosition({ lat: place.latitude, lng: place.longitude });
  };

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
        day = place.saturday_close;
        break;
      default:
        day = " 24 hrs";
    }
    console.log(day);
    return day;
  };

  return (
    <div>
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
                <p className="text-success">Open today until {closeDay()} </p>
              </Card.Text>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="secondary"
                onMouseOver={() => onMouseOverEvent()}
              >
                DIRECTIONS
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={() => setModalShow(true)}>
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
    </div>
  );
};

export default PlaceDetails;
