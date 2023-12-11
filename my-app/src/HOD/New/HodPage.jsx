import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  ListItem,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  useMediaQuery,
  List,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Chip,
  Divider,
  ListItemButton,
  Autocomplete,
  TextField,
  InputAdornment,
} from "@mui/material";
// import CustomSeparator from "components/Breadcrumb";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import ApiService from "services/apiService";
// import MobileView from "./mobileView";
import CommonService from "services/commonService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import HomeIcon from "@mui/icons-material/Home";
// import ArticleIcon from "@mui/icons-material/Article";
// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
// import ImageIcon from "@mui/icons-material/Image";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const IndexPage = () => {
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(max-width: 700px)");
  const [isLoading, setLoader] = useState(false);
  const [results, setResults] = useState([]);
  const [curriculum, setCurriculum] = useState("");
  const [classId, setClass] = useState("");
  const [batch, setBatch] = useState("");
  const [allCurriculums, getAllCurriculums] = useState([]);
  const userData = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (user) {
      fetchData();
    } else {
      toast.error("Your not logged in.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, []);

  const fetchData = async () => {
    CommonService.loaderON(dispatch);
    try {
      let req = {
        school_id: userData.school_id,
        academic_year: userData.academic_year,
        initload: true,
        user_id: userData.user_id,
      };
      let apiResult = await ApiService.post("classesByPartitian", req);
      const data = apiResult.details.response;
      getAllCurriculums(apiResult.details.curriculums);
      setCurriculum(apiResult.details.selected_curriculum.curriculum_id);
      CommonService.loaderOFF(dispatch);
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = async (e) => {
    CommonService.loaderON(dispatch);
    setCurriculum(e.target.value);
    try {
      let req = {
        school_id: userData.school_id,
        academic_year: userData.academic_year,
        curriculum: e.target.value,
        user_id: userData.user_id,
      };
      const apiResult = await ApiService.post("classesByPartitian", req);
      const data = apiResult.details.response;
      CommonService.loaderOFF(dispatch);
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClassChange = async (class_id) => {
    setClass(class_id);
  };

  const handleBatch = async (clickedBatch, xclass) => {
    let batchId = clickedBatch.name;
    await setBatch(clickedBatch.name);
    toast.success("You have selected " + xclass.name + " " + clickedBatch.name);
    let req = {
      session_id: clickedBatch.session_id,
      curriculum_id: clickedBatch.curriculum_id,
      batch_id: clickedBatch._id,
      class_id: xclass._id,
      school_id: userData.school_id,
      academic_year: userData.academic_year,
    };
    CommonService.setClassCombo(dispatch, req);
    let url =
      clickedBatch.session_id +
      "/" +
      clickedBatch.curriculum_id +
      "/" +
      xclass._id +
      "/" +
      clickedBatch._id;
    navigate("/student/list/" + url);
    console.log(req);
    await navigate("/student/list?batch=" + batchId + "&class=" + classId);
  };

  const handleApproval = async () => {
    navigate("/teacher-approval/list");
  };

  const language = ["English", "Arabic"];

  return (
    <>
      {isNonMobileScreens ? (
        // <MobileView />
        <></>
      ) : (
        <Box>
          {isLoading ? (
            <Box sx={{ width: "100%" }}>{/* <LinearProgress /> */}</Box>
          ) : (
            ""
          )}
          <Box padding="2rem 6%" sx={{ gap: 1 }}>
            <Container>
              {/* <CustomSeparator
                titles={[
                  {
                    title: "Home",
                    icon: <HomeIcon sx={{ marginBottom: "-5px" }} />,
                    link: true,
                    path: "/",
                  },
                  {
                    title: "Reports",
                    icon: <ArticleIcon sx={{ marginBottom: "-5px" }} />,
                    link: false,
                  },
                  {
                    title: "Student Progression Reports",
                    icon: <PictureAsPdfIcon sx={{ marginBottom: "-5px" }} />,
                    link: false,
                  },
                ]}
              /> */}
              <Grid container justifyContent="center" alignItems="stretch">
                <Grid item xs={12}>
                  <Card
                    variant="outlined"
                    sx={{ borderRadius: "20px !important" }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        p={2}
                        lineHeight={"30.24px"}
                      >
                        Teacher Class Stories
                      </Typography>{" "}
                      <Divider />
                      {/* ---------------------------------------------------- */}
                      <Grid item xs={12} p={2}>
                        <FormControl>
                          <Typography>Please Select the Subject.</Typography>
                          <Select
                            labelId="phase-label"
                            id="phase"
                            label="Select Phase"
                            onChange={handleChange}
                            value={curriculum}
                          >
                            {results &&
                              results.map((item, index) => (
                                <MenuItem key={index} value={item.section_id}>
                                  Phase {index + 1} {item.section_name}
                                </MenuItem>
                              ))}
                          </Select>
                        </FormControl>
                        {/* form control here........................ */}
                      </Grid>
                      <Grid item xs={12} p={2}>
                        <Typography>Please select HOD</Typography>{" "}
                        <Box display={"flex"} sx={{ gap: 2 }}>
                          <Card variant="outlined" sx={{ width: 300 }}>
                            <CardContent>
                              <Box display={"flex"} sx={{ gap: 2 }}>
                                <Avatar
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXbCsKUqRkVaqgxZrZGSXt3TZ5NCS80GrIlg&usqp=CAU"
                                  sx={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: "11.2px",
                                  }}
                                ></Avatar>
                                <Box>
                                  <Typography fontSize={12}>
                                    <PeopleAltOutlinedIcon
                                      fontSize="small"
                                      sx={{
                                        transform: "translate(0px,4px)",
                                        color: "#292D32",
                                      }}
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
                            </CardContent>
                          </Card>
                          <Card variant="outlined" sx={{ width: 300 }}>
                            <CardContent>
                              <Box display={"flex"} sx={{ gap: 2 }}>
                                <Avatar
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3sMbFWT_61DsZXPa2FfQKp_iyDEOiRAyHg&usqp=CAU"
                                  sx={{
                                    height: 70,
                                    width: 70,
                                    borderRadius: "11.2px",
                                  }}
                                ></Avatar>
                                <Box>
                                  <Typography fontSize={12}>
                                    <PeopleAltOutlinedIcon
                                      fontSize="small"
                                      sx={{
                                        transform: "translate(0px,4px)",
                                        color: "#292D32",
                                      }}
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
                            </CardContent>
                          </Card>
                        </Box>
                        <br />
                        {/* ---------------------------------------- */}
                        <Box display={"flex"} sx={{ gap: 2 }}>
                          <Typography
                            fontSize={18}
                            fontWeight={600}
                            sx={{ transform: "translate(0px,5px)" }}
                          >
                            Ronald Richards Team of Teachers. (12)
                          </Typography>
                          <TextField
                            size="small"
                            id="outlined-basic"
                            placeholder="Search Teachers Name.."
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                        {/* ------------------------------------------- */}
                        <Grid container mt={2} display={"flex"}>
                          <Grid xs={12} md={3}>
                            <Card
                              variant="outlined"
                              sx={{ width: 250, borderRadius: "10px" }}
                            >
                              <CardContent>
                                <Box p={1}>
                                  <Box display={"flex"} sx={{ gap: 2 }}>
                                    <Avatar
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGt0xnzVm-I7Jor11qsUrYyQPSOda_QAPmEw&usqp=CAU"
                                      sx={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: "11.2px",
                                      }}
                                    ></Avatar>
                                    <Box>
                                      <Typography fontSize={12}>
                                        <PeopleAltOutlinedIcon
                                          fontSize="small"
                                          sx={{
                                            transform: "translate(0px,4px)",
                                            color: "#292D32",
                                          }}
                                        />{" "}
                                        127889
                                      </Typography>
                                      <Typography
                                        fontSize={15}
                                        fontWeight={600}
                                      >
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
                                  <Typography mt={1}>
                                    Recent Lesson Observations
                                  </Typography>
                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Acceptable"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      07/11/2 (Wednesday)
                                    </Typography>
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
                                        backgroundColor: "#FF00001A",
                                        color: "#FF0000",
                                        border: "0",
                                      }}
                                      label="Weak"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Very Good"
                                      variant="outlined"
                                    />
                                  </ListItemButton>
                                </Box>
                                <Typography
                                  textAlign={"center"}
                                  mt={1}
                                  fontSize={12}
                                >
                                  <AddIcon
                                    sx={{ transform: "translate(0px,2px)" }}
                                    fontSize="12px"
                                  />{" "}
                                  View More
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        {/* .................................................. */}
                          <Grid xs={12} md={3}>
                            {" "}
                            <Card
                              variant="outlined"
                              sx={{ width: 250, borderRadius: "10px" }}
                            >
                              <CardContent>
                                <Box p={1}>
                                  <Box display={"flex"} sx={{ gap: 2 }}>
                                    <Avatar
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANYbcu0mRj8YWwkBTX_c2AOLd1z1yn22y2g4icx0UftWJ_ZehZ2b9reYvIIG7x9_nn9k&usqp=CAU"
                                      sx={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: "11.2px",
                                      }}
                                    ></Avatar>
                                    <Box>
                                      <Typography fontSize={12}>
                                        <PeopleAltOutlinedIcon
                                          fontSize="small"
                                          sx={{
                                            transform: "translate(0px,4px)",
                                            color: "#292D32",
                                          }}
                                        />{" "}
                                        127889
                                      </Typography>
                                      <Typography
                                        fontSize={15}
                                        fontWeight={600}
                                      >
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
                                  <Typography mt={1}>
                                    Recent Lesson Observations
                                  </Typography>
                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Acceptable"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      07/11/2 (Wednesday)
                                    </Typography>
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
                                        backgroundColor: "#FF00001A",
                                        color: "#FF0000",
                                        border: "0",
                                      }}
                                      label="Weak"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Very Good"
                                      variant="outlined"
                                    />
                                  </ListItemButton>
                                </Box>
                                <Typography
                                  textAlign={"center"}
                                  mt={1}
                                  fontSize={12}
                                >
                                  <AddIcon
                                    sx={{ transform: "translate(0px,2px)" }}
                                    fontSize="12px"
                                  />{" "}
                                  View More
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        {/* ..................................................*/}
                          <Grid xs={12} md={3}>
                            <Card
                              variant="outlined"
                              sx={{ width: 250, borderRadius: "10px" }}
                            >
                              <CardContent>
                                <Box p={1}>
                                  <Box display={"flex"} sx={{ gap: 2 }}>
                                    <Avatar
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPv44qXOp9cLL67M1ngcCH1oHPVJwlfyayQjhwkcHVzak_BsKgpAYnYsNggpdysn7O5hI&usqp=CAU"
                                      sx={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: "11.2px",
                                      }}
                                    ></Avatar>
                                    <Box>
                                      <Typography fontSize={12}>
                                        <PeopleAltOutlinedIcon
                                          fontSize="small"
                                          sx={{
                                            transform: "translate(0px,4px)",
                                            color: "#292D32",
                                          }}
                                        />{" "}
                                        127889
                                      </Typography>
                                      <Typography
                                        fontSize={15}
                                        fontWeight={600}
                                      >
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
                                  <Typography mt={1}>
                                    Recent Lesson Observations
                                  </Typography>
                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Acceptable"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      07/11/2 (Wednesday)
                                    </Typography>
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
                                        backgroundColor: "#FF00001A",
                                        color: "#FF0000",
                                        border: "0",
                                      }}
                                      label="Weak"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Very Good"
                                      variant="outlined"
                                    />
                                  </ListItemButton>
                                </Box>
                                <Typography
                                  textAlign={"center"}
                                  mt={1}
                                  fontSize={12}
                                >
                                  <AddIcon
                                    sx={{ transform: "translate(0px,2px)" }}
                                    fontSize="12px"
                                  />{" "}
                                  View More
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        {/* .................................................. */}
                          <Grid xs={12} md={3}>
                            <Card
                              variant="outlined"
                              sx={{ width: 250, borderRadius: "10px" }}
                            >
                              <CardContent>
                                <Box p={1}>
                                  <Box display={"flex"} sx={{ gap: 2 }}>
                                    <Avatar
                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlW1GOCEo7ZIyJnJC9X6T9XqDPqU3UI4hdG5R_LKwdPElfDPEY8bwPQ9sSr4zQxGH_KA&usqp=CAU"
                                      sx={{
                                        height: 70,
                                        width: 70,
                                        borderRadius: "11.2px",
                                      }}
                                    ></Avatar>
                                    <Box>
                                      <Typography fontSize={12}>
                                        <PeopleAltOutlinedIcon
                                          fontSize="small"
                                          sx={{
                                            transform: "translate(0px,4px)",
                                            color: "#292D32",
                                          }}
                                        />{" "}
                                        127889
                                      </Typography>
                                      <Typography
                                        fontSize={15}
                                        fontWeight={600}
                                      >
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
                                  <Typography mt={1}>
                                    Recent Lesson Observations
                                  </Typography>
                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Acceptable"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      07/11/2 (Wednesday)
                                    </Typography>
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
                                        backgroundColor: "#FF00001A",
                                        color: "#FF0000",
                                        border: "0",
                                      }}
                                      label="Weak"
                                      variant="outlined"
                                    />
                                  </ListItemButton>

                                  <ListItemButton
                                    sx={{
                                      border: "1px solid #D9D9D9",
                                      borderRadius: "7px",
                                      mt: 1,
                                    }}
                                  >
                                    <Typography fontSize={12}>
                                      12/11/2 (Monday)
                                    </Typography>
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
                                        border: "0",
                                      }}
                                      label="Very Good"
                                      variant="outlined"
                                    />
                                  </ListItemButton>
                                </Box>
                                <Typography
                                  textAlign={"center"}
                                  mt={1}
                                  fontSize={12}
                                >
                                  <AddIcon
                                    sx={{ transform: "translate(0px,2px)" }}
                                    fontSize="12px"
                                  />{" "}
                                  View More
                                </Typography>
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      )}
    </>
  );
};

export default IndexPage;
