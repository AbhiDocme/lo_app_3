import {
  Avatar,
  Box,
  Button,
  Divider,
  ListItemButton,
  ListItemText,
  Modal,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import UnfoldMoreSharpIcon from "@mui/icons-material/UnfoldMoreSharp";
import AddIcon from "@mui/icons-material/Add";
import CorCloud from "../../../../Assets/Cor Cloud.png";
import CompanyTableData from "./CompanyTableData";
import AddCompany from "./AddCompany";
import { useState } from "react";
import { newContext } from "../../../../App";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CompanyList() {
  const isNonMobileScreen = useMediaQuery("(min-width:900px)");

  const { CompanyDetails, setCompanyDetails } = useContext(newContext);

  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const style = {
    position: "absolute",
    right: "0",
    width: "40%",
    height: "100vh",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 1,
  };
  const style2 = {
    width: "100%",
    height: "100vh",
    bgcolor: "background.paper",
    p: 1,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const TopButtons = [
    "Basic Details",
    "Location",
    "Departments",
    "Category",
    "Subcategory",
    "Leave Types",
    "Shifts",
    "Shift Scemes",
    "Payroll",
  ];

  const ComponentData = [
    <CompanyTableData />,
    "no data on Location",
    "no data on Departments",
    "no data on Category",
    "no data on Subcategory",
    "no data on Leave Types",
    "no data on Shifts",
    "no data on Shift Scemes",
    "no data on Payroll",
  ];

  return (
    <Box sx={{ height: "auto", overflow: "auto", width: "94vw" }}>
      <Box sx={{ pl: 2, pr: 1, marginTop: "5rem", mb: 2 }}>
        <Box display={isNonMobileScreen ? "flex" : "block"}>
          <Box display={"flex"}>
            <Typography>
              Settings{" "}
              <ChevronRightIcon
                fontSize="12"
                sx={{ transform: "translate(0px,3px)" }}
              />
            </Typography>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ transform: "translate(0px,-5px)" }}
            >
              Company
            </Typography>
          </Box>

          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <ListItemButton
              sx={
                isNonMobileScreen
                  ? {
                      backgroundColor: "#e0e1dd",
                      borderRadius: "10px",
                    }
                  : {
                      backgroundColor: "#e0e1dd",
                      borderRadius: "10px",
                      width: "fit-content",
                    }
              }
            >
              <Avatar sx={{ width: 24, height: 24 }} src={CorCloud}></Avatar>
              <ListItemText sx={{ marginLeft: ".5rem" }} />
              {isNonMobileScreen ? (
                <Typography fontSize={13}>Company 1</Typography>
              ) : (
                ""
              )}
              <UnfoldMoreSharpIcon fontSize="15px" />
            </ListItemButton>

            <Button
              onClick={handleOpen}
              size="small"
              sx={{
                ml: 2,
                fontSize: "12px",
                backgroundColor: "#6A4BFC",
                ":hover": {
                  backgroundColor: "#6A4BFC",
                },
              }}
              variant="contained"
            >
              <AddIcon fontSize="small" />{" "}
              {isNonMobileScreen ? "Add Company" : ""}
            </Button>
          </Box>
        </Box>

        <Typography fontSize={11}>
          In the order details section, you can review and manage alll orders
          with their details
        </Typography>
        <Divider sx={{ mt: 3 }} />

        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              p: 1,
              display: "flex",
              gap: 1,
            }}
          >
            {TopButtons.map((data, index) => {
              return (
                <Button
                size="small"
                  key={index}
                  onClick={() => handleChange(index)}
                  variant={value === index ? "contained" : ""}
                  sx={
                    value === index
                      ? {
                          backgroundColor: "#512DBA",
                          "&:hover": {
                            backgroundColor: "#512DBA",
                          },
                        }
                      : {}
                  }
                >
                  {data}
                </Button>
              );
            })}
          </Box>
          {ComponentData.map((data, index) => {
            return (
              <CustomTabPanel key={index} value={value} index={index}>
                {data}
              </CustomTabPanel>
            );
          })}
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isNonMobileScreen ? style : style2}>
          <AddCompany
            setOpen={setOpen}
            CompanyDetails={CompanyDetails}
            setCompanyDetails={setCompanyDetails}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default CompanyList;
