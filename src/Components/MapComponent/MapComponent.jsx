import React, { useState, useEffect } from "react";
import "./MapComponent.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import axios from "axios";

function MapComponent(props) {
  // let [mapCoordinate] = props;
  const [coordinate, setCoordinate] = useState([]);
  const [mapMarkers, setMapMarkers] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the db to get coords and other data
  // }, []);

  //TODO: Add geolocation so map centers on user location

  // The markers will be imported from the database instead
  let testingMarkers = [
    [59.273, 18.0286],
    [59.2693, 18.1686],
    [59.3293, 18.0686],
    [50, 18],
  ];

  let markerArray = [];

  const getWebData = async () => {
    let apiMarkers = await axios.get(
      "https://petfinderapi.azurewebsites.net/api/Wanting"
    );
    console.log(apiMarkers.data);
  };

  useEffect(() => {
    const getWebData = async () => {
      let apiMarkers = await axios.get(
        "https://petfinderapi.azurewebsites.net/api/Wanting"
      );
      console.log("🫤", apiMarkers.data);
      setMapMarkers(apiMarkers.data.wantings);
    };

    getWebData().catch(console.error());
  }, []);

  // For selecting a point on the map, for the submission forms
  // const MapClicker = () => {
  //   const map = useMapEvents({
  //     click: () => {
  //       map.locate();
  //     },
  //     locationfound: (location) => {
  //       // console.log("location found:", location);
  //       console.log("📌longitude found:", location.longitude);
  //       console.log("📌latitude found:", location.latitude);
  //       let coord = [location.latitude, location.longitude];
  //       setCoordinate(coord);
  //       props.mapCoordinate(coord.join(", "));
  //     },
  //   });
  //   return null;
  // };

  // function MapClicker2() {
  //   const map = useMapEvents({
  //     click: () => {
  //       let mapClickLoc = map.mouseEventToLatLng();
  //       console.log(mapClickLoc.lat, mapClickLoc.lng);
  //     },
  //     // locationfound: (location) => {
  //     //   console.log("location found:", location);
  //     // },
  //   });
  //   return null;
  // }

  // marker.on('click', function(ev){
  //   var latlng = map.mouseEventToLatLng(ev.originalEvent);
  //   console.log(latlng.lat + ', ' + latlng.lng);
  // });

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

  ///////////////////////// EXPERIMENTING MAP SOLUTIONS

  const [initialPosition, setInitialPosition] = useState([59.273, 18.0286]);
  const [selectedPosition, setSelectedPosition] = useState([0, 0]);

  // const [currentLocation, setCurrentLocation] = useState();

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
        console.log([typeof e.latlng.lat, typeof e.latlng.lng]);
      },
    });

    return selectedPosition ? (
      <Marker
        key={selectedPosition[0]}
        position={selectedPosition}
        interactive={false}
      />
    ) : null;
  };

  //////////////////////
  /// testingMarkers.map((x) => (

  return (
    <>
      <MapContainer center={initialPosition} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MapClicker2 /> */}
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
