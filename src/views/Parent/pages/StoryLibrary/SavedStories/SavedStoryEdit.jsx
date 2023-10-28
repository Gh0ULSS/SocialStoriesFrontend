// This is the settings page for the saved books.
// Accessed through http://localhost:3000/parent/story-library/SavedBookSettings/
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Header,
  Footer,
  NavigationButton,
  encodeBase64,
  decodeBase64,
} from "../../../../../global_components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./SavedStoryEdit.css";
import {
  Grid,
  TextField,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  ButtonGroup,
  Typography,
} from "@mui/material";
import { getsessionToken } from "../../../../../global_components/AuthSession/authsession";
import { jsPDF } from "jspdf";
import Axios from "axios";

//Pages creation page
const Page = ({ pageNumber, pageData, newPageData, font }) => {
  /*!!!! TODO !!!!!//
  /*
    Need to get imgage from database here !!! and display it in <img> tag 
  */

  // console.log(pageData);

  const imgUrl = pageData.img ? pageData.url: null;

  const handleImgChange = (e) => {
    newPageData(pageNumber, "img", e.target.files[0]);
  };


  return (
    <div className="SavedEditMainDiv">
      <Box pt={3}>
        {/*Page heading*/}
        <h2>Page {pageNumber + 1}:</h2>

        {/*Image input area*/}
        <Box pb={3}>
          {imgUrl ? (
            <img alt="img" src={pageData.url} className="img-input" />
          ) : (
            <>
              <Box className="img-input-box">
                <input
                  type="file"
                  label="Add image"
                  onChange={handleImgChange}
                />
                <AddPhotoAlternateIcon color="secondary" fontSize="large" />
                <p>Add image</p>
              </Box>
            </>
          )}
        </Box>

        {/*Text display*/}
        <Box fontFamily={font} pb={3}>
            <h1>{pageData.description}</h1>
        </Box>

        {/*Text input*/}
        <TextField
          label="Page Text"
          value={pageData.description || " "}
          onChange={(e) => newPageData(pageNumber, "description", e.target.value)}
          //onChange={handleTextChange}
          multiline
        />
      </Box>
    </div>
  );
};

//Printing page
const PrintingPage = ({
  pageData,
  title,
  titleImg,
  titleImgWidth,
  titleImgHeight,
}) => {
  const [printingOption, setPrintingOption] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const handlePrintButtonClick = async () => {
    try {
      if (!title || !titleImg || pageData.length === 0) {
        alert("Missing necessary data for printing.");
        return;
      }

      const pdfstory = new jsPDF({ format: "a4", orientation: "landscape" });

      // DEBUG PASS
      console.log(title);
      console.log(titleImg);
      console.log(pageData);

      // Title page only
      let enctitleImg = await encodeBase64(titleImg);

      var pageWidth = pdfstory.internal.pageSize.getWidth();
      var pageHeight = pdfstory.internal.pageSize.getHeight();

      const textWidth = pdfstory.getTextWidth(title);
      const textX = (pageWidth - textWidth) / 2;

      const imgwidth = 100;
      const imgheight = (titleImgHeight / titleImgWidth) * imgwidth;
      const imgX = (pageWidth - imgwidth) / 2;
      const imgY = (pageHeight - imgheight) / 2;

      console.log(imgheight);

      pdfstory.setFontSize(20);

      // Dynamic positioning of text based of position of image
      // Title page title goes on top of title image
      pdfstory.text(title, textX, imgheight - 110);

      // this only allow for base64 encoded images
      pdfstory.addImage(enctitleImg, "JPEG", imgX, imgY, imgwidth, imgheight);

      // handle for each story
      for (var page of pageData) {
        // create a new page for each story for pdf
        pdfstory.addPage();
        let encstoryImg = await encodeBase64(page.img);

        var pageWidth = pdfstory.internal.pageSize.getWidth();
        var pageHeight = pdfstory.internal.pageSize.getHeight();

        const imgwidth = 100;
        const imgheight = (page.imgheight / page.imgwidth) * imgwidth;
        const imgX = (pageWidth - imgwidth) / 2;
        const imgY = (pageHeight - imgheight) / 2;

        //const encfontpath = '../../../../../assets/fonts/Caprasimo/Caprasimo-Regular.txt';
        //const cencfontpath = encfontpath.replace(/[=+/\\r\\n]/g,'');

        //pdfstory.addFileToVFS(cencfontpath, 'Caprasimo');
        //pdfstory.addFont('Caprasimo.ttf', 'Caprasimo', 'normal');
        //pdfstory.setFont('Caprasimo');

        // this only allow for base64 encoded images
        pdfstory.addImage(encstoryImg, "JPEG", imgX, imgY, imgwidth, imgheight);

        //pdfstory.setFont(page.font) // Set font properly for jsPDF
        pdfstory.setFontSize(20);
        const textWidth = pdfstory.getTextWidth(page.text);
        const textX = (pageWidth - textWidth) / 2;

        // Dynamic positioning of text based of position of image
        // Story page text goes below of Story image
        pdfstory.text(page.text, textX, imgheight + 75);
      }

      switch (printingOption) {
        case "download-PDF":
          //Download PDF

          pdfstory.save(`${title}.pdf`);

          break;
        case "send-printer":
          //Send to printer
          var pdfData = pdfstory.output("bloburl");

          const printerwin = window.open(pdfData);
          if (printerwin) {
            printerwin.print();
          }

          break;
        default:
        //No option selected
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      alert("An error occurred while trying to print. Please try again.");
    }
  };

  return (
    <div className="SavedEditMainDiv">
      <Box pt={3}>
        <h1>Select Printing Option:</h1>
        {/*Printing options */}
        <FormControl>
          <FormLabel id="printing-options-label"></FormLabel>
          <RadioGroup
            column
            aria-labelledby="printing-options-label"
            onChange={(e) => {
              setPrintingOption(e.target.value);
              setIsDisabled(false);
            }}
            value={printingOption || null}
          >
            <FormControlLabel
              value="download-PDF"
              label="Download PDF"
              control={<Radio />}
            />

            <FormControlLabel
              value="send-printer"
              label="Send to Printer"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
      </Box>

      {/*Printing Button */}
      <Box pt={3}>
        <Button
          variant="contained"
          style={{
            fontSize: "medium",
            marginRight: "8px",
            borderRadius: "4px",
            width: "100px",
          }}
          sx={{
            fontWeight: "bold",
          }}
          disabled={isDisabled}
          onClick={handlePrintButtonClick}
        >
          Print
        </Button>
      </Box>
    </div>
  );
};

const SavedBookSettings = () => {
  const location = useLocation();
  const story = location.state?.story;

  const [isError, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const [totalPages, setTotalPages] = useState(story.pageCount || 0); // total number of pages
  const [pages, setPages] = useState(story.pages || [{ text: "", img: null }]); // default page data

  const [currentPage, setCurrentPage] = useState(0); // start with page 0

  // image dimensions
  const [imgwidth, setimgwidth] = useState(0);
  const [imgheight, setimgheight] = useState(0);

  const [titlePageImg, setTitlePageImg] = useState(null);
  const [title, setTitle] = useState(story.titleStoryPage.description || "");
  const [font, setFont] = useState(story.fontType || "");

  const imgUrl = titlePageImg ? URL.createObjectURL(titlePageImg) : null;
  const handleTitlePageImg = (e) => {
    setTitlePageImg(e.target.files[0]);
  };

  /* 
  TODO: 
  * Save json to database rather than local 
  -> send to backend (must be in correct backend format)
  */

  const updateToDBFilebase = async () => {
    const book = {
      title: title || "",
      titlefilename: titlePageImg ? titlePageImg.name : null,
      Font: font || "",
      titlefileext:
        titlePageImg && titlePageImg.name
          ? titlePageImg.name.split(".")[1]
          : null,
      EncodedData: titlePageImg ? await encodeBase64(titlePageImg) : null, // This is the image definition for titlepage
      pages: await Promise.all(
        // bug --> for looping Promise.all() operates iteratively/looping
        pages.map(async (page, index) => ({
          imgId: `img-${index}`,
          text: page.description, // changed to match JSON structure pulled from backend
          imgname: page.img ? page.img.name : null,
          imgext:
            page.img && page.img.name ? page.img.name.split(".")[1] : null,
          EncodedData: page.img ? await encodeBase64(page.img) : null,
        }))
      ),
    };

    /*
    if (!titlePageImg || !titlePageImg.name) {
      alert("An error occurred while trying to save. Please try again.");
      return;
    }
    */

    const usertoken = getsessionToken();
    //console.log(usertoken);
    localStorage.setItem("bookData", JSON.stringify(book));

    // console.log(titlePageImg);
    // console.log(imgwidth);
    // console.log(imgheight);

    console.log(JSON.stringify(book));
    console.log(pages);

    // TO-DO loop through every single images and upload (Filebase) DONE
    // TO-DO handle async and make it more efficient

    // TO-DO save story to DB
    const uploadstory = async () => {
      await Axios.post("http://localhost:5118/api/Story/Upload", story, {
        headers: {
          Authorization: `bearer ${usertoken}`,
          "Content-Type": "application/json;",
        },
      })
        .then((response) => {
          // Debug statements
          console.log(response.data);
          // alert("Save successfull!");
        })
        .catch((err) => {
          console.log(err);
          alert("Upload Failed");
          throw err;
        });
    };

    const deletestory = async (storyid) => {
       await Axios.delete(`http://localhost:5118/api/Story/Delete?storyId=${storyid}`, 
       {
         headers: 
         {
          Authorization: `bearer ${usertoken}`,
          "Content-Type": "application/json;",
         }
       }
       )
       .then((response) => {
        console.log(response.data);
       })
       .catch((err) => {
        console.log(err);
        throw err;
      });
    }

    try {

      var storydescarr = [];
      var existingJSONdata = localStorage.getItem(`${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`);
      var existingdata = JSON.parse(existingJSONdata);
      // console.log(JSON.parse(existingJSONdata));
      // console.log(story);

      console.log(story.id);
      console.log(story.fontType);
      await deletestory(story.id);
      console.log(JSON.stringify(story))

      console.log(title);
      // Extract text from book object to update
      console.log(book.pages);

      // Assign updated title
      story.titleStoryPage.description = title;
      // Update font
      story.fontType = font;

      var storyarr = story.pages;

      console.log(JSON.stringify(storyarr));

      for (let i = 0; i < storyarr.length; i++)
      {
          //Assign updated story description
          storyarr[i].description = book.pages[i].text;
          storydescarr.push(book.pages[i].text);
          delete storyarr[i].url;
      }

      delete story.id;
      delete story.titleStoryPage.url;
      console.log(JSON.stringify(story));

      // Update to `${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`
      // console.log(existingdata);
      
      
      for (let i = 0; i < existingdata.length; i++)
      {
          console.log(existingdata[i]);
          
          // check if selected stories exists in localstorage JSON array
          // then update accordingly
          if(existingdata[i].titleStoryPage.imageId === story.titleStoryPage.imageId)
          {
            existingdata[i].titleStoryPage.description = title;
            existingdata[i].fontType = font;

            console.log(existingdata[i].pages);
            console.log(existingdata[i].pages.length);
            // console.log(pages);
            console.log("We found a match in JSON array");
            
            for (let j = 0; j < existingdata[i].pages.length; j++)
            {
               existingdata[i].pages[j].description = storydescarr[j]
               // pages[j].description = storydescarr[j];
            }
          }
          else
          {
            // Move onto next iteration if story not found at current index
            continue;
          }
      }
      

      console.log(JSON.stringify(existingdata));

      // Testing
      // localStorage.setItem("test", JSON.stringify(existingdata));

      // Update changes to orderstorydata for User
      localStorage.setItem(`${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`,JSON.stringify(existingdata));

      // console.log(imgidarr);
      await uploadstory();

      alert("Update successful");
    } catch (e) {
      console.error(e);
    }
  };

  const newPageData = (i, key, value) => {
    const newPages = [...pages]; // copy
    newPages[i] = { ...newPages[i], [key]: value }; //Updating the pages key (img/text) at pos i to the new value
    setPages(newPages); // set the value of pages to the new one
  };

  const setNumPages = (e) => {
    const i = parseInt(e.target.value);
    //Max number of pages is between 0 and 20
    if (i <= 0 || i > 20 || e.target.value === "") {
      setError(true);
      setHelperText("Please enter a valid number of pages");
    } else {
      setError(false);
      setHelperText("");
      setTotalPages(i);
      setPages(new Array(i).fill({ text: "", img: null })); //init the pages
    }
  };

  return (
    <div className="SavedEditMainDiv">
      <Header />
      <div className="mainDiv-CreateBoo">
        <Grid container spacing={6}>
          {/*If the page is not on 0 replace <> </> block */}
          {currentPage === 0 ? (
            <>
              {/*Everything under this <Grid> tag is related to the left-hand-side of the page */}
              <Grid item xs={12} md={6}>
                {/*Title page section*/}
                <Box ml={6} pt={1.25}>
                  <h1>Title Page:</h1>

                  {/*Image input section */}
                  <Box pb={3}>
                    {imgUrl ? (
                      <img alt="img" src={imgUrl} className="img-input" />
                    ) : (
                      <>
                        <Box className="img-input-box">
                          <input
                            type="file"
                            label="Add image"
                            onChange={handleTitlePageImg}
                          />
                          <AddPhotoAlternateIcon
                            color="secondary"
                            fontSize="large"
                          />
                          <p>Add image</p>
                        </Box>
                      </>
                    )}
                  </Box>

                  {/*Book title section */}
                  <TextField
                    label="Enter Book Title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Box>

                {/*Number of pages section */}
                <Box ml={6} pt={2}>
                  <TextField
                    type="number"
                    variant="standard"
                    helperText={helperText}
                    error={isError}
                    value={totalPages || null}
                    onChange={setNumPages}
                    label="Number of pages:"
                  />
                </Box>

                {/*Font-options section*/}
                <Box ml={6} pt={2}>
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

                <Box
                  mt={3}
                  padding={3}
                  left={6}
                  bottom={56}
                  sx={{ position: "fixed" }}
                >
                  <div className="b1-backNavButton">
                    <NavigationButton
                      path="/parent/story-library/SavedStories"
                      name="Back"
                      variant="contained"
                      style={{ fontSize: "medium", width: "100px" }}
                      sx={{
                        fontWeight: "bold",
                      }}
                    />
                  </div>
                </Box>
              </Grid>
            </>
          ) : (
            <Grid item xs={12} md={6}>
              <Box ml={6}>
                {/*Will replace the title page and selection with the first page*/}
                <Page
                  pageNumber={currentPage - 1}
                  pageData={pages[currentPage - 1]}
                  newPageData={newPageData}
                  font={font}
                />
              </Box>
            </Grid>
          )}

          {/*Everything under this <Grid> tag is related to the right-hand-side of the page */}
          <Grid item xs={12} md={6}>
            {/* If the current page < Total number of pages keep showing and updating <Page>, 
          otherwise show the printing page (as there are no more pages) */}
            {currentPage < totalPages ? (
              <Page
                pageNumber={currentPage}
                pageData={pages[currentPage]}
                newPageData={newPageData}
                font={font}
              />
            ) : currentPage === 0 ? null : (
              <div>
                <Box pt={3}>
                  <PrintingPage
                    pageData={pages}
                    totalPages={totalPages}
                    title={title}
                    titleImg={titlePageImg}
                    titleImgWidth={imgwidth}
                    titleImgHeight={imgheight}
                  />
                  <Box pt={1}>
                    <Button
                      variant="contained"
                      style={{
                        fontSize: "medium",
                        marginRight: "8px",
                        borderRadius: "4px",
                        width: "100px",
                      }}
                      sx={{
                        fontWeight: "bold",
                      }}
                      onClick={updateToDBFilebase}
                    >
                      Update
                    </Button>
                  </Box>
                </Box>
              </div>
            )}
          </Grid>

          <Box
            mt={3}
            padding={3}
            right={6}
            bottom={56}
            sx={{ position: "fixed" }}
          >
            <ButtonGroup>
              {/*Back page button*/}
              <Button
                variant="contained"
                style={{
                  fontSize: "medium",
                  marginRight: "8px",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
                disabled={currentPage <= 0} // disable button on condition
              >
                Back
              </Button>

              {/*Next page button*/}
              <Button
                variant="contained"
                style={{
                  fontSize: "medium",
                  borderRadius: "4px",
                  width: "100px",
                }}
                sx={{
                  fontWeight: "bold",
                }}
                onClick={() => {
                  if (pages === 1) {
                    //If there is only one page specified do nothing
                  } else if (currentPage <= totalPages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                disabled={currentPage >= totalPages}
              >
                Next
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

export default SavedBookSettings;
