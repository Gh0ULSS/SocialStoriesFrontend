/* eslint-disable jsx-a11y/img-redundant-alt */
// This is the book view page.
// This page will be the page that allows users to  navigate through the social story
// Accessed through http://localhost:3000/parent/story-library/bookview, see Routing.js for further
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header, Footer, decodeBase64 } from "../../../../../global_components"; //Header and Footer component
import { Box, Button, ButtonGroup } from "@mui/material";
import "../BookView/BookView.css";
import "./SaveBookView.css";

const SaveBookView = () => {
  const location = useLocation();
  const story = location.state?.story;

  const [bookData, setBookData] = useState(story || null);
  const [currentPage, setCurrentPage] = useState(0); // start with the title page

  if (!bookData) {
    return <div>No book data found</div>;
  }

  console.log(JSON.stringify(bookData));
  // console.log(bookData.pages.length);

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
          {/*Render the title page if currentPage is 0 else display normal page*/}
          {currentPage === 0 ? (
            // Title Page
            // In JSON font is denoted as fontType
            <div style={{ fontFamily: bookData.fontType, fontSize: "23px" }}>
              <Box fontFamily={bookData.fontType}>
                <h1>{bookData.titleStoryPage.description}</h1>
              </Box>
              {/* Check if bookData.titleStoryPage.imageId exists before trying to render it */}
              {bookData.titleStoryPage.imageId && (
                // get title page image from database at: bookData.titleStoryPage.imageID
                <img
                  src={bookData.titleStoryPage.url}
                  alt="Title page image"
                  style={{
                    width: "40%",
                    height: "40%",
                    marginTop: "0%",
                    marginBottom: "0%",
                  }}
                />
              )}
            </div>
          ) : (
            // Render normal page.
            <div>
              <h2>Page {currentPage}</h2>

              {bookData.pages && bookData.pages[currentPage - 1] && (
                // get image from database at location: bookData.page[currentPage - 1].imageID
                <img
                  src={bookData.pages[currentPage - 1].url} 
                  alt={`Illustration for page ${currentPage}`}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginTop: "3%",
                    marginBottom: "0%",
                  }}
                />
              )}
              <Box fontFamily={bookData.fontType}>
                <p>{bookData.pages[currentPage - 1].description}</p>
              </Box>
            </div>
          )}
        </div>

        {/*Page Navigation buttons*/}
        <div className="container-button">
          <div className="group-button" style={{ marginTop: "25px" }}>
            <Button
              color="secondary"
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
              disabled={currentPage <= 0}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Back
            </Button>
            {/* Fixed the property mismatch here */}
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
              disabled={currentPage >= bookData.pages.length}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </Box>

      <Footer />
    </div>
  );
};

export default SaveBookView;
