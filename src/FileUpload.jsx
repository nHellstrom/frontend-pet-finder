// import React, { useState } from "react";
// import axios from "axios";
// import { Container } from '@mui/material';
// import { Input, Button } from '@mui/material';

// export const FileUpload = () => {
//   const [file, setFile] = useState();
//   const [fileName, setFileName] = useState();

//   const saveFile = (e) => {
//     console.log(e.target.files[0]);
//     setFile(e.target.files[0]);
//     setFileName(e.target.files[0].name);
//   };

//     }
//   };

//   return (
//     <>
//       <Container maxWidth="sm">
//         <h1>Upload Files</h1>
//         <Input type="file" onChange={saveFile} />
//         {/* <input type="button" value="upload"/> */}
//         <Button variant="contained" onClick={uploadFile} >upload</Button>
//       </Container>
//     </>
//   );
// };