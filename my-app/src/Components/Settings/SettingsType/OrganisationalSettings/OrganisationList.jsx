import {
  Avatar,
  Box,
  Divider,
  Link,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function OrganisationList() {
  return (
    <Box p={2}>
      {/* {CompanyDetails && CompanyDetails.length === 0 ? (
          <Box mt={5}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              No Data Found...
            </Typography>
          </Box>
        ) : ( */}
      <Divider></Divider>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box display={"flex"}>
                  <Avatar></Avatar>
                  <Box sx={{ ml: 1 }}>
                    <Typography fontSize={15}>Company name 1</Typography>
                    <Link sx={{ m: 0 }} fontSize={12}>
                      companywebsite.com
                    </Link>
                  </Box>
                </Box>
              </TableCell>
              <TableCell sx={{ color: "green" }}>Active</TableCell>
              <TableCell>
                <Typography fontSize={12}>
                  Norem ipsum dolor sit amet,
                  <br />
                  consectetur adipiscing elit. <br />
                  Nunc vulputate libero et velit..
                </Typography>
              </TableCell>
              <TableCell>
                <Box display={"flex"}>
                  <EmailOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                  <Typography fontSize={15}>khadija@loyaltri.com</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="small" />
                </Box>
                <Box display={"flex"}>
                  <LocalPhoneIcon sx={{ mr: 1 }} fontSize="small" />
                  <Typography fontSize={15}>+971 50521252</Typography>
                  <ContentCopyIcon sx={{ ml: 1 }} fontSize="small" />
                </Box>
              </TableCell>
              <TableCell>
                <Box display={"flex"}>
                  <LocationOnOutlinedIcon />
                  <Typography fontSize={15}>
                    368 Al Qusais, Dubai, UAE
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Switch id="company_table_list-Switch" defaultChecked />
                <MoreVertIcon
                  sx={{ transform: "translate(0px,8px)", color: "gray" }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* )} */}
    </Box>
  );
}

export default OrganisationList;
