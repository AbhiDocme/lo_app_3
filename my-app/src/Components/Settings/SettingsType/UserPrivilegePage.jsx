import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function UserPrivilegePage() {
  const isNonMobleScreen = useMediaQuery("(min-width:992px)");

  const UserPrevCardData = [
    {
      name: "Payroll",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: true,
    },
    {
      name: "Performance",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: false,
    },
    {
      name: "Leave",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: false,
    },
    {
      name: "VR Analytics",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: true,
    },
    {
      name: "Augment Reality",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: true,
    },
    {
      name: "Recruitment",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: false,
    },
    {
      name: "Company",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: false,
    },
    {
      name: "Attendance",
      Dis: "Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .",
      Status: true,
    },
  ];

  const UsersList = [
    { image: "", name: "Syed Ali", Enable: true },
    { image: "", name: "Sabeer KM", Enable: false },
    { image: "", name: "Fatima Ansar", Enable: false },
    { image: "", name: "Nazar Abdulla", Enable: false },
    { image: "", name: "Hisham", Enable: false },
    { image: "", name: "Mashrooq", Enable: false },
    { image: "", name: "Bilal Asaad", Enable: false },
  ];

  return (
    <Box sx={{ height: "auto", overflow: "auto", width: "100%" }}>
      <Box
        sx={
          isNonMobleScreen
            ? { p: 4, marginTop: "3.5rem" }
            : { p: 2, marginTop: "3.5rem" }
        }
      >
        <Box>
          <Typography fontSize={22} fontWeight={600}>
            User Privileges
          </Typography>
          <Typography fontSize={12} mt={1}>
            Customizing your workspace, make it more enjoyable and comfortable
            to work!
          </Typography>
        </Box>
        <Divider sx={{ mt: 3 }}></Divider>
        <Box mt={2}>
          <Typography fontSize={15} fontWeight={600}>
            Features / Modules
          </Typography>
          <Typography fontSize={12}>
            In here you can enable or disable the user for authorization.
          </Typography>
        </Box>

        <Grid container sx={{ mt: 1 }}>
          {UserPrevCardData.map((data, index) => {
            return (
              <Card key={index} sx={{ minWidth: 275, m: 1 }}>
                <CardContent>
                  <Box sx={{ display: "flex" }}>
                    <Typography sx={{ fontSize: 14 }} fontWeight={600}>
                      {data.name}
                    </Typography>
                    <Switch
                      id={`user_prev_${data.name}`}
                      sx={{ ml: "auto", transform: "translate(0px,-10px)" }}
                      defaultChecked
                    />
                  </Box>
                  <Divider />
                  <Box mt={1}>
                    <Typography sx={{ width: 145 }} variant="body2">
                      {data.Dis}
                    </Typography>
                  </Box>
                  <br />
                  <Chip
                    size="small"
                    variant="outlined"
                    color={data.Status ? "success" : "error"}
                    label={data.Status ? "Activated" : "Deactivated"}
                  />
                </CardContent>
              </Card>
            );
          })}
        </Grid>
        <Divider sx={{ mt: 2 }} />

        <Box>
          <Box mt={2}>
            <Typography fontSize={15} fontWeight={600}>
              Users{" "}
            </Typography>
            <Typography fontSize={12}>
              In here you can enable or disable the user for authorization.{" "}
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {UsersList.map((data, index) => {
              return (
                <Grid key={index} item xs>
                  <Card
                    variant="outlined"
                    sx={{
                      minWidth: 100,
                      height: 130,
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                        textAlign: "center",
                      }}
                    >
                      <Avatar></Avatar>
                      <Typography mt={1} fontSize={15}>
                        {data.name}
                      </Typography>
                      <Typography fontSize={12} variant="body2">
                        enable
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <br />
        <Box>
          <Typography fontSize={15}>Search</Typography>
          <TextField
            id="outlined-basic"
            size="small"
            placeholder="Search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon fontSize="small"/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default UserPrivilegePage;
