//IMPORTANT NOTES:
/*
 !~* When user clicks on the Edit story button, user will be redirected SaveStoryEdit.jsx (Please see in relative folder)
 !~* When user click on the View Story button, user will be redirected to SaveBookView.jsx (Please see in realtive folder)
 *
 * 
 * Please DO NOT! Confuse SaveStoryEdit.jsx with CreateStory.jsx, or SaveBookView.jsx with BookView.jsx. 
 *  
*/
//Found at: http://localhost:3000/parent/story-library/SavedStories see Routing for more info.

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header, Footer, StoryTile } from "../../../../../global_components";
import { Box, Button, Grid, ButtonGroup } from "@mui/material";
import { getsessionToken } from "../../../../../global_components/AuthSession/authsession";
import Axios from "axios";
import { decodeBase64 } from "../../../../../global_components";

const SavedStoriesPage = () => {
  const navigate = useNavigate();
  // const savedStories = storiesData; // This is your data source
  const [selected, setSelected] = useState(null);
  const [userstories,setuserstories] = useState([]);
  const colors = ["#E693DC", "#FE96AE", "#FFB99E", "#FED397"];
  const [pageload,setPageload] = useState(true);

  useEffect(() => {
    // NOTE: this is just the DB only 
    // Use the file/s3 endpoints and DB  endpoints in conjunction with each other
    const usertoken = getsessionToken();

    const getstoryDB = async () => {
      try
      {
          const result = await Axios.get(`http://localhost:5118/api/Story/Stories`, {
            headers: {
              'Authorization': `bearer ${usertoken}`,
              'Content-Type': 'application/json;',
            }
          })
            // console.log(result.data);

          //localStorage.setItem("DBstorydata", JSON.stringify(result.data));

          setuserstories(result.data);

          return result.data;
      }
      catch(error)
      {
        console.log(error);
      }
    }

    // console.log(usertoken);

    const getstoryFileBase = async (id, ext) => {
      // NOTE: DB in conjunction with Filebase
      try
      {
          const result = await Axios.get(`http://localhost:5118/api/File/Download`,
          { 
            // The correct way to handle parameters for axios.get()
            params: 
            {
              fileid: id,
              fileExtension: ext
            },
            headers: 
            {
              'Authorization': `bearer ${usertoken}`,
              'Content-Type': 'text/plain;',
            }
          })
          
          var imgurl = decodeBase64(result.data)
          // Decode from base64
          console.log(result.data.substring(0,15));
          // console.log(decodeBase64(result.data));
          
          // save images for viewings
          // imageurls.push(decodeBase64(result.data));

          return imgurl;
      }
      catch(error) {
        console.log(error);
      }

  }

    const storyprocess = async () => {
        try
        {
            const result = await getstoryDB();
            var storydata = result;

            console.log(result);

            // Handle with looping through stories (user may created more than one story with pages), 
            // [0] is very static
            
            // ENFORCE order for each storypage here

            console.log("Story Pages: " + JSON.stringify(storydata.stories));

            // 1) replace with ordered results 
            var ordered_data = localStorage.getItem(`${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`);
            var ordered_dataobj = JSON.parse(ordered_data);
            console.log(ordered_dataobj);

            var storyarr = storydata.stories;
            // storydata.stories[0].pages = ordered_pages; // 2) put into storydata
            // console.log("From backend" + JSON.stringify(storydata.stories));


            for (let i = 0; i < storyarr.length; i++)
            {
              console.log(storyarr[i].pages);
              console.log(JSON.stringify(ordered_dataobj[i].pages));
              storyarr[i].pages = ordered_dataobj[i].pages; //2) Enforce order of stories
            }

            // Handle for looping through pages in stories
            for (let i = 0; i < storyarr.length; i++)
            {

              // console.log(storyarr[i].titleStoryPage.imageId);
              // console.log(storyarr[i].titleStoryPage.imageExtension);
              const pages = storyarr[i].pages;

              var titleurl = await getstoryFileBase(storyarr[i].titleStoryPage.imageId,storyarr[i].titleStoryPage.imageExtension);
              console.log(titleurl);
              // insert decoded url for view and edit 
              storyarr[i].titleStoryPage.url = titleurl;

              for (let j = 0; j < pages.length; j++) 
              {
                //console.log(pages[j].imageId);

                var pageurl = await getstoryFileBase(pages[j].imageId,pages[j].imageExtension);

                // console.log(pageurl);

                // insert decoded url for view and edit 
                pages[j].url = pageurl;
                // console.log(titleurl)
              }
            }
          setPageload(false);
          // console.log(imageurls);
        }
        catch (err)
        {
          console.log(err)
        }
    };
   storyprocess();
  },[]);

  // For use with HTML tags and components
  //console.log(JSON.stringify(userstories.stories));
  // console.log(JSON.stringify(userstories));
  //console.log(typeof(userstories.stories));

  var savedStories = userstories.stories; // This is your data source
  console.log(JSON.stringify(savedStories));

  return (
    <div>
      <Header />
      <div className="mainStoryPage">
        {/* Page heading */}

        <Box p={3}>
          <h1>Saved Stories</h1>
        </Box>
        <Box p={3}>
          {/* Tiles containing all the stories of the category */}
          {pageload ? (
          <div>Loading stories, please wait...</div>
             ) : ( 
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {savedStories.map((story, index) => (
              <Grid item key={index}>
                {console.log(index)}
                <StoryTile
                  name={story.titleStoryPage.description}
                  image={story.titleStoryPage.url}
                  onClick={() => setSelected(story)}
                  colorback={colors[index % colors.length]} // mod of len is there for cycling.
                  selected={selected === story}
                />
              </Grid>
            ))}
          </Grid>
          )}

          {/* Buttons -> EDIT STORY and VIEW STORY */}
          <Box display="flex" justifyContent="center" mt={10}>
            <ButtonGroup>
              {/*Edit story button */}
              <Button
                onClick={() =>
                  navigate("/parent/story-library/SavedBookSettings/", {
                    state: { story: selected},
                  })
                }
                variant="contained"
                size="large"
                disabled={!selected}
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
              >
                Edit
              </Button>

              {/*View Story Button */}
              <Button
                onClick={() => {
                  if (selected) {
                    navigate("/parent/story-library/SaveBookview", {
                      //When user clicks on the Edit story button, user will be redirected SaveStoryEdit.jsx (Please see in relative folder)
                      state: { story: selected },
                    });
                  }
                }}
                variant="contained"
                color="secondary"
                size="large"
                disabled={!selected}
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
              >
                View
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default SavedStoriesPage;

//Change to backend pull
// Custom user story
const storiesData = [
  {
    titleStoryPage: {
      imageId: "ed6a268a-c1f4-47b0-a037-b66067fdaca3",
      imageExtension: ".jpg",
      description: "Anger",
    },
    pageCount: 3,
    pages: [
      {
        imageId: "39bebf57-9607-4778-9b32-965050324473",
        imageExtension: ".jpg",
        description: "Maison is feeling angry",
      },
      {
        imageId: "1b89df4b-06fb-4d9b-9271-f1fb3e776fe2",
        imageExtension: ".jpg",
        description: "Maison takes deep breaths",
      },
      {
        imageId: "2566b5b5-5e62-4efe-b088-a7714e34a727",
        imageExtension: ".jpg",
        description: "Maison feels better",
      },
    ],
    fontType: "Kalam",
  },
];
