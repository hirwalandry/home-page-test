import React, { useState } from "react";
import Header from "../components/header/Header";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Sidebar from "../components/sidebar/Sidebar";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "../components/container/Container";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "./../components/footer/Footer";
import {useStateContext} from "../contexts/ContextProvider"

function LandingPage({
  children,
  colorInvert = false,
  bgcolor = "transparent",
}) {
  const theme = useTheme();
  const {openSidebar, setOpenSidebar} = useStateContext()
  const linkColor = colorInvert ? "common.white" : "text.primary";
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });


  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });
  const pages = [
    {
      title: "Home",
      href: "home",
      icons: (
        <HomeIcon
          sx={{
            marginRight: theme.spacing(1 / 4),
            width: 16,
            height: 16,

            color: linkColor,
          }}
        />
      ),
    },
    {
      title: "AboutUs",
      href: "about",
      icons: (
        <InfoIcon
          sx={{
            marginRight: theme.spacing(1 / 4),
            width: 16,
            height: 16,
            color: linkColor,
          }}
        />
      ),
    },
     {
      title: "CustomerCare",
      href: "customer",

    },
     {
      title: "Services",
      href: "services",
    },
    {
      title: "ContactUs",
      href: "contact",
      icons: (
        <EmailIcon
          sx={{
            marginRight: theme.spacing(1 / 4),
            width: 16,
            height: 16,
            color: linkColor,
          }}
        />
      ),
    },
  ];
  console.log(theme.palette.background.paper);
  return (
    <Box>
      <AppBar
        position={"fixed"}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper :  `${theme.palette.mode === "light" ? "#f5f6f6" : "#2a3555"}`,
        }}
        elevation={trigger ? 3 : 0}
      >
        <Box paddingX={2}>
          <Header
            pages={pages}
            onSidebarOpen={() => setOpenSidebar(true)}
            colorInvert={trigger ? false : colorInvert}
          />
        </Box>
      </AppBar>
      <Sidebar
        onClose={() => setOpenSidebar(false)}
        open={open}
        variant="temporary"
        pages={pages}
      />

      <main style={{ marginTop: " 75px" }}>
        {children}
        <Divider style={{ marginTop: "20px" }} />
      </main>

      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
}

LandingPage.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};
export default LandingPage;
