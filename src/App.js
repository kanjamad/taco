import React from "react";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Row style={{ width: "100%" }}>
          <Col xs={12} md={4}>
            <h1>list</h1>
          </Col>
          <Col xs={12} md={8}>
            <h1>Map</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
