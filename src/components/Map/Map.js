import React, { useRef, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = ({ places, coordinates, setClicked, setCoordinates }) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // const coordinates = { lat: 0, lng: 0 };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onMapLoad}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setClicked(child)}
      >
        {places?.map((place) => (
          <div lat={place.latitude} lng={place.longitude} key={place.id}>
            <FaMapMarkerAlt
              fontSize="large"
              style={{ color: "red", cursor: "pointer" }}
            />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
