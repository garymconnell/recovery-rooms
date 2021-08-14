import { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = () => {
  const location = "Macs Recovery Rooms";
  const coordinates = {
    latitude: 53.74015,
    longitude: -6.8964,
  };

  const [selectedLocation, setSelectedLocation] = useState(true);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/lukementon/cksa8o3fs222q17pjd9ln1tdz"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <div className="relative">
        <Marker
          longitude={coordinates.longitude}
          latitude={coordinates.latitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {selectedLocation && (
            <div className="absolute whitespace-nowrap -top-12 py-2 px-4 rounded-lg bg-white text-black ">
              <h4>Macs Recovery Rooms</h4>
            </div>
          )}
          <p
            onClick={() => setSelectedLocation(!selectedLocation)}
            role="img"
            className="cursor-pointer fixed"
            aria-label="push-pin"
          >
            📌
          </p>
        </Marker>
      </div>
    </ReactMapGl>
  );
};

export default Map;
