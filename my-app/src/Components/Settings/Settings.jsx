import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import LayersIcon from "@mui/icons-material/Layers";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import AllInboxSharpIcon from "@mui/icons-material/AllInboxSharp";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import CorCloud from "../../Assets/Cor Cloud.png";
import { Link } from "react-router-dom";

function Settings({ setSettingsOpen, SettingsOpen }) {
  const isNonMobileScreen = useMediaQuery("(min-width:600px)");

  const [expandedAccordion, setExpandedAccordion] = useState(false);

  const handleAccordionChange = (panel) => (isExpanded) => {
    setExpandedAccordion(isExpanded ? panel : expandedAccordion);
  };

  const Employeelist = [
    {
      path: "/settings/appearance",
      icon: <ColorLensIcon fontSize="15px" />,
      title: "Appearance",
    },
    {
      path: "/settings/notification",
      icon: <NotificationsIcon fontSize="15px" />,
      title: "Notification",
    },
    {
      path: "/settings/userprivileges",
      icon: <AttachFileSharpIcon fontSize="15px" />,
      title: "User Privileges",
    },
  ];

  const Organisationlist = [
    {
      path: "/settings/organisationsettings",
      icon: <LayersIcon fontSize="15px" />,
      title: "Organisation Settings",
    },
    {
      path: "/settings/company",
      icon: <BusinessIcon fontSize="15px" />,
      title: "Company",
    },
    {
      path: "/settings/designation",
      icon: <PersonIcon fontSize="15px" />,
      title: "Designation",
    },
    {
      path: "/settings/documenttypes",
      icon: <ArticleIcon fontSize="15px" />,
      title: "Document Types",
    },
    {
      path: "/settings/assettypes",
      icon: <AllInboxSharpIcon fontSize="15px" />,
      title: "Asset Types",
    },
  ];
  return (
    <Box sx={{ borderRight: ".5px solid gray" }}>
      <ClickAwayListener
        onClickAway={() => {
          setSettingsOpen(false);
        }}
      >
        <Drawer
          variant="permanent"
          sx={
            isNonMobileScreen
              ? {
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "230px",
                    overflowX: "hidden",
                    ml: "70px",
                    mt: "4rem",
                  },
                }
              : {
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: "100%",
                    overflowX: "hidden",
                    mt: "4rem",
                  },
                }
          }
        >
          <Box
            sx={
              isNonMobileScreen
                ? { width: "230px", height: "100%" }
                : { width: "99vw", height: "100vh" }
            }
          >
            <List>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component="nav"
              >
                <ListItemButton
                  sx={{
                    backgroundColor: "#e0e1dd",
                    m: 1,
                    borderRadius: "10px",
                    ":hover": { backgroundColor: "#e0e1dd" },
                    ":active": {
                      backgroundColor: "#e0e1dd",
                    },
                  }}
                >
                  <Avatar src={CorCloud}></Avatar>
                  <ListItemText
                    sx={{ marginLeft: ".5rem" }}
                    primary="Cordova Cloud"
                  />
                  <UnfoldMoreSharpIcon fontSize="15px" />
                </ListItemButton>
                <Accordion
                  expanded={expandedAccordion === "Employee"}
                  onChange={handleAccordionChange("Employee")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Employee</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {Employeelist.map((data, index) => {
                      return (
                        <Link
                          key={index}
                          style={{ textDecoration: "none", color: "black" }}
                          to={data.path}
                          onClick={() => {
                            setSettingsOpen(!SettingsOpen);
                          }}
                        >
                          <ListItemButton
                            sx={{
                              borderRadius: "10px",
                              ":hover": {
                                backgroundColor: "#6A4BFC",
                                color: "#fff",
                              },
                            }}
                          >
                            {data.icon}
                            <Typography fontSize={15}>{data.title}</Typography>
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expandedAccordion === "Organisation"}
                  onChange={handleAccordionChange("Organisation")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Organisation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {Organisationlist.map((data, index) => {
                      return (
                        <Link
                          key={index}
                          style={{ textDecoration: "none", color: "black" }}
                          to={data.path}
                          onClick={() => {
                            setSettingsOpen(!SettingsOpen);
                          }}
                        >
                          <ListItemButton
                            sx={{
                              borderRadius: "10px",
                              ":hover": {
                                backgroundColor: "#6A4BFC",
                                color: "#fff",
                              },
                            }}
                          >
                            {data.icon}
                            <Typography fontSize={15}>{data.title}</Typography>
                          </ListItemButton>
                        </Link>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              </List>
              <ListItemButton sx={{ display: "flex", justifyContent: "right" }}>
                <IconButton
                  onClick={() => {
                    setSettingsOpen(!SettingsOpen);
                  }}
                >
                  X
                </IconButton>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </ClickAwayListener>
    </Box>
  );
}

export default Settings;
