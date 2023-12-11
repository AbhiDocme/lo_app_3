import React from "react";
import {
  Box,
  Container,
  Divider,
  ListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo from "../../../Assets/Logo.png";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import TwitterIcon from "@mui/icons-material/Twitter";
import Form from './Form'


function Loginpage() {
  const isnonMobileScreen = useMediaQuery("(min-width:992px)");
  const isScreen570 = useMediaQuery("(min-width:570px)");


  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <Box
          sx={
            isnonMobileScreen
              ? { width: "50%" }
              : { margin: "auto", width: "100%" }
          }
        >
          <Typography
            sx={
              isnonMobileScreen
                ? { marginTop: "1rem", marginLeft: "2rem" }
                : { marginTop: "1rem", marginLeft: "2rem", textAlign: "center" }
            }
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box>
            <Typography
              fontSize={"20px"}
              fontWeight={500}
              sx={{ marginTop: "3rem" }}
              variant="h6"
              textAlign={"center"}
            >
              Welcome Back
            </Typography>
            <Typography
              sx={{ color: "grey", fontSize: "13px" }}
              textAlign={"center"}
            >
              Please enter your details to sign in.
            </Typography>
          </Box>
          <br />
          <Box
            sx={{ display: "flex", justifyContent: "center" }}
            textAlign={"center"}
          >
            <GoogleIcon
              sx={{ fontSize: "32px", padding: ".5rem", color: "red" }}
            />
            <AppleIcon sx={{ fontSize: "32px", padding: ".5rem" }} />
            <TwitterIcon
              sx={{ fontSize: "32px", padding: ".5rem", color: "blue" }}
            />
          </Box>
          <br />
          <Divider
            sx={
              isScreen570
                ? { marginLeft: "8rem", marginRight: "8rem", color: "grey" }
                : { marginLeft: "2rem", marginRight: "2rem", color: "grey" }
            }
          >
            <Typography fontSize={'13px'}>or continue with</Typography>
          </Divider>
          <br />

          <Form/>     {/* Form page... */}
        
        </Box>
        {isnonMobileScreen ? (
          <Box
            sx={{
              width: "50%",
              height: "95vh",
              backgroundColor: "#6640EB",
              marginTop: "1rem",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", padding: "3rem 6rem .5rem 5rem" }}
            >
              The Simplest way to manage your Organisation
            </Typography>
            <Typography sx={{ color: "white", paddingLeft: "5rem" }}>
              Enter your crenditails to access your account
            </Typography>
            <Box
              sx={{
                width: "60%",
                height: "50%",
                backgroundColor: "white",
                marginLeft: "5rem",
                marginTop: "2rem",
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  height: "60%",
                  border: "1px solid grey",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  transform: "translate(12rem,3rem)",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                color: "white",
                fontWeight: "500",
                marginLeft: "2rem",
                marginTop: "1rem",
              }}
            >
              <ListItem>weChat</ListItem>
              <ListItem>Booking.com</ListItem>
              <ListItem>Google</ListItem>
              <ListItem>Spotify</ListItem>
              <ListItem>Strip</ListItem>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Container>
  );
}

export default Loginpage;