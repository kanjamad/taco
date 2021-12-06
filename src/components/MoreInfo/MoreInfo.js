import React from "react";
import { Button, Modal, Image, Row, Col } from "react-bootstrap";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import "./moreInfo.css";

const MoreInfo = (props) => {
  console.log(props);

  var today = new Date().getDay();
  console.log("d" + today);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Image
          fluid
          src={
            props.place.photo
              ? props.place.photo.images.large.url
              : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
          }
        />

        <h1>{props.place.name}</h1>
        <h5>
          {props.place.address}
          <br />
          {props.place.city}, {props.place.state} {}
          {props.place.postal_code}
        </h5>
        <Row>
          <Col>
            <h5 style={{ color: "orange" }}>
              <FaPhoneSquareAlt />
              (xxx)xxx-xxxx
            </h5>
          </Col>
          <Col>
            <h5
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() =>
                window.open(
                  // `https://www.google.com/maps/search/?api=1&query=${props.place.latitude},${props.place.longitude}`,
                  `https://www.google.com/maps/search/?api=1&query=${props.place.address}%2C${props.place.city}%2C${props.place.state}%2C${props.place.postal_code}`,
                  "_blank"
                )
              }
            >
              <AiFillCar />
              Get Directions
            </h5>
          </Col>
        </Row>
        <Row className={"d" + today === "d1" ? " highlight" : ""}>
          <Col>Monday</Col>
          <Col>
            {props.place.monday_open} - {props.place.monday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d2" ? " highlight" : ""}>
          <Col>Tuesday</Col>
          <Col>
            {props.place.tuesday_open} - {props.place.tuesday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d3" ? " highlight" : ""}>
          <Col>Wednesday</Col>
          <Col>
            {props.place.wednesday_open} - {props.place.wednesday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d4" ? " highlight" : ""}>
          <Col>Thursday</Col>
          <Col>
            {props.place.thursday_open} - {props.place.thursday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d5" ? " highlight" : ""}>
          <Col>Friday</Col>
          <Col>
            {props.place.friday_open} - {props.place.friday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d6" ? " highlight" : ""}>
          <Col>Saturday</Col>
          <Col>
            {props.place.saturday_open} - {props.place.saturday_close}
          </Col>
        </Row>
        <Row className={"d" + today === "d0" ? " highlight" : ""}>
          <Col>Sunday</Col>
          <Col>
            {props.place.sunday_open} - {props.place.sunday_close}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => window.open(props.place.url, "_blank")}
        >
          VIEW FULL DETAILS
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreInfo;
