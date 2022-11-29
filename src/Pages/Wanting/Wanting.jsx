import React from "react";
import { useState, useEffect } from "react";
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
  const [position, setPosition] = useState([]);
  const [eventInfo, setEventInfo] = useState("");

  //const navigate = useNavigate();
  function wantingHandler() {
    var payload = {
      OwnerName: ownerName,
      Email: email,
      CatName: catName,
      Position: position,
      EventInfo: eventInfo,
    };
    console.log("🍊Payload: ", payload);
    axios
      .post("http://petfinderapi.azurewebsites.net/api/Wanting", payload)
      .then((response) => {
        //navigate("/");
        console.log("🍏Response: ", response);
      })
      .catch((error) => {
        console.log("🍎Error response: ", error.response);
      });
  }

  // const uploadFile = async (e) => {
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append("formFile", file);
  //   formData.append("fileName", fileName);

  //   console.log("🍎", formData);

  //   const response = await axios({
  //     method: "post",
  //     url: "http:petfinderapi.azurewebsites.net/api/Wanting",
  //     data: formData,
  //     headers: {
  //       "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
  //     },
  //   });

  //   console.log("🥝", response);
  // };

  const getWebData = async () => {
    let apiMarkers = await axios.get(
      "https://petfinderapi.azurewebsites.net/api/Wanting"
    );
    console.log(apiMarkers.data);
  };

  // useEffect(() => {
  //   const getWebData = async () => {
  //     let apiMarkers = await axios.get(
  //       "https://petfinderapi.azurewebsites.net/api/Wanting"
  //     );
  //     console.log("🫤", apiMarkers.data);
  //     setMapMarkers(apiMarkers.data.wantings);
  //   };

  //   getWebData().catch(console.error());
  // }, []);

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
            onChange={(e) => setPosition(e.target.value.toString())}
          />
          <TextField
            label="Event Information"
            placeholder="Please enter event info"
            minRows={3}
            value={eventInfo}
            onChange={(e) => setEventInfo(e.target.value)}
          />
          <Button
            variant="contained"
            className="wantingpage__button"
            color="success"
            endIcon={<SendIcon />}
            onClick={wantingHandler}
            sx={{ mt: 3 }}
          >
            Submit
          </Button>
        </Box>
      </div>
    </>
  );
}

export default Wanting;
