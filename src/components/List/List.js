import React from "react";
import PlaceDetails from "../PlaceDetail/PlaceDetails";
import { Card } from "react-bootstrap";

const List = ({ places, setMarkerPosition, currentPosition }) => {
  return (
    <Card style={{ height: "100vh", overflow: "auto" }}>
      <Card.Body>
        {places.map((place) => (
          <PlaceDetails
            key={place.id}
            place={place}
            setMarkerPosition={setMarkerPosition}
            currentPosition={currentPosition}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default List;
