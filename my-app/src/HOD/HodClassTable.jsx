import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { Grid, Pagination, TableHead, Typography } from "@mui/material";

const rows = [
  {
    Class: "5 A",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "--%",
    FinalExam: "--%",
  },
  {
    Class: "5 B",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "70%",
    FinalExam: "--%",
  },
  {
    Class: "6 A",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "75%",
    FinalExam: "--%",
  },
  {
    Class: "6 B",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "85%",
    FinalExam: "--%",
  },
  {
    Class: "6 C",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "85%",
    FinalExam: "--%",
  },
  {
    Class: "7 A",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "85%",
    FinalExam: "--%",
  },
  {
    Class: "8 A",
    B1andAbove: "50%",
    C1andAbove: "50%",
    HalfYearly: "85%",
    FinalExam: "--%",
  },
];

export default function HodClassTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <>
      <Box>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "0px 0px 2px #000" }}
        >
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>Class</TableCell>
                <TableCell>% of students targeted with B1 and Above</TableCell>
                <TableCell>% of students targeted with C1 and Above</TableCell>
                <TableCell>Half Yearly</TableCell>
                <TableCell>Final Exam</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, index) => (
                <TableRow key={index}>
                  <TableCell style={{ width: 160 }}>{row.Class}</TableCell>
                  <TableCell style={{ width: 160 }}>{row.B1andAbove}</TableCell>
                  <TableCell style={{ width: 160 }}>{row.C1andAbove}</TableCell>
                  <TableCell style={{ width: 160 }}>{row.HalfYearly}</TableCell>
                  <TableCell style={{ width: 160 }}>{row.FinalExam}</TableCell>
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

        <Grid container mt={2}>
          <Grid item xs={12} md={6}>
            <Typography>Showing 4 Results out of 1 Page</Typography>
          </Grid>
          <Grid item xs={12} md={6} display={"flex"} justifyContent={"right"}>
            {" "}
            <Pagination
              sx={{ ml: "auto" }}
              count={Math.ceil(rows.length / rowsPerPage)}
              page={page + 1}
              onChange={(event, value) => setPage(value - 1)}
              variant="outlined"
              shape="rounded"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
