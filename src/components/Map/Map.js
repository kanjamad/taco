import React, { useState, useRef } from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const mapRef = useRef();
  const [zoom, setZoom] = useState(14);

  const coordinates = { lat: 0, lng: 0 };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coordinates}
        defaultZoom={14}
      >
        {/* marker */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
