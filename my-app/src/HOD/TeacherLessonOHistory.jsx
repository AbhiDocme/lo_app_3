import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Checkbox,
  Chip,
  FormControlLabel,
  Pagination,
  TableHead,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarIcon from "@mui/icons-material/Star";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const rows = [
  {
    SlNo: 1,
    Type: "LO",
    Observer: "Mr Jacob George",
    ObserverRole: "HOS",
    Class: "6 A",
    Subject: "MOE Arabic",
    SubmittedDate: "06-11-2023",
    Rating: 4.5,
  },
  {
    SlNo: 2,
    Type: "LO",
    Observer: "Ms Shobhana P",
    ObserverRole: "HOS",
    Class: "6 B",
    Subject: "English",
    SubmittedDate: "06-11-2023",
    Rating: 2.5,
  },
  {
    SlNo: 3,
    Type: "LO",
    Observer: "Mr Jacob George",
    ObserverRole: "HOS",
    Class: "8 A",
    Subject: "Indian SST",
    SubmittedDate: "06-11-2023",
    Rating: 3.5,
  },
  {
    SlNo: 4,
    Type: "LO",
    Observer: "Mr Jacob George",
    ObserverRole: "HOS",
    Class: "7 B",
    Subject: "English",
    SubmittedDate: "06-11-2023",
    Rating: 1.5,
  },
  {
    SlNo: 5,
    Type: "LO",
    Observer: "Mr Jacob George",
    ObserverRole: "HOS",
    Class: "7 B",
    Subject: "English",
    SubmittedDate: "06-11-2023",
    Rating: 5,
  },

  {
    SlNo: 5,
    Type: "LO",
    Observer: "Mr Jacob George",
    ObserverRole: "HOS",
    Class: "7 B",
    Subject: "English",
    SubmittedDate: "06-11-2023",
    Rating: 5,
  },
];

const TeacherLessonOHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  return (
    <Box>
      <TableContainer component={Paper} sx={{ boxShadow: "0px 0px 2px #000" }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <FormControlLabel control={<Checkbox />} label="Select" />
              </TableCell>
              <TableCell sx={{ fontWeight: "600" }}>#SL No</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Type</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Observer</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Observer Role</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Class</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Subject</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Submitted Date</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Rating</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>{row.SlNo}</TableCell>
                <TableCell>{row.Type}</TableCell>
                <TableCell>{row.Observer}</TableCell>
                <TableCell>{row.ObserverRole}</TableCell>
                <TableCell>{row.Class}</TableCell>
                <TableCell>{row.Subject}</TableCell>
                <TableCell>{row.SubmittedDate}</TableCell>
                <TableCell>
                  {" "}
                  {row.Rating === 5 ? (
                    <Chip
                      size="small"
                      icon={
                        <FiberManualRecordIcon
                          fontSize="small"
                          color="#FFA500"
                        />
                      }
                      sx={{
                        ml: "auto",
                        borderRadius: "0",
                        backgroundColor: "#0000FF1A",
                        color: "#0000FF",
                      }}
                      label="Outstanding"
                    />
                  ) : row.Rating >= 4 ? (
                    <Chip
                      size="small"
                      icon={
                        <FiberManualRecordIcon
                          fontSize="small"
                          color="#FFA500"
                        />
                      }
                      sx={{
                        ml: "auto",
                        borderRadius: "0",
                        backgroundColor: "#0080001A",
                        color: "#008000",
                      }}
                      label="Very Good"
                    />
                  ) : row.Rating >= 3 ? (
                    <Chip
                      size="small"
                      icon={
                        <FiberManualRecordIcon
                          fontSize="small"
                          color="#00A3FF"
                        />
                      }
                      sx={{
                        ml: "auto",
                        borderRadius: "0",
                        backgroundColor: "#00A3FF1A",
                        color: "#00A3FF",
                      }}
                      label="Good"
                    />
                  ) : row.Rating >= 2 ? (
                    <Chip
                      size="small"
                      icon={
                        <FiberManualRecordIcon
                          fontSize="small"
                          color="#FFA500"
                        />
                      }
                      sx={{
                        ml: "auto",
                        borderRadius: "0",
                        backgroundColor: "#FFA5001A",
                        color: "#FFA500",
                      }}
                      label="Acceptable"
                    />
                  ) : row.Rating >= 1 ? (
                    <Chip
                      size="small"
                      icon={
                        <FiberManualRecordIcon
                          fontSize="small"
                          color="#FF0000"
                        />
                      }
                      sx={{
                        ml: "auto",
                        borderRadius: "0",
                        backgroundColor: "#FF00001A",
                        color: "#FF0000",
                      }}
                      label="Weak"
                    />
                  ) : (
                    ""
                  )}{" "}
                  {row.Rating}{" "}
                  <StarIcon
                    sx={{
                      transform: "translate(0px,2px)",
                      fontSize: "15px",
                      color: "#FFA500",
                    }}
                  />
                </TableCell>
                <TableCell>
                  <RemoveRedEyeOutlinedIcon />{" "}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <br />

      <Box display={"flex"} mt={2}>
        <Typography>Showing 4 Results out of 1 Page</Typography>
        <Pagination
          sx={{ ml: "auto" }}
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page + 1}
          onChange={(event, value) => setPage(value - 1)}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default TeacherLessonOHistory;
