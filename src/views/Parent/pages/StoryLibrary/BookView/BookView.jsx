/* eslint-disable jsx-a11y/img-redundant-alt */
// This is the book view page.
// This page will be the page that allows users to  navigate through the social story
// Accessed through http://localhost:3000/parent/story-library/bookview, see Routing.js for further
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect, useRef } from "react";
import {
  PDFDownloadLink,
  Font,
  Document,
  Page,
  Image,
  Text,
  View,
} from "@react-pdf/renderer";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useLocation } from "react-router-dom";
import { Header, Footer, decodeBase64 } from "../../../../../global_components";
import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./BookView.css";

import KalamaFont from "../../../../../assets/fonts/Kalam/Kalam-Regular.ttf";
import CougetteFont from "../../../../../assets/fonts/Courgette/Courgette-Regular.ttf";
import ItimFont from "../../../../../assets/fonts/Itim/Itim-Regular.ttf";
import HandleeFont from "../../../../../assets/fonts/Handlee/Handlee-Regular.ttf";

Font.register({
  family: "Kalam",
  src: KalamaFont,
});
Font.register({
  family: "Courgette",
  src: CougetteFont,
});

Font.register({
  family: "Itim",
  src: ItimFont,
});

Font.register({
  family: "Handlee",
  src: HandleeFont,
});

const BookView = () => {
  const location = useLocation();
  const story = location.state?.story;
  const font = location.state?.font;

  const [bookData, setBookData] = useState(story || null);
  const [currentPage, setCurrentPage] = useState(0);
  const [allPagesPDF, setAllPagesPDF] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedTexts, setEditedTexts] = useState(() => {
    return bookData ? [...bookData.pageDescriptions] : [];
  });

  useEffect(() => {
    if (currentPage === bookData.pageDescriptions.length) {
      handleGeneratePDF();
    }
  }, [currentPage, bookData]);

  const toggleEditing = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  const handleTextChange = (index, text) => {
    const updatedText = [...editedTexts];
    updatedText[index] = text;
    setEditedTexts(updatedText);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let updatedImages = bookData.pageImages ? [...bookData.pageImages] : [];
        updatedImages[index] = e.target.result;
        setBookData({ ...bookData, pageImages: updatedImages });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBookData({ ...bookData, titleImg: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const inputUploadRef = useRef(null);
  const handleFileReUploadButtonClick = () => {
    inputUploadRef.current.click();
  };

  const handleGeneratePDF = () => {
    // Create a PDF containing all pages of the book
    const bookPDF = (
      <Document>
        {/* Title Page */}
        <Page size="A4" orientation="landscape">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              padding: "20px",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                marginBottom: "20px",
                fontFamily: font,
              }}
            >
              {bookData.title}
            </Text>
            {bookData.titleImg ? (
              <Image
                src={bookData.titleImg}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            ) : null}
          </View>
        </Page>

        {/* Book Pages */}
        {bookData && editedTexts
          ? editedTexts.map((text, index) => (
              <Page key={index} size="A4" orientation="landscape">
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    padding: "20px",
                    flexDirection: "column",
                  }}
                >
                  {bookData.pageImages && bookData.pageImages[index] ? (
                    <Image
                      src={bookData.pageImages[index]}
                      style={{
                        width: "70%",
                        height: "70%",
                        objectFit: "contain",
                        marginBottom: "20px", // provide a margin for consistency
                      }}
                    />
                  ) : null}
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 30,
                      marginTop: "20px",
                      fontFamily: font,
                    }}
                  >
                    {text}
                  </Text>
                </View>
              </Page>
            ))
          : null}
      </Document>
    );

    setAllPagesPDF(bookPDF);
  };

  if (!bookData) {
    return <div>No book data found</div>;
  }

  return (
    <div className="bookViewMain">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className="Mainbox"
      >
        <div className="cardBook">
          {/*Tilte page*/}
          {currentPage === 0 ? (
            <>
              <div style={{ fontFamily: font, fontSize: "23px" }}>
                <h1>{bookData.title}</h1>
              </div>
              {bookData.titleImg ? (
                <>
                  <img
                    src={bookData.titleImg}
                    alt="Title page image"
                    style={{
                      width: "40%",
                      height: "40%",
                      marginTop: "0%",
                      marginBottom: "0%",
                    }}
                  />
                  {editing && (
                    <div>
                      <br />

                      <input
                        ref={inputUploadRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleTitleImageUpload(e)}
                      />
                      <Button
                        variant="contained"
                        onClick={handleFileReUploadButtonClick}
                        style={{
                          fontSize: "medium",
                          borderRadius: "4px",
                        }}
                        sx={{
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        <EditIcon /> Upload Image
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div>
                  <div className="img-input-box-view-container">
                    <div className="img-input-box-view">
                      <input
                        type="file"
                        label="Tile page image"
                        accept="image/*"
                        onChange={(e) => handleTitleImageUpload(e)}
                      />
                      <AddPhotoAlternateIcon
                        color="secondary"
                        fontSize="large"
                      />
                      <p>Add title page image</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>
              {/*Book pages*/}
              {bookData.pageImages && bookData.pageImages[currentPage - 1] ? (
                <>
                  <img
                    src={bookData.pageImages[currentPage - 1]}
                    alt={`Illustration for page ${currentPage}`}
                    style={{
                      width: "40%",
                      height: "40%",
                      marginTop: "3%",
                      marginBottom: "0%",
                    }}
                  />
                  {editing && (
                    <div>
                      <br />
                      <input
                        ref={inputUploadRef}
                        type="file"
                        accept="image/*"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => handleImageUpload(currentPage - 1, e)}
                      />

                      <Button
                        variant="contained"
                        onClick={handleFileReUploadButtonClick}
                        style={{
                          fontSize: "medium",
                          borderRadius: "4px",
                        }}
                        sx={{
                          fontWeight: "bold",
                          fontSize: "15px",
                        }}
                      >
                        <EditIcon /> Upload Image
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="img-input-box-view-container">
                  <div className="img-input-box-view">
                    <input
                      type="file"
                      label={`Add page: ${currentPage} image`}
                      accept="image/*"
                      onChange={(e) => handleImageUpload(currentPage - 1, e)}
                    />
                    <AddPhotoAlternateIcon color="secondary" fontSize="large" />
                    <p>{`Add page ${currentPage} image`}</p>
                  </div>
                </div>
              )}
              <Box fontFamily={font} className="textCard">
                <p style={{ fontSize: 30 }} className="textCard">
                  {editing ? (
                    <textarea
                      onChange={(e) =>
                        handleTextChange(currentPage - 1, e.target.value)
                      }
                      value={editedTexts[currentPage - 1]}
                      style={{
                        color: "blue",
                        whiteSpace: "pre-wrap",
                        border: "none",
                        resize: "none",
                        background: "transparent",
                        outline: "none",
                        width: "100%",
                        height: "100%",
                        fontSize: "inherit",
                        textAlign: "center",
                      }}
                    />
                  ) : (
                    editedTexts[currentPage - 1]
                  )}
                </p>
              </Box>
            </div>
          )}
        </div>
      </Box>

      <div className="container-button">
        <div className="group-button">
          <Button
            color="secondary"
            variant="contained"
            style={{
              fontSize: "medium",
              marginRight: "8px",
              borderRadius: "4px",
              width: "100px",
            }}
            sx={{ fontWeight: "bold" }}
            disabled={currentPage <= 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Back
          </Button>

          <Button
            onClick={toggleEditing}
            variant="text"
            style={{
              fontSize: "medium",
              marginRight: "8px",
              borderRadius: "4px",
              width: "100px",
            }}
            sx={{ fontWeight: "bold" }}
          >
            {editing ? "Save" : "Edit"}
          </Button>

          <Button
            variant="contained"
            style={{
              fontSize: "medium",
              borderRadius: "4px",
              width: "100px",
            }}
            sx={{ fontWeight: "bold" }}
            disabled={currentPage >= bookData.pageDescriptions.length}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      <div className="downloadPDF">
        <div className="download-pdfs">
          <PDFDownloadLink
            document={
              <Document>
                {/* Title Page */}
                <Page size="A4" orientation="landscape">
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                      boxSizing: "border-box",
                      padding: "20px",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 40,
                        marginBottom: "20px",
                        fontFamily: font,
                      }}
                    >
                      {bookData.title}
                    </Text>
                    {bookData.titleImg ? (
                      <Image
                        src={bookData.titleImg}
                        style={{
                          width: "70%",
                          height: "70%",
                          objectFit: "contain",
                        }}
                      />
                    ) : null}
                  </View>
                </Page>
                {/* Book Pages */}
                {bookData && editedTexts
                  ? editedTexts.map((text, index) => (
                      <Page key={index} size="A4" orientation="landscape">
                        <View
                          style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            boxSizing: "border-box",
                            padding: "20px",
                            flexDirection: "column",
                          }}
                        >
                          {bookData.pageImages && bookData.pageImages[index] ? (
                            <Image
                              src={bookData.pageImages[index]}
                              style={{
                                width: "70%",
                                height: "70%",
                                objectFit: "contain",
                                marginBottom: "20px", // provide a margin for consistency
                              }}
                            />
                          ) : null}
                          <Text
                            style={{
                              textAlign: "center",
                              fontSize: 30,
                              marginTop: "20px",
                              fontFamily: font,
                            }}
                          >
                            {text}
                          </Text>
                        </View>
                      </Page>
                    ))
                  : null}
              </Document>
            }
            fileName="allcards.pdf"
          >
            {({ blob, url, loading, error }) => (
              <Button
                className="custom-button"
                variant="contained"
                style={{
                  fontSize: "medium",
                  borderRadius: "4px",
                }}
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Download PDF
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookView;
