import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../assets/img/pic1.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import taxi from "../assets/img/taxi1.jpeg";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import Container from "../components/container/Container";
import { useStateContext } from "../contexts/ContextProvider";

function Home() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const { setOpenModal, currentColor } = useStateContext();
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: "repeat-x",
        position: "relative",
      }}
      id="home"
    >
      <Box paddingY={{ xs: 0, sm: "4rem", md: "8rem" }}>
        <Container
          display={"flex"}
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          paddingY={{xs: 6, sm: 2}}
        >
          <Box maxWidth={{ xs: "50%", sm: "50%" }} width={{ sm: 1 }}>
            <Typography
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                // background:
                //   "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
                // backgroundClip: "text",
                // textFillColor: "transparent"
              }}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Book a Taxi to your destination!")
                    .start();
                }}
              />
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              the perfect way to get through your day needs. Ut cabs taxis are available 24/7 and you can book and travel in an instant.
              with rides starting from as low as $6/km, you can choose from a wide range of option! you can also opt to do your bit for the environment with 
            </Typography>
            <Box
              // display="flex"
              // alignItems={{ xs: "stretched", sm: "flex-start" }}
              marginTop={5}
           
            >
              <Link to="/addbookings" style={{ textDecoration: "none" }}>
                <Button
                   sx={{
                    textTransform: "none",
                    color: "white",
                    background: currentColor,
                    "&:hover": {
                      background: currentColor,
                    
                    },
                  }}
                  color={currentColor}
                  onClick={() => setOpenModal(true)}
                  size="large"
                  variant="contained"
                  maxWidth={100}
                >
                  Book now
                </Button>
              </Link>
             
            </Box>
          </Box>
          <Box style={{ borderRadius:'5px'}}
                  component={CardMedia}
                  height={1}
                  width={1}
                  minHeight={400}
                  image={taxi}
                  alt={"taxi"}
                >
                </Box>

          {/* <Box
           
          > */}
            {/* <Box marginX={1}> */}
              {/* <Box
               sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:" red"
               
              }}
                paddingY={1}
                component={"img"}
                src={pic1}
                height={1}
                width={1}
                maxWidth={900}
              /> */}
            {/* </Box> */}
          {/* </Box> */}
        </Container>
      </Box>
      <Box
        component={"svg"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: "100%",
          marginBottom: theme.spacing(-1),
        }}
      >
        
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
}

export default Home;

