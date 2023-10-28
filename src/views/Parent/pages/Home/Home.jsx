// This is the home page for the parent view
// Accessed through http://localhost:3000/parent/home, see Routing.js for further info

import React from "react";
import "./Home.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Footer,
  Header,
  NavigationButton,
} from "../../../../global_components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Home Div - This Dic conatins all the sub div & Content of the home page */}
      <div class="HomePageContentParent">
        {/* Welcome Div - This conains the title of user when they login */}
        <div class="WelcomeParent">
          {/* MIGHT NEED TI REMOVE THE ID BELOW AS ITS CURRENTLY NOT BEING USED IN CSS */}
          <h1 id="titleParent">Welcome, Parents & Carers!</h1>
        </div>

        {/* Home Body Div - This conatins the text that is displayed to the user when they log in */}
        <div class="homeBodyParent">
          {/* Home Body Div - This conatins the text */}
          <p id="homePageTextParent">Welcome to Sunset Stories,</p>
          <p id="p1-HomePageText">
            At Sunset Stories, we are dedicated to supporting the Special Needs
            community by providing a unique platform that allows users to create
            personalized Social Stories and PECS cards. Our mission is to
            provide an essential resource to parents, caregivers, and educators
            by equipping them with the necessary tools needed to support
            children.
            <br />
            <br />
            {/* Bold Heading 1 */}
            <b>Visual Storytelling: </b>
            {/* Home Body Div - This contains the text under the bold writing the list */}
            <div id="homePageTextParent2">
              Sunset Stories allows the users to select from a wide range of
              characters. We provide a library of characters to choose from to
              further personalise your childs' stories. These characters are
              used to help the child better identify with the persona.
            </div>
            <br />
            {/* Bold Heading 2 */}
            <b>Stories with Personal Touch: </b>
            {/* Home Body Div - This conatins the text under the bold wrtting the list */}
            <div id="homePageTextParent2">
              Sunset Stories also allow for other characters to be mentioned in
              the story. This includes family, friends, carers, pets and more.
              The main characters are able to interact with these external
              members through the story to better personalise the story.
            </div>
            <br />
            {/* Bold Heading 3 */}
            <b>Printing and Sharing:</b>
            {/* Home Body Div - This conatins the text under the bold wrtting the list */}
            <div id="homePageTextParent2">
              Once you have created a story, you are able to print these stories
              off. You can send them to be printed at your local print shop or
              print them off at home. These stories can be shared with childs'
              teachers, carers, doctors, and loved ones.
            </div>
            <br />
            <br />
          </p>
        </div>

        {/* BUTTONS*/}
        {/* This is the DIV that the buttons are stored in*/}
        <div class="adminButton">
          <Stack spacing={3} direction="row">
            <Button variant="contained">
              <Link
                to={"/parent/create-story/"}
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                Create Story
              </Link>
            </Button>

            <Button variant="contained">
              <Link
                to={"/parent/story-library"}
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                Story Library
              </Link>
            </Button>

            <Button variant="contained">
              <Link
                to={"/parent/PECS/pec-libary/pec-selection"}
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                PECS Library
              </Link>
            </Button>
          </Stack>
        </div>

        {/* */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
