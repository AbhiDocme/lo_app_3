import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import OrganisationContactCard from "./OrganisationContactCard";
import OrganisationList from "./OrganisationList";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
function OrganisationalSettingsPage() {
  return (
    <Box
      sx={{
        height: "auto",
        overflow: "auto",
        width: "100%",
        marginTop: "4rem",
      }}
    >
      <Box
        sx={{ width: "100%", height: "100px", backgroundColor: "#F1F1F1" }}
      ></Box>
      <Grid container direction={{ xs: "column", lg: "row" }} p={2}>
        <Grid item xs={4}>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Box>
              <Avatar
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D"
                sx={{
                  width: "100px",
                  height: "100px",
                  transform: "translate(0px,-30px)",
                  border: "3px solid #fff",
                  boxShadow: "0px 2px 8px #000",
                }}
              ></Avatar>
              <Typography
                fontSize={12}
                ml={1.3}
                sx={{ color: "#ced0ce", transform: "translate(0px,-20px)" }}
              >
                Remove Image
              </Typography>
              <IconButton
                size="small"
                sx={{
                  transform: "translate(75px,-80px)",
                  backgroundColor: "#6640EB",
                  ":hover": {
                    backgroundColor: "#6640EB",
                  },
                }}
              >
                <CameraAltIcon fontSize="12" sx={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                MH TRUST
              </Typography>
              <Box display={"flex"} mt={0.5}>
                <LocalPhoneIcon sx={{ mr: 1 }} fontSize="12" />
                <Typography fontSize={12}>+971 50521252 </Typography>
                <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
              </Box>
              <Box display={"flex"} mt={0.5}>
                <EmailOutlinedIcon sx={{ mr: 1 }} fontSize="12" />
                <Typography fontSize={12}>khadija@loyaltri.com</Typography>
                <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
              </Box>
              <Box mt={1}>
                <IconButton size="small" sx={{ m: 0.1, border: ".5px solid #e9ecef" }}>
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ m: 0.1, border: ".5px solid #e9ecef" }}>
                  <InstagramIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ m: 0.1, border: ".5px solid #e9ecef" }}>
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" sx={{ m: 0.1, border: ".5px solid #e9ecef" }}>
                  <FacebookIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} mt={{ xs: 3, lg: 0 }}>
          <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
            <Box>
              <Typography fontSize={15} color={"gray"}>
                Address
              </Typography>
              <Typography fontSize={15}>9th Arcade, Swift Tower</Typography>
              <br />
              <Typography fontSize={15} color={"gray"}>
                Country
              </Typography>
              <Typography fontSize={15}>United Arab Emirates</Typography>
              <br />
              <Box display={"flex"} mt={0.5}>
                <LanguageIcon sx={{ mr: 1 }} fontSize="12" />
                <Typography fontSize={12}>www.mhtrust.com</Typography>
                <ContentCopyIcon sx={{ ml: 1 }} fontSize="12" />
              </Box>
            </Box>

            <Box>
              <Typography fontSize={15} color={"gray"}>
                City
              </Typography>
              <Typography fontSize={15}>Dubai</Typography>
              <br />
              <Typography fontSize={15} color={"gray"}>
                Region
              </Typography>
              <Typography fontSize={15}>Eastern Region</Typography>
              <br />
              <Typography fontSize={15} color={"gray"}>
                Currency
              </Typography>
              <Typography fontSize={15}>AED</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={2}
          mt={{ xs: 3, lg: 0 }}
          textAlign={{ xs: "center", lg: "start" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              display: { xs: "", lg: "flex" },
              marginLeft: { xs: "1px", lg: "auto" },
              mr: 2,
            }}
          >
            {" "}
            <EditIcon fontSize="12" />
            &nbsp; Edit
          </Button>
        </Grid>
      </Grid>
      <Divider />

      <OrganisationContactCard />
      <OrganisationList />
    </Box>
  );
}

export default OrganisationalSettingsPage;
