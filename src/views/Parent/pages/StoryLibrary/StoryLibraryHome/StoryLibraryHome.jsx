//This is the landing page when the user clicks on story library button
// Accessed through http://localhost:3000/parent/story-library/
import React from "react";
import {
  Header,
  Footer,
  NavigationButton,
} from "../../../../../global_components";
import { Box } from "@mui/material";
import "./StoryLibraryHome.css";

const StoryLibraryHome = () => {
  return (
    <div>
      <Header />
      <div className="mainDiv-StroyLibaryHome">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 id="h1-StoryLibaryHome">Story Library</h1>
          <p id="p1-StroyLibaryHome">
            Welcome to our Social Story Library, a dedicated online resource
            designed to support parents, carers, and children with special need
            along their path to develop their social and emotional skills and
            understanding. We provide a digital library of carefully crafted
            stories, tailored to address the unique needs of children with
            disabilities often face. These stories, provide engaging visuals and
            relevant stories, used to enhancing the child's social skills,
            communication abilities, and emotional skills.
          </p>

          <p id="p2-StroyLibaryHome">
            Our library, provides the parents and carers with some flexibility
            allowing you to adapt stories to your child's unique needs, allowing
            them to identify with characters and scenarios that resonate with
            their experiences. Parents and carers can further adjust the
            perspective of the stories from first-person to third-person
            narration or opt to personalize them by incorporating their child's
            name into the story’s.
          </p>

          <Box mt={"5%"}>
            <NavigationButton
              name="Enter Library"
              variant="contained"
              color="primary"
              path="/parent/story-library/story-selection"
              style={{ fontSize: "15px" }}
              sx={{ fontWeight: "bold" }}
            />
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default StoryLibraryHome;
