import React, {  useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainComponent } from "./views";
import appstore from "./assets/img/appstore.png"
import playstore from "./assets/img/playstore.png"
import { Box, IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStateContext } from "./contexts/ContextProvider";
import { ThemeSettings } from "./components";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { LoginPage, AddBookings } from "./views";
  // API key of the google map
  const GOOGLE_MAP_API_KEY = 'AIzaSyBG6bUNBCd9TmMpvvYu7Ymj5iHQzo9Pkdk';

const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}
function App() {
  const { openModal, themeSettings, setThemeSettings, currentColor } =
    useStateContext();
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: "ease-in-out",
    });
  }, []);

 
// load google map script

const [loadMap, setLoadMap] = useState(false);
 
useEffect(() => {
  loadGoogleMapScript(() => {
    setLoadMap(true)
  });
}, []);

  return (
    // <Provider store={store}>
    //   <FirebaseProvider config={FirebaseConfig} appcat={AppCat}>
    //     <AuthLoading>
    <>
    
    <Box position={"fixed"} left={20} bottom={20} sx={{zIndex: "1000"}}>
      <Box justifyContent={"flex-start"} alignItems="center" xs={12} md={6} sx={{display: {xs: "flex", md: "flex"}}}>
        <Box component={"img"} sx={{width: "30%"}} src={appstore} />
        <Box component={"img"} sx={{marginLeft: "5px", width: "36%"}} src={playstore} />
      </Box>
    </Box>
      <Box position={"fixed"} left={20} bottom={20} style={{ zIndex: "1000" }}>
      </Box>
      <Box position={"fixed"} right={10} bottom={20} style={{ zIndex: "1000" }}>
        <Tooltip title="Setting" placement="top" arrow>
          <IconButton
            sx={{
              marginRight: "5px",
              textTransform: "none",
              background: currentColor,
              // color: currentColor,
              // borderColor: currentColor,
              "&:hover": {
                background: currentColor,
                boxShadow: "0 12px 15px rgb(140 152 164 / 10%)",
              },
            }}
            onClick={() => setThemeSettings(true)}
          >
            <SettingsIcon style={{ color: "white" }} />
          </IconButton>
        </Tooltip>
      </Box>

      {themeSettings && <ThemeSettings />}

      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route path="signin" element={<LoginPage />} />
            <Route path="addbookings" element={!loadMap ? <div>Loading...</div> : <AddBookings />} />
          </Route>
        </Routes>
        {openModal ? (
          <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/addbookings" element={!loadMap ? <div>Loading...</div> : <AddBookings />} />
          </Routes>
        ) : null}
      </Router>
    </>
  );
}

export default App;
