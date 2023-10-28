// This is the home page for the Admin view
// Accessed through http://localhost:3000/admin/home, see Routing.js for further info
import React from "react";
import "./Home.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Header, Footer, NavigationButton } from "../../../../global_components"; //Header and Footer component
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      {/* Home Div - This Dic conatins all the sub div & Content of the home page */}
      <div class="HomePageContentAdmin">
        {/* Welcome Div - This conains the title of user when they login */}
          <div class="welcomeAdmin">
            {/* MIGHT NEED TI REMOVE THE ID BELOW AS ITS CURRENTLY NOT BEING USED IN CSS */}
            <h1 id="titleAdmin">Welcome, Admin!</h1>
          </div>

          {/* Home Body Div - This conatins the text that is displayed to the user when they log in */}
          <div class="homeBodyAdmin">
            {/* Home page Text -  TO CHANGE LATER WHEN WE HAVE OUR PRODUCT */}
              <p id="homePageTextAdmin">
                  Welcome, to Sunset Stories from this page you can access accounts, settings, customization features, develop new social stories, print off the developed stories and so much more.
                  As an Admin you will also be able to change certain aspects of the site for all members/users of the site. 
                  <br/><br/>
                  As an Admin, you are able to access and customize many aspects of the sunset stories site. Meaning that as an Admin you have a responsibility to protect this site from unauthorised
                  users. 
                  <br/><br/>
                  Below are some buttons for quick access to parts of this site. 
              </p>
              <br/>
          </div>

      {/* BUTTONS*/}
          {/* This is the DIV that the buttons are stored in*/}
            <div class="adminButton">
              <Stack spacing={3} direction="row">
              <Button 
                  variant="contained" 
                  style={{fontFamily: "Comic Neue", fontWeight: "bold"}}
                  ><Link 
                  to={"/parent/create-story/"}
                  style={
                    {
                      fontFamily: "Comic Neue",
                      fontSize: "15px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#FFFFFF"
                    }
                  }>Create Story</Link></Button>

                  <Button 
                  variant="contained" 
                  style={{fontFamily: "Comic Neue", fontWeight: "bold"}}
                  ><Link 
                  to={"/parent/story-library"}
                  style={
                    {
                      fontFamily: "Comic Neue",
                      fontSize: "15px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      color: "#FFFFFF"
                    }
                  }>Story Libary</Link></Button>

                  <Button 
                  variant="contained" 
                  style={{fontFamily: "Comic Neue", fontWeight: "bold"}}>Create PECS</Button>

                  <Button 
                  variant="contained" 
                  style={{fontFamily: "Comic Neue", fontWeight: "bold"}}>PECS Libary</Button>
              </Stack>
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;



