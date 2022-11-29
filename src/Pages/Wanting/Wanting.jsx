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
import "./Wanting.css";
import SendIcon from "@mui/icons-material/Send";
import MapComponent from "../../Components/MapComponent/MapComponent";

function Wanting() {
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [catName, setCatName] = useState("");
  const [position, setPosition] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [file, setFile] = useState();

  //const navigate = useNavigate();
 function wantingHandler() {
    const formData = new FormData();
    formData.append("OwnerName", ownerName);
    formData.append("Email", email);
    formData.append("CatName", catName); 
    formData.append("Description", eventInfo);
    formData.append("image", file);
    console.log("❌",formData);
     axios
      .post("https://petfinderapi.azurewebsites.net/api/Wanting", formData)
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
      <div className="wantingpage__introtext">
        <h2>Report Lost Pet</h2>
        <p>
          Use this form to make a report about a lost pet. Select the last known
          location on the map.
        </p>
      </div>
      <div className="wantingpage__container">
        <MapComponent mapCoordinate={setPosition} />

        <Box
          component="form"
          className="wantingpage__submissionform"
          sx={{
            "& .MuiTextField-root": { m: 1, mt: 2, width: "30ch" },
          }}
          noValidate
        >
          <TextField
            id="ownerName"
            placeholder="Please enter your name"
            label="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />

          <TextField
            label="Email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="catName"
            placeholder="Please enter cat name"
            label="cat Name"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
          />
          <TextField
            label="Location"
            disabled
            placeholder="Please enter your Location"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            label="Event Information"
            placeholder="Please enter event info"
            minRows={3}
            value={eventInfo}
            onChange={(e) => setEventInfo(e.target.value)}
          />
          <TextField
            name="upload-photo"
            placeholder="Please enter event info"
            type="file"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
          <Button
            variant="contained"
            className="wantingpage__button"
            color="success"
            endIcon={<SendIcon />}
            onClick={wantingHandler}
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Wanting;
