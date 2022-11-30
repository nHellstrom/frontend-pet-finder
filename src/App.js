import './App.css';
import React from 'react';
import Map from "./Components/MapComponent/MapComponent";
import Frontpage from "./Pages/Frontpage/Frontpage";
import Navbar from "./Components/Navbar/Navbar";
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Router, Route, Routes } from "react-router-dom";
import BottomNav from './Components/BottomNav/BottomNav';
import Sighter from './Pages/Sighter/Sighter';
import Wanting from './Pages/Wanting/Wanting';
import Footer from './Components/Footer/Footer';
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from './Components/AuthRouter/AuthRouter';
import AboutPage from './Pages/About/AboutPage';
import Profile from './Components/Profile/Profile';

function App() {
  //const { user, isAuthenticated, isLoading } = useAuth0();
  // Temporary test values

  const kattTheme = createTheme({
    palette: {
      primary: {
        light: '#549caa',
        main: '#0b7285',
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

      <Container maxWidth="lg">
        <Navbar />

        <main id="ContentArea">

          <Routes>
            <Route path="" element={<Frontpage />} />
            <Route path="/" element={<Frontpage />} />
            <Route path="/home" element={<Frontpage />} />
            <Route path="/map" element={<Map />} />
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
