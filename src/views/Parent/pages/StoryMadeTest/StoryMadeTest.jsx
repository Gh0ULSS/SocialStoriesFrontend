// http://localhost:3000/parent/StoryMadeTest
import React, { useState, useEffect } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Image,
  Text,
  View,
} from "@react-pdf/renderer";
import { Button } from "@mui/material";
import "./StoryMadeTest.css";
import { Footer, Header } from "../../../../global_components";

import bathtimeimg from "../../../../assets/images/bathtime.png";
import washface from "../../../../assets/images/face.png";
import showertime from "../../../../assets/images/shower.png";

const StoryMadeTest = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      imageSrc: bathtimeimg,
      text: "Timmys Bath Time",
    },
    { id: 2, imageSrc: washface, text: "Timmy must wash his face" },
    { id: 3, imageSrc: showertime, text: "Timmy must shower also" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [allCardsPDF, setAllCardsPDF] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedTexts, setEditedTexts] = useState(
    cards.map((card) => card.text)
  ); // Store edited texts for each card

  useEffect(() => {
    // Save the edited text to the cards array when exiting editing mode
    if (!editing) {
      const updatedCards = cards.map((card, index) => ({
        ...card,
        text: editedTexts[index],
      }));
      setCards(updatedCards);
    }
  }, [editing, editedTexts, cards]);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handleBackClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleDownloadPDF = () => {
    // Create a PDF containing all cards
    const cardsPDF = (
      <Document>
        {cards.map((card, index) => (
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
              {index === 0 ? (
                <>
                  {editing ? (
                    <textarea
                      value={editedTexts[index]}
                      onChange={(e) =>
                        handleEditCardText(index, e.target.value)
                      }
                      style={{ color: "blue", whiteSpace: "pre-wrap" }}
                    />
                  ) : (
                    <>
                      <Text
                        style={{
                          textAlign: "center",
                          fontSize: 40,
                          marginBottom: "20px", // Adjust this value to control the spacing
                        }}
                      >
                        {card.text}
                      </Text>
                      <Image
                        src={card.imageSrc}
                        style={{
                          width: "70%",
                          height: "70%",
                          objectFit: "contain",
                        }}
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <Image
                    src={card.imageSrc}
                    style={{
                      width: "70%",
                      height: "70%",
                      objectFit: "contain",
                    }}
                  />
                  {editing ? (
                    <textarea
                      value={editedTexts[index]}
                      onChange={(e) =>
                        handleEditCardText(index, e.target.value)
                      }
                      style={{ color: "blue", whiteSpace: "pre-wrap" }}
                    />
                  ) : (
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 40,
                      }}
                    >
                      {card.text}
                    </Text>
                  )}
                </>
              )}
            </View>
          </Page>
        ))}
      </Document>
    );

    setAllCardsPDF(cardsPDF);
  };

  const handleEditClick = () => {
    setEditing(!editing);
  };

  const handleEditCardText = (index, newText) => {
    const updatedTexts = [...editedTexts];
    updatedTexts[index] = newText;
    setEditedTexts(updatedTexts);
  };

  return (
    <div>
      <Header />
      <div className="maincontent-titlecard">
        <div>
          <h1 className="titleStory">TEST STORY MADE</h1>
        </div>
        <div className="card">
          {currentIndex === 0 ? (
            <>
              <p style={{ fontSize: 40, marginTop: "0%" }}>
                {editing ? (
                  <textarea
                    value={editedTexts[currentIndex]}
                    onChange={(e) =>
                      handleEditCardText(currentIndex, e.target.value)
                    }
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
                  cards[currentIndex].text
                )}
              </p>
              <img
                src={cards[currentIndex].imageSrc}
                alt="Card Image"
                style={{
                  width: "412px",
                  height: "412px",
                  marginTop: "0%",
                  marginBottom: "0%",
                }}
              />
            </>
          ) : (
            <>
              <img
                src={cards[currentIndex].imageSrc}
                alt="Card Image"
                style={{
                  width: "412px",
                  height: "412px",
                }}
              />
              <p style={{ fontSize: 40, marginBottom: "0%" }}>
                {editing ? (
                  <textarea
                    value={editedTexts[currentIndex]}
                    onChange={(e) =>
                      handleEditCardText(currentIndex, e.target.value)
                    }
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
                  cards[currentIndex].text
                )}
              </p>
            </>
          )}
        </div>
        <div className="button-container">
          <div className="button-group">
            <Button
              onClick={handleBackClick}
              className="custom-button"
              variant="contained"
              style={{
                fontSize: "medium",
                borderRadius: "4px",
                marginRight: "8px",
              }}
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Back
            </Button>
            <Button
              onClick={handleEditClick}
              className="custom-button"
              variant="contained"
              style={{ fontSize: "medium", borderRadius: "4px" }}
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {editing ? "Save" : "Edit"}
            </Button>
            <Button
              onClick={handleNextClick}
              className="custom-button"
              variant="contained"
              style={{
                fontSize: "medium",
                borderRadius: "4px",
                marginLeft: "8px",
              }}
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Next
            </Button>
            <PDFDownloadLink document={allCardsPDF} fileName="All_Cards.pdf">
              {({ blob, url, loading, error }) => (
                <Button
                  className="custom-button"
                  variant="contained"
                  style={{
                    fontSize: "medium",
                    borderRadius: "4px",
                    marginLeft: "8px",
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

        <div className="GeneratePDF">
          <div className="generate-pdf-buttons">
            <PDFDownloadLink
              document={
                <Document>
                  {cards.map((card, index) => (
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
                        }}
                      >
                        {index === 0 ? (
                          <>
                            {editing ? (
                              <textarea
                                value={editedTexts[index]}
                                onChange={(e) =>
                                  handleEditCardText(index, e.target.value)
                                }
                                style={{
                                  color: "blue",
                                  whiteSpace: "pre-wrap",
                                }}
                              />
                            ) : (
                              <Text
                                style={{
                                  textAlign: "center",
                                  fontSize: 40,
                                  marginBottom: 40,
                                }}
                              >
                                {card.text}
                              </Text>
                            )}
                            <Image
                              src={card.imageSrc}
                              style={{
                                width: "70%",
                                height: "70%",
                                objectFit: "contain",
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <Image
                              src={card.imageSrc}
                              style={{
                                width: "70%",
                                height: "70%",
                                objectFit: "contain",
                              }}
                            />
                            {editing ? (
                              <textarea
                                value={editedTexts[index]}
                                onChange={(e) =>
                                  handleEditCardText(index, e.target.value)
                                }
                                style={{
                                  color: "blue",
                                  whiteSpace: "pre-wrap",
                                }}
                              />
                            ) : (
                              <Text
                                style={{
                                  textAlign: "center",
                                  fontSize: 40,
                                  marginTop: 40,
                                }}
                              >
                                {card.text}
                              </Text>
                            )}
                          </>
                        )}
                      </View>
                    </Page>
                  ))}
                </Document>
              }
              fileName="All_Cards.pdf"
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
      </div>
      <Footer />
    </div>
  );
};

export default StoryMadeTest;
