import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Register.css";
import { Button, TextField, Box, Snackbar, Alert } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfmpassword, setcfmPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexphone = /^[0-9]{9}$/;

    if (
      password != cfmpassword ||
      email.trim().length == 0 ||
      !regexphone.test(phonenumber) ||
      username.trim().length == 0
    ) {
      // alert("One or more field does not meet criteria or unfilled");
      setSnackbarMessage(
        "One or more field does not meet criteria or unfilled"
      );
      setOpenSnackbar(true);
    } else {
      Axios.post("http://localhost:5118/api/Auth/RegisterUser", {
        // --> Changed to Ali's endpoints
        username: username,
        email: email,
        password: password,
        mobilenumber: phonenumber,
      })
        .then((response) => {
          console.log(response);
          alert("Registration Successfull");
        })
        .catch((error) => {
          console.log(error);
          //alert("Insert Failed");
          setSnackbarMessage("Insert Failed");
          setOpenSnackbar(true);
        });

      // Added changes to form clearing after submit
      setUsername("");
      setEmail("");
      setPhonenumber("");
      setPassword("");
      setcfmPassword("");
    }
  };

  useEffect(() => {
    // Add LoginPage to the body element when mounting
    document.body.classList.add("RegisterPage");

    // Remove LoginPage to the body element when un-mounting
    return () => {
      document.body.classList.remove("RegisterPage");
    };
  }, []);

  return (
    <div className="register">
      <div className="register__container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <Box pb={3}>
            <TextField
              label="Username"
              type="text"
              placeholder="Brandon"
              fullWidth
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Box>

          <Box pb={3}>
            <TextField
              label="Email"
              type="email"
              placeholder="example@email.com"
              fullWidth
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Box>

          <Box pb={3}>
            <TextField
              label="Phone Number"
              type="number"
              placeholder="895458657"
              fullWidth
              value={phonenumber}
              onChange={(event) => setPhonenumber(event.target.value)}
            />
          </Box>
          <Box pb={3}>
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              fullWidth
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Box>

          <Box pb={3}>
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Enter password again"
              fullWidth
              value={cfmpassword}
              onChange={(event) => setcfmPassword(event.target.value)}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            style={{
              fontWeight: "bold",
              fontFamily: "Comic Neue",
            }}
          >
            Sign Up
          </Button>
        </form>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
