import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "../NavigationButton/NavigationButton";
import Logo from "../../assets/images/Logo.png";
import Img1 from "../../assets/images/user.png";
import {
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Box,
} from "@mui/material";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mouseaction, setmouseaction] = useState(null);

  var handleLeftClick = (e) => {
    setmouseaction(e.currentTarget);
  };

  function Profile() {
    navigate("/Profile");
  }

  var close = () => {
    setmouseaction(null);
  };

  const handleUserLogout = () => {
    // keep only required client side data on logout
    var firstload = "First_Load";
    var saveval = localStorage.getItem(firstload);
    var orderedstorydata = `${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`;
    var savedata = localStorage.getItem(orderedstorydata);

    localStorage.clear();
    localStorage.setItem(firstload, saveval);
    localStorage.setItem(orderedstorydata, savedata);
    navigate("/");
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(180deg, #FDB046 0%, #9E258F 0.01%, #FD4470 99.99%, #FF8252 100%)",
        }}
      >
        <Toolbar>
          {/* Evenly spaced links */}
          <Box
            display="flex"
            gap={8}
            className="NavButton"
            sx={{ flexGrow: 1 }}
          >
            <img
              src={Logo}
              alt="logo"
              style={{
                display: "flex",
                height: "40px",
                padding: "10px",
              }}
            ></img>

            <NavigationButton
              variant="text"
              name="home"
              path="/parent/home/"
              sx={{
                color: "white",
                fontFamily: "Comic Neue",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />

            <NavigationButton
              variant="text"
              name="Create Story"
              path="/parent/create-story/"
              sx={{
                color: "white",
                fontFamily: "Comic Neue",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />

            <NavigationButton
              variant="text"
              name="Story Library"
              path="/parent/story-library/"
              sx={{
                color: "white",
                fontFamily: "Comic Neue",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />

            <NavigationButton
              variant="text"
              name="PECS Libary"
              path="/parent/PECS/pec-libary/pec-selection"
              sx={{
                color: "white",
                fontFamily: "Comic Neue",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            />
          </Box>

          <Box>
            <IconButton onClick={handleLeftClick}>
              <img
                src={Img1}
                alt="img1"
                style={{
                  display: "flex",
                  height: "40px",
                  padding: "10px",
                }}
              ></img>
            </IconButton>
            <Menu
              mouseaction={mouseaction}
              open={Boolean(mouseaction)}
              onClose={close}
              sx={{ mt: 8 }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {/* Margin top abbreviation*/}
              <MenuItem onClick={Profile}>Edit Profile</MenuItem>
              <MenuItem>Setting</MenuItem>
              <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
