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
import ImageUpload from "../../Components/ImageUpload/FileUpload"
function Wanting() {
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [catName, setCatName] = useState("");
  const [position, setPosition] = useState("");
  const [eventInfo, setEventInfo] = useState("");
  const [file, setFile] = useState();

  //const navigate = useNavigate();
  const wantingHandler = async () => {
    const reader = new FileReader();
    let base64String;
    reader.onloadend = () => {
       base64String = reader.result
          //.replace('data:', '')
        //  .replace(/^.+,/, '');
      console.log("Base64 string:", base64String);
      // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
    };
    reader.readAsArrayBuffer(file)

    //reader.readAsDataURL(file);
  /* let formData = new FormData();
    formData.append("OwnerName", ownerName )
    formData.append("Email:", email)
    formData.append("CatName:", catName)
    formData.append("Position:", position)
    formData.append("Eventinfo:", eventInfo)
      console.log("🍊🍊🍊", formData);*/
    //formData.append("image:", base64String)
    let payload = {
      OwnerName: ownerName,
      Email: email,
      CatName: catName,
      Position: position,
      EventInfo: eventInfo,
    //  image: base64String
    };

    //console.log(file);
    //const formData = new FormData();
    //formData.append("image", "blob", file);

    try {
        const response = await axios({
            method: "post",
            url: "https://petfinderapi.azurewebsites.net/api/Wanting/lottentestingstuff",
            data: payload,
           // headers: { "Content-type": "application/json" },
        });
        console.log("🍊",response)



/*
      const res = await axios.post("https://petfinderapi.azurewebsites.net/api/Wanting", formData,
        {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
      console.log("🍊", res);*/
    } catch (ex) {
      console.log("🍊🍊", ex);
    }
  };
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };  
  return (
    <div className="wanting">
      <Container
        variant="outlined"
        sx={{ width: 400, maxWidth: "100%", gap: 1.5 }}
      >
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          sx={{ color: "DarkMagenta", m: 1 }}
        >
          <b>PET FINDER FORM</b>
        </Typography>

        <MapComponent mapCoordinate={setPosition} />

        <Box
          component="form"
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
              label="image"
              type="file"
              onChange={saveFile}
              key="123456"
          />
        </Box>
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
      </Container>
    </div>
  );
}

export default Wanting;
