import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "../components/container/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
function ContactUs(props) {
  return (
    <Box id="contact">
      <Container 
                      display={"flex"}
                      flexDirection={{ xs: "column", sm: "column", md: "row" }}
                      paddingY={{xs: 6, sm: 2}}
      >
        <Box
        padding={4}
        >
          <Box data-aos={"fade-up"}>
            <Typography
              variant="h4"
              color="text.primary"
              marginBottom={5}
              sx={{
                fontWeight: 700,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              component="p"
              marginBottom={3}
              color="text.secondary"
              sx={{ fontWeight: 1000 }}
            >
              Ut Cabs Ride Solutions
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Kigali-Rwanda
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Email: cabsut.info@gmail.com
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Phone: +250791852153
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Follow Us
            </Typography>
            <Box>
              <Typography component="a" sx={{ cursor: "pointer" }}>
                <FacebookIcon fontSize="large" color="primary" />
              </Typography>
              <Typography component="a" sx={{ cursor: "pointer" }}>
                <TwitterIcon fontSize="large" color="info" />
              </Typography>
            </Box>
          </Box>
        </Box>
<Box>
<iframe style={{ borderRadius:"20"}} width="842" height="460" id="gmap_canvas" src="https://maps.google.com/maps?q=555%20South%2018th%20Street,%20Columbus,%20OH,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
</Box>

      </Container>
    </Box>
  );
}

export default ContactUs;
