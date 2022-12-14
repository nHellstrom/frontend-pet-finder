import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import landingimage from "../../images/landingcat2.png";
import "./MapSelector.css";

const MapSelector = () => {
  return (
    <div
      className="mapselector__container"
      style={{ backgroundImage: `url(${landingimage})` }}
    >
      <Link to="maplost" relative="path">
        <Button variant="contained" className="mapselector__button">
          Lost
          <br />
          Animals
        </Button>
      </Link>
      <Link to="mapfound" relative="path">
        <Button variant="contained" className="mapselector__button">
          Found/Sighted
          <br />
          Animals
        </Button>
      </Link>
    </div>
  );
};

export default MapSelector;
