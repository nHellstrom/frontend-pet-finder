import React, { useState, useEffect } from "react";
import "./MapComponentSightings.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";

function MapComponent(props) {
  const [coordinate, setCoordinate] = useState([]);
  const [mapMarkersSightings, setmapMarkersSightings] = useState([]);
  const [initialPosition, setInitialPosition] = useState([59.273, 18.0286]);
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);

  useEffect(() => {
    let getWebData = async () => {
      const apiMarkersSightings = await axios.get(
        "https://petfinderapi.azurewebsites.net/api/Sighting"
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
              {/* <b>Latitude:</b> {x.location[0]} <br />
              <b>Longitude:</b> {x.location[1]} <br />
              <b>Description:</b> Blahh <br />
              <i>Image Link:</i> {x.pictureUrl}
              <img src={x.pictureUrl} width="100%"></img> */}
              {/* <b>Name:</b> {x.catName} <br /> */}
              <b>Description:</b> {x.eventInfo} <br />
              <b>Contact info:</b> {x.contactinformation} <br />
              <b>Latitude:</b> {x.location[0].toFixed(2)} <br />
              <b>Longitude:</b> {x.location[1].toFixed(2)} <br />
              <b>Image:</b>
              <img src={x.pictureUrl} className="map__markerimage" alt="Lost animal photo"></img>
            </Popup>
          </Marker>
        ))}
        <MarkersClick />
      </MapContainer>
    </>
  );
}

export default MapComponent;
