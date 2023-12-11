import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Companylogodemo from "../../../../Assets/Comnapylogodemo.png";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';

function AddCompany({ setOpen, CompanyDetails, setCompanyDetails }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [CompanyName, setCompanyName] = useState("");
  const [CompanyLogo, setCompanyLogo] = useState([]);
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [CompanyNumber, setCompanyNumber] = useState("");
  const [CompanyWebsite, setCompanyWebsite] = useState("");
  const [CompanyStatus, setCompanyStatus] = useState(false);
  const [CompanyAddress1, setCompanyAddress1] = useState("");
  const [CompanyAddress2, setCompanyAddress2] = useState("");
  const [CompanyCity, setCompanyCity] = useState("");
  const [CompanyCountry, setCompanyCountry] = useState("");
  const [CompanyZipCode, setCompanyZipCode] = useState("");
  const [CompanyCIN, setCompanyCIN] = useState("");

  const [Error, setError] = useState("");

  const fileInputRef = useRef(null);

  const eValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CompanyEmail);

  const HandleCompanyAuth = () => {
    // if (CompanyName === "") {
    //   setError("Enter the Name of your company");
    // } else if (CompanyEmail === "" || !eValid) {
    //   setError("Enter a valid email address");
    // } else if (CompanyNumber === "") {
    //   setError("Enter Your Number or number must have 10 digits");
    // } else if (CompanyWebsite === "") {
    //   setError("Enter Website URL");
    // } else if (CompanyAddress1 === "") {
    //   setError("Enter Address Line 1");
    // } else if (CompanyCity === "") {
    //   setError("Enter City");
    // } else {
    //   HandleAddCompany();
    // }
    HandleAddCompany()
  };

  const HandleAddCompany = () => {
    const newData = {
      id: CompanyDetails.length + 1,
      CompanyName: CompanyName,
      CompanyLogo: CompanyLogo,
      CompanyEmail: CompanyEmail,
      CompanyNumber: CompanyNumber,
      CompanyWebsite: CompanyWebsite,
      CompanyStatus: CompanyStatus,
      CompanyAddress1: CompanyAddress1,
      CompanyAddress2: CompanyAddress2,
      CompanyCity: CompanyCity,
      CompanyCountry: CompanyCountry,
      CompanyZipCode: CompanyZipCode,
      CompanyCIN: CompanyCIN,
    };

    setCompanyDetails([...CompanyDetails, newData]);

    setCompanyName("");
    setCompanyLogo("");
    setCompanyEmail("");
    setCompanyNumber("");
    setCompanyWebsite("");
    setCompanyStatus("");
    setCompanyAddress1("");
    setCompanyAddress2("");
    setCompanyCity("");
    setCompanyCountry("");
    setCompanyZipCode("");
    setCompanyCIN("");

    handleClose();
  };

  const selectFile = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const newImage = {
        name: selectedFile.name,
        url: URL.createObjectURL(selectedFile),
      };

      setCompanyLogo(newImage);
    }
  };


  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box>
      <Box display={"flex"}>
        <IconButton onClick={handleClose}><CloseIcon sx={{":hover":{
          color:"red"
        }}}/></IconButton>
        <Box sx={{ ml: 2 }}>
          <Typography variant="h6">Add a new company</Typography>
          <Typography fontSize={12}>
            Manage you companies here, and some lorem ipsu
          </Typography>
        </Box>
      </Box>
      <Divider />

      <Box sx={{ mt: 1, pl: 2 }}>
        <Typography fontSize={13}>Company Name :</Typography>
        <TextField
          value={CompanyName}
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
          sx={{
            width: "100%",
            ...(Error &&
              !CompanyName && {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "red",
                  },
                },
              }),
          }}
          placeholder="Company 1"
          id="Company_Name_feild"
          size="small"
          variant="outlined"
        ></TextField>
        <Typography fontSize={10} sx={{ color: "red" }}>
          {Error && !CompanyName && "Enter Company Name"}
        </Typography>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Grid display={"flex"}>
          <Grid item xs={6} display={"flex"} sx={{ pl: 2, pt: 2 }}>
            <Box>
              <Typography fontSize={13}>Company logo</Typography>

              <Button
                sx={{ display: "none" }}
                component="label"
                variant="contained"
              >
                Upload file
                <VisuallyHiddenInput
                  ref={fileInputRef}
                  onChange={onFileSelect}
                  type="file"
                />
              </Button>

              <Typography fontSize={10}>Update your company logo</Typography>
            </Box>
            <Box sx={{ pr:1,ml: 2,height:'50px',width:'50px' }}>
              <img style={{height:'100%',width:'100%'}} src={CompanyLogo.length !== 0 ? CompanyLogo.url : Companylogodemo} alt="" />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              marginLeft: "auto",
              p: 2,
              border: ".5px solid gray",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <IconButton role="button" onClick={selectFile}>
              <CloudUploadOutlinedIcon fontSize="small" />
              &nbsp;
            </IconButton>
            <Box>
              <Typography fontSize={13}>
                Click to upload or drag and drop
              </Typography>
              <Typography fontSize={12}>
                SVG, PNG, JPG or WebP (max 800x400px)
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, pl: 2 }}>
        <Grid display={"flex"}>
          <Grid item xs={6}>
            <Box>
              <Typography fontSize={13}>Email :</Typography>
              <TextField
                value={CompanyEmail}
                onChange={(e) => {
                  setCompanyEmail(e.target.value);
                }}
                sx={{
                  width: "100%",
                  ...(Error &&
                    !eValid && {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "red",
                        },
                      },
                    }),
                }}
                placeholder="info@company1.com"
                id="Company_Email_feild"
                size="small"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <Typography fontSize={10} sx={{ color: "red" }}>
                {Error && !eValid && "Enter Vaild E-maill Address"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ ml: "auto" }}>
            <Box>
              <Typography fontSize={13}>Phone Number :</Typography>
              <TextField
                value={CompanyNumber}
                onChange={(e) => {
                  setCompanyNumber(e.target.value);
                }}
                sx={{
                  width: "100%",
                  ...(Error &&
                    CompanyNumber.length !== 10 && {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "red",
                        },
                      },
                    }),
                }}
                placeholder="+971 (555) 000-0000"
                id="Company_Phonenumber"
                size="small"
                variant="outlined"
              ></TextField>
              <Typography fontSize={10} sx={{ color: "red" }}>
                {Error && CompanyNumber.length !== 10 && "Enter Valid number"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, pl: 2 }}>
        <Grid display={"flex"}>
          <Grid item xs={6}>
            <Box>
              <Typography fontSize={13}>Website :</Typography>
              <TextField
                value={CompanyWebsite}
                onChange={(e) => {
                  setCompanyWebsite(e.target.value);
                }}
                sx={{
                  width: "100%",
                  ...(Error &&
                    !CompanyWebsite && {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "red",
                        },
                      },
                    }),
                }}
                placeholder="www.technoalliance.com"
                id="Company_Website_feild"
                size="small"
                variant="outlined"
              ></TextField>
              <Typography fontSize={10} sx={{ color: "red" }}>
                {Error && !CompanyWebsite && "Enter Company Website"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ ml: "4rem" }}>
            <Box>
              <Typography fontSize={13}>Active / Non Active :</Typography>
              <Switch
                value={CompanyStatus}
                onChange={(e) => {
                  setCompanyStatus(!CompanyStatus);
                }}
                id="Active_check"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, pl: 2 }}>
        <Grid display={"flex"}>
          <Grid item xs={6}>
            <Box>
              <Typography fontSize={13}>Address Line 1 :</Typography>
              <TextField
                value={CompanyAddress1}
                onChange={(e) => {
                  setCompanyAddress1(e.target.value);
                }}
                sx={{
                  width: "100%",
                  ...(Error &&
                    !CompanyAddress1 && {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "red",
                        },
                      },
                    }),
                }}
                placeholder="abc street, NL"
                id="Company_Address Line 1"
                size="small"
                variant="outlined"
              ></TextField>
              <Typography fontSize={10} sx={{ color: "red" }}>
                {Error && !CompanyAddress1 && "Enter Company Address"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ ml: "auto" }}>
            <Box>
              <Typography fontSize={13}>Address Line 2 :</Typography>
              <TextField
                value={CompanyAddress2}
                onChange={(e) => {
                  setCompanyAddress2(e.target.value);
                }}
                sx={{ width: "100%" }}
                placeholder="xyz Suite"
                id="Company_Address Line 2"
                size="small"
                variant="outlined"
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, pl: 2 }}>
        <Grid display={"flex"} sx={{ gap: 1 }}>
          <Grid item xs={6}>
            <Box>
              <Typography fontSize={13}>City :</Typography>
              <TextField
                value={CompanyCity}
                onChange={(e) => {
                  setCompanyCity(e.target.value);
                }}
                sx={{
                  width: "100%",
                  ...(Error &&
                    !CompanyCity && {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "red",
                        },
                      },
                    }),
                }}
                placeholder="Dubai"
                id="Company_City"
                size="small"
                variant="outlined"
              ></TextField>
              <Typography fontSize={10} sx={{ color: "red" }}>
                {Error && !CompanyCity && "Enter the location of company"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography fontSize={13}>Country :</Typography>
              <TextField
                value={CompanyCountry}
                onChange={(e) => {
                  setCompanyCountry(e.target.value);
                }}
                placeholder="United Arab Emirates"
                id="Company_Country"
                size="small"
                variant="outlined"
              ></TextField>
            </Box>
          </Grid>

          <Grid item xs={2}>
            <Box>
              <Typography fontSize={13}>Zip Code :</Typography>
              <TextField
                value={CompanyZipCode}
                onChange={(e) => {
                  setCompanyZipCode(e.target.value);
                }}
                placeholder="515521"
                id="Company_Zip Code    "
                size="small"
                variant="outlined"
              ></TextField>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: 1, pl: 2 }}>
        <Typography fontSize={15}>CIN :</Typography>
        <TextField
          value={CompanyCIN}
          onChange={(e) => {
            setCompanyCIN(e.target.value);
          }}
          placeholder="Dubai"
          id="Company_cin_feild"
          size="small"
          variant="outlined"
        ></TextField>
      </Box>
      <Divider></Divider>

      <Box sx={{ mt: 1, pl: 2 }} display={"flex"}>
        <Button size="small" variant="text" sx={{ color: "black" }}>
          Reset to Default
        </Button>
        <Box sx={{ ml: "auto" }}>
          <Button
            size="small"
            variant="outlined"
            sx={{ color: "black", borderColor: "black" }}
          >
            Cancel
          </Button>
          &nbsp;
          <Button
            onClick={HandleCompanyAuth}
            size="small"
            sx={{
              backgroundColor: "#6A4BFC",
              ":hover": {
                backgroundColor: "#6A4BFC",
              },
            }}
            variant="contained"
          >
            <AddIcon fontSize="small" />
            Add Company
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddCompany;
