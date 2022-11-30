import React from "react";
import { useState } from "react";
import {
  Divider,
  Typography,
  Input,
  Button,
  Box,
  Container,
  TextField,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Sighting.css";
import SendIcon from "@mui/icons-material/Send";
import MapComponent from "../../Components/MapComponent/MapComponent";

function Sighting() {
  const [informerName, setInformerName] = useState("");
  const [email, setEmail] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [position, setPosition] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [file, setFile] = useState();

  //const navigate = useNavigate();
 function sightingHandler() {
    const formData = new FormData();
    formData.append("InformerName", informerName);
    formData.append("Email", email);
    formData.append("CatDescription", petDescription); 
  //  // formData.append("location",position);
    formData.append("EventInfo", eventInfo);
    formData.append("image", file);
    console.log("❌",formData);
     axios
      .post("https://petfinderapi.azurewebsites.net/api/Sighting", formData)
      .then((response) => {
        //navigate("/");
        console.log("🍏Response: ", response);
      })
      .catch((error) => {
        console.log("🍎Error response: ", error.response);
      });
  }
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <div className="sightingpage__introtext">
        <h2>Report Found Pet</h2>
        <p>
          Use this form to make a report about a found pet. Select the last known
          location on the map.
        </p>
      </div>
      <div className="sightingpage__container">
        <MapComponent mapCoordinate={setPosition} />

        <Box
          component="form"
          className="sightingpage__submissionform"
          sx={{
            "& .MuiTextField-root": { m: 1, mt: 2, width: "30ch" },
          }}
          noValidate
        >
          <TextField
            id="informerName"
            placeholder="Please enter your name"
            label="Informer Name"
            value={informerName}
            onChange={(e) => setInformerName(e.target.value)}
          />

          <TextField
            label="Email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="petDescription"
            placeholder="Please enter pet description"
            label="Pet Description"
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
          />
          <TextField
            label="Location"
            disabled
            placeholder="Please enter the location"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            label="Sighting Information"
            placeholder="Please enter sighting information"
            minRows={3}
            value={eventInfo}
            onChange={(e) => setEventInfo(e.target.value)}
          />
          <TextField
            name="upload-photo"
            type="file"
            onChange={saveFile}
          />
          <Button
            variant="contained"
            className="sightingpage__button"
            color="success"
            endIcon={<SendIcon />}
            onClick={sightingHandler}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Sighting;
