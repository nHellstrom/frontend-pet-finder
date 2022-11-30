import './App.css';
import React from 'react';
import MapWanting from "./Components/MapComponent/MapComponent";
import MapSighting from "./Components/MapComponentSightings/MapComponentSightings";
import Frontpage from "./Pages/Frontpage/Frontpage";
import Navbar from "./Components/Navbar/Navbar";
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from "react-router-dom";
import Sighter from './Pages/Sighter/Sighter';
import Wanting from './Pages/Wanting/Wanting';
import Footer from './Components/Footer/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from './Components/AuthRouter/AuthRouter';
import AboutPage from './Pages/About/AboutPage';
import Profile from './Components/Profile/Profile';
import MapSightings from './Components/MapComponentSightings/MapComponentSightings';
import MapSelectPage from "./Pages/MapSelector/MapSelector";

function App() {
  //const { user, isAuthenticated, isLoading } = useAuth0();
  // Temporary test values

  const kattTheme = createTheme({
    palette: {
      primary: {
        light: '#87bac4',
        main: '#549caa',
        dark: '#08505d',
        contrastText: '#010b0d',

      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
    <ThemeProvider theme={kattTheme}>

      <Container maxWidth="lg" >
        <Navbar />

        <main id="ContentArea">

          <Routes>
            <Route path="" element={<Frontpage />} />
            <Route path="/" element={<Frontpage />} />
            <Route path="/home" element={<Frontpage />} />
            <Route path="/map" element={<MapSelectPage />} />
            <Route path="/map/maplost" element={<MapWanting />} />
            <Route path="/map/mapfound" element={<MapSighting />} />
            <Route path="/foundanimals" element={<MapSightings />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/reportlostcat" element={<Wanting />} />
            </Route>
            <Route path="/reportfoundcat" element={<Sighter />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

        </main>

        <Footer />

      </Container>

    </ThemeProvider>)
    ;
}

export default App;
