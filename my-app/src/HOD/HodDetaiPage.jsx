import {
  Avatar,
  Box,
  Chip,
  Divider,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Women from "../Assets/Women.png";
import PropTypes from "prop-types";
import HodClassTable from "./HodClassTable";
import TeacherLessonOHistory from "./TeacherLessonOHistory";
import { useState } from "react";
import TeachersReport from "./TeachersReport";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
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
    </div>
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
function HodDetaiPage() {

  const isNonMobleScreen = useMediaQuery("(min-width:992px)");

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box p={{ xs: 0, md: 4 }}>
      <Box display={"flex"}>
        <Typography fontSize={15} sx={{ color: "#7E92A2" }}>
          Home
          <ChevronRightIcon
            sx={{ transform: "translate(0px,5px)" }}
            fontSize="small"
          />
        </Typography>
        <Typography fontSize={15} sx={{ color: "#7E92A2" }}>
          Users
          <ChevronRightIcon
            sx={{ transform: "translate(0px,5px)" }}
            fontSize="small"
          />
        </Typography>
        <Typography sx={{ transform: "translate(0px,4px)" }} fontSize={15}>
          User Class Stories
        </Typography>
      </Box>
      <br />

      <Box
        sx={{
          border: "1px solid #E5E5E5",
          borderRadius: "30px",
          height: "auto",
        }}
      >
        <Typography
          fontSize={24}
          fontWeight={600}
          fontFamily={"Plus Jakarta Sans"}
          ml={2}
          p={2}
          lineHeight={"30.24px"}
        >
          User Class Stories
        </Typography>
        <Divider />

        <Box p={4}>
          <Box display={"flex"} sx={{ gap: 2 }}>
            <Avatar
              src={Women}
              sx={{ height: 100, width: 100, borderRadius: "11.2px" }}
            ></Avatar>
            <Box>
              <Typography fontSize={"18.67px"}>
                <PeopleAltOutlinedIcon
                  sx={{ transform: "translate(0px,4px)", color: "#292D32" }}
                />{" "}
                127889
              </Typography>
              <Typography fontSize={"29.87px"} fontWeight={600}>
                Fathima Murshid
              </Typography>
              <Chip
                size="small"
                variant="filled"
                label="Afternoon / cBSE"
                sx={{
                  borderRadius: "0",
                  backgroundColor: "#0A57EA1A",
                  color: "#0A57EA",
                }}
              ></Chip>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              sx={{ pl: 2 }}
              value={value}
              variant={isNonMobleScreen ? 'standard' :"fullWidth" }
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontWeight: "600", color: "#000" }}
                label="Teacher‘s Class Story"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontWeight: "600", color: "#000" }}
                label="Lesson Observation History"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontWeight: "600", color: "#000" }}
                label="Teacher Reports"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <Box p={{ xs: 0, md: 2 }}>
            <CustomTabPanel value={value} index={0}>
              <HodClassTable />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <TeacherLessonOHistory />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
             <TeachersReport/>
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HodDetaiPage;
