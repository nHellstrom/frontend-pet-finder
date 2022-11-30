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
// import { iconPerson } from "./Icon";

function MapComponent(props) {
  // let [mapCoordinate] = props;
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
        let cordSelected = [e.latlng.lat, e.latlng.lng]
          .map((x) => x.toString())
          .join(", ");
        setSelectedPosition(cordSelected);
        props.mapCoordinate(cordSelected);
        console.log(cordSelected);
      },
    });
  };

  // const LeafIcon = L.Icon.extend({
  //   options: {
  //     shadowUrl: "leaf-shadow.png",
  //     iconSize: [38, 95],
  //     shadowSize: [50, 64],
  //     iconAnchor: [22, 94],
  //     shadowAnchor: [4, 62],
  //     popupAnchor: [-3, -76],
  //   },
  // });

  // const iconPerson = L.Icon.extend({
  //   options: {
  //     iconAnchor: null,
  //     popupAnchor: null,
  //     shadowUrl: null,
  //     shadowSize: null,
  //     shadowAnchor: null,
  //     iconSize: new L.Point(60, 75),
  //     className: "leaflet__marker--colorshift",
  //   },
  // });

  // const iconShifted = divIcon;

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
