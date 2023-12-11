import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

const TeachersReport = () => {
  const TeacherReportData = [
    {
      AdNo: "89852365",
      StdName: "Ralph Edwards",
      Qsatnine: 4,
      Asset: 4,
      Bias: 4,
      Reading: 1,
      ReportGrade: "--%",
      improvement: "Plan Systematically to improve scores",
    },
    {
      AdNo: "89852365",
      StdName: "Ralph Edwards",
      Qsatnine: 4,
      Asset: 4,
      Bias: 4,
      Reading: 1,
      ReportGrade: "--%",
      improvement: "Plan Systematically to improve scores",
    },
    {
      AdNo: "63525485",
      StdName: "Michelle Anderson",
      Qsatnine: 6,
      Asset: 6,
      Bias: 6,
      Reading: 1,
      ReportGrade: "85%",
      improvement: "Plan Systematically to improve scores",
    },
    {
      AdNo: "58942586",
      StdName: "Tony Cruz",
      Qsatnine: 7,
      Asset: 7,
      Bias: "Moderate Spatial Bias",
      Reading: 3,
      ReportGrade: "85%",
      improvement: "Plan Systematically to improve scores",
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography>Please Select the Class</Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={1} mt={1}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">5 A</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="5A"
                label="5A"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Ten</MenuItem>
                <MenuItem value={30}>Twenty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">5 B</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="5B"
                label="5B"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">6 A</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="6A"
                label="6A"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Ten</MenuItem>
                <MenuItem value={30}>Twenty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="6BInput">6 B</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="6B"
                label="6 B"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">6 C</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="6 C"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">7 A</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="7A"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">8 A</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="8A"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography>Please Select the Subject</Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={1} mt={1}>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">English</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="English"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>
                  English
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Mathematics</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Mathematics"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Science</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Science"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Science</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Science"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography>Select Academic Year.</Typography>
          <Box display={"flex"} flexWrap={"wrap"} gap={1} mt={1}>
            <FormControl sx={{ minWidth: 140 }}>
              <InputLabel id="demo-simple-select-label">2020 - 2021</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="2020 - 2021"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 140 }}>
              <InputLabel id="demo-simple-select-label">2021 - 2022</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="2021 - 2022"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 140 }}>
              <InputLabel id="demo-simple-select-label">2022 - 2023</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="2022 - 2023"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 140 }}>
              <InputLabel id="demo-simple-select-label">2023 - 2024</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="2023 - 2024"
              >
                <MenuItem value={10}>
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} mt={3}>
          <Typography>End of the year reports</Typography>
          <Box mt={1}>
            <Button
              variant="contained"
              sx={{ width: "250px", textAlign: "left" }}
            >
              {" "}
              <AssignmentIcon fontSize="large" /> Term 2 Annual Report
              <br /> (2022- 2023)
            </Button>
          </Box>
        </Grid>

        <Grid container mt={4} sx={{ border: "1px solid #E5E5E5" }}>
          <Grid item xs={12} sm={2} p={2}>
            Cohort : 22
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} sm={3} p={2}>
            Asset attended count : 22
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} sm={6} p={2}>
            Half Yearly Report : Half Yearrly
          </Grid>
        </Grid>

        <Grid item xs={12} mt={4}>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "0px 0px 2px #000" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "600", width: "100px" }}>
                    Admission No
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>Students</TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    Quantitative Stanine
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    Asset Mathematics
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }} align="center">
                    Bias
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>Reading 1</TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    End of the year Report Grade
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    End of the year Report Grade
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    Improvement Steps
                  </TableCell>
                </TableRow>
              </TableHead>
              {TeacherReportData.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{data.AdNo}</TableCell>
                    <TableCell>{data.StdName}</TableCell>
                    <TableCell>{data.Qsatnine}</TableCell>
                    <TableCell align="center">{data.Asset}</TableCell>
                    <TableCell align="center">{data.Bias}</TableCell>
                    <TableCell align="center">{data.Reading}</TableCell>
                    <TableCell align="center">{data.ReportGrade}</TableCell>
                    <TableCell>
                      {" "}
                      <Typography fontSize={15}>Select Grade</Typography>
                      <FormControl sx={{ minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">
                          C 2
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="C 2"
                        >
                          <MenuItem value={10}>
                            <em>None</em>
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell>{data.improvement}</TableCell>
                  </TableRow>
                );
              })}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeachersReport;
