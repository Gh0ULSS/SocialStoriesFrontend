// This is the book creation page
// Accessed through http://localhost:3000/parent/create-story/create-book/
import React, { useState, useRef } from "react";
import {
  Header,
  Footer,
  NavigationButton,
  encodeBase64,
} from "../../../../../global_components";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./CreateBook.css";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { getsessionToken } from "../../../../../global_components/AuthSession/authsession";
import { jsPDF } from "jspdf";
import Axios from "axios";

import KalamaFontBase64 from "../../../../../assets/fonts/Kalam/KalamFontBase64";
import CougetteFontBase64 from "../../../../../assets/fonts/Courgette/CourgetteFontBase64";
import ItimFontBase64 from "../../../../../assets/fonts/Itim/ItimFontBase64";
import HandleeFontBase64 from "../../../../../assets/fonts/Handlee/HandleeFontBase64";

//Pages creation page
const Page = ({ pageNumber, pageData, newPageData, font }) => {
  const imgUrl = pageData.img ? URL.createObjectURL(pageData.img) : null;

  const handleImgChange = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return; // Ensure a file was actually selected

    const storyImg = new Image();
    storyImg.src = URL.createObjectURL(imgFile);

    storyImg.onload = () => {
      // Update the imgwidth and imgheight in the pageData state
      newPageData(pageNumber, "imgwidth", storyImg.width);
      newPageData(pageNumber, "imgheight", storyImg.height);

      // Update the image in the pageData state
      newPageData(pageNumber, "img", imgFile);
    };
  };

  return (
    <div>
      <Box pt={3}>
        {/*Page heading*/}
        <h2>Page {pageNumber + 1}:</h2>

        {/*Image input area*/}
        <Box pb={3} position="relative">
          <input
            type="file"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200px",
              height: "200px",
              opacity: 0,
              zIndex: 2,
              cursor: "pointer",
            }}
            label={imgUrl ? "Change image" : "Add image"}
            onChange={handleImgChange}
            accept=".png, .jpg, .jpeg"
          />

          {imgUrl ? (
            <img alt="img" src={imgUrl} className="img-input" />
          ) : (
            <Box className="img-input-box">
              <AddPhotoAlternateIcon color="secondary" fontSize="large" />
              <p>Add image</p>
            </Box>
          )}
        </Box>

        {/*Text display*/}
        <Box fontFamily={font} pb={3}>
          <h1>{pageData.text}</h1>
        </Box>

        {/*Text input*/}
        <TextField
          label="Page Text"
          value={pageData.text || " "}
          onChange={(e) =>
            newPageData(
              pageNumber,
              "text",
              e.target.value,
              localStorage.getItem("imgwidth"),
              localStorage.getItem("imgheight"),
              font
            )
          }
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
  titleImgHeight,
  titleImgWidth,
  font,
}) => {
  const [printingOption, setPrintingOption] = useState();
  const [isDisabled, setIsDisabled] = useState(true);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const safeEncodeBase64 = async (image) => {
    if (!image || (!(image instanceof Blob) && !(image instanceof File))) {
      return null;
    }
    return await encodeBase64(image);
  };

  const handlePrintButtonClick = async () => {
    if (!title) {
      setSnackbarMessage("Please provide a title before printing.");
      setOpenSnackbar(true);
      return;
    }
    if (!titleImg) {
      setSnackbarMessage("Please provide a title image before printing.");
      setOpenSnackbar(true);
      return;
    }
    for (var page of pageData) {
      if (!page.img) {
        setSnackbarMessage(
          "Please ensure all pages have images before printing."
        );
        setOpenSnackbar(true);
        return;
      }
    }
    if (!font) {
      setSnackbarMessage("Please select a font before printing");
      setOpenSnackbar(true);
      return;
    }

    //Registering the fonts for JsPDF.
    const fonts = {
      Kalam: { data: KalamaFontBase64, filename: "Kalam.ttf" },
      Courgette: { data: CougetteFontBase64, filename: "Courgette.ttf" },
      Itim: { data: ItimFontBase64, filename: "Itim.ttf" },
      Handlee: { data: HandleeFontBase64, filename: "Handlee.ttf" },
    };

    const setupFontForJsPDF = async (fontName) => {
      if (fonts[fontName]) {
        const fontDetails = fonts[fontName];
        pdfstory.addFileToVFS(fontDetails.filename, fontDetails.data);
        pdfstory.addFont(fontDetails.filename, fontName, "normal");
      } else {
        console.error(`Font ${fontName} is not registered.`);
      }
    };

    const pdfstory = new jsPDF({ format: "a4", orientation: "landscape" });
    // Set up fonts before using them:
    await setupFontForJsPDF("Kalam");
    await setupFontForJsPDF("Courgette");
    await setupFontForJsPDF("Itim");
    await setupFontForJsPDF("Handlee");

    // Title page
    let pageWidth = pdfstory.internal.pageSize.getWidth();
    let pageHeight = pdfstory.internal.pageSize.getHeight();

    // Constants for the margins and space between elements
    const topMargin = pageHeight * 0.05; // 5% of page height
    const textHeight = 40; // estimated text height, adjust as needed
    const spaceBetweenImageAndText = 25; // space between bottom of the image and the text

    // Constants for the title page margins and space between elements
    const topMarginTitle = 25;
    const spaceBetweenTitleAndText = 25; // space between bottom of the image and the text

    pdfstory.setFontSize(40);
    pdfstory.setFont(font);

    const textWidth = pdfstory.getTextWidth(title);
    const textX = (pageWidth - textWidth) / 2;
    const textY = topMargin + textHeight;

    pdfstory.text(title, textX, textY);

    if (titleImg) {
      let enctitleImg = await safeEncodeBase64(titleImg);

      // Calculate available space for image after accounting for top margin, title text, and space between title and image
      const availableImageHeight =
        pageHeight - topMarginTitle - textHeight - spaceBetweenTitleAndText;

      // Calculate image dimensions proportionally
      let imgRatio = titleImgHeight / titleImgWidth;
      let imgwidth = Math.min(pageWidth * 0.8, availableImageHeight / imgRatio); // 80% of page width or available image height
      let imgheight = imgwidth * imgRatio;

      const imgX = (pageWidth - imgwidth) / 2;
      const imgY = textY + spaceBetweenTitleAndText;

      pdfstory.addImage(enctitleImg, "JPEG", imgX, imgY, imgwidth, imgheight);
    }

    // Book pages
    for (var page of pageData) {
      if (!page.width || page.imgheight || page.imgwidth || page.imgheight) {
        page.imgwidth = titleImgWidth;
        page.imgheight = titleImgHeight;
      }
      pdfstory.addPage();
      let encstoryImg = await safeEncodeBase64(page.img);

      // Calculate available space for image after accounting for top margin, text, and space between image and text
      const availableImageHeight =
        pageHeight - topMargin - textHeight - spaceBetweenImageAndText;

      // Calculate image dimensions proportionally
      let imgRatio = page.imgheight / page.imgwidth;
      let imgwidth = Math.min(pageWidth * 0.8, availableImageHeight / imgRatio); // 80% of page width or available image height
      let imgheight = imgwidth * imgRatio;

      const imgX = (pageWidth - imgwidth) / 2;
      const imgY = topMargin;

      pdfstory.addImage(encstoryImg, "JPEG", imgX, imgY, imgwidth, imgheight);
      //pdfstory.addImage(encstoryImg, "JPEG", 10, 10, 100, 100);

      pdfstory.setFontSize(30);
      const textWidth = pdfstory.getTextWidth(page.text);
      const textX = (pageWidth - textWidth) / 2;
      const textYPosition = imgY + imgheight + spaceBetweenImageAndText;
      pdfstory.text(page.text, textX, textYPosition);
    }

    switch (printingOption) {
      case "download-PDF":
        pdfstory.save(`${title}.pdf`);
        break;
      case "send-printer":
        var pdfData = pdfstory.output("bloburl");
        const printerwin = window.open(pdfData);
        if (printerwin) {
          printerwin.print();
        }
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Box pt={3}>
        <h1>Select printing option</h1>
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

const CreateBook = () => {
  const [isError, setError] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [totalPages, setTotalPages] = useState(0); // total number of pages
  const [pages, setPages] = useState([
    { text: "", img: null, imgwidth: 0, imgheight: 0 },
  ]); // default page data
  const [currentPage, setCurrentPage] = useState(0); // start with page 0

  // image dimensions
  const [imgwidth, setimgwidth] = useState(0);
  const [imgheight, setimgheight] = useState(0);

  const [titlePageImg, setTitlePageImg] = useState(null);
  const [title, setTitle] = useState("");
  const [font, setFont] = useState("");

  const imgUrl = titlePageImg ? URL.createObjectURL(titlePageImg) : null;

  const handleTitlePageImg = (e) => {
    if (e.target.files.length === 0) {
      return; // Exit the function if no file was chosen
    }

    setTitlePageImg(e.target.files[0]);
    var imgfile = e.target.files[0];
    if (!imgfile) return;

    // Get width and height of image
    const storyimg = new Image();
    storyimg.onload = () => {
      //console.log(storyimg.width);
      //console.log(storyimg.height);
      setimgwidth(storyimg.width);
      setimgheight(storyimg.height);
    };

    storyimg.src = URL.createObjectURL(imgfile);
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  /* 
  TODO: 
  * Save json to database rather than local 
  -> send to backend (must be in correct backend format)
  */

  const saveToDBFilebase = async () => {
    const book = {
      title: title || "",
      titlefilename: titlePageImg ? titlePageImg.name : null,
      titlefileext:
        titlePageImg && titlePageImg.name
          ? titlePageImg.name.split(".")[1]
          : null,
      EncodedData: titlePageImg ? await encodeBase64(titlePageImg) : null, // This is the image definition for titlepage
      pages: await Promise.all(
        // bug --> for looping Promise.all() operates iteratively/looping
        pages.map(async (page, index) => ({
          imgId: `img-${index}`,
          text: page.text,
          imgname: page.img ? page.img.name : null,
          imgext:
            page.img && page.img.name ? page.img.name.split(".")[1] : null,
          EncodedData: page.img ? await encodeBase64(page.img) : null,
        }))
      ),
    };

    if (!titlePageImg || !titlePageImg.name) {
      //alert("An error occurred while trying to save. Please try again.");
      setSnackbarMessage(
        "An error occurred while trying to save. Please try again."
      );
      setOpenSnackbar(true);
      return;
    }

    const usertoken = getsessionToken();
    //console.log(usertoken);
    //localStorage.setItem("bookData", JSON.stringify(book));

    // console.log(titlePageImg);
    // console.log(imgwidth);
    // console.log(imgheight);

    // console.log(JSON.stringify(book));

    // TO-DO loop through every single images and upload (Filebase) DONE
    // TO-DO handle async and make it more efficient
    let imgidarr = [];

    var story = {}; // story object will be defined at the later part

    const uploadimg = async (ext, encdata) => {
      await Axios.post(
        "http://localhost:5118/api/File/Upload",
        {
          FileExtension: ext,
          EncodedData: encdata,
        },
        {
          headers: {
            Authorization: `bearer ${usertoken}`,
            "Content-Type": "application/json;",
          },
        }
      )
        .then((response) => {
          // VERY VERY IMPORTANT --> Get the response here and DON'T LOSE the reference
          // Lost the reference here :(

          // Test pass
          // console.log(response.data.message[1]);
          imgidarr.push(response.data.message[1]);
          // Debug statements
          // console.log(response.data);
          // alert("Save successfull!");
        })
        .catch((err) => {
          console.log(err);
          //alert("Upload Failed");
          setSnackbarMessage("Upload Failed");
          setOpenSnackbar(true);
          throw err;
        });
    };

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
          //alert("Upload Failed");
          setSnackbarMessage("Upload Failed");
          setOpenSnackbar(true);
          throw err;
        });
    };

    try {
      await uploadimg(book.titlefileext, book.EncodedData);

      let storypages = book.pages;
      // Story pages
      for (var i = 0; i < storypages.length; i++) {
        await uploadimg(storypages[i].imgext, storypages[i].EncodedData);
      }

      // DB
      story = {
        titleStoryPage: {
          imageId: imgidarr[0],
          description: title,
          imageExtension: titlePageImg.name.split(".")[1],
        },
        pageCount: totalPages,
        pages: await Promise.all(
          pages.map(async (page, index) => ({
            // bug --> for looping Promise.all() operates iteratively/looping
            imageId: imgidarr[index + 1], // EXCLUDE titlepageid which is the first one with index [0]
            description: page.text,
            imageExtension: page.img.name.split(".")[1],
          }))
        ),
        fontType: font,
      };

      console.log(JSON.stringify(story));
      // Find a way to add counter here
      // Same user can create more than one custom stories
      var createdcuststoriesJSON = localStorage.getItem(
        `${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`
      );
      console.log(createdcuststoriesJSON);
      var createdcuststories = [];

      if (createdcuststoriesJSON !== null) {
        createdcuststories = JSON.parse(createdcuststoriesJSON);
      }

      createdcuststories.push(story);

      localStorage.setItem(
        `${localStorage.getItem("CurrentEmailPrefix")}Orderedstorydata`,
        JSON.stringify(createdcuststories)
      );

      console.log(imgidarr);
      await uploadstory();

      alert("Save successful");
    } catch (e) {
      console.error(e);
    }
  };

  const newPageData = (i, key, value, imgwidth, imgheight, font) => {
    const newPages = [...pages]; // copy
    newPages[i] = { ...newPages[i], [key]: value, imgwidth, imgheight, font }; //Updating the pages key (img/text) at pos i to the new value
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
      setPages(
        new Array(i).fill({
          text: "",
          img: null,
          imgwidth: 0,
          imgheight: 0,
          font: "",
        })
      ); //init the pages
    }
  };

  return (
    <div>
      <Header />
      <div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="error">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>

      <div className="mainDiv-CreateBook">
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
                  <Box pb={3} position="relative">
                    <input
                      type="file"
                      label={imgUrl ? "Change image" : "Add image"}
                      onChange={handleTitlePageImg}
                      accept=".png, .jpg, .jpeg"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "200px",
                        height: "200px",
                        opacity: 0,
                        zIndex: 2,
                        cursor: "pointer",
                      }}
                    />

                    {imgUrl ? (
                      <img alt="img" src={imgUrl} className="img-input" />
                    ) : (
                      <Box className="img-input-box">
                        <AddPhotoAlternateIcon
                          color="secondary"
                          fontSize="large"
                        />
                        <p>Add image</p>
                      </Box>
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

                      {/* 
                      <FormControlLabel
                        value="Caprasimo"
                        label={
                          <Typography sx={{ fontFamily: "Caprasimo" }}>
                            Caprasimo
                          </Typography>
                        }
                        control={<Radio />}
                      />

                      <FormControlLabel
                        value="Lilita One"
                        label={
                          <Typography sx={{ fontFamily: "Lilita One" }}>
                            Lilita One
                          </Typography>
                        }
                        control={<Radio />}
                      />

                      <FormControlLabel
                        value="Luckiest Guy"
                        label={
                          <Typography sx={{ fontFamily: "Luckiest Guy" }}>
                            Luckiest Guy
                          </Typography>
                        }
                        control={<Radio />}
                      />
                      */}
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
                      path="/parent/create-story/"
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
                    font={font}
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
                      onClick={saveToDBFilebase}
                    >
                      Save
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

export default CreateBook;
