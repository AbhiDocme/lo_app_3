import {
  Avatar,
  Box,
  Link,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { newContext } from "../../../../App";

function CompanyTableData() {

  const { CompanyDetails } = useContext(newContext);

  console.log(CompanyDetails);

  return (
    <Box>
      {CompanyDetails && CompanyDetails.length === 0 ? (
        <Box mt={5}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            No Data Found...
          </Typography>
        </Box>
      ) : (
        <TableContainer>
          <Table>
            <TableBody>
              {CompanyDetails &&
                CompanyDetails.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <Box display={"flex"}>
                          <Avatar src={data.Companylogo}></Avatar>
                          <Box sx={{ ml: 1 }}>
                            <Typography fontSize={15}>
                              {data.CompanyName}
                              {console.log(data.CompanyName)}
                            </Typography>
                            <Link sx={{ m: 0 }} fontSize={12}>
                              {data.CompanyWebsite}
                            </Link>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={
                          data.CompanyStatus
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {data.CompanyStatus ? "Active" : "Inactive"}
                      </TableCell>
                      <TableCell sx={{width:'100px',wordWrap:'break-word'}}>{data.CompanyCIN}</TableCell>
                      <TableCell>
                        <Box display={"flex"}>
                          <EmailOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                          <Typography fontSize={15}>
                            {data.CompanyEmail}{" "}
                          </Typography>
                          <ContentCopyIcon sx={{ ml: 1 }} fontSize="small" />
                        </Box>
                        <Box display={"flex"}>
                          <LocalPhoneIcon sx={{ mr: 1 }} fontSize="small" />
                          <Typography fontSize={15}>
                            +{data.CompanyNumber}
                          </Typography>
                          <ContentCopyIcon sx={{ ml: 1 }} fontSize="small" />
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box display={"flex"}>
                          <LocationOnOutlinedIcon />
                          <Typography fontSize={15}>
                            {data.CompanyAddress1}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Switch id="company_table_list-Switch" defaultChecked />
                        <MoreVertIcon
                          sx={{
                            transform: "translate(0px,8px)",
                            color: "gray",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default CompanyTableData;
