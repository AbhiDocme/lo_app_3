import * as React from "react";
import Box from "@mui/material/Box";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  ListItemButton,
  Typography,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Women from "../Assets/Women.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Card() {
  return (
    <Box>
        <Card variant="outlined" sx={{ width: 300, borderRadius: "10px" }}>
          <CardContent>
            <Box p={1}>
              <Box display={"flex"} sx={{ gap: 2 }}>
                <Avatar
                  src={Women}
                  sx={{ height: 70, width: 70, borderRadius: "11.2px" }}
                ></Avatar>
                <Box>
                  <Typography fontSize={12}>
                    <PeopleAltOutlinedIcon
                      fontSize="small"
                      sx={{ transform: "translate(0px,4px)", color: "#292D32" }}
                    />{" "}
                    127889
                  </Typography>
                  <Typography fontSize={15} fontWeight={600}>
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
            <Divider />
            <br />
            <Box>
              <Typography mt={1}>Recent Lesson Observations</Typography>
              <ListItemButton
                sx={{ border: "1px solid #D9D9D9", borderRadius: "7px", mt: 1 }}
              >
                <Typography fontSize={12}>12/11/2 (Monday)</Typography>
                <Chip
                  size="small"
                  icon={
                    <FiberManualRecordIcon fontSize="small" color="#FFA500" />
                  }
                  sx={{
                    ml: "auto",
                    borderRadius: "0",
                    backgroundColor: "#FFA5001A",
                    color: "#FFA500",
                    border: "0",
                  }}
                  label="Acceptable"
                  variant="outlined"
                />
              </ListItemButton>

              <ListItemButton
                sx={{ border: "1px solid #D9D9D9", borderRadius: "7px", mt: 1 }}
              >
                <Typography fontSize={12}>07/11/2 (Wednesday)</Typography>
                <Chip
                  size="small"
                  icon={
                    <FiberManualRecordIcon fontSize="small" color="#FFA500" />
                  }
                  sx={{
                    ml: "auto",
                    borderRadius: "0",
                    backgroundColor: "#FF00001A",
                    color: "#FF0000",
                    border: "0",
                  }}
                  label="Weak"
                  variant="outlined"
                />
              </ListItemButton>

              <ListItemButton
                sx={{ border: "1px solid #D9D9D9", borderRadius: "7px", mt: 1 }}
              >
                <Typography fontSize={12}>12/11/2 (Monday)</Typography>
                <Chip
                  size="small"
                  icon={
                    <FiberManualRecordIcon fontSize="small" color="#FFA500" />
                  }
                  sx={{
                    ml: "auto",
                    borderRadius: "0",
                    backgroundColor: "#0080001A",
                    color: "#008000",
                  }}
                  label="Very Good"
                />
              </ListItemButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
  )
}

export default Card