// This is the user details page, this page will be where the users enter details about themselves so that the book can autogenerate text
// Accessed through localhost:3000/parent/create-story/user-details

import { useState } from "react";
import {
  Header,
  Footer,
  NextPageButton,
} from "../../../../../global_components";
import {
  TextField,
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
  Input,
  Grid,
  InputLabel,
  Box,
} from "@mui/material";
import "./UserDetails.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const UserDetails = () => {
  const [siblingInput, makeSiblingInput] = useState([]);
  const [parentInputs, makePatentInput] = useState([]);

  let sibling_index = 0;
  let parent_index = 0;

  const addSiblingInput = (e) => {
    sibling_index++;
    makeSiblingInput((oldData) => [...oldData, sibling_index]);
  };

  const addParentInput = (e) => {
    parent_index++;
    makePatentInput((oldData) => [...oldData, parent_index]);
  };
  return (
    <div>
      <Header />
      <div className="mainDiv-CreateStoryUserDetails">
        <Box ml={6}>
          <h1 className="h1-CreateStoryUserDetails">
            Enter Details for Unique Story Generation:
          </h1>
        </Box>
        <Grid container spacing={3}>
          {/*Left side of screen */}
          <Grid item xs={12} md={6}>
            <Box pt={6} m={6}>
              {/*Enter name */}
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <InputLabel>Enter Name:</InputLabel>
                </Grid>
                <Grid item>
                  <TextField label="Enter name" />
                </Grid>
              </Grid>
            </Box>
            {/*Enter age */}

            <Box m={6}>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Box pl={1.3}>
                    <InputLabel>Enter Age:</InputLabel>
                  </Box>
                </Grid>
                <Grid item>
                  <TextField label="Enter age" type="number" />
                </Grid>
              </Grid>
            </Box>
            {/*Color pref */}
            <Box m={6}>
              <FormControl>
                <FormLabel id="color-pref">
                  Set child's color preference:
                </FormLabel>
                <FormGroup row aria-labelledby="color-pref">
                  <FormControlLabel
                    value="red"
                    label="Red"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="orange"
                    label="Orange"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="yellow"
                    label="Yellow"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="green"
                    label="Green"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="blue"
                    label="Blue"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="purple"
                    label="Purple"
                    control={<Checkbox />}
                  />

                  <FormControlLabel
                    value="all"
                    label="All Colors"
                    control={<Checkbox />}
                  />
                </FormGroup>
              </FormControl>
            </Box>
            {/*Story perspective section*/}
            <Box m={6}>
              <FormControl>
                <FormLabel id="story-pref">Story perspective: </FormLabel>
                <RadioGroup row aria-labelledby="story-pref">
                  <FormControlLabel
                    value="1st-person"
                    label="1st Person"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="3rd-person"
                    label="3rd Person"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    value="childs-name"
                    label="Child's name"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Grid>

          {/*Right side of screen */}
          <Grid item xs={12} md={6}>
            {/*Add siblings or friends section */}
            <Box m={6} pt={3}>
              <Box pt={3} pb={3}>
                <FormLabel>Add Sibling</FormLabel>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <Stack spacing={1}>
                    <Input
                      key={sibling_index}
                      placeholder="Enter Name"
                      fullWidth={false}
                      className="enterNameInput"
                    />
                    {siblingInput.map((sibling_index) => (
                      <Input
                        key={sibling_index}
                        placeholder="Enter Name"
                        className="enterNameInput"
                      />
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box ml={2}>
                    <AddCircleIcon
                      onClick={addSiblingInput}
                      fontSize="large"
                      color="primary"
                      className="AddCircleIcon"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Add parent section */}
            <Box m={6}>
              <Box pt={3} pb={3}>
                <FormLabel>Add Parent/Carer</FormLabel>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <Stack spacing={1}>
                    <Input
                      key={parent_index}
                      placeholder="Enter Name"
                      fullWidth={false}
                      className="enterNameInput"
                    />

                    {parentInputs.map((parent_index) => (
                      <Input
                        key={parent_index}
                        placeholder="Enter Name"
                        className="enterNameInput"
                      />
                    ))}
                  </Stack>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box ml={2}>
                    <AddCircleIcon
                      onClick={addParentInput}
                      fontSize="large"
                      color="primary"
                      className="AddCircleIcon"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/*Story type section */}
            <Box m={6}>
              <FormLabel>Story Type:</FormLabel>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Behavioural "
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Going Places"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Emotional Skills"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Educational"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="Growing Up" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Communication Skills"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="Self Care" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Social Skills"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Medical Appointments"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="Home" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Play Skills"
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Safety Skills"
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <NextPageButton path={"/parent/create-story/create-book/"} />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default UserDetails;
