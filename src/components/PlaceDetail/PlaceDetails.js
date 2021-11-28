import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";

const PlaceDetails = ({ place }) => {
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
    <>
      <Card>
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{place.name}</Card.Title>
            </Col>
            <Col>
              <Card.Text>0.5miles</Card.Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Text>
                <p>{place.address}</p>
                <p>
                  {place.city}, {place.state}
                  {place.postal_code}
                </p>
                <p className="text-success"> Open today until {closeDay()} </p>
              </Card.Text>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Button variant="secondary" onClick={""}>
                DIRECTIONS
              </Button>
            </Col>
            <Col>
              <Button variant="secondary">MORE INFO</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default PlaceDetails;
