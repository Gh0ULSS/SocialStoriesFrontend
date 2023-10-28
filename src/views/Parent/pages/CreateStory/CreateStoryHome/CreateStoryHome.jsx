//This is the landing/home page for when users click on the "Create Story" button
//Accessed through: http://localhost:3000/parent/create-story/
import React from "react";
import {
  Header,
  Footer,
  NavigationButton,
} from "../../../../../global_components";
import { Box } from "@mui/material";
import "./CreateStoryHome.css";

const CreateStoryHome = () => {
  return (
    <div>
      <Header />
      <div className="mainDiv-CreateStoriesHome">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 id="h1-CreateUserStories">Create User Story</h1>
          <p id="p1-CreateUserStories">
            Welcome to the "Create Your Story" feature of Sunset Stories, a
            unique solution addressing the challenges many face with social
            stories. We understand that obtaining high-quality social stories
            can be both challenging and costly, often resulting in limited
            options and poor-quality resources.
            <br />
            <br />
            But here's where we make a difference: On our platform, you have the
            power to craft personalized stories that are tailored precisely to
            your child's needs and preferences. With this feature, it is
            possible to effortlessly integrate their own text and cherished
            photos into a story, creating a truly customized resource that
            resonates deeply with their child.
            <br />
            <br />
            These stories aren't just any stories; they are stories designed to
            meet your child's specific requirements. Once crafted, they are
            conveniently stored in the "Story Library," under the title "Saved
            Stories," ensuring easy access whenever you and your child wish to
            revisit those precious moments and cherished adventures.
            <br />
            <br />
            And, as an added bonus, you also have the option to print these
            customized stories, allowing your child to enjoy them in a tangible,
            hands-on way.
            <br />
            <br />
            Discover a more accessible and cost-effective approach to social
            stories at Sunset Stories, where we empower you to create tailored
            resources that meet your child's unique needs. Start crafting these
            invaluable stories today!
          </p>

          <Box mt={"4%"}>
            <NavigationButton
              name="Start"
              variant="contained"
              color="primary"
              path="/parent/create-story/create-book/"
              style={{ width: "120px", fontSize: "15px" }}
              sx={{
                fontWeight: "bold",
              }}
            />
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default CreateStoryHome;
