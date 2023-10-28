/*
 This component is so that we can don't need to rewrite the code for the next page button
 
  This code can be used as followed : 
    1. import the component, import NextPageButton from "  ./path-to/NextPageButton.jsx" 
    2. call the component <NextPageButton path="/the page you want the button to take" />
       (if you want to create a page path look under Routing.js)
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NextPageButton({ path }) {
  const navigate = useNavigate();

  return (
    <Box mt={3} padding={3} right={6} bottom={56} sx={{ position: "fixed" }}>
      <Button
        color="primary"
        variant="contained"
        style={{
          fontFamily: "Comic Neue",
          fontWeight: "bold",
          fontSize: "15px",
        }}
        onClick={() => navigate(path)}
      >
        Next Page
      </Button>
    </Box>
  );
}

export default NextPageButton;
