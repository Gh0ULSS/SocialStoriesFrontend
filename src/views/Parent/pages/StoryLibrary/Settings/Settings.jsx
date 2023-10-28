// This is the settings page for the book view..
// This will be page 1 (ie the landing page ) for the book view.
// Accessed through http://localhost:3000/parent/story-library/settings, see Routing.js for further

import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateStory } from "../StoryPage/updateStory";
import {
  Header,
  Footer,
  NextPageButton,
} from "../../../../../global_components"; //Header and Footer component
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import boyImg from "../../../../../assets/images/boy_img.png";
import girlImg from "../../../../../assets/images/girl_img.png";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const story = location.state?.story;
  const locate_font = location.state?.font;
  const locate_personaName = location.state?.Actor;
  const locate_pronoun = location.state?.pronoun;

  const [font, setFont] = useState(locate_font || "");
  const [pronoun, setPronoun] = useState(locate_pronoun || "");
  const [changePersonaName, setChangePersonaName] = useState("no");
  const [personaName, setPersonaName] = useState(locate_personaName || " ");
  const [gender, setGender] = useState("boy");
  const [perspective, setPerspective] = useState("third-person");
  const [saved, setSaved] = useState(false);

  const [updatedStory, setUpdatedStory] = useState(null);
  const applyChanges = () => {
    const settings = {
      font: font,
      pronoun: pronoun,
      personaName: personaName,
      gender: gender,
      perspective: perspective,
    };

    const updatedStory = updateStory(story, settings);
    setSaved(true);
    setUpdatedStory(updatedStory);
    /*/ ------------------------------------------------- ///
    TODO: Need to save updated story to database.  
    /// ------------------------------------------------- /*/
  };

  function CreateSentance() {
    if (pronoun === "he") {
      return <h2>He is awesome</h2>;
    } else if (pronoun === "her") {
      return <h2>She is awesome</h2>;
    } else if (pronoun === "they") {
      return <h2>They are awesome</h2>;
    }
  }

  function HandleNameSentance() {
    if (
      changePersonaName === "no" &&
      gender === "boy" &&
      personaName.length < 1
    ) {
      return <h2>This is Gavin !</h2>;
    } else if (
      changePersonaName === "no" &&
      gender === "girl" &&
      personaName.length < 1
    ) {
      return <h2>This is Emily !</h2>;
    } else if (personaName.length > 1) {
      return <h2>This is {personaName} !</h2>;
    } else {
      return <h2>This is Emily !</h2>;
    }
  }

  function HandleGenderImage() {
    if (gender === "boy") {
      return <img src={boyImg} width={250} height={250} />;
    } else {
      return <img src={girlImg} width={250} height={250} />;
    }
  }

  return (
    <div>
      <Header />
      <div className="mainSettings">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {/*Settings Section*/}

            {/*Title*/}
            <Box mt={3} ml={3}>
              <h1>Edit pre-made story: {story.title}</h1>
            </Box>

            {/*Font-options section*/}
            <Box ml={6} mr={3} mb={3}>
              <FormControl>
                <FormLabel id="font-options-label">Font:</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="font-options-label"
                  onChange={(e) => {
                    setFont(e.target.value);
                  }}
                  value={font || null}
                >
                  <FormControlLabel
                    value="Itim"
                    label={
                      <Typography
                        sx={{ fontFamily: "Itim", fontWeight: "bold" }}
                      >
                        Itim
                      </Typography>
                    }
                    control={<Radio />}
                  />

                  <FormControlLabel
                    value="Courgette"
                    label={
                      <Typography
                        sx={{ fontFamily: "Courgette", fontWeight: "bold" }}
                      >
                        Courgette
                      </Typography>
                    }
                    control={<Radio />}
                  />

                  <FormControlLabel
                    value="Handlee"
                    label={
                      <Typography
                        sx={{ fontFamily: "Handlee", fontWeight: "bold" }}
                      >
                        Handlee
                      </Typography>
                    }
                    control={<Radio />}
                  />

                  <FormControlLabel
                    value="Kalam"
                    label={
                      <Typography sx={{ fontFamily: "Kalam" }}>
                        Kalam
                      </Typography>
                    }
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            {/*Pronouns section*/}
            <Box p={3} ml={3}>
              <FormControl>
                <FormLabel id="pro-nouns-label">Pro-nouns:</FormLabel>
                <RadioGroup
                  value={pronoun}
                  row
                  aria-labelledby="pro-nouns-label"
                  onChange={(e) => setPronoun(e.target.value)}
                >
                  <FormControlLabel value="he" label="He" control={<Radio />} />
                  <FormControlLabel
                    value="her"
                    label="Her"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="they"
                    label="They"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            {/*Personas Name section*/}
            <Box p={3} ml={3}>
              <FormLabel id="personas-name-label">
                Change Personas Name:
              </FormLabel>
              <RadioGroup
                row
                aria-label="personas-name-label"
                value={changePersonaName}
                onChange={(e) => setChangePersonaName(e.target.value)}
              >
                <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                <FormControlLabel value="no" label="No" control={<Radio />} />
              </RadioGroup>
              <TextField
                row
                label={personaName}
                onChange={(e) => setPersonaName(e.target.value)}
                disabled={changePersonaName === "no"}
              />
            </Box>

            {/*Story perspective*/}
            <Box p={3} ml={3}>
              <FormLabel id="perspective-label">Story perspective:</FormLabel>
              <RadioGroup
                value={perspective}
                row
                aria-label="perspective-label"
                onChange={(e) => setPerspective(e.target.value)}
              >
                <FormControlLabel
                  value="first-person"
                  label="First Person"
                  control={<Radio />}
                />
                <FormControlLabel
                  value="third-person"
                  label="Third Person"
                  control={<Radio />}
                />
              </RadioGroup>
            </Box>

            {/*Next Page Button (from global components)*/}
            {/* <NextPageButton path="/parent/story-library/bookview" /> */}
            <Box
              mt={3}
              padding={3}
              right={6}
              bottom={56}
              sx={{ position: "fixed" }}
            >
              <Button
                variant="contained"
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "120px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
                disabled={!saved}
                onClick={() => {
                  navigate("/parent/story-library/bookview", {
                    state: { story: updatedStory, font: font },
                  });
                }}
              >
                Next Page
              </Button>
            </Box>

            {/*Apply changes button*/}
            <Box
              ml={4}
              mt={3}
              padding={3}
              left={3}
              bottom={56}
              sx={{ position: "fixed" }}
            >
              <Button
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
                onClick={() => applyChanges()}
                variant="contained"
              >
                Save
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {/*Active changes section */}
            {/*this div will only center title*/}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>Active changes / Sample story</h1>
            </div>

            {/*this div will use the users selected font and will center items */}
            <div
              style={{
                fontFamily: font,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <HandleNameSentance gender={gender} />
              <HandleGenderImage gender={gender} />
              <CreateSentance pronoun={pronoun} />

              <p>Story in perspective of {perspective}</p>
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default Settings;
