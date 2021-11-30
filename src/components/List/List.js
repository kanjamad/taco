import React from "react";
import PlaceDetails from "../PlaceDetail/PlaceDetails";
import { Card } from "react-bootstrap";

const List = ({ places, clicked }) => {
  console.log({ clicked });
  return (
    <Card style={{ height: "100vh", overflow: "auto" }}>
      <Card.Body>
        {places.map((place) => (
          <PlaceDetails key={place.id} place={place} />
        ))}
      </Card.Body>
    </Card>
  );
};

export default List;
