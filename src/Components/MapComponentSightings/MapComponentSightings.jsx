import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MapContainer, Marker,
  Popup, TileLayer, useMapEvents
} from "react-leaflet";
import "./MapComponentSightings.css";

function MapComponent(props) {
  const [coordinate, setCoordinate] = useState([]);
  const [mapMarkersSightings, setmapMarkersSightings] = useState([]);
  const [initialPosition, setInitialPosition] = useState([59.273, 18.0286]);
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);

  useEffect(() => {
    let getWebData = async () => {
      const apiMarkersSightings = await axios.get(
        // "https://petfinderapi.azurewebsites.net/api/Sighting"
        "https://localhost:7164/api/Sighting"
      );
      console.log("🫤🔦", apiMarkersSightings.data);
      setmapMarkersSightings(apiMarkersSightings.data.sightings);
    };

    getWebData().catch((e) => console.error("An error was caught!", e));
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const MarkersClick = () => {
    const map = useMapEvents({
      click(e) {
        let cordSelected = [e.latlng.lat, e.latlng.lng]
          .map((x) => x.toString())
          .join(", ");
        setSelectedPosition(cordSelected);
        props.mapCoordinate(cordSelected);
      },
    });
  };

  return (
    <>
      <MapContainer key={123} center={initialPosition} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {mapMarkersSightings.map((x) => (
          <Marker key={x.id} position={x.location}>
            <Popup>
              <h3>Sighting</h3>
              <b>Description:</b> {x.eventInfo} <br />
              <b>Contact info:</b> {x.contactinformation} <br />
              <br />
              <img
                src={x.pictureUrl}
                className="map__markerimage"
                alt="Lost animal photo"
              ></img>
            </Popup>
          </Marker>
        ))}
        <MarkersClick />
      </MapContainer>
    </>
  );
}

export default MapComponent;
