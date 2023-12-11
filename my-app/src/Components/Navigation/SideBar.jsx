import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import BusinessIcon from "@mui/icons-material/Business";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupIcon from "@mui/icons-material/Group";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import logo from "../../Assets/Logo2.png";
import NavContent from "./NavContent";
import { useState } from "react";
import Settings from "../Settings/Settings";
import { Link } from "react-router-dom";

function SideBar() {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  const [SettingsOpen, setSettingsOpen] = useState(false);

  const HandleClick = (title) => {
    if (title === "Settings") {
      setSettingsOpen(!SettingsOpen);
    }
  };

  const toplist = [
    {
      path: "/home",
      title: "Discover",
      icon: <ExploreIcon fontSize="small" />,
    },
    {
      path: "/settings/company",
      title: "Company",
      icon: <BusinessIcon fontSize="small" />,
    },
    {
      path: "/payroll",
      title: "Payroll",
      icon: <MonetizationOnIcon fontSize="small" />,
    },
    {
      path: "/time",
      title: "Time",
      icon: <AccessTimeFilledIcon fontSize="small" />,
    },
    {
      path: "/recruitment",
      title: "Recruitment",
      icon: <GroupIcon fontSize="small" />,
    },
    {
      path: "/performance",
      title: "Performance",
      icon: <SpeedIcon fontSize="small" />,
    },
  ];

  const bottomList = [
    {
      title: "Settings",
      icon: <SettingsIcon fontSize="small" />,
    },
    { path: "/help", title: "Help", icon: <HelpIcon fontSize="small" /> },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Sidebardata = (
    <Box
      sx={{
        width: 70,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#6A4BFC",
      }}
    >
      <List component="nav">
        <img
          src={logo}
          alt=""
          style={{ marginTop: ".5rem", marginLeft: ".6rem" }}
        />
        <br />
        <br />
        {toplist.map((data, index) => {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={data.path}
              onClick={() => {
                setMobileOpen(!mobileOpen);
                setSettingsOpen(false);
              }}
            >
              <ListItemButton
                key={data.title}
                sx={{ display: "block", padding: "0", textAlign: "center" }}
              >
                <IconButton
                  sx={{
                    color: "white",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                  }}
                >
                  {data.icon}
                </IconButton>
                <Typography sx={{ color: "white" }} fontSize={10}>
                  {data.title}
                </Typography>
              </ListItemButton>
            </Link>
          );
        })}
      </List>

      <List component="nav" sx={{ mt: "auto" }}>
        {bottomList.map((data, index) => {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={data.path}
              onClick={() => {
                setMobileOpen(!mobileOpen);
              }}
            >
              <ListItemButton
                key={data.title}
                sx={{ display: "block", padding: "0", textAlign: "center" }}
              >
                <IconButton
                  onClick={() => {
                    HandleClick(data.title);
                  }}
                  sx={{
                    color: "white",
                    border: "1px solid #fff",
                    borderRadius: "10px",
                  }}
                >
                  {data.icon}
                </IconButton>
                <Typography sx={{ color: "white" }} fontSize={10}>
                  {data.title}
                </Typography>
              </ListItemButton>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      {isNonMobileScreen ? (
        <Box sx={{ height: "100%" }}>
          <NavContent />
          {Sidebardata}
        </Box>
      ) : (
        <Box sx={{}}>
          <NavContent mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
          <Drawer
            variant="temporary"
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 70,
                backgroundColor: "#6A4BFC",
                overflowX: "hidden",
              },
            }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {Sidebardata}
          </Drawer>
        </Box>
      )}
      {SettingsOpen ? (
        <Settings
          setSettingsOpen={setSettingsOpen}
          SettingsOpen={SettingsOpen}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default SideBar;
