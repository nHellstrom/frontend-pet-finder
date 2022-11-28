import React, { useState } from "react";
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

function Sighter() {
    const [textValue, setTextValue] = useState("");
    const onTextChange = (e) => setTextValue(e.target.value);
    const handleSubmit = () => console.log("i am click");
    const handleReset = () => setTextValue("something");
    return (
        <>
            <Container
                variant="outlined"
                sx={{ width: 400, maxWidth: '100%', gap: 1.5 }}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h5" color="inherit" noWrap sx={{ color: 'red', m: 1 }}>
                        <b>SIGHTER</b>
                    </Typography>
                    <TextField
                        onChange={onTextChange}
                        value={textValue}
                        label={"Name"} //optional
                    />
                    <TextField
                        onChange={onTextChange}
                        value={textValue}
                        label={"Breed"} //optional
                    />
                    <TextField
                        onChange={onTextChange}
                        value={textValue}
                        label={"Size"} //optional
                    />
                    <TextField
                        onChange={onTextChange}
                        value={textValue}
                        label={"Characteristics"} //optional
                    />
                    <TextField
                        onChange={onTextChange}
                        value={textValue}
                        label={"Description"} //optional
                    />
                    {/* <Button onClick={handleSubmit} sx={{ mt: 3 }}>SEND</Button>
                    <Button onClick={handleReset} sx={{ mt: 3 }}>RESET</Button> */}
                </Box>
            </Container>
        </>
    )
}

export default Sighter