import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

function Form() {
  const nav = useNavigate();

  // const isnonMobileScreen = useMediaQuery("(min-width:992px)");
  const isScreen570 = useMediaQuery("(min-width:570px)");

  const Textfeildstyle = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "#6640EB",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6640EB",
      },
    },
  };

  let email = "demo@123.com";
  let pass = "123";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [Auth, setAuth] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleLogin = () => {
    if (email === Email.trim() && pass === Password) {
      localStorage.setItem('email',Email);
      console.log("login successful");
      setAuth(!Auth);
      setError("");
      setTimeout(() => {
        nav("/home");
      }, 1000);
    } else {
      console.log("user not found");
      setError("user not found");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  if (isChecked === true) {
    sessionStorage.setItem("email", Email);
    sessionStorage.setItem("password", Password);
  }else{
    sessionStorage.clear()
  }

  useEffect(() => {
    const rememberedEmail = sessionStorage.getItem("email");
    const rememberedPassword = sessionStorage.getItem("password");

    if (rememberedEmail && rememberedPassword) {
      setEmail(rememberedEmail);
      setPassword(rememberedPassword);
      setIsChecked(true);
    }
  }, []);

  return (
    <Box sx={{ display: "block" }} textAlign={"center"}>
      <TextField
        sx={
          isScreen570
            ? { width: "50%", borderColor: Textfeildstyle }
            : { width: "80%", borderColor: Textfeildstyle }
        }
        id="Email"
        label="Email Address"
        variant="outlined"
        autoComplete="off"
        value={Email}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsValid(emailRegex.test(Email));
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              {isValid && (
                <span style={{ color: "green" }}>
                  <CheckCircleIcon />
                </span>
              )}
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        sx={
          isScreen570
            ? {
                marginTop: ".5rem",
                width: "50%",
                borderColor: Textfeildstyle,
              }
            : { marginTop: ".5rem", width: "80%", borderColor: Textfeildstyle }
        }
        id="Password"
        label="Password"
        type="password"
        variant="outlined"
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <Typography
        sx={{
          color: "red",
          marginLeft: "8rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        textAlign={"start"}
      >
        {Error}
      </Typography>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              id="checkbox"
              size="small"
              sx={{
                color: "#6640EB",
                "&.Mui-checked": {
                  color: "#6640EB",
                },
              }}
            />
          }
          checked={isChecked}
          onChange={handleCheckboxChange}
          label="Remember Me"
        />
        <Link
          sx={{
            color: "#000000",
            paddingLeft: "0",
            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
            fontSize: "16px",
          }}
          href="#"
        >
          Forget Password?
        </Link>
        <br />
        <br />
        <Button
          sx={
            isScreen570
              ? {
                  width: "50%",
                  backgroundColor: "#6640EB",
                  "&:hover": {
                    backgroundColor: "#512DBA",
                  },
                }
              : {
                  width: "80%",
                  backgroundColor: "#6640EB",
                  "&:hover": {
                    backgroundColor: "#512DBA",
                  },
                }
          }
          variant="contained"
          id="signin"
          onClick={handleLogin}
        >
          {Auth ? <CheckCircleIcon /> : "Sign in"}
        </Button>
      </Box>
      <Typography
        sx={{
          marginTop: "4.8rem",
          paddingBottom: ".5rem",
          color: "grey",
          fontSize: "small",
        }}
      >
        2024 Benchmark ONE, All right reserved
      </Typography>
    </Box>
  );
}

export default Form;
