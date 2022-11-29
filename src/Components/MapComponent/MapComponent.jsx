import React, { useState, useEffect } from "react";
import "./MapComponent.css";
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
  // let [mapCoordinate] = props;
  const [coordinate, setCoordinate] = useState([]);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [initialPosition, setInitialPosition] = useState([59.273, 18.0286]);
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);

  useEffect(() => {
    const getWebData = async () => {
      let apiMarkers = await axios.get(
        "https://petfinderapi.azurewebsites.net/api/Wanting"
      );
      console.log("🫤", apiMarkers.data);
      setMapMarkers(apiMarkers.data.wantings);
    };

    getWebData().catch((e) => console.error("An error was caught!", e));
  }, []);

  // const BoundsGetter = () => {
  //   const map = useMapEvents({
  //     click: () => {
  //       let mapClickLoc = map.getBounds();
  //       console.log("🐶", mapClickLoc);
  //     },
  //     // locationfound: (location) => {
  //     //   console.log("location found:", location);
  //     // },
  //   });
  //   return null;
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setInitialPosition([latitude, longitude]);
      console.log("🏠", latitude, longitude);
    });
  }, []);

  const MarkersClick = () => {
    const map = useMapEvents({
      click(e) {
        setSelectedPosition([e.latlng.lat, e.latlng.lng]);
        props.mapCoordinate([e.latlng.lat, e.latlng.lng]);
        console.log([e.latlng.lat, e.latlng.lng]);
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
        {mapMarkers.map((x) => (
          <Marker key={x.id} position={x.location}>
            <Popup>
              <h3>Sighting</h3>
              <b>Latitude:</b> {x.location[0]} <br />
              <b>Longitude:</b> {x.location[1]} <br />
              <b>Description:</b> Blah <br />
              <i>Image Link:</i> {x.pictureUrl}
              <img src={x.pictureUrl} width="100%"></img>
            </Popup>
          </Marker>
        ))}
        <MarkersClick />
      </MapContainer>
    </>
  );
}

export default MapComponent;
