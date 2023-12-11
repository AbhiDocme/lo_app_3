import {
  Autocomplete,
  Box,
  Divider,
  Grid,
  InputAdornment,
  Link,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Appearance() {
  const Theme = [{ id: 1 }, { id: 2 }, { id: 3 }];

  const isNonMobleScreen = useMediaQuery("(min-width:992px)");

  const Languages = ["English", "Arabic"];

  return (
    <Box sx={{ height: "auto", overflow: "auto", width: "100%" }}>
      <Box sx={{ p:3, marginTop: "3.5rem", mb: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Appearance
        </Typography>
        <Typography fontSize={12}>
          Customizing your workspace, make it more enjoyable and comfortable to
          work! <Link>Create custom theme</Link>
        </Typography>
        <Divider sx={{ mt: 2 }} />
        <br />
        <Box>
          <Grid
            container
            sx={
              isNonMobleScreen
                ? {
                    alignItems: { xs: "center" },
                    justifyContent: { xs: "center" },
                    display: "flex",
                  }
                : {
                    alignItems: { xs: "center" },
                    justifyContent: { xs: "center" },
                    display: "block",
                  }
            }
            spacing={2}
          >
            <Grid item xs>
              <Typography fontSize={15} fontWeight={600}>
                Interface theme
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            {Theme.map((data) => {
              return (
                <Grid key={data.id} item xs>
                  <Box
                    sx={{
                      border: "1px solid black",
                      height: "150px",
                      width: "15.6rem",
                      ":hover": {
                        borderColor: "#6A4BFC",
                      },
                    }}
                  ></Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Sidebar feature
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                size="small"
                id="sidebar_feature"
                options={Languages}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Recent used apps"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FiberManualRecordIcon
                            fontSize="15"
                            sx={{ color: "green" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <br />
            </Grid>
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Language
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Autocomplete
                size="small"
                disablePortal
                id="language_select"
                options={Languages}
                defaultValue={Languages[0]}
                sx={{ width: 300, mt: 2 }}
                renderInput={(params) => <TextField {...params} />}
              />
              <br />
              <Box display={"flex"}>
                <Switch id="arabic_tablefeild" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Show Arabic in table fields
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch id="Enable" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Enable
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <br />
        <Divider sx={{ mt: 2 }} />
        <br />
        <Divider />
        <br />

        <Box>
          <Grid container display={{ xs: "block", lg: "flex" }} spacing={2}>
            <Grid item>
              <Typography fontSize={15} fontWeight={600}>
                Search / Command Bar
              </Typography>
              <Typography fontSize={12}>
                Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc .
              </Typography>
            </Grid>
            <Grid item xs>
              <Box display={"flex"}>
                <Switch id="" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Show Suggestion
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
              <br />
              <Box display={"flex"}>
                <Switch id="Voice_command" defaultChecked />
                <Box fontSize={15} fontWeight={600}>
                  Disable Voice Command
                  <Typography fontSize={12}>
                    Gorem ipsum dolor sit amet,
                    <br /> consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Appearance;
