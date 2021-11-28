import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { VscLocation } from "react-icons/vsc";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Menu</Navbar.Text>
            <Navbar.Text>
              <VscLocation />
              Truck Locator
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
