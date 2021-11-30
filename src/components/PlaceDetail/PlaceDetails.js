import React, { useState } from "react";
import MoreInfo from "../MoreInfo/MoreInfo";
import Map from "../Map/Map";
import { Row, Col, Button, Card } from "react-bootstrap";

const PlaceDetails = ({ place }) => {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  // on button click get the map and marker show
  // onClick set position ({lat:,lang})
  /**
 *  Set the visibility to 'hidden' or 'visible'.
//  */
  // hide() {
  //   if (this.div) {
  //     this.div.style.visibility = "hidden";
  //   }
  // }
  // show() {
  //   if (this.div) {
  //     this.div.style.visibility = "visible";
  //   }
  // }

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
    <>
      <Row style={{ width: "100%" }}>
        <Col xs={12} md={4}>
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
          <Map place={place} show={show} />
        </Col>
      </Row>
    </>
  );
};

export default PlaceDetails;
