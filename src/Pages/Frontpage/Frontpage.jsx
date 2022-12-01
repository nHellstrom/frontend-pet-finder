import React from "react";
import { Link } from "react-router-dom";
import landingimage from "../../images/landingcat2.png";
import { Button } from "@mui/material";
// import landingimage from "./images/landingcat.png";
import "./Frontpage.css";

const Front = () => {
  return (
    <div
      className="landingimage"
      style={{ backgroundImage: `url(${landingimage})` }}
    >
      <div className="landingimage__herobox">
        <h1 className="landingimage__herotitle">Fauni</h1>
        <div className="landingimage__herotext">
          <p>
            <b>Fauni</b> is a simple but global service for communicating with
            helpful strangers about lost and found pets
          </p>
          <p>
            Losing a pet can be very emotionally distressful, and the tools
            <b>Fauni</b> fills a niche is a global web service for helping
            people with runaway pets to connect with people who might have seen
            it. People are encouraged to use the <b>"Report Lost Pet"</b>
            service if you've lost an animal, and <b>"Report Found Pet" </b>
            if you spot or catch a roaming pet which seems lost.
          </p>
        </div>
        <div className="landingimage__herotextbuttons">
          <Link to="map" relative="path">
            <Button variant="contained">
              Sightings
              <br />
              Map
            </Button>
          </Link>
          <Link to="ReportLostPet" relative="path">
            <Button variant="contained">
              Report
              <br />
              Lost Pet
            </Button>
          </Link>
          <Link to="ReportFoundPet" relative="path">
            <Button variant="contained">
              Report
              <br />
              Found Pet
            </Button>
          </Link>
        </div>
      </div>
      {/* <Link to="/map">Sightings map</Link> */}
    </div>
  );
};

export default Front;
