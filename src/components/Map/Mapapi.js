import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const Mapapi = ({ place, markerPosition }) => {
  const mapContainerStyle = {
    height: "100vh",
    width: "100%",
  };
  const center = { lat: place.latitude, lng: place.longitude };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </div>
  );
};

export default Mapapi;
