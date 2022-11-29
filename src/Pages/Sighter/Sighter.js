// import React, { useState } from "react";
// import { Button } from '@mui/material';
// import { TextField } from '@mui/material';
// import { Box } from '@mui/material';
// import { Container, Typography } from '@mui/material';
// import Stack from '@mui/material/Stack';

// function Sighter() {
//     const [textValue, setTextValue] = useState("");
//     const onTextChange = (e) => setTextValue(e.target.value);
//     const handleSubmit = () => console.log("i am click");
//     const handleReset = () => setTextValue("something");
//     return (
//         <>
//             <Container
//                 variant="outlined"
//                 sx={{ width: 400, maxWidth: '100%', gap: 1.5 }}>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '25ch' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <Typography variant="h5" color="inherit" noWrap sx={{ color: 'red', m: 1 }}>
//                         <b>SIGHTER</b>
//                     </Typography>
//                     <TextField
//                         onChange={onTextChange}
//                         value={textValue}
//                         label={"Name"} //optional
//                     />
//                     <TextField
//                         onChange={onTextChange}
//                         value={textValue}
//                         label={"Breed"} //optional
//                     />
//                     <TextField
//                         onChange={onTextChange}
//                         value={textValue}
//                         label={"Size"} //optional
//                     />
//                     <TextField
//                         onChange={onTextChange}
//                         value={textValue}
//                         label={"Characteristics"} //optional
//                     />
//                     <TextField
//                         onChange={onTextChange}
//                         value={textValue}
//                         label={"Description"} //optional
//                     />
//                     {/* <Button onClick={handleSubmit} sx={{ mt: 3 }}>SEND</Button>
//                     <Button onClick={handleReset} sx={{ mt: 3 }}>RESET</Button> */}
//                 </Box>
//             </Container>
//         </>
//     )
// }

// export default Sighter

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
import "./Sighting.css";
import SendIcon from "@mui/icons-material/Send";
import MapComponent from "../../Components/MapComponent/MapComponent";

function Sighting() {
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [catName, setCatName] = useState("");
    const [position, setPosition] = useState("");
    const [eventInfo, setEventInfo] = useState("");

    //const navigate = useNavigate();
    function sightingHandler() {
        var payload = {
            OwnerName: ownerName,
            Email: email,
            CatName: catName,
            Position: position,
            EventInfo: eventInfo,
        };
        console.log(payload);
        axios
            .post("https://localhost:7164/api/Cats/wanting", payload)
            .then((response) => {
                //navigate("/");
                console.log(response);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
    return (
        <>
            <div className="sightingpage__introtext">
                <h2>Report Found Pet</h2>
                <p>
                    Use this form to make a report about a sighting of a probably lost pet, e.g. a scrawny cat or dog looking out of place. Select the last known
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
                    // onChange={(e) => setPosition(e.target.value)}
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
                        className="sightingpage__button"
                        color="success"
                        endIcon={<SendIcon />}
                        onClick={sightingHandler}
                        sx={{ mt: 3 }}
                    >
                        Submit
                    </Button>
                </Box>
            </div>
        </>
    );
}

export default Sighting;
