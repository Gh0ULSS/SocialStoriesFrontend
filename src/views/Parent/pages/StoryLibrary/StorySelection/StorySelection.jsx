//This is the landing page when the user clicks on story library button
// Accessed through http://localhost:3000/parent/story-library/story-selection

import React from "react";
import "./StorySelection.css";
import { Header, Footer, Tile } from "../../../../../global_components";
import { Grid } from "@mui/material";
import behaviorimg from "../../../../../assets/images/behavior.png";
import educationimg from "../../../../../assets/images/education.png";
import selfCareimg from "../../../../../assets/images/selfcare.png";
import homeimg from "../../../../../assets/images/house.png";
import outimg from "../../../../../assets/images/zoo.png";
import growingimg from "../../../../../assets/images/growing-up.png";
import skillsimg from "../../../../../assets/images/creative.png";
import playimg from "../../../../../assets/images/toys.png";
import emotimg from "../../../../../assets/images/emotional.png";
import communimg from "../../../../../assets/images/talking.png";
import healthimg from "../../../../../assets/images/medical-team.png";
import Safeimg from "../../../../../assets/images/worker.png";
import saveImg from "../../../../../assets/images/save.png";

const StorySelection = () => {
  return (
    <div>
      <Header />

      {/* Main Div - Contains whole page contnet */}
      <div className="mainDiv-StroySelection">
        {/* Header */}
        <h1 id="h1-StroySelection">Story Selection</h1>

        {/* Grid */}

        <Grid container spacing={3} className={"Grid-StroySelection"}>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 1 - Behavioural */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          <Grid item>
            <Tile
              name="Behavioral"
              /* CHnage Path */
              path="/parent/story-library/category/Behavioral"
              image={behaviorimg}
              /* Purple */
              colorback="#E693DC"
            />
          </Grid>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 2 - Educational */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Educational"
              /* Cnage Path */
              path="/parent/story-library/category/Educational"
              image={educationimg}
              /* Pink */
              colorback="#FE96AE"
            />
          </Grid>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 3 - Self Care */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Self Care"
              /* CHnage Path */
              path="/parent/story-library/category/Self-Care"
              image={selfCareimg}
              /* Orange */
              colorback="#FFB99E"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 4 - Home */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Home"
              /* CHnage Path */
              path="/parent/story-library/category/Home"
              image={homeimg}
              /* Yellow */
              colorback="#FED397"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 5 -  Going out*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Going Out"
              /* CHnage Path */
              path="/parent/story-library/category/Going-Out"
              image={outimg}
              /* Purple */
              colorback="#E693DC"
            />
          </Grid>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 6 - Growing Up */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Growing Up"
              /* CHnage Path */
              path="/parent/story-library/category/Growing-Up"
              image={growingimg}
              /* Pink */
              colorback="#FE96AE"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 7 -  Socail Skills*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Social Skills"
              /* CHnage Path */
              path="/parent/story-library/category/Social-Skills"
              image={skillsimg}
              /* Orange */
              colorback="#FFB99E"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 8 - Play Skills */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Play Skills"
              /* CHnage Path */
              path="/parent/story-library/category/Play-Skills"
              image={playimg}
              /* Yellow */
              colorback="#FED397"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 9 - Emotional Skills */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Emotional"
              /* CHnage Path */
              path="/parent/story-library/category/Emotional"
              image={emotimg}
              /* Purple */
              colorback="#E693DC"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 10 - Communication Skills*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Communication"
              /* CHnage Path */
              path="/parent/story-library/category/Communication"
              image={communimg}
              /* Pink */
              colorback="#FE96AE"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 11 - Health*/}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Health"
              /* CHnage Path */
              path="/parent/story-library/category/Health"
              image={healthimg}
              /* Orange */
              colorback="#FFB99E"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 12 - SAfety */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Safety"
              /* CHnage Path */
              path="/parent/story-library/category/Safety"
              image={Safeimg}
              /* Yellow */
              colorback="#FED397"
            />
          </Grid>

          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
          {/* Category 13 - User saved stories */}
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}

          <Grid item>
            <Tile
              name="Saved Stories"
              /* Change Path */
              path="/parent/story-library/SavedStories"
              image={saveImg}
              /* Purple */
              colorback="#E693DC"
            />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default StorySelection;
