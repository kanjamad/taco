import React, { useRef, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Map = ({ place, show }) => {
  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const coordinates = { lat: place.latitude, lng: place.longitude };
  return (
    <>
      {show && (
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={onMapLoad}
          >
            <div lat={place.latitude} lng={place.longitude}>
              <FaMapMarkerAlt
                fontSize="large"
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          </GoogleMapReact>
        </div>
      )}
    </>
  );
};

export default Map;
