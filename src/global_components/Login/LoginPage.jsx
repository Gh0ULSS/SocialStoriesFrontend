import { useState, useEffect } from "react";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import Axios from "axios";
import Register from "../Register/Register";
import "./Login-page.css";
import { Button, TextField, Box, Snackbar, Alert } from "@mui/material";
import { setsessionToken } from "../AuthSession/authsession";
import Logo from "../../assets/images/Logo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
 
  window.onload = initbackend;

  function initbackend() {
    const isFirstLoad = localStorage.getItem('First_Load');
  
    if (!isFirstLoad) {
      Axios.post("http://localhost:5118/api/internal/Setup/Initialize", {
        username: "Admin",
        email: "Admin@sunsetstories.com",
        mobileNumber: "4861358956",
        password: "Password12!"
      })
        .then((res) => {
          localStorage.setItem('First_Load', 'true');
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  /*
  useEffect(() => {
    const isFirstLoad = localStorage.getItem('First_Load');
    if(!isFirstLoad) {
      const initBackend = async () => {
        await Axios.post(
          "http://localhost:5118/api/internal/Setup/Initialize",
          {
            username: "Admin",
            email: "Admin@sunsetstories.com",
            mobileNumber: "040000000",
            password: "Password12!"
        })
        .then((res) => {
            localStorage.setItem('First_Load','true');
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      initBackend();
    }
  }, []);
  */

  // delete First_Load variable when npm start stops running (Ctrl+C)
  window.addEventListener("beforeunload", frontendstop);

  function frontendstop()
  {
    localStorage.removeItem("First_Load");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:5118/api/Auth/Login", {
      ///api/User/Login
      // port 8800 express js --> http://localhost:8800/login
      email: email,
      password: password,
    })
      .then((response) => {
        //---- LOGIC ----------------
        console.log(response.data);
        console.log(response.status);
        setsessionToken(response.data.message[0]);
       
        localStorage.setItem("Email", email);
        localStorage.setItem("CurrentEmailPrefix",email.substring(0,3));

        console.log(localStorage.getItem("Email"));
        navigate("/parent/home");
      })
      .catch((err) => {
        console.log(err);
        setSnackbarMessage("Wrong Login Credentials");
        setOpenSnackbar(true);
        //alert("Wrong Login Credentials");
      });
  };

  useEffect(() => {
    // Add LoginPage to the body element when mounting
    document.body.classList.add("loginPage");

    // Remove LoginPage to the body element when un-mounting
    return () => {
      document.body.classList.remove("loginPage");
    };
  }, []);

  return (
    <div className="login">
      <div className="login__container">
        <img
          src={Logo}
          alt="logo"
          style={{
            marginLeft: "100px",
            padding: "10px",
          }}
        ></img>
        <Box ml={"40%"}>
          <h1>Login</h1>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box pb={3}>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
          </Box>
          <Box pb={3}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
            />
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              fontWeight: "bold",
              fontFamily: "Comic Neue",
            }}
          >
            Sign in
          </Button>

          <Box ml={"25%"} pt={3}>
            <Link className="sign_up" to="register">
              Not a member? Sign Up
            </Link>
          </Box>
        </form>
      </div>
      <Routes>
        <Route path="register" element={<Register />} />
      </Routes>

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

export default LoginPage;
