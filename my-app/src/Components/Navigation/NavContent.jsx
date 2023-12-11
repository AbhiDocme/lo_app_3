import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Chip,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Menu,
  Stack,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import MaterialUISwitch from "../../Functions/MaterialUISwitch";

function NavContent({ mobileOpen, setMobileOpen }) {
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const chipdata = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg",
      name: "First Name",
      email: "Email address",
    },
  ];

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box width="60%">
        <Stack spacing={1}>
          <FormGroup>
            <FormControlLabel
              sx={{ transform: "translate(12px)" }}
              control={
                <MaterialUISwitch
                  id="theme_mobileview"
                  sx={{ m: 1 }}
                  defaultChecked
                />
              }
            />
          </FormGroup>
          <FormGroup>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon
                sx={{ transform: "translate(26px,0)" }}
                color="action"
              />
            </Badge>
          </FormGroup>
          <Stack
            direction="row"
            sx={{
              width: "60%",
            }}
          >
            <Avatar
              sx={{ transform: "translate(20px)" }}
              sizes="small"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mamooty.jpg/220px-Mamooty.jpg"
            ></Avatar>
          </Stack>
        </Stack>
      </Box>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        color="inherit"
        sx={{
          width: { sm: `calc(100% - ${70}px)` }
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontSize={"medium"}
            color={"#6A4BFC"}
            fontWeight={700}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOYALTRI
          </Typography>
          <Box sx={{ flexGrow: 1, width: { sm: `calc(100% - ${70}px)` } }}>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "1rem",
              }}
            >
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey",
                      borderRadius: "50px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#6640EB",
                    },
                    "&.Mui-focused fieldset": {
                      border: ".5px solid #6640EB",
                    },
                  },
                }}
                size="small"
                id="searchbar"
                autoComplete="off"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <KeyboardCommandKeyIcon fontSize="15px" />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Box>

          {isNonMobileScreen ? (
            <Box>
              <Stack spacing={1} direction="row">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch
                        id="theme"
                        sx={{ m: 1 }}
                        defaultChecked
                      />
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Badge
                    badgeContent={2}
                    color="error"
                    sx={{ transform: "translate(-20px,15px)" }}
                  >
                    <NotificationsIcon color="action" />
                  </Badge>
                </FormGroup>
                {chipdata &&
                  chipdata.map((data) => {
                    return (
                      <Chip
                        key={data.id}
                        sx={{
                          transform: "translate(0px,5px)",
                          height: "2.3rem",
                          width: "fit-content",
                          p:1
                        }}
                        avatar={
                          <Avatar
                            sx={{ transform: "translate(-5px,0px)" }}
                            alt="Natacha"
                            src={data.src}
                          />
                        }
                        label={
                          <>
                            <Typography fontSize={12}>{data.name}</Typography>
                            <Typography fontSize={10}>{data.email}</Typography>
                          </>
                        }
                        variant="filled"
                        color="default"
                      />
                    );
                  })}
              </Stack>
            </Box>
          ) : (
            <Box>
              <IconButton
                size="large"
                id="mobile_menu_icon"
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}

export default NavContent;
