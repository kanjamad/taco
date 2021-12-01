import React, { useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Mapapi = ({ places, show }) => {
  const mapContainerStyle = {
    height: "100vh",
    width: "100%",
  };
  const center = { lat: 0, lng: 0 };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
        {places.map((place) => (
          <div>
            {show && (
              <div>
                <Marker
                  key={place.id}
                  position={{ lat: place.latitude, lng: place.longitude }}
                />
              </div>
            )}
          </div>
        ))}
      </GoogleMap>
    </div>
  );
};

export default Mapapi;
